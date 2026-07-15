// Background removal script using @imgly/background-removal-node
import { removeBackground } from "@imgly/background-removal-node";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, "public", "school-building.jpg");
const outputPath = path.join(__dirname, "public", "school-building-nobg.png");

console.log("Reading image from:", inputPath);
const imageData = readFileSync(inputPath);
const blob = new Blob([imageData], { type: "image/jpeg" });

console.log("Removing background (this may take a minute)...");
const result = await removeBackground(blob);

const arrayBuffer = await result.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);
writeFileSync(outputPath, buffer);

console.log("Done! Saved to:", outputPath);
