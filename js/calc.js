"use strict";
console.clear();
console.log("Begin:", document.title);

let formInputStr = ''; //Set initial
// let formInputArr = []; //Set initial

function updateDisplay (str,updType) {
  if ( updType === "append") {
    document.querySelector('#display').innerHTML += str;
  } else { //updType != "append"
    document.querySelector('#display').innerHTML = str;
  }
  return true;
}

//Init Display
updateDisplay(0,"replace");

function onNumClick(id) {
  if (formInputStr.length === 0) {
    updateDisplay('',"replace");
  }
  let numStr = id;
  formInputStr += numStr;
  updateDisplay(numStr, "append");
}

function onOpClick(id) {
  let opStr = ' ' + id + ' ';
  formInputStr +=  opStr;
  updateDisplay(opStr, "append");
}

function switchPosNeg(id) {
  let inputArr = formInputStr.split(' ');
  let lastItem = inputArr.length - 1;

  let numStr = Number(inputArr[inputArr.length-1]);

  numStr *= -1;

  inputArr[inputArr.length-1] = numStr;
  formInputStr = inputArr.join(' ');

  // Add extra space at end of string for
  updateDisplay(formInputStr, "replace");
}

function onEquals() {
  let inputArr = formInputStr.split(' ');
  formInputStr = ''; // Reset for next calc
  let n1 = Number(inputArr[0]);
  let n2 = Number(inputArr[2]);
  let op = inputArr[1];
  //calculator (num1, num2, cb)
  let result = calculator(n1,n2,op);
  updateDisplay(result, "replace");
}

function onClear () {
  let inputArr = formInputStr.split(' ');
  let itemToClear = inputArr.length - 1;
  inputArr.splice(itemToClear,1);
  // Add extra space at end of string for
  formInputStr = inputArr.join(' ') + ' ';
  updateDisplay(formInputStr, "replace");
}

function calculator (num1, num2, cb) {
  return window[cb](num1,num2);
};

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

function pct (num1, num2) {
  return num1 % num2;
};
