str='hi everyone im so glad to meet you'
const result =str.split(' ')
let longestword = result[0]

for(word of result)
{
    if(word.length>longestword.length){
        longestword=word;
    }
    
}

console.log(longestword);







