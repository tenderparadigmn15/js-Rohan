const accountId = 144553
let accountEmail = "rohan@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;
//accountId = 2    // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail ="hc@hc.com"
accountPassword = "2122122"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
