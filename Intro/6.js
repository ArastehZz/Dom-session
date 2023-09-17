const arr1=['hello','hi'];
const arr2=['123','822'];
let result =[];
//const result =arr1.concat(arr2);
//console.log(result);
for(let item of arr1){
    result.push(item);
    

}
for(let item2 of arr2){
    result.push(item2)

}
console.log(result);



