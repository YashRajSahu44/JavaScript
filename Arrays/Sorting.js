const names = ["Yash", "Vivek" , "Kartik", "Zaid"];
names.sort()

// console.log(names);

names.reverse();
console.log(names); // decreasing order : Sort then reverse

const arr = [21,22,35,78,44];
arr.sort();  //It won't sort it
console.log(arr);

// Correct way of sorting 

// ascending order
const arr2 = [11,10,88,78,90];
arr2.sort((a,b) => a-b); // its a type of function

// -ve : phele a aayga fir b aayga
// +ve : phele b aayga fir a aayga 

console.log(a); // Will be sorted

// Descending order

arr2.sort((a,b) => b-a);



