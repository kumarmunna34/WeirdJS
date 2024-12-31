// function B() {
//   var myVar;
//   console.log(myVar);
// }
// function A() {
//   var myVar = 2;
//   console.log(myVar);
//   B();
// }
// var myVar = 1;
// console.log(myVar);
// A();

//Scope Chain

// function a() {
//   function b() {
//     console.log(myVar);
//   }
//   var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();

//ES6 Block scoping
// Q. what is the output?

// if (6 > 5) {
//   console.log(a);
//   console.log(b);
//   var a = true;
//   let b = true; // block scope applies to let not var
// }

//Existence and booleans
var a;
// a=null;
// a="";
if (a) {
  console.log("something is there");
}
function greet(name) {
  name = name || `<Your name here>`;
  console.log("Hello " + name);
}
greet("Munna");
greet();
// Output:
// Hello Munna
// Hello <Your name here>

//object creation

var person = new Object();
var person = {};
person["firstname"] = "Munna";
person["lastname"] = "kumar";
var firstnameProperty = "firstname";
console.log(person);
console.log(person[firstnameProperty]);
