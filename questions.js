//1. Write a JavaScript program to find the maximum number in an array.

//using reducer to find largest number in the given array
(() => {
  var arr = [6, 8, 3, 65, 987, 34, 87, 575];
  let largestNumber = arr.reduce((accumulator, nextNumber) => {
    return accumulator > nextNumber ? accumulator : nextNumber;
  });
  console.log(largestNumber);
  console.log(Math.max(...arr));
})();

//using Math.max to find largest number in the given array

//2. Given a string, reverse each word in the sentence
// "Welcome to this Javascript Guide!" should become 'emocleW ot siht tpircsavaJ !ediuG'
(() => {
  let str = "Welcome to this Javascript Guide!";
  let arr = str.split(" ");
  let rev = [];
  arr.forEach((ele) => {
    rev.push(ele.split("").reverse().join(""));
  });
  str = rev.join(" ");
  console.log(str);
})();

// 3. How to empty an array in JavaScript?
(() => {
  //1. this method will create a new array.
  {
    let arr = [1, 2, 3];
    anotherArr = arr;
    arr = [];
    console.log(arr); // []
    console.log(anotherArr); // [1,2,3]
  }
  //2. using length
  {
    let arr = [1, 2, 3];
    anotherArr = arr;
    arr.length = 0;
    console.log(arr); // []
    console.log(anotherArr); // []
  }
  //3. using pop
  {
    let arr = [1, 2, 3];
    anotherArr = arr;
    while (arr.length) {
      arr.pop();
    }
    console.log(arr); // []
    console.log(anotherArr); // []
  }
  //4. using splice
  {
    let arr = [1, 2, 3];
    anotherArr = arr;
    arr.splice(0, arr.length);
    console.log(arr); // []
    console.log(anotherArr); // []
  }
})();

//4. Make this work.
// duplicate([1,2,3]); //[1,2,3,1,2,3]
{
  function duplicate(arr) {
    return arr.concat(arr);
  }
  duplicate([1, 2, 3]);
}

/**
 * Which is Better?
Use the block approach ({ ... }) if:
  The code will be run multiple times, or you’re not concerned with immediate cleanup.
  You want simplicity and readability.
  There's no risk of polluting the global scope (e.g., you’re inside a module).
 
Use the IIFE approach ((() => { ... })()) if:
  You need the code to execute once and discard everything afterward (e.g., initialization logic or one-off utility execution).
  You're concerned with keeping the global scope completely clean.
  You prefer encapsulation for better garbage collection and cleanup
 * 
 */

// 5. Write a "mul" function which will properly when invoked as below syntax
/**
 * console.log(mul(2)(3)(4)); //24
 * console.log(mul(4)(3)(4)); //48
 */
{
  function mul(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  console.log(mul(2)(3)(4)); //24
  console.log(mul(4)(3)(4)); //48
}
// 6. Write a function that would allow you to do this?
/**
 *  var addSix = createBase(6);
 *  addSix(10); //16
 *  addSix(21); //27
 */

{
  var addSix = createBase(6);
  function createBase(base) {
    return (num) => {
      return console.log(base + num);
    };
  }
  addSix(10); //16
  addSix(21); //27
}

// 6. FizzBuzz Challenge:
// Create a for loop that iterates up to 100 while outputting "fizz"
// at multiples of 3,"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

{
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(i + " fizzbuzz");
    } else if (i % 3 === 0) {
      console.log(i + " fizz");
    } else if (i % 5 === 0) {
      console.log(i + " buzz");
    }
  }
}

// 7. Given two strings, return true if they are anagrams of one another
//  ex. Mary is an anagram of Army

{
  myApproach: {
    let a = "Mary",
      b = "Army";
    let isAnagrams = true;
    const arrA = a.toLowerCase().split(""),
      arrB = b.toLowerCase().split("");
    function checkAnagram() {
      if (arrA.length === arrB.length) {
        arrA.forEach((el) => {
          if (isAnagrams) {
            isAnagrams = arrB.includes(el);
          }
        });
      } else isAnagrams = false;
      return isAnagrams;
    }
    console.log("isAnagrams: ", checkAnagram());
  }
  bestApproach: {
    let a = "Mary",
      b = "Army";
    const arrA = a.toLowerCase().split(""),
      arrB = b.toLowerCase().split("");
    function checkAnagram() {
      return arrA.sort().join("") === arrB.sort().join("");
    }
    console.log("isAnagrams: ", checkAnagram());
  }
}

// 8. How would you use a closure to create a private counter?

// 9. Provide some examples of non-bulean value coercion to a boolean one
// The question is when a non-boolean value is coerced to a boolean, does it become
/**
 * The specific list of "falsy" values in JavaScript is as follows:
 * ""
 * 0, -0, NaN
 * null, undefined
 * false
 *
 * Any value that's not on this "falsy" list is "truthy." Here are some examples of those:
 * "hello"
 * 42
 * true
 * [], [1,2,3]
 * {}, {a:42}
 * function fun(){}
 */

// 9. what will be the output of following code
{
  var y = 1;
  if (function f() {}) {
    y += typeof f;
  }
  console.log(y);
}

// 10. what is the output?
(function () {
  var a = (b = 5); // In non-strict mode, assigning a value to an undeclared variable (like b = 5) creates it as a global variable.
})();
console.log(b);

// 11. how does the "this" keyword work in JS? Provide some code examples?
// https://chatgpt.com/share/6778063b-f6c0-8010-a62a-3b09ed0abaf4

// 12. How would you create a private variable in JavaScript?
// https://chatgpt.com/share/67780c42-580c-8010-9776-d87053735581

// 13. What is Closures in JavaScript? Provide an example

{
  function greet(params) {
    return () => {
      console.log(params);
    };
  }
  greet(6)();
}
/*
 * In JavaScript, closure is a feature that allows a function to "remember" the scope in which it was created,
 * even after that scope has finished executing. A closure is created when a function is defined inside another function
 * and the inner function retains access to the outer function's variables.
 * Closures are often used for:
 *    Data hiding (encapsulation)
 *    Maintaining state
 *    Creating private variables
 */

// 14. What will be the output

{
  var output = (function (x) {
    delete x;
    return x;
  })(0);
  console.log(output);
}
/**
 Above code will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object.
 Its local variable. delete operator doesn't affect on local variable.
 */

// 15. What will be the output
{
  var employee = {
    company: "xyz",
  };
  var emp1 = Object.create(employee);
  delete emp1.company;
  console.log(emp1.company);
}
/**
 Above code will output xyz as output. Here emp1 object got company as prototype property. 
 delete operator doesn't delete prototype property. emp1 object doesn't have company as its own property. 
 However, we can delete company property directly from Employee object using delete Employee.company or we 
 can also delete from emp1 object using __proto___ property delete emp1._proto.company.
 */

// 16. What will be the output
{
  console.log(0.1 + 0.2 === 0.3);
}
/**
 This will surprisingly output false because of floating point errors in internally representing certain numbers. 
 0.1 + 0.2 does not nicely come out to 0.3 but instead the result is actually 0.30000000000000004 because the computer 
 cannot internally represent  the correct number. One solution to get around this problem is to round the results when 
 doing arithmetic with decimal numbers.
 */
