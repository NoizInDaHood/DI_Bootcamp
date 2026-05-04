// Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. 
// (the last <li> of the second <ul>)

// Add a border to the <li> that contains the text node “Richard”. 
// (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div)

const body = document.querySelector("body");
const container = document.getElementById("container");
console.log(container);
container.style.backgroundColor = "lightblue";
body.style.fontSize = "20px";
container.style.padding = "10px";

const list = document.querySelectorAll(".list");
list[0].children[1].textContent = "Richard";
list[0].children[1].style.border = "1px solid black";

list[1].removeChild(list[1].children[1]);
list[1].lastElementChild.style.display = "none";
list.forEach((ul, index) => {
    ul.classList.add("student_list");
    ul.children[0].textContent = "Zion";
    if (index === 0) {
        ul.classList.add("university", "attendance")
    };
});
if (container.style.backgroundColor === "lightblue") {
    alert(`Hello ${list[0].children[0].textContent} and ${list[0].children[1].textContent}!`);
}

