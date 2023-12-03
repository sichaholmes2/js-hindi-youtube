//let a=10
const b=20
var c=300 //use let

let a=300
//{} are scopes
if(true){
    let a =10
    const b =20
    var c =30
}

// for(let i= 0; i<array.length;++i){
//     const element = array[i];
// }

//console.log(a)
//console.log(b)
//console.log(c)//prints 30

//function inside a function
function one(){
    const username="hitesh"

    function two(){
        const website ="youtube"
        console.log(username)//two can get username from one
    }

    //console.log(website);// this will say website is not defoned
    two()
}
//one()

if(true){
    const username="hitesh"
    if(username === "hitesh"){
        const website= " youtube"
        console.log(username+website)
    }//console.log(website)// you cant access website
}

//console.log(username)//username is also out of scope

// ++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
return num + 1
}


addTwo(5)//error as add Two is stored in a variable wgule addOne is not so it can be used before declaration(hoisting)
const addTwo = function(num){
    return num+2
}

 