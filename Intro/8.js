const numbers=[56,23,13,96,12,2]
let result=[]
for(let num of numbers)
{
    if(num%2===0){
        result.push(num)
    }

}
console.log(result);