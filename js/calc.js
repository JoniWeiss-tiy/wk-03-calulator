"use strict";

console.clear();
console.log("Begin:", document.title);

let calc = (function() {

let formInputStr = ''; //Set initial

let buttonWatchers = (function() {

  var numArr = [].slice.call(
    document.getElementsByClassName('num')
  ).map((obj) => obj.id).sort();
  var opArr = [].slice.call(
    document.getElementsByClassName('op')
  ).map((obj) => obj.id).sort();

  numArr.forEach(function(val){
      var button = document.getElementById(val);
      button.onclick = onNumClick;
    });

  opArr.forEach(function(val){
      var button = document.getElementById(val);
      button.onclick = onOpClick;
    });
})();

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

function onNumClick() {
  if (formInputStr.length === 0) {
    updateDisplay('',"replace");
  }
  let numStr = this.id;
  formInputStr += numStr;
  updateDisplay(numStr, "append");
}

function onOpClick() {
  let opStr = ' ' + this.id + ' ';
  formInputStr +=  opStr;
  updateDisplay(opStr, "append");
}

function calcPct(id) {
  let inputArr = formInputStr.split(' ');
  let idx = inputArr.length - 1;

  let numStr = Number(inputArr[idx]);

  numStr /= 100;

  inputArr[idx] = numStr;
  formInputStr = inputArr.join(' ');

  // Add extra space at end of string for
  updateDisplay(formInputStr, "replace");
}

function switchPosNeg(id) {
  let inputArr = formInputStr.split(' ');
  let idx = inputArr.length - 1;

  let numStr = Number(inputArr[idx]);

  numStr *= -1;

  inputArr[idx] = numStr;
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
  console.log(n1, n2, op);
  //calculator (num1, num2, cb)
  let result = calculator(n1,n2,opSelector(op));
  updateDisplay(result, "replace");
}

function onClear () {
  let inputArr = formInputStr.split(' ');
  if (inputArr.length > 1) {
    inputArr.splice(inputArr.length-1,1);
    // Add extra space at end of string for
    formInputStr = inputArr.join(' ') + ' ';
  } else {
    formInputStr = '0'; // Reset for next calc
  }
  updateDisplay(formInputStr,"replace");
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

function calculator (num1, num2, cb) {
  return cb(num1,num2);
};

let op = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "mod": mod
}

const opSelector = (cb) => op[cb];

return {
  onNumClick: onNumClick,
  onOpClick: onOpClick,
  switchPosNeg: switchPosNeg,
  onEquals: onEquals,
  onClear: onClear,
  calcPct: calcPct
};

})();
