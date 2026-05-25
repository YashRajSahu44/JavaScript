Maths in js is Object 

console.log(Math.abs(-4)); // Will change value into absolute value (Here -ve value changed into +ve value)


// Can find values of:
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.SQRT2);

console.log(Math.ceil(1.4));
console.log(Math.floor(1.4));

// Random
console.log(Math.random); // Maths.Random, koi bhi random value genrate karega [0,1) : It will consider 0 but not 1.

// Math.floor(Math.random()*Total Number of Outcomes)+Shift

/// Maths.floor(Maths.random()(max-min + 1))+ min

console.log(Math.floor(Math.random()*9)) + 1;

// Otp genrate : 1000 - 9999

console.log(Math.floor(Math.random()* 9999 - 1000 + 1)) + 1000 ; // Not the secure way 
// Crypto Libraries Ensure Secure Random Numbers






