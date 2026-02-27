

const fs = require('fs');

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}
function callback(data){
    console.log(data);
}
 function callbackerr(err){
console.log("Error while reading the file:", err); }  
 
fsReadFilePromisified("cohrt2/a.txt", "utf-8")
    .then(callback)
    .catch(callbackerr);