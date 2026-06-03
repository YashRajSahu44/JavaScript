//  Scopes 

//  The visibility and accessibility of variables. It answers: "From where can I access this variable?"

// Think of scope like **rooms in a house**:

// - Variables declared in a room are accessible in that room
// - You can look OUT from inner rooms to outer rooms
// - You CANNOT look IN from outer rooms to inner rooms

// There are three types of scope 

//  1. Global Scope : The House itself 
// variables declearerd outside any function or block are called global 

const globalVar = "I'm global";

function someFunction() {
    console.log(globalVar);  // ✅ Can access
}

someFunction();  // "I'm global"
console.log(globalVar);  // ✅ Can access from anywhere

// Real-world analogy: Like the air outside - everyone can access it.

//  2.Function Scope : A room 
//  Variables declared inside a function are only accessible inside that function.

function myFunction() {
    const functionVar = "I'm in the function";
    console.log(functionVar);  // ✅ Works
}

myFunction();  // "I'm in the function"
console.log(functionVar);  // ❌ ReferenceError: functionVar is not defined

// Key point: var, let, and const are all function-scoped (but let/const are also block-scoped).

// 3. Block Scoped : A closet in a room 
// Variables declared with let or const inside {} are block-scoped.

if (true) {
    let blockVar = "I'm in a block";
    const alsoBlockVar = "Me too";
    var notBlockScoped = "I'm different!";

    console.log(blockVar);  // ✅ Works
}

console.log(blockVar);  // ❌ ReferenceError
console.log(alsoBlockVar);  // ❌ ReferenceError
console.log(notBlockScoped);  // ✅ Works! (var ignores block scope)

// Important: var is NOT block-scoped, only function-scoped!

function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // ✅ 10 - var leaks out of block!
}

function testLet() {
    if (true) {
        let y = 10;
    }
    console.log(y);  // ❌ ReferenceError - let respects block scope
}


//  Laxical Scope : Key concept 
//  Lexical scope = Scope is determined by where you write the code, not where you call it.

const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        const name = "Inner";
        console.log(name);  // Which "name" will this print?
    }

    inner();
}

outer();  // "Inner"


// Why "Inner"? JavaScript looks for variables in this order:

// 1. **Current scope** (inner function) → Found `name = "Inner"` ✓
// 2. If not found, check **outer scope** (outer function)
// 3. If not found, check **global scope**
// 4. If still not found → ReferenceError

// This is called the **Scope Chain**.

// The scope chain in action 

const level1 = "Global";

function outer() {
    const level2 = "Outer";

    function middle() {
        const level3 = "Middle";

        function inner() {
            const level4 = "Inner";

            // Can access ALL outer scopes!
            console.log(level4);  // "Inner"
            console.log(level3);  // "Middle"
            console.log(level2);  // "Outer"
            console.log(level1);  // "Global"
        }

        inner();
    }

    middle();
}

outer();
 

// Visiual representation of scope chain 

// inner() scope
//     ↓ (can look up)
// middle() scope
//     ↓ (can look up)
// outer() scope
//     ↓ (can look up)
// Global scope

// But you CANNOT look down:

function outer() {
    function inner() {
        const secret = "Hidden";
    }

    inner();
    console.log(secret);  // ❌ ReferenceError - can't look INTO inner function
}
