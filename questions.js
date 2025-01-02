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
