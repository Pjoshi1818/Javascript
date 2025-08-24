'use strict'

// for...in with object
const myObj = {
    js: "javascript",
    cpp: "c++",
}

// loops through keys of object
for (const key in myObj) {
 // console.log(`key = ${key} :: and value = ${myObj[key]}`);  
}


// for...in with array
const arr = [1,2,3,4,5,6,7,89,];
for (const key in arr) {    // key = index in array
   //console.log(`index is ${key} or value of index is ${arr[key]}`);
}


// Maps are not for-in iterable
// Instead use for...of loop

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("JPN", "Japan");
// map.set("SA", "South Africa");
// map.set("NZ", "New Zealand");
// map.set("IN", "India");  // duplicate key → overwrites

// for (const key in map) {
//   console.log(key)   // ❌ won't work with Map
// }


// ******************* forEach loop ********************


const coding = ["js","py","c++","c"];

// forEach with normal function
coding.forEach(function (val) {
//    console.log(val);
})

// forEach with arrow function
coding.forEach((value) => {
//   console.log(value);
})



// function reference with forEach
function printMe(item) {
  // console.log(item); 
}

// passing function reference (not executed directly)
coding.forEach(printMe);   // just give reference


// forEach gives value, index, array
coding.forEach((item, index, coding) => {
  console.log(item, index, coding);
})


// ************** one more case *****************

// array of objects
const mycoding = [
    {
        languagename: "javascript",
        filename: "js"
    },
    {
        languagename: "java",
        filename: "java"
    },
    {
        languagename: "python",
        filename: "py"
    }
];

// forEach on array of objects
mycoding.forEach(function(item) {
    console.log(item.languagename); // access object property
})

