const accountId=1444553
let accountEmail="sid@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
//accountId=2 //not allowed
accountEmail="abcd@email.com"
accountPassword="54321"
accountCity="Delhi"
let accountState;
console.log(accountId);//will print undefined

/*
prefer not to use var
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail, accountPassword,accountCity ,accountState])