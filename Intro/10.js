const numbers=[5,7,56,51];
const num1=78;
let result=-1;
for(let i=0;i<numbers.length;i++)
{
    if(num1===numbers[i])
    {
        result=i;
    }
}
console.log(result);