// if else example
// const islogedin = true;
// if (islogedin) {
    // console.log("loged in :")
// } else {
    // console.log("not loged in ")
// }

const { is } = require("express/lib/request");

// operators used in if condition
// <, >, <=, >=, ==, ===

// if condition with block scope
// const score = 100 
// if (score >= 100) {
//     let win = "not possible"
//     console.log(`yo yo ${win}`)
// }      
// console.log(`yo yo ${win}`)  // error because of block scope

// single line if statement
// const balance = 10000
// if (balance > 500) console.log("party!")

// bad practice: multiple statements with comma
// const balance = 10000
// if (balance > 500) console.log("party!"), 
// console.log("using comma ")

// else if ladder example
let balance = 1000;
// if (balance < 600) {
//     console.log("Balance is less than 600");
// } else if (balance < 800) {
//     console.log("Balance is less than 800");
// } else if (balance < 900) {
//     console.log("Balance is less than 900");
// } else if (balance < 1200) {
//     console.log("Balance is less than 1200");
// } else {
//     console.log("Balance is greater or equal to 1200");
// }


const islogedin = true;
const debitcard = true;
const loINfromgoogle = false;
const logedinemail = true;
if(islogedin && debitcard){
    console.log("allow to buy : ")
}
if(loINfromgoogle || logedinemail){
    console.log("loged in ")
} 



