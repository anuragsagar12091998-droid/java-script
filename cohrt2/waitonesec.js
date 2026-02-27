   let a=1;    
   let b=2;
  
  console.log(a);
console.log(b);
/// wait for one second and then print the sum of a and b
let beforetime=Date.now();
for(let i=0;i<1000000000;i++){
    let currenttime=Date.now();
    if(currenttime-beforetime>=1000){
        break;
    }}
    console.log(a+b);
