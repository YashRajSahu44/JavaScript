//  DOM : DocumentObjectModel

// "The DOM (Document Object Model) is a tree-like representation of your HTML document that JavaScript can understand and manipulate.

// html file

<html>
  <head>
    <title>My Site</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Hello there!</p>
  </body>
</html>


// Browser Creates This Tree:

// document
// └── html
//     ├── head
//     │   └── title
//     │       └── "My Site"
//     └── body
//         ├── h1
//         │   └── "Welcome"
//         └── p
//             └── "Hello there!"


//  Key concepts

//  1. Everything is a node

// Types of Nodes:
// - Element Nodes: <div>, <p>, <h1>
// - Text Nodes: The actual text content
// - Document Node: The root (document)

//  2.HTML Elements Become Objects

// <h1 id="title">Hello</h1>

//  It becomes 


{
  tagName: "H1",
  id: "title",
  textContent: "Hello",
  style: { color: "", fontSize: "" },
  parentElement: body,
  children: [],
  // ... many more properties and methods
}


//  "Every HTML tag becomes a JavaScript object with properties and methods!"


//  3. The window and document Objects

// Window (global object - the browser API)
//     └── document (your HTML page as objects)
//         └── documentElement (the <html> tag)
//             ├── head
//             └── body
//                 └── (all your elements)


//  Key Points:

// - `window` = The browser environment (has alert, setTimeout, localStorage, etc.)
// - `document` = Your HTML page (the DOM tree)


//  Different way to select the Element

//  Sample HTML to Work With
<!DOCTYPE html>
<html>
<head>
  <title>DOM Selection</title>
</head>
<body>

  <div id="main-container" class="container">
    <h1 class="title">Main Title</h1>
    <p>This is the first paragraph.</p>
    <p class="content">This is the second paragraph with a class.</p>

    <ul id="item-list">
      <li class="item">Item 1</li>
      <li class="item special">Item 2</li>
      <li class="item">Item 3</li>
    </ul>

    <form name="login-form">
      <input type="text" name="username">
    </form>
  </div>

  <div class="container footer">
    <p>Footer content.</p>
  </div>

</body>
</html>



// 1. The Classic, Specific Methods (The Old Guard)

//These were the original ways to select elements. They are very fast for their specific purpose but are less flexible than the modern methods.

// **A. `document.getElementById('id')`**

// - **What it does:** Selects the **single** element that has the specified `id`.
// - **Returns:** A **single element object**, or `null` if no element with that ID is found.
//- **First Thought:** "Get me the one, unique thing with this exact ID."

const mainContainer = document.getElementById('main-container');
mainContainer.style.border = '2px solid red'; // Puts a red border around the main div

const itemList = document.getElementById('item-list');
console.log(itemList);

//  It's extremely fast and direct because IDs are meant to be unique in a document. This is the best method to use when you have a unique ID.
 
{/* B. `document.getElementsByTagName('tagName')`

- What it does: Selects all elements that have the specified tag name (like `p`, `li`, `div`).
- Returns: A live `HTMLCollection` (an array-like object) of all matching elements.
- First Thought: "Get me all the paragraphs" or "Get me all the list items." */}

const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs.length); // 3

// You can loop through the collection
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.fontStyle = 'italic';
}

{/* 
C. `document.getElementsByClassName('className')`

- What it does: Selects all elements that have the specified class name.
- Returns: A live `HTMLCollection` of all matching elements.
- First Thought: "Get me everything with the class 'item'." */}

const allItems = document.getElementsByClassName('item');
console.log(allItems.length); // 3

// You can also get elements with multiple classes
const footerContainer = document.getElementsByClassName('container footer');
console.log(footerContainer[0]);



//  2. The Modern, Powerful Methods (The "Query" Selectors)

{/* They allow you to select elements using the same powerful CSS selector syntax that you use in your stylesheets. These are the methods you should use most of the time. */}



{/* 
A. `document.querySelector('cssSelector')`

- What it does: Selects the first element in the document that matches the specified CSS selector.
- Returns:A single element object, or `null` if no match is found.
- First Thought: "Find me the very first thing that matches this CSS rule." */}

// Get the element with the ID 'main-container'
const main = document.querySelector('#main-container');

// Get the FIRST element with the class 'container'
const firstContainer = document.querySelector('.container');
console.log(firstContainer); // This will be the main div, not the footer

// Get the FIRST paragraph
const firstP = document.querySelector('p');
console.log(firstP);

// Get the list item that has BOTH 'item' and 'special' classes
const specialItem = document.querySelector('.item.special');
specialItem.style.color = 'orange';

// Get the input with the name 'username'
const usernameInput = document.querySelector('input[name="username"]');




{/* B. `document.querySelectorAll('cssSelector')`

- What it does: Selects all elements in the document that match the specified CSS selector.
- Returns: A static `NodeList` (an array-like object) of all matching elements.
- First Thought: "Find me every single thing that matches this CSS rule." */}

// Get ALL elements with the class 'container'
const allContainers = document.querySelectorAll('.container');
console.log(allContainers.length); // 2

// Get ALL list items inside the element with the ID 'item-list'
const listItems = document.querySelectorAll('#item-list li');

// A NodeList has a .forEach method, which is very convenient!
listItems.forEach(item => {
  item.style.fontWeight = 'bold';
});



{/* 
What "static" means: Unlike an `HTMLCollection`, a `NodeList` returned by `querySelectorAll` is **not live**. If you add a new matching element to the page later, the `listItems` collection will **not** automatically update. This is usually the behavior you want, as it's more predictable. */}


{/* 3. Other, More Niche Selections */}

{/* document.getElementsByName('name'): Selects elements based on their name attribute (most commonly used for form elements). */}


const loginForm = document.getElementsByName('login-form');
const usernameInputByName = document.getElementsByName('username');

//////////////////////////////////////////////



{/* Traversing the DOM: Once you have one element, you can navigate to its relatives. */}


const itemList = document.getElementById('item-list');

const parentContainer = itemList.parentElement; // The #main-container div
const listChildren = itemList.children; // An HTMLCollection of the 3 <li> elements
const firstLi = itemList.firstElementChild; // The first <li>
const lastLi = itemList.lastElementChild; // The last <li>

const specialLi = document.querySelector('.special');
const nextItem = specialLi.nextElementSibling; // The 3rd <li>
const prevItem = specialLi.previousElementSibling; // The 1st <li>


// View the Image..for method summary
