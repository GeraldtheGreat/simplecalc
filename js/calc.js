// var total= 0;
//
// document.getElementById("add").onclick= plus;
// document.getElementById("sub").onclick= minus;
// document.getElementById("mul").onclick= multiply;
// document.getElementById("div").onclick= divide;
//
// function plus (){
// var a = document.getElementById("a").value;
// a = parseFloat (a);
// var b = document.getElementById("b").value;
// b = parseFloat (b);
// total = b + a;
// document.getElementById("result").innerHTML = total;
// document.getElementById("a").value= "";
// document.getElementById("b").value= "";
// }
//
// function minus () {
//   var a = document.getElementById("a").value;
//   a = parseFloat (a);
//   var b = document.getElementById("b").value;
//   b = parseFloat (b);
//   total = a - b;
//   document.getElementById("result").innerHTML = total;
//   document.getElementById("a").value= "";
//   document.getElementById("b").value= "";
// }
//
// function multiply () {
//   var a = document.getElementById("a").value;
//   a = parseFloat (a);
//   var b = document.getElementById("b").value;
//   b = parseFloat (b);
//   total = a * b;
//   document.getElementById("result").innerHTML = total;
//   document.getElementById("a").value= "";
//   document.getElementById("b").value= "";
// }
//
// function divide () {
//   var a = document.getElementById("a").value;
//   a = parseFloat (a);
//   var b = document.getElementById("b").value;
//   b = parseFloat (b);
//   total = a / b;
//   document.getElementById("result").innerHTML = total;
//   document.getElementById("a").value= "";
//   document.getElementById("b").value= "";
// }




$(document).ready(function (){
var a= 0;
var b= 0 ;
var total= 0;
alert("enter numbers and click a button")
$("#add").on("click" , function(){
a=$("#a").val();
b=$("#b").val();
total = parseFloat(a)+ parseFloat(b);
$("#result").html(total);
$("#a").val("");
$("#b").val("");
});

$("#sub").on("click" , function(){
a=$("#a").val();
b=$("#b").val();
total = parseFloat(a)- parseFloat(b);
$("#result").html(total);
$("#a").val("");
$("#b").val("");
});

$("#mul").on("click" , function(){
a=$("#a").val();
b=$("#b").val();
total = parseFloat(a)* parseFloat(b);
$("#result").html(total);
$("#a").val("");
$("#b").val("");
});

$("#div").on("click" , function(){
a=$("#a").val();
b=$("#b").val();
total = parseFloat(a)/ parseFloat(b);
$("#result").html(total);
$("#a").val("");
$("#b").val("");
});

});
