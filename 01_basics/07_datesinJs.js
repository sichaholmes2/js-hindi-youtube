//Dates

let myDate = new Date()//objrct of date
//fifferent syntaxes for shoewing datesconsole.log(myDate);



//converting that date to string
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


console.log(typeof myDate)


//for declaring any specific date tht u want
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())//Monday Jan 23 0->jan, 2023 year,23date
// let myCreatedDate1=new Date(2023,0,23,5,3)//5.03 works as the time
// console.log(myCreatedDate1.toLocaleString())
// let myCreatedDate2=new Date("2023-01-14")//YYYY-MM-DD
// console.log(myCreatedDate2.toLocaleString())
// let myCreatedDate3=new Date("01-14-2023")//MM-DD-YYYY
// console.log(myCreatedDate3.toLocaleString())

//to get the timestamp for quizzes poles,etc
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//converting dates from milli second to sec
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)//starts with 0 so december will give 11+1=12
console.log(newDate.getDay())

//cusomizations of localString check
newDate.toLocaleString('default',{
    weekday:"long",

})