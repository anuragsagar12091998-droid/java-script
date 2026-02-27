////const starttime=Date.now();
//setTimeout(function(){

   // const endtime=Date.now();
  //  console.log(`Time taken: ${endtime-starttime} ms`);  

///},1000);
 const starttime=performance.now();
setTimeout(function(){      
    const endtime=performance.now();
    console.log(`Time taken: ${endtime-starttime} ms`);
},1000);