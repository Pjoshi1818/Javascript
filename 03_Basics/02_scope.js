var c = 56       // var: function/global scoped variable
let a = 50       // let: block scoped variable

if (true) {
    let a = 10   // new 'a' inside block scope (different from outer 'a')
    const b = 20 // const: block scoped, value cannot be reassigned
    // var c = 30 // would overwrite outer 'c' because var is not block scoped
    // console.log("INNER : ", a) // prints inner 'a' (10)
}

// console.log(a) // prints outer 'a' (50)
// console.log(b) // error: b is block scoped and not accessible here
// console.log(c) // prints outer 'c' (56) if var c=30 inside block is commented



// *** 2 ***

function one(){  
    const name = "pankaj"  

    function two(){   // inner function (closure)
        const web = "youtub"   
        console.log(name)      // can access outer scope variable
    }
    // console.log(web) // error: 'web' is only in 'two' scope
    two()
}
// one() 


if(true) { 
    const name = "pankaj"
    if (name === "pankaj"){ 
        const lastname = " joshi"
        console.log(name + lastname) // accessible inside block
    }
}


// ++++++ Interesting example about Hoisting ++++++

console.log(addOne(5))  // works: function declaration is hoisted

function addOne(num){ 
    return num + 1;
}
// addOne(5) // works before or after definition


// addtwo() // error: cannot access before initialization
const addtwo = function(num){  // (stored in variable)
  return num + 2;
}

addtwo(5)  // works only after definition


