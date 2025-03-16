// Solution-1:
for (let i = 0; i < 1; i++) {
  let pattern = "";

  for (let j = 0; j <= 4; j++) {
    pattern = pattern + " " + "*";
    console.log(pattern);
  }
}

// Solution-2:
let n = 3;

for (let i = n; i <= n; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " " + "*" + " " + +j, "=" + " " + i * j);
  }
}

// Solution-3:
let sum = 0;
for (let number = 1; number <= 500; number = number + 2) {
  sum += number;
}
console.log("Sum of all odd numbers from 1 to 500:", sum);

// Solution-4:
for (let number = 1; number <= 20; number++) {
  if (number % 3 === 0) {
    continue;
  }
  console.log(number);
}

// Solution-5:
let number = 6789;
let numberInStringFormat = " " + number;
let lengthOfnumberInStringFormat = numberInStringFormat.length;
let result = "";

while (lengthOfnumberInStringFormat > 0) {
  let digit = numberInStringFormat.charAt(lengthOfnumberInStringFormat);
  result += digit;

  lengthOfnumberInStringFormat--;
}

console.log(result);

// Solution-6:
/* 
 I understood the definition of loops.
*/
