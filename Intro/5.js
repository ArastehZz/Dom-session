const words=['hi','salam','word is ','egg','salam2']
const words2=[];
for(let word of words){
    
    if(word.length>5){
        words2.push(word)
    }
    
}

console.log(words2)