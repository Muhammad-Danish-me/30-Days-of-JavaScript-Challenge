// Day 1 Variables and Data Types
// Activity 1: Variable Declaration
// Task 1
var num = 10;
console.log(num);

// Task 2
let str = "Hello world";
console.log(str);

// Activity 2 Constant Declaration
// Task 3
const isLogin = false;
console.log(isLogin);

// Activity 3 Data types
// Task 4
let str1 = "Hello";
console.log(typeof str1);
let num1 = 20;
console.log(typeof num1);
let isAvailable = true;
console.log(typeof isAvailable);
let obj = {
  name: "John",
  age: 30,
};
console.log(typeof obj);
let Days = ["Monday", "Tuesday", "Wednesday"];
console.log(typeof Days);

// Activity 4 Reassigning Variables
// Task 5
let x = 10;
x = 20;
console.log(x); // output 20

// Activity 5 Understanding Const
// Task 6
const a = 5;
//const a = 10 // error, "a" has already been declared
a = 10;
console.log(a); // error, Assignment to constant variable.
