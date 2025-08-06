// Objects

// object literals  
// 'use strict'

const mysym = Symbol("k1"); 

const myobj = {
    name: "pankaj",                       // Normal key-value pair
    "full name": "pankaj joshi",         // Can only be accessed using bracket notation
    age: 18,
    email: "pankaj@gmail.com",
    location: "udaipur",
    isLog: false,
    // mysym: "kt"  // This will treat mysym as a string, not as a Symbol
    [mysym]: "kt"   // Using Symbol as a key (correct way)
};


console.log(myobj.name);           // Dot notation (first method)
console.log(myobj["name"]);        // Bracket notation (second method)
console.log(myobj["full name"]);   // Only bracket notation works for keys with spaces

// console.log(myobj.mysym);       // Incorrect: This accesses 'mysym' as a string key, not Symbol
// console.log(typeof myobj.mysym); // Will show undefined

console.log(myobj[mysym]);         // Correct way to access Symbol key
console.log(typeof myobj[mysym]);  // Checking type of Symbol key value

// Updating a value in the object
myobj.email = "joshi@gpt.com";     // Overwriting email value

// Object.freeze(myobj);           // Freezes the object (makes it immutable)

// Example (uncomment to test freeze):
// myobj.email = "joshi@gmail.com";  
// console.log(myobj);             // Value will not change if object is frozen

// Adding a method to the object
myobj.greeting = function () {
    console.log("In function ");
};

console.log(myobj.greeting());     // Calls greeting function

// Adding another method that uses 'this' to access object properties
myobj.gt2 = function () {
    console.log(`Your name is ${this.name}`);
    console.log(`Your full name is ${this["full name"]}`);
};

console.log(myobj.gt2());          // Calls gt2 function
