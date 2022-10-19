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

//  Solution 1 ---------------------------------------------
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

// Solution 2 ----------------------------------------------
function inputStars(num) {
  let star = "";
  for (i = 0; i < num; i++) {
    for (j = i; j < num; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}

inputStars(5);

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

// Solution 1 ************************************************
function printStars2(n2) {
  star2 = "";
  for (let i = 0; i < n2; i++) {
    for (let j = 0; j <= i; j++) {
      star2 = star2 + "*";
    }
    star2 = star2 + "\n";
  }

  for (let i = n2 - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      star2 = star2 + "*";
    }
    star2 = star2 + "\n";
  }
  console.log(star2);
}
printStars2(5);

// Solution 2 ************************************************
function inputStar2(num2) {
  if (num2 % 2 == 1) {
    let star2 = "";
    for (i = 0; i < num2 / 2; i++) {
      for (j = 0; j <= i; j++) {
        star2 = star2 + "*";
      }
      star2 = star2 + "\n";
    }

    for (i = num2 / 2 - 1; i > 0; i--) {
      for (j = 0; j < i; j++) {
        star2 = star2 + "*";
      }
      star2 = star2 + "\n";
    }
    console.log(star2);
  } else console.log("You should input Odd Number for row.");
}

inputStar2(9);

// Question 3
// Write a function that takes a value n as a parameter, and prints the following pattern
/*
 *
 *     *
 *       *
 *  * * * *  *
 */

let star3 = "";
function inputStars3(n3) {
  for (i = 0; i < n3; i++) {
    for (j = 0; j < n3 * 2 - 1; j++) {
      if (j == n3 - 1 - i || j == n3 - 1 + i || i == n3 - 1) {
        star3 = star3 + "*";
      } else {
        star3 = star3 + " ";
      }
    }
    star3 = star3 + "\n";
  }
  console.log(star3);
}
inputStars3(10);
