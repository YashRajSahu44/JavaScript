//  By this method whenever we click the slected text on web it wil change : First create an tag in html as onClick : Not Prefered as we have to create an html file for it.

// function ClickIt(){
//     const element = document.getElementById("First");
//     element.textContent = "Founder of write "
// }

//  Events..
// Movment by Mouse, click, double click is known as Events.

// Events Listener 
// By selecting on the elements on which we want to apply events such as onClick Event 

// Event Action 
// After clicking the action that is done is know is EventAction : Like we did "Founder of Write"


// OnClick : this method is also  not prefered because sometimes we have to perform multiple actions 
const Element = document.getElementById("First")
Element.onclick = function clickIt(){
    Element.textContent =  "Founder Of Write"
}

// EventListener : Best Way, Can perform multiple actions at once , it's a method.
Element.addEventListener('click' , ()=>{
    Element.textContent = "saveUrTime"
})
Element.addEventListener('click' , ()=>{
    Element.style.backgroundColor = "yellow";
})

// Some other effects : Mousein , MouseOut 


const element = document.getElementById("first");
// element.onclick = function handleClick(){
// //    element.textContent = "Strike is Coming";
//     element.style.backgroundColor="pink";
// }

// element.onclick = function handleClick(){
//    element.textContent = "I am the best";
// }

// element.addEventListener('click',()=>{
//     element.textContent = "Strike is Coming";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)





// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     // console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // console.log(e);
//     // e.stopPropagation();
//     // console.log("child is clicked");
// })

// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)
