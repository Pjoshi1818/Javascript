// array 

const arr = [1,2,3,4,5]
const name = ["pankaj","jayesh"]
const arr2 = new Array(1,2,3,4,5,6)
// console.log(arr[0])

// array methods 

arr.push(45);
// console.log(arr)

arr.pop();
// console.log(arr)

// arr.unshift(12)   // add in starting 
// arr.shift()      // remove from starting 
// console.log(arr)

// console.log(arr.includes(3))
// console.log(arr.indexOf(6))

const newarr = arr.join()  // combine all elements into a single string,
// console.log(arr)
// console.log(newarr)  


// sclice , splice
console.log("A",arr)

const np1 = arr.slice(1,3)
console.log(np1)

console.log("b",arr)


const np2 = arr.splice(1,3);
console.log("c",arr)
console.log(np2)