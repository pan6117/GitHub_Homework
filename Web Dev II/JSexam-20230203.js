// Javascript Test

// 1- What is ES6?
// Answer: ES6 stands for ECMAScript 6.
// ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

// 2- Name 3 examples of ES6 features which you learnt.
// Answer: 1) let and const
//         2) Arrow Function
//         3) Destructuring Object

// 3- What is the difference between let and const?
// Answer: let => "let" can be updated but not redeclared
//         const => "const" can neither be updated nor redeclared

// 4- How do you access object values? Give 3 examples
// Answer:
let movies = {
  name: "The hunger games",
  year: 2008,
};

// 1)
console.log(movies.name);
// 2)
console.log(movies["year"]);

// 3)
let { name, year } = movies;
console.log(name, year);

// 5- What does setInterval and setTimeout do?
// Answer: setInterval => Periodic timer. It sets how long to call the callback function, if no termination condition is set, it will always be called periodically.
//         setTimeout => It calls the callback function after setting how long it takes, and then it ends.

// What will be the output of the following ?

//# FIRST
// Answer:
// 5
// 5
// 5
// 5
// 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//# SECOND
// Answer:
// 0
// 1
// 2
// 3
// 4
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// 6- What are promises?
// Answer: Promise is an object representing the eventual completion or failure of an asynchronous operation.
//         It allows you to write asynchronous code in a way that looks and behaves like synchronous code.
//         Promise has three states
//         1. Fulfilled State - Success State
//         2. Rejected State - Failuare/Reject State
//         3. Pending State - Waiting for response

// 7- Convert this async function to async/await
// getQuote()
//   .then((quote) => {
//     console.log(quote);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// after this line,
async function quote() {
  try {
    let quote = await getQuote();
    console.log(quote);
  } catch (error) {
    console.log(error);
  }
}

// 8- Convert this code to arrow function.
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,
// Answer:
const greetingToArrowFunction = (firstname, lastname) =>
  `Hello ${firstname} ${lastname}`;

// 9- Explain what a callback function is.
// Answer: A callback function is a function that can pass an argument to another function.
// It's called from within an external function to do something.

// 10- What does the functions pop and push do to an array? And what do they return ?
// Answer: pop() => To remove the end of the element from an array, the length of the array is reduced by one after the pop operation.
//                  To return the index value of the removed element.
//         push() => To add one or more values to an array.
//                   When calling the variable executed by this method, the new array length after execution (the value of the length property) will be returned.

// 11- What is the expected answer to this code?
// Answer: 123
// "" + 1 + "" + 2 + "" + 3
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);

// 12- What data type would Array.map() and Array.filter() return?
// Answer: Array.map() => To apply a function to each element of an array and return a new array with the results.
//                        It takes a callback function as its first argument, which is applied to each element of the array, and an optional second argument, which is the this value for the callback function.
//         Array.filter() => To filter an array based on a given condition and return a new array with the elements that pass the condition.
//                           It takes a callback function as its first argument, which is applied to each element of the array, and an optional second argument, which is the this value for the callback function. The callback function should return a boolean value, indicating whether the element should be included in the new array (true) or not (false).

// Additionally what will be the output of this ?
// Answer: [ 1, 2, 3, 4, 10 ]
//         Because 0 is false.
let array = [1, 2, 3, 0, 4, 10, 0];
let output = array.filter((item) => item);

// 13- What data type would Array.includes() and Array.some() return?
// Answer: Both of them return a boolean value

// 14- Write down the 4 main methods of rest api
// Answer: 1) GET
//         2) POST
//         3) PUT
//         4) DELETE

// 15- What is the difference between JSON and a JavaScript object?
// Answer: The difference between json and javascript objects is:
//         the text of JS arguments is directly parsed by the script engine, while the text of JSON, if it is to be converted into a JS object, is handed over to the eval function for processing.

// 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.
// https://www.boredapi.com/api/activity
// The above API returns what to do when you are bored.
// Answer:
fetch("https://www.boredapi.com/api/activity")
  .then((response) => {
    return response.json();
  })
  .then((finalOutput) => {
    console.log(finalOutput);
  });

async function bored() {
  try {
    let link = await fetch("https://www.boredapi.com/api/activity");
    let answer = await link.json();
    console.log(answer);
  } catch (error) {
    console.log(error);
  }
}
