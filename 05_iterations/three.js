// for...of loop example

// Arrays and objects in JS
// ["", "", ""];
// [{}, {}, {}];   // common patterns in JS

let arr = [1, 2, 3, 4, 5, 67, 8];

// for...of gives values
for (const num of arr) {
  // console.log(num);   
}

let str = "hello world!";
// for...of works on strings too
for (const ch of str) {
  // console.log(ch);  
}


// Maps  

// Map stores key-value pairs
// Maintains insertion order of keys


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("JPN", "Japan");
map.set("SA", "South Africa");
map.set("NZ", "New Zealand");
map.set("IN", "India");  // duplicate key → overwrites

console.log(map);  
