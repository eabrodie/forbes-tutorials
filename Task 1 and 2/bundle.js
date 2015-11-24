(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"gcd":2}],2:[function(require,module,exports){
module.exports = function gcd (a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
};

},{}]},{},[1]);
