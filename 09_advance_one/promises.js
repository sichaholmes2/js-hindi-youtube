//promises-> is an object representing eventual failure or completion of an async operation
//fetch('https://something.com').then().catch().finally() u need to create promises

// new instance is declare just like classes with keyword new
//bluebird library...not req now
const promisesOne= new Promise(function(resolve, reject){
    //do async task
    //db calls, crypto
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()// this connects is to the consumption of the promise later
    },1000)
})


//consuming the promise
promisesOne.then(function(){
    console.log("promise consumed")
})


//method 2 without using variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


//making another promise
const promiseThree = new Promise(function(resolve, reject){
    // if some data is recieved from network we need to pass it
     setTimeout(function(){
        //data is passed into resolve
          resolve({username:"Chai", email:"chai@example.com"})
     }, 1000)
})



promiseThree.then(function(user){
console.log(user)
})



//4th promise
const promiseFour = new Promise(function(resolve, reject){
    
     setTimeout(function(){
        //suppose there is an error
        let error=true
        if(!error){
          resolve({username:"hitesh", password:"123"})
        }
        else{
            //case of rejection
            reject('error: somethinfg went wrong')
        }
     }, 1000)
})

// we need to use .catch for rejection
//using arrow fn
promiseFour.then((user)=>{
    console.log(user)
    return user.username

}).then((username)=>{ //u can chain as may functions as u want this way
    console.log(username)
}).catch(function(error){
    console.log(error); // executes the error part if error is true
}).finally(()=> console.log("The promise is eithe resolbved or rejected"))


//using async to consume the promise
