const accountId = 14453
let accountEmail = "aliibtisam39@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;
// accountId = 2 not allowed


console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Gujrat"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope
and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])