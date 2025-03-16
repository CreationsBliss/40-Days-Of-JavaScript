// Solution-1:
let number = 11;

if (number % 2 === 0) {
  console.log("Number", number, "is", "Even");
} else {
  console.log("Number", number, "is", "Odd");
}

// Solution-2:
let age = 17;

if (age >= 18) {
  console.log("You are eligible for driving license");
} else {
  console.log("You are NOT eligible for driving license");
}

// Solution-3:
let annualSalary = 12300 * 12;
let bonus = (annualSalary * 20) / 100;
let annualIncome = annualSalary + bonus;
console.log("Annual income", 177120, "rupees");

// Solution-4:
let color = "Green";

if (color === "Red") {
  console.log("STOP");
}

if (color === "Green") {
  console.log("GO");
}

// Solution-5:
const units = 3;
const day = 30;
const month = 12;
const unitCost = 150;

const electricityBillsPerMonth = day * units * unitCost;

console.log(electricityBillsPerMonth, "rupees");

const electricityBillsPerYear = day * units * unitCost * month;
const discount20Percent = (electricityBillsPerYear * 20) / 100;
const totalAnnualPayment = electricityBillsPerYear - discount20Percent;

console.log(totalAnnualPayment, "rupees");

// Solution-6:
const year = 2025;

const isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? year + " is leap year"
    : year + " is NOT leap year";

console.log(isLeapYear);

// Solution-7:
const p = 5;
const q = 23;
const r = 14;

if (p > q && p > r) {
  console.log(p, "is is Maximum number");
} else if (q > p && q > r) {
  console.log(q, "is is Maximum number");
} else {
  console.log(r, "is is Maximum number");
}

// Solution-7:
let count = 5;
count = count << 1;

console.log(count);
