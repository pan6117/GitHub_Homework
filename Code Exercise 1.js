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

//function studentScore(score1, score2, score3, score40{ }

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
