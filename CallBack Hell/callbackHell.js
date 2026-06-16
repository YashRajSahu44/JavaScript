// What is JavaScript's Core Nature?

// JavaScript is single-threaded - imagine a single worker who can only do ONE task at a time.

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Executes line by line, top to bottom


//  The Problem: Blocking Operations

// Some operations take time:
// - Making API calls (network requests)
// - Reading files
// - Database queries
// - Timers

// If JavaScript waits for these, everything freezes:

// ❌ BAD - Everything stops here
let data = waitForAPI();  // Blocks for 3 seconds
console.log(data);
console.log("This waits 3 seconds too!");




//  The Solution: Asynchronous Programming

// Don't wait - instead, say "Call me back when you're done":

// ✅ GOOD - Non-blocking
fetchAPI(function() {
    console.log("Data received!");
});
console.log("I run immediately!");

// Output:
// I run immediately!
// Data received!  (after delay)

// This "call me back" function is a CALLBACK.


// Real-World Analogy

// Think of ordering food online:

// 1. Place order → Wait → Get order ID
// 2. Prepare food → Wait → Food ready
// 3. Pickup order → Wait → Driver has it
// 4. Deliver order → Wait → Food delivered

// Each step:

// - Takes time (asynchronous)
// - Depends on the previous step finishing
// - Produces data needed by the next step

// You can't prepare food before placing the order!
// You can't pick up food before it's prepared!

// This is sequential async operations - the root of callback hell.


const orderDetail = {
    cost: 520,
    items: ["biryani", 'pani puri', 'pizza'],
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_name: "Dominos",
};


// This holds all order information that flows through each step.


// Step 1: Place Order
function placeOrder(orderDetail, Callback) {
    console.log(`Processing the payment of ${orderDetail.cost}`);

    setTimeout(() => {
        console.log("Payment completed and Order is placed");
        orderDetail.paymetStatus = true;  // ✅ Add new data
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}


// What happens:

// 1. Starts payment processing
// 2. Waits 3 seconds (simulating payment time)
// 3. Adds `paymetStatus: true` to orderDetail
// 4. Calls the callback with updated orderDetail

// Step 2: Prepare Order

function preparingOrder(orderDetail, Callback) {
    console.log(`Your Order is getting Prepared ${orderDetail.items}`);

    setTimeout(() => {
        console.log("Your Order is prepared");
        orderDetail.token = "10";  // ✅ Add token number
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

// Key point: This function receives the orderDetail WITH paymetStatus from previous step!

// Step 3: Pickup Order

function pickupOrder(orderDetail, Callback) {
    console.log(`Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_name}`);

    setTimeout(() => {
        console.log("I have picked up your order");
        orderDetail.pickup = true;  // ✅ Mark as picked up
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

// Now orderDetail has: paymetStatus, token, AND pickup!

// Step 4: Deliver Order

function deleiverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Your order is delivered successfully");
        orderDetail.delivery = true;  // ✅ Final status
    }, 1000);
}

// Last step - no callback needed because nothing comes after.



// The Callback Hell Structure

placeOrder(orderDetail, (orderDetail) => {
    // ⬇️ Level 1: After order placed

    preparingOrder(orderDetail, (orderDetail) => {
        // ⬇️ Level 2: After preparation

        pickupOrder(orderDetail, (orderDetail) => {
            // ⬇️ Level 3: After pickup

            deleiverOrder(orderDetail);
            // ⬇️ Level 4: Final delivery
        });
    });
});

// Each step is nested inside the previous step's callback.


//  The Intuition Behind Nesting
//  Why Can't We Do This?

placeOrder(orderDetail, preparingOrder);
preparingOrder(orderDetail, pickupOrder);
pickupOrder(orderDetail, deleiverOrder);


// Problem:These all execute IMMEDIATELY, one after another, without waiting!

// JavaScript doesn't know to wait for `placeOrder` to finish before calling `preparingOrder`.


// Why Nesting Works

placeOrder(orderDetail, (orderDetail) => {
    // This function doesn't run immediately
    // It WAITS for placeOrder to finish
    // THEN it runs with the updated orderDetail

    preparingOrder(orderDetail, (orderDetail) => {
        // This WAITS for preparingOrder to finish
        // Then runs with the updated orderDetail

        pickupOrder(orderDetail, (orderDetail) => {
            // And so on...
            deleiverOrder(orderDetail);
        });
    });
});


// The intuition:

// - Each callback is like a "What to do NEXT" instruction
// - It's wrapped INSIDE the previous step so it waits
// - It's a chain of "when you're done, do this"

// Think of it like Russian nesting dolls:

// - Open doll 1 → find doll 2 inside
// - Open doll 2 → find doll 3 inside
// - Open doll 3 → find doll 4 inside

// Each step reveals the next step!