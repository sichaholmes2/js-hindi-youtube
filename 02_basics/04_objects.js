//sinngleton object
const tinderUser= new Object()

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser={
    email:"some@gamil.com",
    //objects inside an object
    fullname:{
        //another object inside
        userfullname:{
        firstname:"hitesh",
        lastname:"choudhary"
        }

    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
//optional chaining if any one doesnt exist is use ? or use if else

//number string as key value pair
const obj1 = {1: "a" , 2 :"b"}
const obj2 = {3: "a" , 4 :"b"}

const obj3={obj1, obj2}
console.log(obj3)//obj3 is object of objects


const obj4=Object.assign({}, obj1 ,obj2)//merges it properly, {} is optional
console.log(obj4)

//spread operator to do the same
const obj5={...obj1, ...obj2}
console.log(obj5)

//when u get an array of multiple objects form a database from a databasze
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser);


//to display inly the keys
console.log(Object.keys(tinderUser));

//to display inly the values
console.log(Object.values(tinderUser));

//entries
console.log(Object.entries(tinderUser));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

//another way to print this shit
const{courseInstructor:inst}= course// we just kinda renamed courseInstructor to inst for  easy typing

console.log(inst)


//{ } are used for destructuring


//JSON in api has key value structure
// "abcd":"efgh "
//u also get apis in the form of arrays]
//json is javascript object notation

