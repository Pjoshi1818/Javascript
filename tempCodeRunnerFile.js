  // data type  

  // "use strict" ;        // treat all JS code as  newrer version 

//   alert("pankaj")   // we are using node js ,  not browser


// let age = 18
// let islog = false
// let state  = null 
// let sp          
// let str = "pankaj"

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

console.log(id === sid)

 const bigint = 741256894512368754n   // bigint 




 // ******** reference (non primitive )**********

 //Array , object ,function 

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


console.log(typeof myFunction)
console.log(typeof my_obj)
console.log(typeof hero)
console.log(typeof id)