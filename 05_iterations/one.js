const e = require("express");

// for 

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 7) {
    //  console.log("thala for a resion")
  }
  //  console.log(element)

}

for (let i = 0; i < 10; i++) {
  //  console.log(`outer loop ${i}` )
  for (let j = 0; j < 10; j++) {
    //  console.log(`inner loop ${j} `)

  }
}

let myarr = ["pankaj", "raja", "jayesh"]
console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
  const element = myarr[index];
  console.log(element)
}


// break and continue

// console.log("1 to 20");
// for(let i= 1 ; i<30; i++){
//   console.log(i);
//   if(i == 20){
//     break;
//   }

// }

for (let index = 0; index <20; index++) {

  if (index == 5) {
    console.log(`number is detected ${index} `)
    continue;
  }
  console.log(` value of index is ${index}`);


}