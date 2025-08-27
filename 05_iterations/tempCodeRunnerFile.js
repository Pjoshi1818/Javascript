const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newnum = mynum.map( (num) => num+10)  
// console.log(newnum);

//chaning

// const newnum = mynum.map((num)=>num-1).map( (num)=>num+5 ).filter((num)=>num>=5)

//for readble sentix 
const newnum = mynum
                .map(function (num){return num * 10})   // now arr is [10,20,30,40,50,60,70,80,90];
                .map((num)=>num+5 )                    // now arr is [15,25,35,45,55,65,75,85,95,];
                .filter((num)=>num>40);               //now arr is [45,55,65,75,85,95,];

// console.log(newnum);


// ****************   ONE more method ***********************// 


                // reduse 

const num = [1,2,3,4];

const intialvalue = 0
// const sumOf = num.reduce(

//   function  (acc,currentval){ 
//     console.log(` acc ${acc} currval = ${currentval}`);
//     return acc+currentval},0
// );

const sumOf = num.reduce(
  (acc,currentval)=>( acc+currentval),0);

// const intialvalue = 0
// const sumOf = num.reduce(        // On the first run, acc = initialValue.
//                                 // After that, acc stores the running total.

//     (acc,currentval)=> acc+currentval,intialvalue
// );
console.log(sumOf);





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);