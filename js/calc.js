"use strict";
console.clear();
console.log("Howdy! Welcome to Calc");

// let inputString = prompt("Enter ").split(' ');
// console.log("inputString: " + inputString);


function add (num1, num2) {
  return num1 + num2;
};

function subtract (num1, num2) {
  return num1 - num2;
};

function multiply (num1, num2) {
  return num1 * num2;
};

function divide (num1, num2) {
  return num1 / num2;
};

function mod (num1, num2) {
  return num1 % num2;
};

function calculator (num1, num2, cb) {
  return cb(num1,num2);
};

let n1 = 4;
let n2 = 9;
var addNums = calculator(n1, n2, add);
var subtractNums = calculator(n1, n2, subtract);
var multiplyNums = calculator(n1, n2, multiply);
var divideNums = calculator(n1, n2, divide);
var modulusNums = calculator(n1, n2, mod);


console.log("num1: " + n1 + ", num2: " + n2);
console.log("addNums: " + addNums);
console.log("subtractNums: " + subtractNums);
console.log("multiplyNums: " + multiplyNums);
console.log("divideNums: " + divideNums);
console.log("modulusNums: " + modulusNums);
