// Imports only presentation code and selected illustrations. Never copies workout
// plans, archives, migrations, documents, environment files or browser storage.
// Usage: node scripts/import-ritmo-demo.mjs <absolute path to original dist>
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";
import sharp from "sharp";

const source = process.argv[2];
if (!source || !path.isAbsolute(source)) throw new Error("Informe o caminho absoluto de dist.");
const target = path.resolve("public/demos/ritmo");
await mkdir(path.join(target, "assets"), { recursive: true });
const parse = (text) => ts.createSourceFile("source.js", text, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const original = await readFile(path.join(source, "app.js"), "utf8");
const wanted = new Set([
  "icons", "icon", "esc", "pad", "duration", "minLabel", "restLabel", "timeOf", "stageLabel",
  "art", "previewArt", "openExercisePreview", "dayTabs", "exerciseCard", "todayView", "programView", "activeView", "completedView",
]);
const extracted = [];
for (const statement of parse(original).statements) {
  const names = ts.isVariableStatement(statement)
    ? statement.declarationList.declarations.map((d) => d.name.getText())
    : ts.isFunctionDeclaration(statement) ? [statement.name?.text] : [];
  if (names.length && names.every((name) => wanted.has(name))) {
    extracted.push(statement.getText());
    for (const name of names) wanted.delete(name);
  }
}
if (wanted.size) throw new Error(`Presentation contracts changed: ${[...wanted].join(", ")}`);
await writeFile(path.join(target, "views.js"), `// Presentation functions from Ritmo. No original controller or personal plans.\nimport { currentSet, queueFor, elapsedMs, restRemainingSec, initialDurationSec, estimateRemainingSec } from './model.js';\nexport function createViews(state, ui, artManifest, openModal) {\nconst version = () => state.versions[0];\nconst day = () => version().days[ui.day];\nconst exercises = () => day().exercises;\nconst planGuidance = () => '';\nconst planUpdateNotice = () => '';\nconst averageLabel = () => 'Exemplo fictício';\n${extracted.join("\n")}\nreturn { todayView, programView, activeView, completedView, openExercisePreview, icon, esc, duration };\n}\n`);

const catalogText = await readFile(path.join(source, "data.js"), "utf8");
const catalogStatement = parse(catalogText).statements.find((s) =>
  ts.isVariableStatement(s) && s.declarationList.declarations[0].name.getText() === "CATALOG");
if (!catalogStatement) throw new Error("Catálogo de exercícios não encontrado.");
const catalog = JSON.parse(catalogStatement.declarationList.declarations[0].initializer.getText());
const examples = [
  ["mon", "Segunda", "Seg", "Costas + Bíceps", ["puxada-frontal-pronada", "remada-baixa-na-polia"]],
  ["tue", "Terça", "Ter", "Peito + Ombros", ["supino-reto-com-halteres", "elevacao-lateral-com-halteres"]],
  ["wed", "Quarta", "Qua", "Pernas", ["leg-press-45", "cadeira-extensora"]],
  ["thu", "Quinta", "Qui", "Ombros + Tríceps", ["elevacao-lateral-com-halteres", "triceps-na-polia-com-corda"]],
  ["fri", "Sexta", "Sex", "Costas + Core", ["remada-baixa-na-polia", "abdominal-reverso-no-solo"]],
];
const usedSheets = new Set();
const usedFiles = new Set();
const days = examples.map(([id, label, short, title, ids]) => ({
  id, label, short, title,
  exercises: ids.map((exerciseId) => {
    const item = catalog[exerciseId];
    if (!item) throw new Error(`Exercício não encontrado: ${exerciseId}`);
    const { id, name, muscle, secondary, cue, art } = item;
    if (art?.sheet !== undefined) usedSheets.add(art.sheet);
    if (art?.src) usedFiles.add(path.basename(art.src));
    return { id, name, muscle, secondary, cue, art: art?.src ? { src: `./assets/${path.basename(art.src)}` } : art, sets: 2, reps: "10–12", restSec: 60 };
  }),
}));
await writeFile(path.join(target, "data.js"), `// Invented fixtures for visual review; not the author's workout.\nexport const DAYS = ${JSON.stringify(days, null, 2)};\n`);
const manifest = JSON.parse(await readFile(path.join(source, "assets/exercise-art.json"), "utf8"));
manifest.sheets = await Promise.all(manifest.sheets.map(async (sheet, index) => {
  if (!usedSheets.has(index)) return null;
  const name = `${path.basename(sheet.src, ".png")}.webp`;
  await sharp(path.join(source, "assets", path.basename(sheet.src))).webp({ quality: 85 }).toFile(path.join(target, "assets", name));
  return { ...sheet, src: `./assets/${name}` };
}));
await writeFile(path.join(target, "assets/exercise-art.json"), JSON.stringify(manifest));
for (const file of usedFiles) await copyFile(path.join(source, "assets", file), path.join(target, "assets", file));
for (const file of ["styles.css", "model.js"]) await copyFile(path.join(source, file), path.join(target, file));
console.log("Imported Ritmo presentation and fictional fixtures; original project unchanged.");
