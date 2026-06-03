//  Closure 
//  A function that **remembers** variables from its **outer scope** even after the outer function has finished executing.

// This is THE most important concept for understanding JavaScript!

// Eample of closure 

function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}

const myFunction = outer();  // outer() finishes executing
myFunction();  // "Hello" - but how does it still remember "message"?


// What just happened?

//  1. `outer()` runs and creates `message`
// 2. `inner()` is defined INSIDE `outer()` - it "closes over" `message`
// 3. `outer()` returns `inner` and finishes
// 4. Normally, `message` would be garbage collected... **BUT**
// 5. `inner` still has a reference to `message` - this is a **closure**!
// 6. When we call `myFunction()` (which is `inner`), it still remembers `message`


// Why closure exists?

// **Without closures:** Functions would only access their own variables and globals.

// **With closures:** Functions can "carry" their environment with them!

function createCounter() {
    let count = 0;  // Private variable

    return function() {
        count++;  // Accesses outer variable
        return count;
    };
}

const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// "count" is NEVER directly accessible!
console.log(count);  // ❌ ReferenceError


// Key insight: count lives on even though createCounter() finished! The returned function "closes over" it.


//  Real World example 
//  Closures let you create truly private variables!


function createBankAccount(initialBalance) {
    let balance = initialBalance;  // PRIVATE - can't be accessed directly

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },

        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance());  // 100
myAccount.deposit(50);  // 150
myAccount.withdraw(30);  // 120

// Can't directly access or modify balance!
console.log(myAccount.balance);  // undefined
myAccount.balance = 9999999;  // Doesn't work!
console.log(myAccount.getBalance());  // 120 - still protected


// Why this works: All three methods (deposit, withdraw, getBalance) are closures that remember the balance variable!