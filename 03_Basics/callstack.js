// Execution Context + Call Stack Demo (IIFE)

// IIFE to avoid global pollution
(function () {
    function one() {
        console.log("Function One");
        two(); // calling function two
    }

    function two() {
        console.log("Function Two");
        three(); // calling function three
    }

    function three() {
        console.log("Function Three");
    }

    // execution starts here
    one();  
})();

//  other 

const fruits = ["apple", "banana", "mango"];

fruits.push("orange");      // add at the end
fruits.unshift("grapes");   // add at the beginning
fruits.pop();               // remove last element
fruits.shift();             // remove first element

console.log(fruits);        // ["banana", "mango"]
console.log(fruits.includes("mango")); // true
