console.log("hello, world");

function addNumbs(numOne, numTwo){
  return numOne + numTwo;
}

var addResult = addNumbs(2,2);

function subtractNumbs(numOne, numTwo) {
  return numOne - numTwo;
}

var subtractResult = subtractNumbs(8,4);

function multiplyNumbs(numOne, numTwo) {
  return numOne * numTwo;
}

var multiplyResult = multiplyNumbs(2,2);

function divideNumbs(numOne, numTwo) {
  if (numTwo != 0) {
    return numOne / numTwo;
  } else {
    console.error("Cannot divide by 0...");
  }
}

var divideResult = divideNumbs(8,2);
var divideOtherResult = divideNumbs(8,0);


console.log(addResult,subtractResult,multiplyResult,divideResult,divideOtherResult);


function myFunc() {
  var a = 10;
  if(a > 5) {
    a = 15;
  }
  alert(a);
}

var x = 10;
var y = "10";
console.log(x+y);

function messageFriend(msg){
  return "You said: " + msg
}
messageFriend("Hello there!");

if (x == 11) {console.log("g");}

console.log(Math.max(23,9,0,199, 9.4, 10.00));
