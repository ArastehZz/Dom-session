const numbers=[10,56,96,625,1];
smallaestnumber = numbers[0];

numbers.map((number) =>{
    if(number <smallaestnumber)
    {
        smallaestnumber=number;
    }
})
console.log(smallaestnumber[1])  ////// اینجا گقته بودید که تابع map  ارایه بر میکرداند پس چرا این اشتباه ات 