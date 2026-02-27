let ctr=0;
function callback(){
    ctr++;
    console.log(ctr);
}
setInterval(callback,1000);

let x=0;
for(let i=0;i<1000000000;i++){
    x=x+i;
}
    
console.log(x);