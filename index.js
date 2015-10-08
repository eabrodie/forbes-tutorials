/*function addition() {
  var input1 = document.getElementById(input1).value;
  var input2 = parseFloat(document.getElementById(input2).);
  var answer = input1 + input2;
  var result = document.getElementById(result);
  //result.firstChild.nodeValue = answer;
  console.log(input2);
};*/

// Function to add event listener to table
//var add = document.getElementById("add");
//add.addEventListener("click", function(){alert()}, false);

/*    <button name="minus" type="button" id="minus">-</button>
    <button name="multiply" type="button" id="multiply">*</button>
    <button name="divide" type="button" id="divide">/</button>*/


function addition() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 + input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  console.log(answer);
};


function subtraction() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 - input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  console.log(answer);
};

function multiplication() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 * input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  console.log(answer);
};

function division() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var answer = input1 / input2;
  var result = document.getElementById('result');
  result.firstChild.nodeValue = answer;
  console.log(answer);
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
}