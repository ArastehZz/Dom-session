const word='salam'
let word2=''
//for(let i=word.length-1;i>=0;i--){
//    word2=word2+word[i]
//    
//}
for (let charector of word){
    
    word2=charector+word2
    console.log(charector,word2)
}
console.log(word2)
