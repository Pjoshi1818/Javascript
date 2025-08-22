// MDN: In JS, empty arrays are still truthy 
const arr = []
if (arr) {
    console.log("true")   // prints "true"
} else {
    console.log("false")
}

// falsy values → false, 0, -0, 0n (BigInt zero), null, undefined, NaN
// truthy values → "0", "false", " ", [], {}, function(){}

// check if array is actually empty using length

if (arr.length === 0) {
    console.log("array is empty : ");
}

// check empty object using Object.keys()

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty ");
}


// nullish coalescing operator  (??)  null :  undefind

let val ;
// val = 5 ?? 10
// val = null ??10
// val = undefined ?? 45;
val = undefined ?? 45 ?? 12;


console.log(val)
 

// Terniary opreator

// conduction ? true:false;

const price =100;
price>=80 ? console.log("price is 80++ "): console.log("price is less thian 80");
