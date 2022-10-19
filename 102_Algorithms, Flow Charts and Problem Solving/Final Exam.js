// Code 1 *****************************************
// Write a function that takes as input an array and calculates the sum of its elements.
// Your function should also handle negative values.

let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1, 110, 1, 1, 0];
function sumArray(values) {
  let sum = 0;
  for (i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}
console.log(sumArray(input1));
console.log(sumArray(input2));

// Code 2 *****************************************
// Write a function that takes in a string and returns a new string.
// The new string should be the same as the original with every duplicate character removed.

/*function removeDupes(str) {
  // If there is any duplicate i can return value
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      newStr += str[i];
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
console.log(removeDupes("abababcdcdcd"));*/

function removeDupes(str) {
  let newString = "";
  for (i = 0; i < str.length; i++) {
    if (newString.indexOf(str[i]) == -1) {
      newString += str[i];
    }
  }
  return newString;
}

console.log(removeDupes("abcd"));
console.log(removeDupes("aabbccdd"));
console.log(removeDupes("abcddbca"));
console.log(removeDupes("abababcdcdcd"));

// Code 3 ******************************************
// Write a recursive function called 'productOfArray'
// which takes in an array of numbers and returns the product of them all.

// productOfArray([1, 2, 3]);
//productOfArray([1, 2, 3, 10]);
//let array = [1, 2, 3, 10];
function productOfArray(array, i) {
  if (i < 0) {
    return 1;
  }
  return array[i] * productOfArray(array, i - 1);
}
// array[2] * f(array, 2-1)
//                array[1] * f(array, 1-1)
//                                1

console.log(productOfArray([1, 2, 3], 2));
console.log(productOfArray([1, 2, 3, 10], 3));

// Code 4 *****************************************
// Write a recursive function called 'reverse'
// which accepts a string and returns a new string in reverse.

//let str2 = "awesome";
function reverse(str) {
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str[0];
  // wesome + a
  // esome + w + a
  // some + e + w + a
  // ...
}
//console.log(reverse(str2));
console.log(reverse("awesome"));

// Code 5 ***************************************
// Write a recursive function called 'isPalindrome'
// which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str, i, j) {
  if (i == j) {
    return true;
  }
  if (str[i] != str[j]) {
    return false;
  }
  if (i < j + 1) {
    return isPalindrome(str, i + 1, j - 1);
  }
  return true;
}

//let str = "tacocat";
//let str = "awesome";
//console.log(isPalindrome(str, 0, str.length - 1));
console.log(isPalindrome("awesome", 0, "awesome".length - 1));
console.log(isPalindrome("foobar", 0, "foobar".length - 1));
console.log(isPalindrome("tacocat", 0, "tacocat".length - 1));
console.log(
  isPalindrome("amanaplanacanalpanama", 0, "amanaplanacanalpanama".length - 1)
);
console.log(
  isPalindrome(
    "amanaplanacanalpandemonium",
    0,
    "amanaplanacanalpandemonium".length - 1
  )
);

// Code 6 ******************************************
// How to swap 2 variables without a temporary variable?

let a = 1;
let b = 2;

a = a * b;
//console.log(a);
b = a / b;
//console.log(a, b);
a = a / b;
console.log(a, b);

// Code 7
// A prime number is a positive integer that is only divisible by 1 and itself.
// For example, 2, 3, 5, 7, 11 are the first few prime numbers.
// Count the number of prime numbers less than a non-negative number, n

function countPrimes(n) {}

countPrimes(100);

/*def isPrime(number):
    if number == 1:
        return False
    for i in range(2, number//2 + 1): # for(i = 2; i < number; i++)
        if (number % i == 0):   # 26 %  1-5 小*大
            return False
    return True

def number_of_prime(number):
    sum = 0
    for i in range(2, number + 1): # for(i = 2; i <= number; i++)
        if(isPrime(i)):
            print(i)
            sum += 1
    return sum
print(number_of_prime(13))*/
