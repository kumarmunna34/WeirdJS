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

function a() {
  function b() {
    console.log(myVar);
  }
  var myVar = 2;
  b();
}
var myVar = 1;
a();

//ES6 Block scoping
// Q. what is the output?

if (6 > 5) {
  console.log(a);
  console.log(b);
  var a = true;
  let b = true; // block scope applies to let not var
}
