import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/demos/ritmo");

test("demo ships no personal plans, archives, credentials or storage access", async () => {
  const files = await readdir(root, { recursive: true });
  assert.ok(files.length > 0);
  for (const file of files) {
    assert.doesNotMatch(file, /(^|[/\\])\.|\.md$|\.env|backup|archive|plan-update|\.vercel/i);
    if (!/\.(?:js|html|json)$/.test(file)) continue;
    const text = await readFile(path.join(root, file), "utf8");
    assert.doesNotMatch(text, /localStorage|sessionStorage|indexedDB|ritmo-workouts-v1|supabase|guirab\.com\.br|guia-fichas|equipamentos-2026|DEFAULT_DAYS|LEGACY_DAYS|service.?role/i);
  }
});

test("demo contains only the explicitly invented five-day fixture", async () => {
  const dataSource = await readFile(path.join(root, "data.js"), "utf8");
  const { DAYS } = await import(`data:text/javascript;base64,${Buffer.from(dataSource).toString("base64")}`);
  assert.deepEqual(DAYS.map((day) => day.id), ["mon", "tue", "wed", "thu", "fri"]);
  for (const day of DAYS) {
    assert.equal(day.exercises.length, 2);
    for (const exercise of day.exercises) {
      assert.equal(exercise.sets, 2);
      assert.equal(exercise.restSec, 60);
      assert.equal(exercise.reps, "10–12");
      assert.equal(exercise.note, undefined);
      assert.equal(exercise.effort, undefined);
      if (exercise.art.src) await readFile(path.resolve(root, exercise.art.src));
    }
  }
  const manifest = JSON.parse(await readFile(path.join(root, "assets/exercise-art.json"), "utf8"));
  for (const sheet of manifest.sheets.filter(Boolean)) await readFile(path.resolve(root, sheet.src));
});

test("demo controller only fetches its local illustration manifest", async () => {
  const controller = await readFile(path.join(root, "demo.js"), "utf8");
  assert.deepEqual([...controller.matchAll(/fetch\(([^)]+)\)/g)].map((match) => match[1]), ['"./assets/exercise-art.json"']);
  assert.doesNotMatch(controller, /XMLHttpRequest|WebSocket|sendBeacon|FileReader|createObjectURL|setItem\s*\(|document\.cookie/);
  const html = await readFile(path.join(root, "index.html"), "utf8");
  assert.match(html, /form-action 'none'/);
  assert.match(html, /noindex,nofollow/);
});

test("Placas ships no personal data, API client, redirects or configurable forms", async () => {
  const plateRoot = path.resolve("public/demos/placas");
  const files = await readdir(plateRoot, { recursive: true });
  for (const file of files) {
    assert.doesNotMatch(file, /\.env|\.svg$|schema|database|redirect|backup|\.vercel/i);
    if (!/\.(?:js|html|css)$/.test(file)) continue;
    const content = await readFile(path.join(plateRoot, file), "utf8");
    assert.doesNotMatch(content, /localStorage|sessionStorage|indexedDB|document\.cookie|fetch\s*\(|XMLHttpRequest|sendBeacon|\.geolocation|\/api\/|placas\.guirab\.com\.br|ADMIN_PASSWORD|ADMIN_RATE_KEY/);
    if (/\.html$/.test(file)) assert.match(content, /connect-src 'none'/);
    if (/\.js$/.test(file)) assert.doesNotMatch(content, /<(?:input|textarea|select|form)\b|<i\s*\/>/);
  }
  const source = await readFile(path.join(plateRoot, "data.js"), "utf8");
  const { PLACAS } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
  assert.equal(PLACAS.length, 6);
  assert.equal(PLACAS.filter((p) => p.status === "available").length, 2);
  assert.equal(PLACAS.filter((p) => p.status === "paused").length, 1);
  for (const plate of PLACAS) {
    assert.equal(plate.targetUrl, undefined);
    assert.equal(plate.latitude, undefined);
    assert.equal(plate.longitude, undefined);
    assert.match(plate.code, /^D00[1-6]$/);
  }
});

test("the original QR graphic is absent from the flattened plate preview", async () => {
  const { data, info } = await sharp("public/demos/placas/plaque-demo.webp")
    .extract({ left: 374, top: 494, width: 133, height: 134 })
    .removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let dark = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i] < 60 && data[i + 1] < 60 && data[i + 2] < 60) dark++;
  }
  assert.ok(dark / (info.width * info.height) < 0.08, "The original black QR pattern must be fully replaced before rasterization.");
});
