  // data type  

  // "use strict" ;        // treat all JS code as  newrer version 

//   alert("pankaj")   // we are using node js ,  not browser


let age = 18
let islog = false
let state  = null 
let sp          
let str = "pankaj"

// console.table([age , islog ,state,str,sp])

// number => 2to the power 53
// bigint 
// string => "pankaj"
//boolean => true /false 
//null =>  {empty}
// undefined => value is not assigned
// syambol => unique    


// console.log(typeof age)  

// console.table([typeof age ,typeof islog , typeof state,typeof str,typeof sp])



//      **********  summery   ********

// primitive 

// -> string, number, boolean ,null , undefined , Bigint ,symbol;


const mystring = "pankaj";
const num = 123  // const num = 123.321
 
const islogedin = false
const outsidetemp = null
let user ;

const id =  Symbol('123')
const sid = Symbol('123')

// console.log(id === sid)

//  const bigint = 741256894512368754n   // bigint 




//  // ******** reference (non primitive )**********

//  //Array , object ,function 

 const hero = ["kk","jj","dd"];
 {  // object
  name :"pankaj"
  age : 20
 }

 let my_obj =  {   // object
  name : "pankaj"

 }

let myFunction = function(){
  console.log("function");

}


// console.log(typeof myFunction)
// console.log(typeof my_obj)
// console.log(typeof hero)
// console.log(typeof id)



// ******************** memory********************

// -> heap(non primitive ) and stack(primitive):

// Stack (used for primitive types):
// - Stores primitive data types like number, string, boolean, null, undefined, symbol, bigint
// - When assigned or passed to a function, it gives a **copy**
// - Changes to the copy do NOT affect the original

// example 
let email = "pankaj@gmail.com"


let emailorg = email

emailorg = "joshi@gmail.com"

// console.log(email)
// console.log(emailorg)





// Heap (used for non-primitive types like objects, arrays, functions):
// - Stores complex data types (non-primitives)
// - When assigned or passed, it gives a **reference** to the same object in memory
// - Changes to the object through one reference are visible to all references

// example 

let userone = {
  email: "pankaj@gmail.com",
  upi : "ex@adl"
 } 
let usertwo = userone;

usertwo.email = "jayesh@gmail.com";

console.log(userone)
console.log(usertwo)


// +++  constructer ++
// Constructor function creates objects with properties  
// 'this' refers to the new object being created

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Pankaj", 22);
// console.log(person1.name); 
