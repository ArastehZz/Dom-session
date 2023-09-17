word='hello';
word2='salam'

 //   if(word===word.split('').reverse().join('')){
 //       console.log('the word is palindrome');
 //   }
let palindrome=true;
for(let i=0;i<word.length;i++){
 if(word[i]!==word[word.length-i-1]){
     palindrome=false;
     
  }

}
console.log(palindrome);

