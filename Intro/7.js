let count=0;
const str1='areuoknhdaauo'
const vowels =['a','u','e','i','o']

for (let char of str1){
    if(vowels.includes(char)){
        count++
    }

}
console.log(count);