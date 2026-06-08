//  ForEach

const arr  = [12,23,445,6,767,89];
let sum = 0;

arr.forEach((number) =>{
    sum += number;
}) 
  
console.log(sum); // Output : 1342 sum of the arr 

//  Filter 

// Filter out the elements of given condition , For example in amazon we can filter the products according to their price

const arr2 = [99,299,599,400,200];

let arrNew = arr2.filter((number) => number <200); // New array will be created
console.log(arrNew); // Output : 99(Only 99 is lower than 200)

//  Creating own method to compare 

const arr3 = [64,65,66,68];

arr3.filtering = function(compare){
    const ans = [];
    for(let num of this){
        if(compare(num)){
            ans.push(num)
        }
    }
    return ans;
}

const newArr = arr3.filtering((num) => num > 64);
console.log(newArr);


//  Map 

//  First Thought:  "I have a list of raw materials. I want to put each one through a machine to create a new list of finished products."
// - Core Purpose: To create a new array by transforming every element from an original array.
//  - Key Characteristics:
//     - It always returns a new array.
//     - The new array will always have the   same length as the original array.
//     - It is non-mutating; it does not change the original array.


const arr4 = [1,2,3,4,5];

const newArr2 = arr4.map((num) => num * 2);
console.log(newArr2);

//  RealWorld UseCase : 

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


// Use case of Filter 
const newProduct = products.filter((products) => products.price > 50).sort((a,b) => b.price - a.price);  // Sorted in dec oreder 
console.log(newProduct);


//  Use case of Map 

// Mujhe bas id or price chaiye, i have nothing to do with other informations , then maping can be used 

const ans = product.map((product) => ({name:product.name,price:product.price}));
console.log(ans);


// Reducer

// - First Thought: "I want to roll up this entire list into a single final value." (e.g., Summing a list of numbers, counting items, etc.)
// - core Purpose: To execute a "reducer" function on each element of the array, resulting in a single output value.
// - Key Characteristics:
//     - It is the most powerful and flexible of the iteration methods.
//     - It can return any type of value: a number, a string, an object, another array.
//  -It is non-mutating.

const totalStockValue = products.reduce((total, product) => {
  console.log(`Current Total: ${total}, Current Product: ${product.name}, Price: ${product.price}`);

  if (product.inStock) {
    // The return value of this step becomes the 'total' for the NEXT step.
    return total + product.price;
  }
  // If not in stock, just return the current total without adding anything.
  return total;
}, 0); // Our initial value for the total is 0.

console.log(`\\nFinal Total Stock Value: $${totalStockValue}`);



// Current Total: 0, Current Product: Laptop, Price: 1200
// Current Total: 1200, Current Product: Book, Price: 30
// Current Total: 1230, Current Product: Coffee Maker, Price: 150
// Current Total: 1230, Current Product: Headphones, Price: 200

// Final Total Stock Value: $1430


//  DataStructure 

// Set : Set is an type of array in which only unique value can be stored
const arr5 = [1,2,3,4,5,1,2,7]
const s1 = new set(arr5); 
s1.add(6);
s1.delete(5);

console.log(s1);  // output [1,2,3,4,,7,6]
console.log(s1.has(2)); // Output : True


// RealWorld UseCase

const email = ["yash@gm" , "yashr@gm","yash@gm"]
const s2 = new set(email);
console.log(s2); // output : ["yash@gm" , "yashr@gm"]


//  Map : DataStructure 

const m1 = new Map([[
    ["yash" , 30]
    [true , 11]
]]);
console.log(m1);

// CRUD Operations

// .set(key, value) : Adds or updates a key-value pair. Returns the `Map`, so you can chain it.

// .get(key): Retrieves the value for a given key. Returns undefined if the key doesn't exist.

// .has(key) : Checks if a key exists. Returns `true` or `false`.

// .delete(key) : Removes a key-value pair.\

// .clear() :  Removes all key-value pairs. 

//  It is not used much 

