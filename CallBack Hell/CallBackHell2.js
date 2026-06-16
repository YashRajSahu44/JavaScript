//  Problems with Callback Hell

// 1. Readability - The Pyramid of Doom

step1((data) => {
    step2(data, (data) => {
        step3(data, (data) => {
            step4(data, (data) => {
                step5(data, (data) => {
                    step6(data, (data) => {
                        // Code keeps moving right →→→
                    });
                });
            });
        });
    });
});



// Problem:

// - Code doesn't read naturally top-to-bottom
// - Hard to see the flow
// - Indentation grows unmanageable



// 2. Error Handling Nightmare

// What if payment fails? What if kitchen is closed? What if driver cancels?

placeOrder(orderDetail, (orderDetail, error) => {
    if (error) {
        console.log("Payment failed:", error);
        return;  // ❌ But what about refund? Notification?
    }

    preparingOrder(orderDetail, (orderDetail, error) => {
        if (error) {
            console.log("Kitchen error:", error);
            return;  // ❌ Need to cancel order, refund payment
        }

        pickupOrder(orderDetail, (orderDetail, error) => {
            if (error) {
                console.log("Pickup failed:", error);
                return;  // ❌ Food is ready but stuck!
            }

            deleiverOrder(orderDetail, (error) => {
                if (error) {
                    console.log("Delivery failed:", error);
                    // ❌ Customer charged, food gone, no delivery
                }
            });
        });
    });
});


// Problems:

// - Error handling at EVERY level
// - Repetitive code
// - Hard to implement proper error recovery
// - One error can leave system in inconsistent state



// 3. Hard to Modify
// Want to add "Send SMS notification" between pickup and delivery?


placeOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {

            // 🆕 NEW STEP - Must break and re-nest everything
            sendSMS(orderDetail, (orderDetail) => {

                deleiverOrder(orderDetail);

            });

        });
    });
});



// Problems:

// - Have to break the chain
// - Re-indent everything
// - Easy to introduce bugs
// - Touching old code is risky

// 4. Can't Use Normal Control Flow
// try-catch doesn't work:

try {
    placeOrder(orderDetail, (orderDetail) => {
        throw new Error("Payment failed");
        // ❌ This error is thrown LATER, after try-catch is done
    });
} catch (error) {
    console.log("Won't catch it!");  // This never runs
}

// Why? Because the callback runs asynchronously, after the try-catch block has finished!

//  return doesn't work as expected:

function processOrder() {
    placeOrder(orderDetail, (orderDetail) => {
        if (orderDetail.cost > 1000) {
            return "Too expensive";
            // ❌ This only exits the callback, not processOrder
        }

        preparingOrder(orderDetail, (orderDetail) => {
            // This STILL runs even though we "returned"!
        });
    });

    return "Order processed";
    // ❌ This returns IMMEDIATELY, before order even starts
}


// 5. Variable Scope Confusion

let finalStatus;

placeOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deleiverOrder(orderDetail);
            finalStatus = "Delivered";  // Set it here
        });
    });
});

console.log(finalStatus);  // ❌ undefined! Callback hasn't run yet


// Problem: Can't easily get data OUT of callback chain.


// 6. Debugging is Painful
// When an error occurs deep in the chain:

// Error: Delivery failed
//     at anonymous (line 45)
//     at anonymous (line 38)
//     at anonymous (line 31)
//     at anonymous (line 24)

// Problems:

// - All functions show as "anonymous"
// - Hard to trace which step failed
// - Stack trace doesn't clearly show the flow

// 7. Testing is Difficult

// How do you test individual steps?

// Can't easily test preparingOrder alone
// It's buried inside placeOrder's callback
// Can't mock just one step
// Can't test error scenarios easily


// 8.Can't Handle Parallel Operations

// What if you want to:

// - Prepare food AND assign driver at the SAME time?
// - Wait for BOTH to complete before moving forward?

// With callbacks, you need manual coordination:
let foodReady = false;
let driverAssigned = false;

prepareFood(() => {
    foodReady = true;
    if (driverAssigned) startDelivery();
});

assignDriver(() => {
    driverAssigned = true;
    if (foodReady) startDelivery();
});

// ❌ Messy! Race conditions! Duplicate code!



// Modern JavaScript has solutions:

// - Promises - A better way to handle async operations
// - Async/Await - Write async code that looks synchronous