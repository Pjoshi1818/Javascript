let newdate = new Date();
//  console.log(newdate);
//  console.log(newdate.getMonth()+1);
//  console.log(newdate.getDay());  


console.log(`the time is :- ${newdate.getDay()} and month is ${newdate.getMonth()+1}  `)


// newdate.toLocaleString('default',{
//     weekday : "long",
// })



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