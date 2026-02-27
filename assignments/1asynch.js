 const fs= require ("fs");
 function cleanFile(filePath, afterdone){
    fs.readFile(filePath,"utf-8",function(err,content){
        const trimmedContent =content.trim();
    fs.writeFile("b.txt",trimmedContent,function(err){
        afterdone( trimmedContent);
    });
    });

}
 cleanFile("b.txt",function(trimmedContent){
    console.log("done cleamng b.txt");
    console.log("File content after trimming:", trimmedContent);
 })
