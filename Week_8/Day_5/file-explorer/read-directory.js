import fs from "fs";

const allFiles = fs.readdirSync("./");

allFiles.forEach((file) => {
    console.log(file);
});