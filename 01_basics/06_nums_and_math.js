const score=400
//explicitly defining the type of score
const balance =new Number(100)
console.log(balance)

console.log(balance.toString().length)//100 has 3 characters in it so this gives 3
console.log(balance.toFixed(2))//2 places after deciaml is also displyed


const otherNumber =23.8966

console.log(otherNumber.toPrecision(3))//this returns a string

const hundreds=1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))//gives 4
console.log(Math.round(4.6));//gives 5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random())//gives a random value bw 0 and 1
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

// console.log(Math.random()*(max-min+1)) + min