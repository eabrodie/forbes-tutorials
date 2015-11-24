var gcd = require('gcd');

function gcdprocess() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = gcd(input1, input2);
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  //console.log(answer);
};


function addition() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 + input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  //console.log(answer);
};


function subtraction() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 - input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  //console.log(answer);
};

function multiplication() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 * input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  //console.log(answer);
};

function division() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 / input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  //console.log(answer);
};



window.onload = function() {
  var add = document.getElementById("add");
  add.addEventListener("click", addition, false);
  
  var minus = document.getElementById("minus");
  minus.addEventListener("click", subtraction, false);
  
  var multiply = document.getElementById("multiply");
  multiply.addEventListener("click", multiplication, false);
  
  var divide = document.getElementById("divide");
  divide.addEventListener("click", division, false);
  
  var gcdbutton = document.getElementById("gcd-button");
  gcdbutton.addEventListener("click", gcdprocess, false);
}