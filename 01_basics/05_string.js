const name="hitesh"
const repoCount=50
console.log(name+repoCount+"Value")
//same thing can be done using bactics, they are placeholders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


//using the new keyword
const gameName=new String('hitesh-hc-com')//key value pair with characters and index of the string
//0->h
//1->i
//2->t
//3->w
//etc
console.log(gameName[0]);

console.log(gameName.__proto__)

//consider gamename as kind of a string

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


//in order to split the string into substring(starting n.o, ending n.o)
const newString=gameName.substring(0,4)
console.log(newString);

//to slice(can also take negative values in starting and ending number)
const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   hitesh   "//a  string with spaces
console.log(newStringOne)//prints with starting and end space
console.log(newStringOne.trim())//trims the spaces before and after...see documentation


const url="https://hitesh.com/hitesh%20choudhary"
console.log(url. replace('%20','-')) // replacing '%20' with '-'

console.log(url.includes(url.includes('sundar')))// checking if url is included in the string url


console.log(gameName.split('-'))//gives an array where thre string is split based on '-'
