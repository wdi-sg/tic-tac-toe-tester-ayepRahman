document.addEventListener('DOMContentLoaded', function() {

var body = document.body
var newInput = body.querySelector('input')

var firstValue = document.getElementById('firstNum').value

var optrValue = document.getElementById('operator').value

var secondValue = document.getElementById('secondNum').value

function calculate() {
var newFirstValue = /\d/.test(firstValue)
var newSecondValue = /\d/.test(secondValue)
var newOptrValue = /[+\/*-]/.test(optrValue)
console.log(newOptrValue)
if (newOptrValue === '+') {
  result = newFirstValue + newSecondValue
}
return




}


var newButton = document.getElementById("button")
newButton.addEventListener('click', calculate)


})
