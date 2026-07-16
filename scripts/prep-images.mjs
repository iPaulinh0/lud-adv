import sharp from "sharp";
import { mkdirSync } from "node:fs";

const outDir = "src/assets/images";
mkdirSync(outDir, { recursive: true });

async function inspect(path) {
  const img = sharp(path);
  const meta = await img.metadata();
  const stats = await img.stats();
  console.log(path, {
    width: meta.width,
    height: meta.height,
    channels: meta.channels,
    hasAlpha: meta.hasAlpha,
    alphaStats: meta.hasAlpha ? stats.channels[stats.channels.length - 1] : null,
  });
}

await inspect("assets/hero.png");
await inspect("assets/info.png");

// Hero: portrait photo, displayed at max height ~76vh. Target a height that
// comfortably covers high-DPI desktop displays without shipping 13MB.
await sharp("assets/hero.png")
  .resize({ height: 2400, withoutEnlargement: true })
  .png({ compressionLevel: 9, quality: 82 })
  .toFile(`${outDir}/hero.png`);

// About photo: shown inside a bordered "cover" box, well under 900px wide
// in the design. Re-encode as jpeg for a big size win.
await sharp("assets/info.png")
  .resize({ width: 1400, withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${outDir}/about.jpg`);

console.log("done");
