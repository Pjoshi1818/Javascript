

//JavaScript me this ki jarurat tab padhi jab language me object-oriented features add kiye gaye, aur functions ko methods ke roop me object ke andar use karna pada.

const user = {
    username: "pankaj",   
    price: 565,           

    wellcomemsg: function(){  // method inside object
        console.log(`Dear ${this.username} wellcome to website `) // 'this' refers to current object
        console.log(this) // prints current object context
    }
}

// user.wellcomemsg() 

user.username = "raju" // change property value
// user.wellcomemsg() 

// console.log(this) // in Node.js → empty object, in browser → window object


// function chai(){
//     let username = "raju "
//     console.log(this.username); // 'this' in normal function depends on how it's called
// }
// chai()

// const chai = function (){
//     let username = "raja"
//     console.log(this.username); // in non-method function, 'this' is undefined in strict mode
// }
// chai(); // undefined


const chai = () => {   // arrow function
    let username = "raja"
    console.log(this.username); // arrow functions do not have their own 'this', take from outer scope
}
chai(); // still undefined


// pure arrow function syntax examples:

() => {}   // basic arrow function syntax

// const addtwo = () => {}  // store arrow function in variable

// const addtwo2 = (num1, num2) => {   // basic with explicit return
//     return num1 + num2;
// } 

// const addtwo2 = (num1, num2) => num1 + num2; // implicit return (no {})

// const addtwo2 = (num1, num2) => (num1 + num2) // implicit return with parentheses

const addtwo2 = (num1, num2) => ({ username: "raja" }); // () lets us directly return an object

console.log(addtwo2(4,5)) // outputs object { username: "raja" }
