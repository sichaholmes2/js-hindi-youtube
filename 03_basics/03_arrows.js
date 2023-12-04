//making an object
const user ={
    username:"hitesh",
    price: 999,

    welcomeMessage : function(){
        console.log(` ${this.username} , welcome to this website`)
        console.log(this)// gives this value and the later changed value
    }   // this refers to the current context

    

    
}

user.welcomeMessage()
user.username= "sam"// this value is flexible because we used this
//context is changed here

user.welcomeMessage()// sam , welcome to this website
console.log(this)// prints {}  as it returns empty in node envirirment, in chrome dev tools it gives windows

// creating a function
// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()//prints undefined as 'this' only works inside an object not a function alone


//declaring it with arrow function
const chai = () => {
    let username ="hitesh"
    console.log(this.username)

}
chai()//also gives undefined



const addTwo =(num1, num2)=>{
    return num1+num2
}

console.log(addTwo(3,4))//7



//same thing with implicit return
//const addTwo =(num1, num2)=>(return num1+num2)
// if u dont use{ } and declare return statement in the same line, it acts the same



//returning an object explicitly, u have to warp in in () after {}
//const addTwo=(num1, num2) =>({username: "hitesh"})