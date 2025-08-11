function myname() {
    console.log("pankaj");
    console.log("joshi");
}

// myname   // function reference (no execution)
// myname() // function execution



// function add(number1, number2) {  // parameters
//     console.log(number1 + number2);
// }       
// const result = add(2, 4); 
// console.log("result is ", result)  // returns undefined because no return statement




function add(number1, number2) {  
//   let result = number1 + number2;
//   return result;
    return number1 + number2;
        // console.log(" ")  // never executes after return
}



// add()         // NaN (no arguments passed)
// add(2, 4)     // arguments
const result = add(2, 4);   // store the return value in a variable 
console.log("result is ", result);  // prints the result
