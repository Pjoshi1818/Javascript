// // const tenderuser = Object()
const obj = { name: "Pankaj" }// This is not a singleton. It's just a regular object.


const tinderuser = {}

tinderuser.id = "2121"
tinderuser.name = "raja"
tinderuser.islogin = false;

// console.log(tinderuser)


const instuser = {
    email : "abc@ac.com",
    fullname:{
        userfullname: {
            fistname : "raju",
            lastname : "kumar",

        }

    }
}
// console.log(instuser.fullname?.userfullname.fistname)   //  ? for check thair exists learn in detail ->


const obj1 = {1:"a",2:"f"}
const obj2 = {3:"a",4:"h"}

// const obj3 = {obj1,obj2} // incorrect 

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}  // spread

// console.log(obj3)

//array of obj 
const users =[
    {
        email: "poko@mail.com"
        , id : 1
    },
     {
        email: "poko@mail.com"
        , id : 1
    },
     {
        email: "poko@mail.com"
        , id : 1
    }
]

// console.log(users[2].email);

// console.log(tinderuser)

// console.log(Object.keys(tinderuser))// copey all keys  in a array 
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('papa'))





// ** Destructuring and Objects ** (8/08/2025)

// Creating an object named `user` with key-value pairs
const user = {
    id: 101,
    username: "raja",
    father: "rahul"
};

// Object destructuring - extracting the 'father' property from user
const { father } = user; // father = "rahul"

// Destructuring with renaming - extracting 'father' and assigning it to a new variable 'brother'
const { father: brother } = user;

console.log(brother); // Output: "rahul"

// JSON format example:
// JSON (JavaScript Object Notation) is a data format, similar to JS objects but always in string form in APIs
// The below example is a JSON representation of an object:
/*
{
    "name": "joshi",
    "id": 121,
    "ch": "ch",
    "section": "pj"
}
*/
