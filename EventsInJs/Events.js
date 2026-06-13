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
