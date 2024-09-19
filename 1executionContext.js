function B() {
  var myVar;
  console.log(myVar);
}
function A() {
  var myVar = 2;
  console.log(myVar);
  B();
}
var myVar = 1;
console.log(myVar);
A();
