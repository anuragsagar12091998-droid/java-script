const array = [1, 2, 3, 4, 5];
const answer=array.filter(function(x){
    return x%2==0;
});
console.log(answer);