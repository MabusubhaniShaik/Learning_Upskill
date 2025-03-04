// write a function that tells if a given number is even are odd

function checkNumber2(n) {
  return n % 2 === 0 ? "even" : "odd";
}
console.log(checkNumber2(-2));

//  write a function which can take the array of numbers need to find the smallest number in array

function findSmallNo(obj) {
  let smallNo = obj[0];
  for (let i = 0; i < obj.length; i++) {
    console.log(i, obj[i]);
    if (obj[i] < smallNo) {
      smallNo = obj[i];
    }
  }
  console.log(smallNo);
}
const obj = [50, 7, 2, 7887, -8, -2, 77];
findSmallNo(obj);

// Write a function that return the reverse string

function reverseString(str) {
  const reverse = str.split("").reverse().join("");
  console.log(reverse);
}

function reverseStr(str) {
  let rs = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i, str[i]);
    rs += str[i];
  }
  console.log(rs);
}
reverseStr("subhani");
reverseString("reverse_string");

function calFact(n) {
  if (n <= 0) return console.log("give the positive number");
  let fatct = 1;
  for (let i = 1; i <= n; i++) {
    console.log(i, n);
    fatct *= i;
  }
  console.log(fatct);
}
calFact(4);

// write a function that can tell leap year are not based on the input Year

function leapYear(yr) {
  if (yr !== Number && yr <= 0)
    return console.log("it is not a number & need the more then 0");
  if (yr % 4 === 0) {
    console.log("It is the leap year");
  } else {
    console.log("Not the  leap year");
  }
}

function leapyr(yr) {
  return yr % 2 === 0 ? "Leap Year" : "Not the Leap Year";
}
console.log(leapyr(2024));
leapYear(1);

function sumOfDig(num) {
  const number = num.toString().split("");
  let sum = 0;
  for (let digt of number) {
    console.log(digt);
    sum += parseInt(digt);
  }
  console.log(sum, number);
}
sumOfDig(656);
