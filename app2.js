let userId = function(id){
    let res=console.log(id)
    return res
}
 

let getUserInfo =function(name,id){

    return `Name: ${name}
    - ID: ${id}`
}
let showResult = getUserInfo('Masood',22)

console.log(showResult)

////////////////////////////

////object baraye negahdari estefade mishe 

let userInfo ={
    //key: 'value'
    userId: 30,
     

}


////object method 
//

let  num =12.236

console.log(Math.round(num))


let randomNum = Math.random()

console.log(randomNum)

///Math.floor   bdeone ashar 
//Math.round     gerd mikone 
//Math.ceil     gerd be bala 
///////////////////////////constant 
const isUser1 = true

/////////array 


const tasks=['task1','dfdfd','dsasd']

console.log(tasks.length)
////////array method 

tasks.unshift('First Item ')
tasks.shift()
tasks.splice(0,2,'New Item')

console.log(tasks)


tasks.forEach(function(item,index){
    console.log(item)
    console.log(index)

})
///////////////////////////////for loop 

for (let count=0;count<tasks.length;count++)
{
    const num3=count+1
    const taskItem = tasks[count]
    console.log(`${num3} - task name : ${taskItem}`)
}
/////////////index of method 

console.lod(task)


///////////////////array find




////challenge 4 
//const productItems= [{}]

////





