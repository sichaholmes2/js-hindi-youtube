//objects can be literal or constructors
//singleton is fir constructors not for literals


//sumbols in js
const mySym=Symbol("key1")

//object literals
const JsUser={
    //key:value
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]: "mykey1",
    age:18,
    location:"Jaipur",
    email:"abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mondays","Saturday"]


}

//how to access the objects
//two ways
//except "full name" cannot be accessed with dots

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])

console.log(JsUser.mySym)
console.log(JsUser[mySym])
console.log(typeof(JsUser.mySym))

JsUser.email = "hitesh@chatgpt.com"
//if  want to lock that value, u have to freeze it
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)

//declaring a function inside an object
JsUser.greeting= function(){
    console.log("Hello js user")
}

console.log(JsUser.greeting());

JsUser.greetingTwo= function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());