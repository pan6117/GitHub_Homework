// Q: Use the setInterval() function to log "Hello, World!" to the console after every 6 seconds, and then use the clearInterval() function to stop the interval.
function helloWorld() {
  console.log("Hello World!");
}

let repeatSixSeconds = setInterval(helloWorld, 6000);
setTimeout(() => {
  clearInterval(repeatSixSeconds);
}, 12005); // let the function of repeatSixSeconds runs two times.

// Use the find function to locate the first element in an array that satisfies a certain condition.
// Find that object whose age is 40
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 },
];

let findOver40 = objectArr.find(function (item) {
  return item.age > 40;
});

console.log(findOver40);

// Use the some function to determine if any elements in an array satisfy a certain condition.
// Use some function to check if any of the string has a length more than 5
let stringArr = ["hello", "world", "this", "is", "a", "string"];

let findOver5Letter = stringArr.find(function (item) {
  return item.length > 5;
});

console.log(findOver5Letter);

// Use the reduce function to count the total number of characters in all strings for the above array.
let countLetterNumber = stringArr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.length;
}, 0);

console.log(countLetterNumber);

// Use the reduce function to concatenate all elements in an array into a single string. Use above example ,
("Hello world this is a string");

let concatenateElements = stringArr.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + " " + currentValue;
});

console.log(concatenateElements);
