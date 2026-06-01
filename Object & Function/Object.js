// Object : Createing an Object
// CRUD operation : Create read update delete

// keyValue 

//Keys : string || Symbol

// Create
const user = {
    name : "Yash", // Here name is key and "Yash" is value
    age : 18, // age is Key 18 is Value
    email : "Yashsahu10th@gmail.com", // email key....
    account : 0 // account key 
}

// Read

console.log(user);
console.log(typeof user);

console.log(user.age); // accesing different key

// Add

user.aadhar = 12345;

// Update

user.amount = "Zero"
console.log(user);

// Delete

delete user.email;

// Accesing differnt element 

console.log(user.age);
console.log(user["name"]);

console.log(Object.keys(user));
console.log(Object.values(user));

// Loop in objects

for(let keys in user){
    console.log(keys , user[keys]);   // Not reccomended
}
 // Different ways of accesing 

let user2 = {
    name = "ash",
    age = 10,
    Pokemon = "Pikachu",
    Badge = 8
}

const name = user2.name;
const age = user2.age;
// console.log(name,age);


// Object ko destructure

const{name:userName ,age:userAge,Badge} = user;
console.log(userName,userAge,Badge);

//  Destructure of array

const arr = [1,23,4,5,6,7];
const[first,second] = arr;
console.log(arr); // Output : 1 , 2

// for of loop of array

const temparr = Object.keys(user);
console.log(temparr);

for(let keys of temparr){
    console.log(keys);
}

for(let values of Object.entries(user)){
    console.log(values);
}

for(let [keys , values] of Object.entries(user)){
    console.log(keys , values);
}

// Functions can also be created inside an object 

let user3 = {
name : "Aman",
age : 18,
greeting: function (){
    console.log(`Hello,World ${this.name}`);
    return 466;
 }
}

const va = user3.greeting();  // Calls the function 
console.log(va);

// Nested Object : Object inside an object 

const user4 = {
    name : "adil", 
    age : 16,
    address : {
        city:"Bhopal",
        ward: 2, 
        state:"MP"
    }
}

console.log(user4);
console.log(user.address.city);


// Output : {
//   name: 'adil',
//   age: 16,
//   address: { city: 'Bhopal', ward: 2, state: 'MP' }
// }

// const user5 = user4 // Both will refer to same address whatever we will change in user 5 it will change in user 4 too.
// We can create independent copy 

// Shallow copy
const user5 = {...user4};
user5.name = "Yash"; // NOTE : it wont change inside nested objects, it wont create copy of nested objects

// Deep copy 
const user5 = structuredClone(user4); // Will create complete copy

// Limitations of deep copy 

// 1. Cannot copy functions
// 2. Cannot clone DOM

// Keys can also taken as Number : Behind the scenes it will create them as strings
const user6 = {
    0 : "Yash",
    1 : 18
}

console.log(user[0]); // accessing


// Array are also stored in Object pattern

const arr = [12,22,3,4,66,7];

// { Behind the scene
//     0:12,
//     1:22,
//     2:3,
//     ....
// }

// Key : String || Symbol

const sym = Symbol("id");

const user7 = {
    name : "Yashraj",
    age : 18,
    [sym] : "Hello,Sir"  //[] Represents Symbol
}

console.log(sym);
 
// How is an Object Stored in Memory?

// In JavaScript, objects are stored in Heap memory, while the variable that refers to the object stores a reference (memory address).

// How is array is stored in memory?

// Arrays in JavaScript are also objects, so they are stored in the heap memory just like regular objects.









