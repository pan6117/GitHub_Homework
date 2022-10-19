//Question 1 ->
//Print all the odd numbers from 0 → n , where n will be dynamic inside a function
// Function printOddNumbers(n) {
//     // Write logic here
//     }

function inputNum(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
inputNum(10);

/* Question 2 -> (ADVANCE) **********************************
Write a function that takes an array as a parameter and calculates the sum of the numbers inside the array
let numList = [1, 2, 3, 4, 5, 6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21
Function sumOfElements(array) {
// Write your logic here, // HINT: FOR LOOP
return
}
sumOfElements(numList) // 21 */

let sum = 0;
function sumAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
sumAll([1, 2, 3, 4, 5, 6]);

// Teacher's Solution -----------------------------------------------
// let numList = [1, 2, 3, 4, 5, 6];
// function sumOfElements(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// console.log(sumAll(numList));

/* Question 3 → (ADVANCE) ***********************************
Write a function that takes an array as a parameter and returns the largest number inside that array
Let numList = [ 20, 40, -10, 5, 40, 5, 11]; // 40
Function largestNumber(array) {
// Write your logic here
// Print the largest number inside the array // 40
} */

// Solution 1 -----------------------------------------------------
function inputArr(arr2) {
  console.log(arr2, "The largest number is:", Math.max(...arr2));
  //console.log(arr2, "The smallest number is:", Math.min(...arr2));
}
inputArr([10, 30, 2, 30, 5, -5, 100, 100]);

// Solution 2 -----------------------------------------------------
function largeNum(arr3) {
  console.log(arr3);
  //let large = -9999;
  let large = null;
  //let large = arr3[0];
  for (i = 0; i < arr3.length; i++) {
    if (large < arr3[i]) {
      large = arr3[i];
    }
  }
  console.log("The largest number is:", large);
}
largeNum([10, 30, 2, 30, 5, -5, 100, 100]);
