// 
'use strict'
const myObj = {
    js: "javascript",
    'cpp': "c++",
}
for (const key in myObj ) {
  console.log(`key = ${key} :: and value = ${myObj[key]}`);  
}

const arr = [1,2,3,4,5,6,7,89,];
for (const key in arr) {    //for in ma key = index 
   console.log(`index is ${key} or value of index is ${arr[key]}`);
   
}

// const map = new Map();    // A Map is iterable But it is not iterated with a for...in loop.Instead, you should use for...of.




// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("JPN", "Japan");
// map.set("SA", "South Africa");
// map.set("NZ", "New Zealand");
// map.set("IN", "India");  // duplicate key → over


// for (const key in map) {
// console.log(key)
// }