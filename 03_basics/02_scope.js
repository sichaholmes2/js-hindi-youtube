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

for(let i= 0; i<array.length;++i){
    const element = array[i];
}

console.log(a)
//console.log(b)
//console.log(c)//prints 30