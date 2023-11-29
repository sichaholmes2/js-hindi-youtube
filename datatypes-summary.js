//primitive and non primitive datatypes
//primitive(call by value) string,number , boolean, null,undefined, symbol, bigint
const score=100
const scoreValue=100.3

const isLoggedIn=false

const outsideTemp=null
let userEmail;


const id=Symbol('123')

const anotherId=Symbol('123')

console.log(id===anotherId)//they are not even after having thse same value

//const bigNumber=648684682487n

//is js statically typed or dunamically typed?
//call by reference or non primitive arrays, objects, functions


//arrays
const heroes=["shaktiman", "naagraj", "doga"];
//objects..it has key value pairs
{
    name:"hitesh";
    

}
// this shit can also be stored inside a value

let myObj={
    name:"hitesh",
    age: 22,

}

//function()which can be also declared as a variable

const myFunction=function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)//undefined as it is commented out
console.log(typeof myFunction)//function
console.log(typeof myObj)//object
console.log(typeof heroes)// this also displays object
console.log("bcd")