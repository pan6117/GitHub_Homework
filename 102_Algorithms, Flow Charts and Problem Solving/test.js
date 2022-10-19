/*
function inputStars(num) {
  let stars = "";

  for (let i = 0; i < num; i++) {
    //for (let j = 0; j <= i; j++) {
    stars = stars + "*";
    console.log(stars);
    //}
    //stars = stars + "\n";
  }
}
inputStars(7);
*/

// let stars = "";

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     stars = stars + "*";
//   }
//   stars += "\n";
// }
// console.log(stars);

// let stars = "";
// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 5; j++) {
//     stars += "*";
//   }
//   stars += "\n";
// }
// console.log(stars);

let condition = 3;
let starts = "";

for (i = 0; i < 4; i++) {
  for (j = 0; j < 7; j++) {
    if (j == condition + i || j == condition - i || i == 3) {
      starts += "*";
    } else {
      starts += " ";
    }
  }
  starts += "\n";
}
console.log(starts);

// starts = ""
// condition = x / 2;
// for (i = 0; i < (x+1) / 2; i++){
//    for (j = 0; j < x; j++){
//       if (j == condition + i || j == condition - i || i == (x+1) / 2 - 1){
//           starts += "*";
//       } else{
//           starts += " ";
//       }
//    }
//    starts += "\n"
// }

// function inputStar2(num2) {
//   let star2 = "";
//   for (i = 0; i < num2 / 2; i++) {
//     for (j = 0; j <= i; j++) {
//       star2 = star2 + "*";
//     }
//     star2 = star2 + "\n";
//   }
//   for (i = num2 / 2 - 1; i > 0; i--) {
//     for (j = 0; j < i; j++) {
//       star2 = star2 + "*";
//     }
//     star2 = star2 + "\n";
//   }
//   console.log(star2);
// }
// inputStar2(9);

function largeNum(arr) {
  console.log(arr);
  //let large = -9999;
  let large = null;
  //let large = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  console.log(large);
}

largeNum([20, 30, 50, 40, 0, 10]);

function removeDupes(str) {
  // If there is any duplicate i can return value
  let newStr = "";
  for (i = 0; i < str.length - 1; i++) {
    for (j = 1; j < str.length; j++) {
      if (str[i] !== str[j]) {
        newStr = str[j];
      }
    }
  }
  return newStr;
  //console.log(newStr);
}
//let str = "abcd";
//let str = "aabbccdd";
//let str = "abcddbca";
//let str = "abababcdcdcd";

console.log(removeDupes("abcd"));
console.log(removeDupes("aabbccdd"));
console.log(removeDupes("abcddbca"));
console.log(removeDupes("abababcdcdcd"));
