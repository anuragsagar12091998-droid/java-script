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


    async function main() {
        let file1content=await fsReadFilePromisified("cohrt2/a.txt","utf-8");
        let file2content=await fsReadFilePromisified("b.txt","utf-8");
        let file3content=await fsReadFilePromisified("c.txt","utf-8");
    
     
    
    console.log(file1content);
    console.log(file2content);
    console.log(file3content); }
    main(); 
     console.log("hi there");
      console.log("hi ");