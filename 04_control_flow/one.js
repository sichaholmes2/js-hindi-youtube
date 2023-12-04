//condition if
// if(true){

// }

const isUserLoggedIN=true

if(isUserLoggedIN){

}

//operators <,>, <=,>=,==,!==,===
//== also checks type


if(2=="2"){
  console.log("executed")
}

if(2==="2"){
    console.log("executed")//doesnt get executed
}


const temperature =41
if(temperature===41){
    console.log("less than 50")
}else{
    console.log("greater than 50")
}

const score= 200
if(score>100){
    //using const can give error in the next console log
    var power="fly"
    console.log(`User power : ${power}`)
}
console.log(`User power: ${power}`)

//implicit test
const balance=1000
if(balance>500) console.log("test"),console.log("test2");//',' is not good


//else if concept is the same like cpp


