let a=[10,20,30,40,50,60,70,80,90,100];
let biggest=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>biggest){
        biggest=a[i];
    }
}
console.log(biggest);