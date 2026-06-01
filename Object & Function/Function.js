// Creation of function in javaScript 

function greeting(){ // Here greeting is the name of function 
    console.log("18yo! Insane guy");
}

// Call of function 
greeting();

//  Why Function is Created?

//  Function is created so that we dont have to write one code multiply type it inhances the code reusability.

//  Creating Function for adding 2Number 

function sumOfTwoNum(num1 , num2 , num3 = 0, num4 = 0){
    const sum = num1 + num2 + num3 + num4;
    console.log(sum);
}
sumOfTwoNum(3,4);
//  What if here is more than 4 number to be sumed of? That's the major issue here.. For solving it comes Rest operator..

//  Rest Operator 
// rest operator puts down th evalue inside an array... It is similar to spread operator in syntax as it is also using  "..." But there is Difference between them.

function addNum(...num){
    let sum = 0;

    for(let i = 0; i <num.length; i++){
        sum += num[i];
    }
    console.log(sum);
    
}

addNum(1,2,3,4,5,6);

//  Spread operator and Rest operator are one of the most used operators.

//  Diff b/w Spread operator and rest oper

//  Rest — collect into array

function add(...nums) {   // nums = [1, 2, 3]
    console.log(nums);
}
add(1, 2, 3);

//  Spread — expand from array
 
let nums = [1, 2, 3];
console.log(...nums);     // prints 1 2 3 separately


// Another way of creating Function : Expression 

const addNumb = function(num1,num2){
    return num1+num2;
}
console.log(addNumb(12,33));


//  Arrow function 

const addNumbe = (num1,num2) =>{
    return num1 + num2;
}
console.log(addNumbe(10+ 8));

// Advantage

const addNumber = (num1,num2) => num1 + num1; // Agar direct print karana hai tho curly brace and return ko hata shkte.

// Also Arrow function is used in sorting of array 

let arr = [1,2,33,45,56,61];
arr.sort((a,b) => a-b);

const sqNum = num => num * num ;

// Agar 1 parameter ho tho bracket () bhi remove kar shkte..
console.log(sqNum(8));

//  IIFE  :  Immediately Invoked Function Expression

// A function that defines and runs itself at the same time.

(function greeting(){
    console.log("Crazyy");
})();

//  (function() { ... }) → wraps the function in () to make it an expression
//  () at the end → calls it immediately

//  CallBack Function 


// Callback = A function passed as an argument to another function, and called inside it.

function greet(){
    console.log("hello");
}

function meet(){
    console.log("I am going to meet my old Friend tmrow");
}

meet(greet());

//  Another example 

function greet(name, callback) {
    console.log("Hello " + name);
    callback();   // calling the passed function
}

function done() {
    console.log("Greeting done!");
}

greet("Yash", done);

// Output 

// Hello Yash
// Greeting done!

