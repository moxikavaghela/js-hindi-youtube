const accountId = 144553//constant variables can not be changed
let accountEmail = "moxika@gmail.com"// let is used to define variable can be changed
var accountPassword = "12345"// variables can be changed
accountCity = "Jaipur"// java scripts allows us to define variables without using any keywords prefer not to use this for better practise.
let accountState // such variables returns undefined values.

// accountId = 2-- not allowed

accountEmail="changed@email.com"
accountPassword="test123"
accountCity="barh"

console.log(accountId);
/*
prefer not to use var because of issue in block scopes and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
