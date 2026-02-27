
const allusers=[{
    firstname:"anurag",
    gender:"male",
    age:18,
},{
    firstname:"rohit",
    gender:"male",
    age:20,
},{  
    firstname:"priyanka",
    gender:"female",
    age:22,
}]

for(let i=0;i<allusers.length;i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"])
    }
}