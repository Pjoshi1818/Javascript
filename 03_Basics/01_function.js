function myname() {
    console.log("pankaj");
    console.log("joshi");
}

// myname   // function reference (no execution)
// myname() // function execution



// function add(number1, number2) {  // parameters
//     console.log(number1 + number2);
// }       
// const result = add(2, 4); 
// console.log("result is ", result)  // returns undefined because no return statement




function add(number1, number2) {  
//   let result = number1 + number2;
//   return result;
    return number1 + number2;
        // console.log(" ")  // never executes after return
}



// add()         // NaN (no arguments passed)
// add(2, 4)     // arguments
const result = add(2, 4);   // store the return value in a variable 
// console.log("result is ", result);  // prints the result


function userloggin(username){
    if(username === undefined){
        console.log("enter a user name :")
        return 
    }

    //     if (typeof username === "string") {
    //     return `${username} just logged in`;
    // }


    return ` ${username} just logged in `
}

// console.log(userloggin("pankaj"))
// console.log(userloggin(5))   // use  to privment this type of situation


// *** day 2 ** 

function calculateCartPRICE(...num1){  // rest operator to handle multiple parameters as an array
    return num1
}
// console.log(calculateCartPRICE(100,200,300))  


const user = {
    name: "pankaj",   // username property
    price: 199        // price property
}

function handleOBJ(anyobject){  // function to handle and print object values
    console.log(`username is ${anyobject.name}  and price is ${anyobject.price}` )
}

// handleOBJ(user);

handleOBJ({   // direct pass object without variable
    name : "pankaj ",
    price :  5463.97
});


const myNewArray = [100,200,4545,656]   // simple array of numbers

function returnsecondvalue(anyArray){   // returns 2nd element of an array
    return anyArray[1]
}

// console.log(returnsecondvalue(myNewArray))

console.log(returnsecondvalue([  // direct array passed to function
    200,400,500
]))
