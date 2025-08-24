function Add(){
let num1=parseFloat(document.getElementById("num1").value);
let num2=parseFloat(document.getElementById("num2").value);
let result=num1+num2;
document.getElementById("resultBox").innerText="Result : " + result;
}
function Subtract(){
let num1=parseFloat(document.getElementById("num1").value);
let num2=parseFloat(document.getElementById("num2").value);
let result=num1-num2;
document.getElementById("resultBox").innerText="Result : " + result;
}
function Devide(){
let num1=parseFloat(document.getElementById("num1").value);
let num2=parseFloat(document.getElementById("num2").value);
let result=num1/num2;
document.getElementById("resultBox").innerText="Result : " + result;
}
function multiplyNum(){
let num1=parseFloat(document.getElementById("num1").value);
let num2=parseFloat(document.getElementById("num2").value);
let result=num1 * num2;
document.getElementById("resultBox").innerText="Result : " + result;
}