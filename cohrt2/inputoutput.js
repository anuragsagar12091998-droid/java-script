const fs = require("fs");

const contents = fs.readSync("cohrt2/a.txt", "utf-8");
console.log(contents);
