

const fs= require("fs");

let content =fs.readFileSync("b.txt","utf-8");
const trimmedContent =content.trim();
fs.writeFileSync("b.txt",trimmedContent)
console.log("File content after trimming:", trimmedContent);