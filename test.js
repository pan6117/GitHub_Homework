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
