// const score = 100
// console.log(score)  // print score value



// const blance = new Number(456)
// console.log(blance)  // print number object



// console.log(blance.toString().length)  // convert to string length
// console.log(blance.toFixed(2))  // fixed to 2 decimals

// const newnum = 18.89963
// console.log(newnum.toPrecision(4))  // total 4 significant digits



// const hundred = 100000000;
// console.log(hundred.toLocaleString('en-IN'))  // format number Indian style

// console.log(Number.parseInt("123abc"));


//  ***************  Maths   *************

// console.log(Math)
// console.log(Math.abs(-5.6))
// console.log(Math.round(5.6))
// console.log(Math.ceil(5.6))
// console.log(Math.floor(5.6))





// Returns a random number between 0 and 1 (e.g., 0.639)
console.log(Math.random())

// Scales random number between 1 and 11 (not exact integer)
console.log((Math.random() * 10) + 1)

// Returns random integer from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

// Returns random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
