// add an event lister for the create button
let counter = 1;
document.querySelector("#create-btn").addEventListener("click", function (){
    console.log("this is a counter",counter)
    // inside the event lister i need to get the value of the textarea input
    const textAreaValue = document.querySelector("#text").value
    console.log(textAreaValue)
// build a card component using value from textarea]
const cardComponent = `<article class="card" id="card--${counter}">
<div>${textAreaValue}</div>
<div>
    <button id="delete--${counter}">Delete This Card</button>
</div>
</article>`
// print card component to the dom
document.querySelector("#card-container").innerHTML += cardComponent 

counter++;
})

document.querySelector("#card-container").addEventListener("click", function (){
    if (event.target.id.includes("delete")) {
        // delete parent card
        console.log("you clicked deleted", event.target.id)
        const idToDelete = event.target.id.split("--")[1]
        console.log(idToDelete)
        const cardToDelete = document.querySelector(`#card--${idToDelete}`)
        console.log(cardToDelete)
        cardToDelete.remove();
    }
})