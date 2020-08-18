// write a function that console logs each item of the array one line at a time

let example = [1, 2, 3, 4, 'five', 6, 7];

// const logItems = function (arr) {
//   if (arr.length === 1 ) {
//     console.log(arr[0]);}
//     else {
//   for (x = 0; x < arr.length; x++) {
//     arr[x] = arr[x] + arr[x-1];
//   }
// console.log(arr[x]); 
// }
// }
// logItems(example)

// const logItems = function (arr) {
//   console.log(arr.split(",").join(""));
// };
//   logItems(example)

const logItems = function (arr) {
    for (x = 0; x < arr.length; x++) {
   console.log(arr[x]); 
   } 
  }
  logItems(example)