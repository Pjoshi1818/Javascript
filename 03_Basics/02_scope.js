var c = 56       // var: function/global scoped variable
let a = 50       // let: block scoped variable

if (true) {
    let a = 10   // new 'a' inside block scope (different from outer 'a')
    const b = 20 // const: block scoped, value cannot be reassigned
    // var c = 30 // would overwrite outer 'c' because var is not block scoped
    console.log("INNER : ", a) // prints inner 'a' (10)
}

console.log(a) // prints outer 'a' (50)
// console.log(b) // error: b is block scoped and not accessible here
// console.log(c) // prints outer 'c' (56) if var c=30 inside block is commented
