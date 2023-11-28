let score="33"
let score1="33abc"
console.log(typeof score)
console.log(typeof(score));
let  valueInNumber=Number(score)//score is converted into number
let  valueInNumber1=Number(score1)
console.log(typeof valueInNumber)
console.log(typeof valueInNumber1)//gives number again although it should not
console.log( valueInNumber1)// gives NaN so check if its a pure number or not
// if score is null it gives 0 in typeof
// undefined gives Nan
//if score=true. type of gives 1, for false gives 0
//"33"=>33
//"33abc"=NaN


let isLoggedIn=1 // if this is a string it goves true. if empty string, it gives false


let booleanIsLoggedIn=Boolean(isLoggedIn)// convering is logged in to boolean

console.log(booleanIsLoggedIn);
//1=>true; 0=>false
//""=>false
//"abcd"=false
let someNumber=69
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))

