// Question 1
// Write a JavaScript program that accept two integers and display the larger.
function num(a, b) {
  if (a > b) {
    console.log(a, "is greater.");
  } else {
    console.log(b, "is greater.");
  }
}
num(4, 3);

// Question 2 *****************************
// Using a for loop print all even numbers up to and including n. Don’t include 0.
function inputN(n) {
  for (let evenNum = 1; evenNum <= n; evenNum++) {
    if (evenNum % 2 == 0) {
      console.log(evenNum);
    }
  }
}
inputN(10);

// Question 3 *****************************
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// let inputWord = "try";
let letterY = "y";
function inputWord(w) {
  if (w.match(letterY)) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
inputWord("I'm learning coding.");

// Teacher's solution -------------------------
function printYes(str) {
  let exists = false; // This flag value tells us if y exists or not

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "y") {
      exists = true;
      break;
    }
  }
  if (exists == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
printYes("crayzy");

// Second solution -------------------------------------
// function printYes(str) {
//     // for (let i = 0; i < str.length; i++) {

//         if (str.includes('y')) {
//             console.log('Yes');
//         }
//     // }
// } --> THIS LOGIC IS SIMILAR TO THE FOR LOOP WE WROTE ABOVE WITH BREAK KEYWORD

// // printYes("yellow");
// printYes('cryazy');

// Hiro's solution ----------------------------
function printY(str2) {
  if (str2.includes("y")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
printY("crayzy");

// Without Break
// c | str[0] == 'y' | No
// r | str[1] == 'y' | No
// a | str[2] == 'y' | No
// y | str[3] == 'y' | Yes
// z | str[4] == 'y' | No
// y | str[5] == 'y' | Yes

// With Break
// c | str[0] == 'y' | No
// r | str[1] == 'y' | No
// a | str[2] == 'y' | No
// y | str[3] == 'y' | Yes | console.log('Yes') | break the loop
// z
// y

/*Question 4 *****************************
Write a function which accepts 4 parameters (different scores of a student for subjects), and then calculate the average of all the score.
If the average is more than 90 , then console grade A
If the average is between 70 and 90 , then console grade B
If the average is between 50-70, then console grade C
Other wise console grade F
For the above question you can use If else block
So you can write
If ( condition ) {
}
Else if ( other condition) {
}
Else if (other condition) {
} else {
} */

//function studentScore(score1, score2, score3, score4){ }
// The Greater Solution

let sum = 0;
function studentScore(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  //console.log(sum);
  averageScore = sum / arr.length;

  if (averageScore > 90) {
    console.log("Average: " + averageScore + ", Grade: A");
  } else if (90 >= averageScore && averageScore > 70) {
    console.log("Average: " + averageScore + ", Grade: B");
  } else if (70 >= averageScore && averageScore > 50) {
    console.log("Average: " + averageScore + ", Grade: C");
  } else {
    console.log("Average: " + averageScore + ", Grade: F");
  }
}

studentScore([90, 90, 90, 90]);

/* Second Solution -----------------------------------------
let studentScore = [100, 100, 100, 100];
let sum = 0;
for (let i = 0; i < studentScore.length; i++) {
  sum = sum + studentScore[i];
}
//console.log(sum / studentScore.length);
averageScore = sum / studentScore.length;

if (averageScore > 90) {
  console.log("Average: " + averageScore + ", Grade: A");
} else if (90 >= averageScore && averageScore > 70) {
  console.log("Average: " + averageScore + ", Grade: B");
} else if (70 >= averageScore && averageScore > 50) {
  console.log("Average: " + averageScore + ", Grade: C");
} else {
  console.log("Average: " + averageScore + ", Grade: F");
}
*/

// Teacher's solution --------------------------------------
function gradeStudents(score1, score2, score3, score4) {
  let averageScore = (score1 + score2 + score3 + score4) / 4;
  console.log("Average Score:", averageScore);

  if (averageScore > 90) {
    console.log("Grade A");
  } else if (averageScore < 70 && averageScore <= 90) {
    console.log("Grade B");
  } else if (averageScore < 50 && averageScore <= 70) {
    console.log("Grade C");
  } else {
    console.log("Grade F");
  }
}
gradeStudents(80, 40, 60, 70);

// BODMAS (Top --> Bottom)
// B --> Bracketd
// O --> Orders / Powers
// D --> Division
// M --> Multiplication
// A --> Addition
// S --> Subtraction
