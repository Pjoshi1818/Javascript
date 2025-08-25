const coding = ["js", "py", "c++", "c"];

// forEach → executes callback on each element
// Note: forEach always returns undefined
// const val = coding.forEach((item) => {
//   console.log(item);
//   return item;  // return ignored in forEach
// })
// console.log(val);  // undefined


// filter → creates new array with elements that pass test
const num = [1, 2, 3, 45, 6, 87, 8, 9];
const store = num.filter((item) => (item > 8)); // filter callback
console.log(store);  // [45, 87, 9]


// forEach used to push manually
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnum = [];

// mynum.forEach((num) => {
//   if (num > 5) {
//     newnum.push(num);
//   }
// })
// console.log(newnum);  // [6,7,8,9]


// Array of book objects
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

// filter with condition
// const user = books.filter((bkl) => bkl.genre === 'History');

const user = books.filter((bkl) => bkl.publish > 2000);
console.log(user);  // books published after 2000
