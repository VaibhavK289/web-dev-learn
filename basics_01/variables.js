const accountId = 12334
let accountEmail = "vaibhav.1@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur"

console.log(accountId)
console.log((accountEmail))
console.log(accountPassword)
console.log(accountCity)

//accountId = 22222
//accountEmail = "vaibhav.vaibhav@rediffmail.com"
//console.log(accountEmail)

accountPassword = "222222"
console.log(accountPassword)
console.table([accountId, accountEmail, accountPassword, accountCity])

/* prefer not to use var due to block scope and functional scope. */

let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
