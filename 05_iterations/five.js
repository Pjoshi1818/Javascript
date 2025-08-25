const coding =  ["js","py","c++","c"];

// const val = coding.forEach( (item )=> {     // for each take a callback 
//    console.log(item);
// //    return item;    // for each not return any value 
// })

// console.log(val);

// const num = [1,2,3,45,6,87,8,9];
//  const store = num.filter((item)=>(item>8))  // take a callback 

//  console.log(store);
 

 const mynum= [1,2,3,4,5,6,7,8,9];
 const  newnum  = [];

//  mynum.forEach( (num) => {
//     if(num>5){
//         newnum.push(num);
//     }
//  } )

//  console.log(newnum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const user = books.filter((bkl)=> bkl.genre === 'History');
  
  const user = books.filter((bkl)=> bkl.publish > '2000');
  console.log(user);
  