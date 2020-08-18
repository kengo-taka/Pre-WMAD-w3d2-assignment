// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {

  for ( x = 0; x < arr.length; x++) {
    arr[x] += 'HOORAY'
    console.log(arr[x]);
  }

};

addHooray(food);

