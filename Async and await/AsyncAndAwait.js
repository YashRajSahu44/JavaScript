//  Async

// async function always return a promise 

async function greet(){
    return "Rohit";
}
const responce = greet();
// console.log(responce);  // Output : promise {"Rohit"}
responce.then((data)=>{
    console.log(data);
})


//  Creation and handling of promise 

async function greet(){
    return new Promise ((resolve , reject)=>{
        reject("rohit");
    })
}

const responce = greet();
responce.then((data)=>{
console.log(data);
})

.catch((error)=>{
    console.log("Error : ", error);
    
})

// Now 

fetch("https://api.github.com/users")
.then((responce)=>{
    responce.json();
})
.then((data)=>{
    console.log(data);
})

// Here

// Promise ki chaining ban rahi 
// this format is very complex and not familiar 


// Creating in a better way 

const response = fetch("https://api.github.com/users");
const data = responce.json();
console.log(data);
// Output : error 
// Why??

// Kyoki fetch krne k baad responce aane me time lagta hai lekin javascript kisi bhi chij k liye wait nahi karti bho direct next line execute kar deti hai therefor it will cause error..

// Solution..

const responce = await fetch("gitHUb");
const data = responce.json();
console.log(data);

// Await line ko freeze kar deta hai

// Problem with this code 

// Await k bajhe se program pause / freeze ho jata hai or tabh tak nahi chalta jab takh await bala program run na ho 

// Now

const responce = await fetch("gitHUb");
const data = await responce.json();
console.log(data);

console.log("Hello world ");

// Here , Hello world is an independent program iska upar bale code se koi relation nahi hai but await k bajhe se ispr bhi impact aayyga..

// Solution 

async function gitHub(){
    const responce = await fetch("gitHUb");
const data = await responce.json();
console.log(data);

console.log("Hello world ");
}


// Note : Await hamesa async k sath he use hoga

// Async Function k andar await 


///
async function userDetail(params) {
    
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photos,chat]= await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);
}