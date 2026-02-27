function setTimeoutPromisefied(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },delay);
    });
}
 
setTimeoutPromisefied(1000)
.then(function() {
    console.log("1 second has passed ");
});