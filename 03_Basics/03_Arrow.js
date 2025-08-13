const user = {
    username: "pankaj",   
    price: 565,           

    wellcomemsg: function(){  // method inside object
        console.log(`Dear ${this.username} wellcome to website `) // 'this' refers to current object
        console.log(this) // prints current object context
    }
}

user.wellcomemsg() 

user.username = "raju" // change property value
user.wellcomemsg() 

console.log(this) // in Node.js → empty object, in browser → window object
