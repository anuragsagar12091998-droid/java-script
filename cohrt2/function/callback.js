function sum( num1,num2,functionCallback) 
{
    let result = num1 + num2;
    functionCallback(result)                                                        
}
function displayResult(data){
    console.log("The result of the sum is: " + data);
}
 function displayResultPassive(data){
    console.log("The result of the sum is: " + data);
}
const ans= sum(5,15, displayResult);