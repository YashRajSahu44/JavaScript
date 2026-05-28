// Accessing element inside multiple Array

let arr = [1,2,3,[1,2,3],4,5,6];
console.log(arr[3][0]); // Output : 1

let arr2 = [1,2,3,[1,[1,2,3],2,3],4,5,6];
console.log(arr2[3][1][2]); // Output : 3

// These arrays looks so densed therefore we can use : Flattening of array.

let arr3 = [1,2,3,[4,5,[64,65,66,67,68],6],7,8,9]
 let a = arr3.flat(2); // Here 1 , 2... are the levels of flatning.

 // Infinity can also be used : .flat(infinity);

console.log(a);

// Why array is not array in JavaScript ? 

// Array : In an array same type of data is stored in continous memory allocattion while in javaScript we saw that different type of Data can be stored in js.

// Additional : Formula of accessing index of an array 
// base_address + index * sizeOfData

// Array is stored like an Object 




