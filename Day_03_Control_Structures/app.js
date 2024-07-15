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
