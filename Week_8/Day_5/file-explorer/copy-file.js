import fs from "fs";

const contentSource = fs.readFileSync("./source.txt", "utf-8");
fs.writeFileSync("./destination.txt", contentSource, "utf-8");
console.log("File copied successfully!");
