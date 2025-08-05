// // array 

// const arr = [1,2,3,4,5]
// const name = ["pankaj","jayesh"]
// const arr2 = new Array(1,2,3,4,5,6)
// // console.log(arr[0])

// // array methods 

// arr.push(45);
// // console.log(arr)

// arr.pop();
// // console.log(arr)

// // arr.unshift(12)   // add in starting 
// // arr.shift()      // remove from starting 
// // console.log(arr)

// // console.log(arr.includes(3))
// // console.log(arr.indexOf(6))

// const newarr = arr.join()  // combine all elements into a single string,
// // console.log(arr)
// // console.log(newarr)  


// // sclice , splice
// console.log("A",arr)

// const np1 = arr.slice(1,3)
// console.log(np1)

// console.log("b",arr)


// const np2 = arr.splice(1,3);
// console.log("c",arr)
// console.log(np2)


// array part 2

const m_hero = ["thor", "ironman", "spiderman"]
const dc_hero = ["batman", "superman", "hadiman"]

// m_hero.push(dc_hero);           // Adds dc_hero as a single nested array
// console.log(m_hero);            // ["thor", "ironman", "spiderman", [...]]
// console.log(m_hero[3][1]);      // "superman"

// concat() → joins two arrays, returns new array
const allHERO = m_hero.concat(dc_hero);
console.log(allHERO);

// spread (...) → modern way to merge arrays
const new_hero = [...m_hero, ...dc_hero];
console.log(new_hero);

// flat() → flattens nested arrays
const another_arr = [1, 2, 3, [5, 6, 7], 8, 6, [8, 7, 9, [4, 5]]];
const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);

// isArray() → checks if value is an array
console.log(Array.isArray("pankaj")); // false

// from() → converts iterable to array
console.log(Array.from("pankaj"));    // ['p','a','n','k','a','j']

// from(object) → returns [] if not iterable
console.log(Array.from({ name: "pankaj" })); // []

let score1 = 10;
let score2 = 45;
let score3 = 18;

// of() → creates array from values
console.log(Array.of(score1, score2, score3)); // [10, 45, 18]
