// Solution-1:
// Output will be "It's a normal day" because JavaScript is a case sensitive language that is why Monday is not equal to monday.

// Solution-2:
const withdrawalAmount = 101000;

if (withdrawalAmount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// Solution-3:
const inputOperator = "*";
const a = 5;
const b = 10;

switch (inputOperator) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  case "%":
    console.log(a % b);
    break;

  default:
    console.log("Invalid Operator");
}

// Solution-4:
const ticketPriceForChildren = "$3";
const ticketPriceForAdults = "$10";
const ticketPriceForSeniors = "$8";
const age = 61;

if (age < 18) {
  console.log(ticketPriceForChildren);
} else if (age >= 18 && age <= 60) {
  console.log(ticketPriceForAdults);
} else {
  console.log(ticketPriceForSeniors);
}

// Solution-5:
const personBirthMonth = "April";

switch (personBirthMonth) {
  case "March":
  case "April":
    console.log("Aries");
    break;

  case "April":
  case "May":
    console.log("Taurus");
    break;

  case "May":
  case "June":
    console.log("Gemini");
    break;

  default:
    console.log("Did not match the month");
}

// Solution-6:
const firstSide = 3;
const secondSide = 5;
const thirdSide = 3;

if (firstSide === secondSide && firstSide === thirdSide) {
  console.log("Equilateral Triangle");
} else if (
  firstSide === secondSide ||
  firstSide === thirdSide ||
  secondSide === thirdSide
) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
