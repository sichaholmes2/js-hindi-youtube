function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName.....this is thr reference of the funcyion
//sayMyName().... this is for executing the function

sayMyName()


function addTwoNumbers(Number1 , Number2){
    console.log(Number1+Number2)
}
addTwoNumbers()// gives NaN as arguement s not given
addTwoNumbers(3,4)//7
addTwoNumbers(3,"4")//34
addTwoNumbers(3,"a")//3a
addTwoNumbers(3,null)//3
const result =addTwoNumbers(3,5)
console.log("Result" , result)//undefined as it is not returning a function


function addTwoNumbers1(number1, number2){
    let result=number1+number2
    return result
    console.log("Hitesh")// thsi will never be executed
}
const result1=addTwoNumbers1(3,5)// if you returm the value, only then u can store it in a variable
console.log("Result : ", result1)


function loginUserMessage(username){

    //check if the user doesnt input anything
    if(username === undefined){
    console.log("Please enter a username")
    }
   return `${username} just logged in`
}

loginUserMessage("hitesh")//prints nothing as this needs to be stored in a variable

console.log(loginUserMessage("hitesh"))/// if u give no input it says undefined just logged in
console.log(loginUserMessage())

// spread operator or rest operator depending on use case
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400, 500))// gives an array with 200, 300, 400

function calculateCartPrice1(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,400, 500,600,7000,9000))// 200 and 400 goes in val1 and val2  rest gows in ...num1


const user={
    username:"hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)


handleObject({
    username: "sam" ,
    price: 399
})


//returning any data from array
const myNewArray=[200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 100, 600]))//400