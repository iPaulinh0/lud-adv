import sharp from "sharp";
import { mkdirSync } from "node:fs";

mkdirSync("src/app", { recursive: true });
mkdirSync("public", { recursive: true });

const src = "assets/logo.png";

await sharp(src).resize(256, 256).png().toFile("src/app/icon.png");
await sharp(src).resize(180, 180).png().toFile("src/app/apple-icon.png");
await sharp(src).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(src).resize(512, 512).png().toFile("public/icon-512.png");

console.log("icons generated");
