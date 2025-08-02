// dates 

let mydate = new Date();
console.log(mydate.toString())

console.log(mydate.toISOString())
console.log(mydate.toJSON())


console.log(mydate.toLocaleTimeString())
console.log(mydate.toLocaleDateString())

console.log(mydate.toTimeString())




// let fixdate = new Date(2025,45,15)     // 45 months = 3 years and 9 months

// So:
// 2025 + 3 = 2028
// 9th month (index 9) = October
// Day = 15


// let fixdate = new Date(2025,45,15,5,7)

// let fixdate = new Date("2025-01-15")


//  let fixdate = new Date("02-24-2025")
// // console.log(fixdate.toLocaleString())



// let myTimeStamp = Date.now()
// console.log(myTimeStamp.toFixed())

// console.log(fixdate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newdate = new Date();
//  console.log(newdate);
//  console.log(newdate.getMonth()+1);
//  console.log(newdate.getDay());  


console.log(`the time is :- ${newdate.getDay()} and month is ${newdate.getMonth() + 1}  `)


newdate.toLocaleString('default',{
    weekday : "long",
})



console.log(newdate.toLocaleString('default', {
    weekday: 'long',      // e.g., "Saturday"
    year: 'numeric',      // e.g., "2025"
    month: 'long',        // e.g., "August"
    day: '2-digit',       // e.g., "02"
    hour: '2-digit',      // e.g., "06"
    minute: '2-digit',    // e.g., "30"
    second: '2-digit',    // e.g., "45"
    hour12: true          // 12-hour format with AM/PM
}));