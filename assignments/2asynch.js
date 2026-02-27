const fs = require("fs");     

function cleanFile(filePath){
    return new Promise (function(resolve,reject){
        fs.readFile(filePath,"utf-8",function(err,content){
            if(err){
                reject(err);
            } else {
                const trimmedContent = content.trim();
                fs.writeFile(filePath,trimmedContent,function(err){
                    if(err){
                        reject(err);
                    } else {
                        resolve(trimmedContent);
                    }
                });
            }
        });
    });
}
 async function main(){
    try {
        await cleanFile("cohrt2/a.txt");
        await cleanFile("b.txt");
        await cleanFile("c.txt");
        console.log("All files cleaned successfully.");
    } catch (err) {
        console.error("Error cleaning files:", err);
    }
}
main();