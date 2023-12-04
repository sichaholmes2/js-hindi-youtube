//immediately invoked function expression
//we use this to avoid global scope
//iife is executed immediately
//thisis a named iife
(function chai(){
    console.log('DB connected')
})();
//use ; as js doesnt know how to end this if u dont use ; and then use another functopn latern then it will show error

//iife with arrow function
(()=>{
    console.log(`DB Connected two`)
} ) ();

//passing name to the function
((name)=>{
    console.log(`DB Connected two ${name}`)
} ) (`hitesh`);

