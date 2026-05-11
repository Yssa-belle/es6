// =======================================
// ES6 DESTRUCTURING LAB
// =======================================

console.log("===== ARRAY DESTRUCTURING =====");


// Array Example
const colors = ["Red", "Green", "Blue", "Yellow"];


// Basic destructuring
const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue


// Skipping elements
const [, , thirdColor, fourthColor] = colors;

console.log(thirdColor);  // Blue
console.log(fourthColor); // Yellow


// Default values
const numbers = [10];

const [a = 1, b = 2] = numbers;

console.log(a); // 10
console.log(b); // 2 (default)



console.log("\n===== OBJECT DESTRUCTURING =====");


// Object Example
const user = {
  name: "John",
  age: 25,
  city: "Manila",
  country: "Philippines"
};


// Basic destructuring
const { name, age } = user;

console.log(name);
console.log(age);


// Renaming variables
const { city: userCity, country: userCountry } = user;

console.log(userCity);
console.log(userCountry);


// Default values in object
const student = {
  studentName: "Alice"
};

const { studentName, grade = "A" } = student;

console.log(studentName);
console.log(grade);



console.log("\n===== NESTED DESTRUCTURING =====");


const employee = {
  id: 101,
  profile: {
    fullName: "Mark Lee",
    position: "Developer"
  }
};


// Nested destructuring
const {
  profile: { fullName, position }
} = employee;

console.log(fullName);
console.log(position);



console.log("\n===== DESTRUCTURING IN FUNCTIONS =====");


// Function with object destructuring
function displayUser({ name, age, city }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
}


const userInfo = {
  name: "Sarah",
  age: 22,
  city: "Cebu"
};

displayUser(userInfo);


// Function with array destructuring
function showNumbers([x, y, z]) {
  console.log("X:", x);
  console.log("Y:", y);
  console.log("Z:", z);
}

showNumbers([5, 10, 15]);



console.log("\n===== LAB COMPLETED =====");