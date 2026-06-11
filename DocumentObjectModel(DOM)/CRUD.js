const newElement = document.createElement("h2");
newElement.textContent = "Lnct is school "
newElement.id = ("Yash")

// Select Element

const element = document.getElementById("First")

// After element 
element.after(newElement);

//Before element 
element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "School After School"

// Assigning Class
newElement2.classList.add("Lnct")
// Removing a class
newElement2.classList.remove("Lnct")

//set attribute
newElement2.setAttribute("hello" , "ji");
console.log("hello");

element.before(newElement2)

// Unordered List
const listing = document.createElement("li");
listing.textContent = "Milk"
const listing2 = document.createElement("li")
listing2.textContent = "Cake"
const listing3 = document.createElement("li")
listing3.textContent = "Pasta"
const listing4 = document.createElement("li")
listing4.textContent = "Pizza"

const unorderedList = document.getElementById("List");

// append : adds Element at last 
unorderedList.append(listing);
unorderedList.append(listing2)

// prepend : adds element at start 
unorderedList.prepend(listing3);

// I Want to add Pizza After Cake 
// Method 1 

listing2.after(listing4)

// Method 2

unorderedList.children[1].after(listing4);

// Real world Problem
// data came from backend as an array and now we have to show it to ui 

const arr = ["MILK" , "PIZZA" , "RAMEN" , "PASTA"];

const unorderedList = document.getElementById("List")
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list1 = document.createElement("li");
    list1.textContent = food;
    unorderedList.append(list1);
}  // This method is not preffered to use as it keep changing in ui by every data : Which is not suitable to solve it here comes A method called fragment 

for(let food of arr){
    const list1 = document.createElement("li");
    list1.textContent = food;
    fragment.append(list1);
}  // By fragment method firstly at collects all the data and then print in one time it is a good practice to use FRAGMENT 

unorderedList.append(list1);

const s1 = document.getElementById("List")
s1.remove();


// Old methods to do CRUD Operation : Just for knowledge 


const month = document.getElementById("ten");
console.log(month.children);

const lister = document.createElement("li");
lister.textContent = "May"
 // afterbegin
month.insertAdjacentElement("afterbegin" , lister);
// beforeBegin
month.insertAdjacentElement("beforebegin" , lister)











