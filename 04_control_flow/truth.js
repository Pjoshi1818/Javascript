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
