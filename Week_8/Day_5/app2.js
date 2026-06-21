const { readFile, writeFile } = require("./FileManager");

const content = readFile("./Hello World.txt");

console.log(content);

writeFile("./Bye World.txt", "Writing to the file");

console.log("Writing successful");


