// Write a function that takes a value n as a parameter, and prints the following pattern
/*
 *
 **
 ***
 ****
 *****
 ******
 */

/*
function printStars(n) {
  let item = "";
  for (let i = 0; i < n; i++) {
    item = item + "*"; // "****" + "*" --> "*****"
    console.log(item); // **
  }
}
printStars(5);
*/

// item    i    console.log
//  ""     0      "*"
//  "*"    1      "**"
//         2      "***"
//         3      "****"
//         4      "*****  "

/*
function printStars(n) {
    star = "";
    for (let i = n; i > 0; i--) {
      star = star + "*";
      console.log(star);
    }
  }
  printStars2(5);
*/

// Question 1 ******************************************
// Write a function that takes a value n as a parameter, and prints the following pattern
/*
 *****
 ****
 ***
 **
 *
 */

function printStars1(n1) {
  star1 = "";
  for (let i = n1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      star1 = star1 + "*";
    }
    star1 = star1 + "\n";
  }
  console.log(star1);
}
printStars1(5);

// Question 2
// Write a function that takes a value n as a parameter, and prints the following pattern
/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function printStars2(n2) {
  star2 = "";
  for (let i = 0; i < n2; i++) {
    for (let j = 0; j <= i; j++) {
      star2 += "*";
    }
    star2 += "\n";
  }

  for (let i = n2 - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      star2 += "*";
    }
    star2 += "\n";
  }
  console.log(star2);
}
printStars2(5);

// Question 3
// Write a function that takes a value n as a parameter, and prints the following pattern
/*
 *
 *     *
 *       *
 *  * * * *  *
 */

let star3 = "*";

function inputStars3(n3) {
  for (i = 0; i < n3; i++) {
    for (j = 0; j < n * 2 + 1; j++) {
      console.log(j);
    }
  }
}
