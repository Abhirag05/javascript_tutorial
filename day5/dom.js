//we can change and manipulate the webpage using dom

//1st method(recommended) it is the combination of id,class and all selectors
console.log(document.querySelector("#heading"))

//2nd method
console.log(document.getElementById("heading"))

//changing values in the html
document.querySelector('h1').innerHTML="Welcome to dom"

//changing css
document.querySelector('h1').style.backgroundColor="red"

function changeColor(){
    document.querySelector("button").style.backgroundColor="green"
}
function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("open")
}