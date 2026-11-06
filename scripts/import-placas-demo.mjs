// Usage: node scripts/import-placas-demo.mjs <absolute path to original repository>
// Imports styles, font licenses and a rasterized art preview. No application
// controllers, credentials, database records, redirects or APIs are copied.
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";
import sharp from "sharp";

const source = process.argv[2];
if (!source || !path.isAbsolute(source)) throw new Error("Informe o caminho absoluto do repositório.");
const target = path.resolve("public/demos/placas");
await mkdir(path.join(target, "fonts"), { recursive: true });
let css = "";
for (const name of ["globals.css", "next-workspace.css"]) {
  const sheet = postcss.parse(await readFile(path.join(source, "app", name), "utf8"));
  sheet.walkAtRules((rule) => { if (["import", "theme", "utility"].includes(rule.name)) rule.remove(); });
  css += sheet.toString().replaceAll("/fonts/", "./fonts/") + "\n";
}
await writeFile(path.join(target, "original.css"), css);
for (const name of ["sora-variable.ttf", "manrope-variable.ttf", "sora-OFL.txt", "OFL-manrope.txt"]) {
  await copyFile(path.join(source, "public/fonts", name), path.join(target, "fonts", name));
}

// Flatten the original art after replacing the entire QR area. The original QR
// never survives as hidden SVG paths in the shipped preview.
const template = await readFile(path.join(source, "public/plaque-template.svg"));
const metadata = await sharp(template, { density: 144 }).metadata();
const scale = metadata.width / (124 * 72 / 25.4);
const factor = 72 / 25.4 * scale;
const x = Math.round(71.4 * factor), y = Math.round(94.7 * factor);
const size = Math.ceil(36.2 * factor);
const cover = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="100%" height="100%" fill="white"/><rect x="12%" y="12%" width="76%" height="76%" fill="#f1f4f1" stroke="#b6c5bc" stroke-width="2"/><text x="50%" y="46%" text-anchor="middle" font-family="Arial" font-size="${size * .15}" font-weight="bold" fill="#176d60">DEMO</text><text x="50%" y="62%" text-anchor="middle" font-family="Arial" font-size="${size * .065}" fill="#526359">SEM REDIRECIONAMENTO</text></svg>`);
const sanitized = await sharp(template, { density: 144 }).composite([{ input: cover, left: x, top: y }]).png().toBuffer();
await sharp(sanitized).resize({ width: 600 }).webp({ quality: 90 }).toFile(path.join(target, "plaque-demo.webp"));
console.log("Imported Placas styles, fonts and sanitized art preview.");
