// Day 2: Operators
// Activity 1: Arithmetic Operations
// Task 1
let num1 = 10;
let num2 = 20;
let result1 = num1 + num2;
console.log(result1); // 30
// Task 2
let num3 = 30;
let num4 = 20;
let result2 = num3 - num4;
console.log(result2); // 10
// Task 3
let num5 = 5;
let num6 = 10;
let result3 = num5 * num6;
console.log(result3); // 50
// Task 4
let num7 = 10;
let num8 = 2;
let result4 = num7 / num8;
console.log(result4); // 5
// task 5
let a = 17;
let b = 5;
let remainder = a % b;
console.log(`The remainder when ${a} is divided by ${b} is ${remainder}`); // 2

// Activity 2: Assignment Operators
// Task 6
let x = 10;
x += 5;
console.log(x); // 15
// Task 7
let y = 10;
y -= 5;
console.log(y); // 5

// Activity 3: Comparison Operators
// Task 8
let z = 10;
let w = 20;
console.log(z < w); // true
let g = 20;
let h = 20;
console.log(g > h); // false

// Task 9
console.log(10 >= 10); // True
console.log(5 <= 5); // True

// Task 10
console.log(10 == 10); // True
console.log("5" == 5); // True // double Equal to Just Check Value
console.log(10 === 10); // True
console.log("10" === 10); // False // Triple Equal to Check Value and Data Type

//  Activity 4: Logical Operators
// Task 11
// And
console.log(10 > 5 && 5 < 10); // True
console.log(10 > 5 && 5 > 10); // False
// OR
console.log(10 > 5 || 5 < 10); // True
console.log(10 > 5 || 5 > 10); // True
// ! Not
console.log(!(10 > 5)); // False
