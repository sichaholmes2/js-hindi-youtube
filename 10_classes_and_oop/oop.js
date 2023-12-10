//object literal->litearally an object which is a base unit
const user={
    username:"hitesh",  //can have string, value or bool

    loginCount: 8,
    signedIn:true,


    getUserDetails: function(){
       console.log("Got user Details");
       //console.log(`Username: ${username}`)// gives username not defined
       console.log(`Username: ${this.username}`)//ececution context shit so it works
        console.log(this); //[rints everything in current context]
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this)/// gives empty paranthesis {},as it is in the global context


// const promiseOne= new Promise()
// const date = new Date()

function User(username, loginCount,isLoggedIn){
   this.username=username;
   this.loginCount=loginCount;
   this.isLoggedIn=isLoggedIn
   return this// if you dont write this, this also works
}

// const userOne= User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11,false)
// console.log(userOne)// this prinst the values of userTwo, the code is overridden so we use the new keyword
const userOne= new  User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11,false)
console.log(userOne)
console.log(userTwo)
// when u write new , a new instance is created, a new objwct is created , a construction function is called bc odf the new keyword
console.log(userOne.constructor)

//rest from prototypes to be done later