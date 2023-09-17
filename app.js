//console.log('Hello World')
//let firstName='Arasteh'
//let lastName='Zamen'
//let fullName= firstName + lastName
//
//let num1=12
//let num2=15
//
//console.log(fullName+num1+num2)

//const p=document.querySelector('p')
//console.log(p)
//p.remove()


//const ps=document.querySelectorAll('p')
//console.log(ps)
//
//ps.forEach(function(item))
//{
//    //item.remove()
//    item.textcontent = 'Update P'
//}
//

//let message = function() {
//    console.log('Welcome')
//
//
//}
// message()

//session 5
//let userId =function(id)
//{
//    let res ='User id is ' + id
//    return  res 
//}
//
//
////let showResult = userId(10)
//
//    console.log(userId(10))

//session 6

//let sum = function (num1, num2,num3)
//{
//    let res= num1 + num2+ num3
//    return res
//
//}
// let showResult = sum(2,5,7)
//
// console.log(showResult)
//
//
//
// let getUserInfo = function(name,id){
//    //return 'Name' + name + ' ' + 'ID: ' + id
//    return `Name: ${name}
//    - ID $ {id}`
// }
//  let show= getUserInfo('Masood',22)
//
//  console.log(show)

//session 7

//object baraye negahdari etelaat sakhte mishe 
//
//    let userInfoOne ={
//        userId:22, 
//        username:'ArastehZamen',
//        role:'Admin'
//    }
//console.log(`User role is :${userInfo.role}`)

//let userInfoTwo ={
//    userId:20, 
//    username:'Aen',
//    role:'User'
//}
//
//let fetchUserData = function(user){ //input arguman can be anything 
//
//    console.log(`Username is : ${user.username}`)
//}
//
//fetchUserData(userInfoOne)
//fetchUserData(userInfoTwo)

//Challenge 1

//let userAccount = {
//    username:'Arasteh',
//     outgo :0,
//     income:0
//
//}
//
//let addOutgo = function(account,amount){
//    account.outgo= account.outgo + amount
//}
//
//let addIncome = function (account , income){
//
//    account.income = account.income + account.outgo
//    
//}
/////function mohasebe 
//let getAccountData = function(account){
//    let balance = account.income - account.outgo 
//    return `Account Name : ${account.username} - Balane : ${balance} `
//
//}
/////meghdar dehi 
//addIncome(userAccount,20000)
//addOutgo(userAccount,160)
//addOutgo(userAccount,200)
//
//
//console.log(getAccountData(userAccount))
//


//session 10

//let course ={
//    name :'Advanced JS',
//    studentLimit : 30, 
//    studentCount : 0,
//    checkActivity : function(courseSize){
//        let remainCount = this.studentLimit - this.studentCount
//        return courseSize<= remainCount
//    }
//
//
//}
//  let status = course.checkActivity(40)
//
//console.log(status)



//session 11

//let fullName= 'ArastehZamenGhadirli'
//
//console.log(fullName.length)
//
//let password = 'Masood12345'
// password.includes('12345')
//
// console.log(password.includes('12345'))
//
//let email= '  a.zamnk@gmail.com'
//
//console.log(email)
//
//console.log(email.trim())
//

//SESSION 13

//let num = 12.23
//let res = num.toFixed(10)
//console.log(res)
//console.log(Math.floor(num))
////math.round()
////math.ceil()
//CHALLENGE 2


//let chechCorrection = function(password)
//{
//   if (password.includes('1234') && password.length >=8){
//    return true
//   }
//   else {
//    return false 
//   }
//   
//
//
//}
//
//
//console.log(chechCorrection('jhdv1234'))
//console.log(chechCorrection('kkhbjhvj523'))
//console.log(chechCorrection('ponk1234'))

//session 13
//let num1= 10
//let num2=20
//
//
//let randomNum =Math.floor( Math.random()*(num2 - num1))
//
//console.log(randomNum)
//
//session 14



//const isUser = true 
//
//isUser = flase 
//
//console.log(isUser)
//
////harja motmaen hastim k 

//const userInfo ={ // in const kole objet ra shael mishe 
//
//    id : 2
//}
//
//userInfo.id=3
//
//console.log(userInfo)



