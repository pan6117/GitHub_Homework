//Question 1 ->
//Print all the odd numbers from 0 → n , where n will be dynamic inside a function
// Function printOddNumbers(n) {
//     // Write logic here
//     }

function inputNum(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 1 || i == 0) {
      console.log(i);
    }
  }
}
inputNum(5);

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

/* Question 3 → (ADVANCE) ***********************************
Write a function that takes an array as a parameter and returns the largest number inside that array
Let numList = [ 20, 40, -10, 5, 40, 5, 11]; // 40
Function largestNumber(array) {
// Write your logic here
// Print the largest number inside the array // 40
} */

function inputArr(arr2) {
  console.log(arr2, "the largest number is:", Math.max(...arr2));
  console.log(arr2, "the smallest number is:", Math.min(...arr2));
}

inputArr([10, 30, 2, 30, 5, -5, 100, 100]);

//test --------------------------- failed
// function inputArr(arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr2[i]);
//       while (arr2[i] > arr2[j]) {
//         console.log(arr2[i]);
//       }
//     }
//   }
// }
// inputArr([10, 20, 30]);
