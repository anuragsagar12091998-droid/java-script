const fs=require("fs");
function calllback(err,data){
    if(err){
        console.log("Error while reading the file:", err);
    } 
    else{   
        console.log(data);
    
    }
}
fs.readFile("cohrt2/a.txt","utf-8",calllback);