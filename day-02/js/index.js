/* 
Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language. Open the DevTools Console (Right-click → Inspect → Console). 
*/

// Solution-1:
const name = "John";
let age = 23;
let isStudent = true;
let favoriteProgrammingLanguage = ["js", "react", "angular"];

/* 
Task 2: Print the values to the console. 
*/

// Solution-2:
console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteProgrammingLanguage);

/* 
Task 3: Try reassigning values to let and const variables and observe errors. 
*/

// Solution-3:
// name = "Alex";
age = 72;
console.log(name);
console.log(age);

/* 
Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
*/

// Solution-4:
const obj = {
  id: 101,
  department: "mentor",
  morningShift: true,
};

obj.id = 245;
console.log(obj);

const arr = [1, 2, 3];

arr[1] = 5;
console.log(arr);
