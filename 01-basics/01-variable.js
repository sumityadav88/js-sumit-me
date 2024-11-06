const accountId = 144553        // unchangable
let accountEmail = "sumit@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"  //avoid to used
let accountState;

// accountId = 2  Not allowed

accountEmail = "hch@ch.com"
accountPassword = "21345"
accountCity = "Noida"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

