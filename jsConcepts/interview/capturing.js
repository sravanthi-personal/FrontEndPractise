/*
  Event capturing is also known as trickling, the outer event handler fires
  before the specific handler fires. 
  Event bubbling, the event propagates from child HTML element then moves up
  the DOM hierarchy to its parent element. 
  useCapture - false - event bubbling, true - event capturing
*/

document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
},false);

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent clicked");
},false);

document.querySelector("#child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child clicked");
},false);


/* 

With bubbling, the event is first captured and handled by the innermost element
and then propagated to outer elements. With capturing, the event is first 
captured by the outermost element and propagated to the inner elements. 
Capturing is also called "trickling".
*/