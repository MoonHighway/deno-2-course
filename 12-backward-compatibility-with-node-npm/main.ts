import fs from "node:fs/promises";

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFile();
