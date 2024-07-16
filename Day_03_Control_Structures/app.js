// Day 3: Control Structures
// Activity 1: If-Else Statements
// Task 1
let userInp = +prompt("Enter Number");
if (userInp > 0) {
  console.log(`The Number ${userInp} is Positive`);
} else if (userInp < 0) {
  console.log(`The Number ${userInp} is Negative`);
} else {
  console.log(`The Number ${userInp} is Zero`);
}
// Task 2
let userAge = +prompt("Enter Your Age For Check If you are eligble for Vote");
if (userAge >= 18) {
  console.log(`You are Eligible for Vote`);
} else {
  console.log(`You are not Eligible for Vote`);
}

// Activity 2: Nested If-Else Statements
// Task 3
function findLargest(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(`The largest number is ${a}`);
    } else {
      console.log(`The largest number is ${c}`);
    }
  } else {
    if (b >= c) {
      console.log(`The largest number is ${b}`);
    } else {
      console.log(`The largest number is ${c}`);
    }
  }
}
// Test the function
// findLargest(3, 5, 2); // Output: The largest number is 5
// findLargest(12, 2, 8); // Output: The largest number is 12

// Activity 3: Switch Case
// Task 4
function checkDay(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day");
  }
}
// checkDay(1);
// checkDay(5);

// Task 5
// let score = +prompt("Enter your Score");
function checkGrade(score) {
  switch (true) {
    case score >= 70:
      return "A";
    case score >= 60:
      return "B";
    case score >= 50:
      return "C";
    case score >= 40:
      return "D";
    default:
      return "F";
  }
}
function logGrade(score) {
  const grade = checkGrade(score);
  console.log(`The grade for a score of ${score} is ${grade}`);
}
// logGrade(65); // Output: The grade for a score of 85 is B
// logGrade(85); // Output: The grade for a score of 85 is A
// logGrade(55); // Output: The grade for a score of 85 is C

// Activity 4: Conditional (Ternary) Operator
// Task 6
function checkEvenOdd(num) {
  const result = num % 2 === 0 ? "Even" : "Odd";
  console.log(`The number ${num} is ${result}`);
}
checkEvenOdd(10); // Output: The number 10 is Even
checkEvenOdd(7); // Output: The number 7 is Odd
checkEvenOdd(22); // Output: The number 22 is Even
checkEvenOdd(15); // Output: The number 15 is Odd
