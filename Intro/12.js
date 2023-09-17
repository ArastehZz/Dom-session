words=['salam','hi','hello']
for(let i=0;i<words.length;i++){
    for(let j=i+1;j<words.length;j++){
        if(words[i]<words[j]){
            let temp =words[j];
            words[j]=words[i];
            words[i]=temp;
            
        }
    }
}
console.log(words);