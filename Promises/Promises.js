// Promises 

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// First Principle: A Promise is a Placeholder

//  Promise Characteristics:

// 1. A Promise is an object - You can store it in a variable
// 2. Represents future value - The value isn't available yet, but will be
// 3. Has states - It changes state over time
// 4. One-time use - Once settled, it never changes

// State of promise (First principal)

// A promise can be one of the three state at a time

// ┌─────────────────────────────────────────┐
// │           PROMISE STATES                │
// └─────────────────────────────────────────┘

// 1. PENDING (Initial state)
//    ↓
//    "I'm working on it..."
//    ↓
//    ├── Success → 2. FULFILLED (Resolved)
//    │             "I got the result!"
//    │
//    └── Failure → 3. REJECTED
//                  "Something went wrong!"

// Once FULFILLED or REJECTED, the promise is SETTLED (final)


// Example 


// create a promise 


const p1 = fetch("https://api.github.com/users");

// fullfileed , rejected 

const p2 = p1.then((response) =>{
    return response.json();
})

p2.then((response)=>{
    console.log(response);
})

// Promise Chaining ( better way to create promise )

fetch("https://api.github.com/users")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data); 
    })


    //  JSON (JavaScript object notation)
    // JSON stands for JavaScript Object Notation. It is a lightweight text format used to store and exchange data between systems, applications, and APIs.

    // Example

//    const jsonFormat = ` {
//   "id": 101,
//   "product": "Laptop",
//   "price": 999.99,
//   "inStock": true
// }`


// Covesrtion to JSON

const ji = {
    name : "yash",
    age : 18,
    address : "Bhopal"
}
// Convert

const jsonFormat = JSON.stringify(j1);

// Every language can understand JSON

// Converstion of JSON to java object 

 const jsonFormat = ` {
   "id": 101,
   "product": "Laptop",
   "price": 999.99,
   "inStock": true
 }`

 // Convert 

 const jsObject = JSON.parse(jsonFormat);

 // Showing in ui 
 // Creation of promise 
 // Solving call back hell problem  

 


