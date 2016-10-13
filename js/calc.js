"use strict";
console.clear();
console.log("Howdy! Welcome to Calc");

let formInputStr = ''; //Set initial
let formInputArr = []; //Set initial

function updateDisplay (str,updType) {
  if ( updType === "append") {
    console.log("true");
    document.querySelector('#display').innerHTML += str;
  } else {
    console.log("false");
    document.querySelector('#display').innerHTML = str;
  }
  return true;
}

updateDisplay(0,"replace");

// function myOnClick(id) {
//   let inputStr;
//   let btnType;
//   switch (inputStr) {
//     case [0123456789].indexOf(inputStr):
//       btnType = num;
//       inputStr = id;
//       formInputStr += numStr;
//       if (typeof formInputArr[formInputArr.length-1] !== 'string') {
//         console.log("num: " formInputArr[formInputArr.length-1]);
//       }
//       console.log("onNumClick:",numStr,".");
//       break;
//     default:
//       btnType = operator;
//       inputStr = ' ' + id + ' ';
//       formInputStr +=  inputStr;
//       console.log("onOpClick:",inputStr,".");
//   }
//
//   if (formInputArr.length !== 0) {
//
//   } else { //Array is empty - load 1st element
//     formInputArr.push(inputStr);
//   }
//
// }

function onNumClick(id) {
  if (formInputStr.length === 0) {
    updateDisplay('',"replace");
  }
  let numStr = id;
  formInputStr += numStr;
  console.log("onNumClick:",numStr,".");
  updateDisplay(numStr, "append");
}

function onOpClick(id) {
  let opStr = ' ' + id + ' ';
  formInputStr +=  opStr;
  console.log("onOpClick:",opStr,".");
  updateDisplay(opStr, "append");
}

function onEquals() {
  let inputArr = formInputStr.split(' ');
  let n1 = parseFloat(inputArr[0]);
  let n2 = parseFloat(inputArr[2]);
  let op = inputArr[1];
  //calculator (num1, num2, cb)
  let result = calculator(n1,n2,op);
  console.log("n1: ", n1, " n2: ", n2, " op: ", op, "result:",result);
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

function calculator (num1, num2, cb) {
  return window[cb](num1,num2);
};
