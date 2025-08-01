const name = "pankaj "
const count = 45

// console.log(name + count + "joshi")


//String interpolation is a way to insert (interpolate) variables or expressions directly inside a string.

// console.log(`my name is ${name} mycount is ${count + 5 }`) 

// ********* String Methods in JavaScript *********

const getname = new String('pankaj'); // Create a string object

console.log(getname[1]);           // Access character at index 1
console.log(getname.__proto__);    // See string prototype methods

console.log(getname.length);       // Length of the string
console.log(getname.toUpperCase()); // Convert to uppercase (no change to original)

console.log(getname.charAt(2));    // Character at index 2
console.log(getname.indexOf('j')); // Index of character 'j'

const newstring = getname.substring(0, 4); // Substring from index 0 to 3
console.log(newstring); 

const other = getname.slice(0, -4); // Slice excluding last 4 characters
console.log(other);

const extra = "  pankaj   ";         
console.log(extra);                 // Print with spaces
console.log(extra.trim());         // Trim leading/trailing spaces

const url = "https://pankaj.com/joshi%45is";

console.log(url.replace('%45', '=')); // Replace '%45' with '='
console.log(url.includes('joshi'));   // Check if 'joshi' exists
console.log(url.split('/'));          // Split string by '/'
