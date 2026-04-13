/*In JavaScript, Data Type Conversion means changing one type of data into another type.

Example:
Convert string → number
Convert number → string
Convert boolean → number, etc.*/

let age = "17"

//typeof is used to check whether the number is string or number
console.log(typeof age);
console.log(typeof(age));

// changing string into number
let valueInNumber = Number(age)
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true;  0 => false
//"" => false
//"yash" => true


/*********Operations*********/

let value = 3
let negValue = -value
console.log(value);

// Basic operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3)
// console.log(2/3);
// console.log(2%3);

//Strings can also be added,like
let name1 = "yash"
let name2 = " sahu"
let name3 = name1 + name2
console.log(name3);



