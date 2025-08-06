// // const tenderuser = Object()

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

console.log(tinderuser)

console.log(Object.keys(tinderuser))// copey all keys  in a array 
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('papa'))