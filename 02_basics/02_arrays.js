const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)// dc array itself is consideres a single element and is merged a thr 4th element of the marvel array
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])//flash

const allheros = marvel_heros.concat(dc_heros)//thsi case , arrays are merged propedply like spread operator

console.log(allheros)

const all_new_heros=[...marvel_heros, ...dc_heros]//using spread technique
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)//breaks down the arrays which has arrays in them into arrays
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//checking if its an array as"Hitesh" is a string
console.log(Array.from("Hitesh"))//coverts arrays, functions,etc into an array 
console.log(Array.from({name:"hitesh"}))//interesting case
//it cannot be converted as it doesnot know what to convert from