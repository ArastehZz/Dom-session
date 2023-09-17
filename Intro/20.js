arr1=[10,20,30,5]
arr2=[4,20,9,30]

let result=[]

for(array1 of arr1){
    for(array2 of arr2){
        if (array1===array2){
            result.push(array1)
        }
    }


}
console.log(result)