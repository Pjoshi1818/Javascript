
//1.  variable and constant    (27/7/25) 

const accountId = 5445                      // cannot be changed later
let accountEmail = "pankaj@gmail.com"      // Value can be updated, block scoped
var accountPassword = "8562"              // scope problem  
accountCity = "chittor"                    
let accountstate;                      //not initialized: default value is 'undefined' 
/*
prefer not to use var
becouse of issue in block scope and functinol scope 
*/

// accountId = 2  // not allowed
console.log(accountId)


accountEmail = "pj@gmail.com"
accountPassword = "8956"
accountCity = "udaipur"

//Print all values as a neat table
console.table([accountEmail, accountId, accountPassword, accountCity])