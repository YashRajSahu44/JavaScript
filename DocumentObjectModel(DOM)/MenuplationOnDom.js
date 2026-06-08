{/* Once you've selected an element, the next step is to interact with it. You do this by reading and writing to its properties. These properties are the bridge that lets your JavaScript code control the content, appearance, and attributes of the HTML elements. */}


 <div id="product-card" class="card featured">
  <h2 id="product-name">
    Smart Headphones
    
    <span style="display: none;">SALE</span>
  </h2>
  <p id="description">
    These headphones have <strong>noise-cancelling</strong> features.
  </p>
</div>



// ### **1. Properties for Manipulating Content**

// These three properties are used to read or change the content *inside* an element, but they have critical differences.

// ### **A. `.textContent` (The Safe and Recommended Choice)**

// - **First Thought:** "Give me **just the text**, exactly as it is, with no HTML."
// - **What it does:** It gets or sets the raw text content of an element and all its descendants. It completely ignores all HTML tags and gives you just the text.
// - **When Reading:**


const desc = document.getElementById('description');
console.log(desc.textContent);
// Output: "These headphones have noise-cancelling features."
// Notice the <strong> tags are gone.

const productName = document.getElementById('product-name');
console.log(productName.textContent);
// Output: "Smart Headphones SALE"
// It includes text from hidden elements but ignores comments.


// When Writing (Safe): When you set .textContent, the browser treats your input as pure text. It will not parse any HTML tags. This is a crucial security feature that prevents Cross-Site Scripting (XSS) attacks.

const desc = document.getElementById('description');

// Let's try to inject some HTML
desc.textContent = "Click <a href='#'>here</a> to win!";

// The browser will display the literal text, not a clickable link:
// "Click <a href='#'>here</a> to win!"


// - **Performance:** It's very fast because the browser doesn't need to parse HTML.
// - **Best For:** Reading or writing plain text content. **This should be your default choice.**

// ### **B. `.innerHTML` (The Powerful but Dangerous Choice)**

// - **First Thought:** "Give me **everything inside**, including all the HTML markup."
// - **What it does:** It gets or sets the full HTML content of an element.
// - **When Reading:**

const desc = document.getElementById('description');
console.log(desc.innerHTML);
// Output: "These headphones have <strong>noise-cancelling</strong> features."
// It includes the HTML tags as a string.



// When Writing (Dangerous): When you set .innerHTML, the browser will parse your string and create actual HTML elements from it. This is powerful, but it's a major security risk if the string comes from a user.

const desc = document.getElementById('description');

// This is powerful and useful for creating new elements.
desc.innerHTML = "Updated features: <strong>Active Noise Cancelling</strong> and <em>Bluetooth 5.0</em>.";
// The browser will correctly render the bold and italic text.

// SECURITY RISK: What if the string comes from a malicious user?
let userInput = `<img src="x" onerror="alert('You have been hacked!')">`;
// desc.innerHTML = userInput; // This would execute the malicious script!


// - **Performance:** It's slower than `.textContent` because the browser has to parse the string into DOM nodes.
// - **Best For:** Only use it when you **explicitly need to create HTML elements** from a string that you, the developer, have created and trust completely. **Never use it with user-provided input.**


// ### **C. `.innerText` (The "Smart" but Tricky Choice)**

// - **First Thought:** "Give me the text **as it appears on the screen**."
// - **What it does:** This is a non-standard but widely supported property. It tries to get the text content as it is rendered to the user, taking CSS into account.
// - **When Reading:**

const productName = document.getElementById('product-name');
console.log(productName.innerText);
// Output: "SMART HEADPHONES" (if CSS `text-transform: uppercase` was applied)
// It will NOT include the text from the hidden <span> ("SALE").


// `.innerText` is "style-aware." It won't return text from hidden elements, and it might reflect CSS transformations.

// - **When Writing:** It behaves similarly to `.textContent`, setting the raw text.
// - **Performance:** It's the **slowest** of the three because the browser may need to trigger a layout calculation (a "reflow") to figure out what is actually visible on the screen.
// - **Best For:** Rarely needed. Use it only if you have a specific need to get the text exactly as a user would see it, excluding hidden content. Prefer `.textContent` in almost all cases.






// ### **2. Properties for Manipulating Attributes**

// These properties give you direct access to the HTML attributes of an element.

// ### **A. `.id` and `.className` (Direct Properties)**

// For the most common attributes like `id` and `class`, JavaScript provides direct properties.

// - **`.id`:** Gets or sets the `id` attribute.

const card = document.getElementById('product-card');
console.log(card.id); // "product-card"
card.id = 'new-card-id'; // Changes the element's ID


// .className: Gets or sets the entire class attribute as a single string.
// Because it overwrites everything, .className is clumsy. The .classList property is much better.

console.log(card.className); // "card featured"

// This will OVERWRITE all existing classes.
card.className = "card-dark-mode";
// The element now only has the class "card-dark-mode". "featured" is gone.


// ### **B. `.classList` (The Modern Way to Handle Classes)**

// - **First Thought:** "Give me a smart toolbox for adding, removing, and checking for classes without messing up the other ones."
// - **What it is:** An object with helpful methods to manage an element's classes.
//     - `.add('className')`: Adds a new class.
//     - `.remove('className')`: Removes a class.
//     - `.toggle('className')`: Adds the class if it's missing, removes it if it's present.
//     - `.contains('className')`: Returns `true` or `false` if the element has the class
// 
const card = document.getElementById('product-card');

card.classList.add('in-cart');      // Adds 'in-cart'
card.classList.remove('featured'); // Removes 'featured'

// Toggle a 'selected' class every time a function is called
card.classList.toggle('selected');

if (card.classList.contains('in-cart')) {
  console.log("This item is in the cart.");
}


// Best For: This is the correct and modern way to manipulate CSS classes.

// ### **C. `.getAttribute()` and `.setAttribute()` (For Any Attribute)**

// These are generic methods that can work with *any* HTML attribute, including custom ones.

const card = document.getElementById('product-card');

// Add a custom data attribute
card.setAttribute('data-product-id', 'xyz-123');

// Get the value of an attribute
const productId = card.getAttribute('data-product-id');
console.log(productId); // "xyz-123"

// Remove an attribute
card.removeAttribute('class');




// ### **3. The `.style` Property**

// - **First Thought:** "Give me direct control over the element's **inline styles**."
// - **What it does:** An object that represents the `style="..."` attribute of an element. You can change CSS properties through it.
// - **The "Gotcha": Property Names are camelCased.** CSS properties with hyphens (like `background-color`) must be written in `camelCase` in JavaScript.
//     - `background-color` -> `backgroundColor`
//     - `font-size` -> `fontSize`
//     - `z-index` -> `zIndex`

const title = document.querySelector('.title');

title.style.color = 'blue';
title.style.backgroundColor = '#f0f0f0'; // Note the camelCase
title.style.fontSize = '24px'; // The value must be a string
title.style.padding = '10px';


// **Important:** The `.style` property **only knows about inline styles**. It cannot read styles that are set in an external CSS file. To do that, you need to use the global function `window.getComputedStyle(element)`.

// **Best Practice:** It's generally better to use `.classList` to add or remove CSS classes that are defined in your stylesheet, rather than manipulating inline styles directly with JavaScript. This keeps your styling rules separate from your logic.