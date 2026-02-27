const fs = require("fs");

function filereadcallback(err, contents) {
    console.log(contents);
}
fs.readFile("cohrt2/a.txt", "utf-8", filereadcallback);
 
let b=0;
for(let i=0;i<10000000000;i++){
    b+=i;
}   
    console.log(b);


    