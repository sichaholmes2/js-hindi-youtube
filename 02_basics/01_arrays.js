//arrays

//const myArr=[0,1,2,3,4,5,"hitesh"]//elements can be of diff types as well
const myArr=[0,1,2,3,4,5]
//shallow copy, whatever u change is also changed in the original array unlike deep copy

const myHeors=["shaktiman", "naagraj"]


//another way to declare arrays
const myArr2= new Array(1,2,3,4)
console.log(myArr[1])


//array methods
myArr.push(6)
myArr.push(7)
//myArr.pop()
myArr.unshift(9)//9 is inserted at first pos

console.log(myArr)
myArr.shift()//removes first element

console.log(myArr)
console.log(myArr.includes(9))//checks if 9 is included in array
console.log(myArr.indexOf(9))// gives index of the element ,if not present gives -1
console.log(myArr.indexOf(3))


const newArr=myArr.join()//adds all element of array into a string
console.log(newArr)
console.log(typeof(newArr))


//slice splice
console.log("A ",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log("B",myArr);//the elements of the 1st 2nd and 3rd indexes are extracted out , only the rest of them are left
