// Here in java script array is not like array in java and c++

let arr = [12,23,44,56,88]
console.log(arr);
console.log(arr.length); // Output : 5

let arr2 = ["Yash", 28 , true]; // Diffrent types of data can be stored(Which doesn't work in java and c++)

console.log(arr2[1]); // Output : 28

// Here Array is mutable (Can be changed)

arr2[1] = 90;
console.log(arr2);

// Pushing 

arr2.push = 66; // It will be in last
arr2.push = "LNCT";
console.log(arr2);


// Pop Operation : Delete element from end 

arr2.pop();
console.log(arr2);

// Adding element from the start 

arr2.unshift(10);
console.log(arr2);

// Delete Element from the start 

arr2.shift();
console.log(arr2);

// It is adviced not to use shift and unshift

// Ek ek karke print karana 

let arr3 = [28,35,67,899,89];

for(let i = 0; i < arr.length; i++){
    console.log(arr3);
}

// Another way 

for(let num of arr){
    console.log(num);
}


// Slice Operation

let arr4 = [892,2,44,56,677,8];
console.log(arr4.slice(1,4));
console.log(arr4); // Orignal array me change nahi hua 

console.log(arr4.splice(2,4));
console.log(arr4); // Orignal array me change ho jayga

// Joining two arrays.

const arr5 = [20,90,80,20,30];
const arr6 = [10,22,33,44,55];
const arr7 = [11,33,55,66,77];

// const arr8 = arr5.concat(arr6,arr7);
// console.log(arr8);


// Spread Operator : Mostly used
const arr8 = [...arr5,...arr6,...arr7];
console.log(arr8);

// Convering array into string 

let name = ["yash","Raj","Sahu"];
console.log(name.toString());
console.log(name.join(" ")); // Space aa jaygi bich me 

// Simple Searching 

let arr9 = [10,20,30,40,50];
console.log(arr9.indexOf(30));  // Tells the index of item 
console.log(arr9.lastIndexOf(40)); // Tells last appearance of item
console.log(arr9.includes(50)); // True or False













