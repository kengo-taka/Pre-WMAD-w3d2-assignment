// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];



// const joinSentence = function (arr) {
//       for (x = 0; x < arr.length; x++) {
//       arr[x] = arr[x] + arr[x] 
//       }
//       console.log(arr[x]);
// }
// joinSentence(brokenSentence);

const joinSentence = function (arr) {
  
  console.log(arr.join(" "));
}
joinSentence(brokenSentence);