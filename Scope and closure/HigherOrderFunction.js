//  Higher order Function in js 

// **A higher-order function is a function that either:**

// 1. **Takes a function as an argument**, OR
// 2. **Returns a function as a result**

// That's it!

// Why "Higher-Order"?

// Think of it like hierarchy:

// - **Regular values**: numbers, strings, booleans
// - **First-order functions**: functions that work with regular values
// - **Higher-order functions**: functions that work with other functions

// In JavaScript, functions are **first-class citizens** - they can be treated like any other value (passed around, returned, stored in variables).


// Type 1 : Function that take functiom as Argument 

//  Example 1 : Array Method 

const numbers = [1, 2, 3, 4, 5];

// map is a higher-order function// It takes a function as an argument
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]


// Why is map higher-order? Because it accepts a function (function(num) { return num * 2 }) as a parameter.


//  Example 2 : Custum Higer-Order Function 

// repeat is a higher-order function
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Using it:
repeat(3, function(i) {
  console.log("Iteration " + i);
});

// Output:// Iteration 0// Iteration 1// Iteration 2