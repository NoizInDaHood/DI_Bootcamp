// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user.

let newUser = "John";

(function (newUser) {
    const navBar = document.querySelector("nav");
    const newDiv = document.createElement("div");
    newDiv.textContent = `${newUser}`;
    navBar.appendChild(newDiv);

})(newUser);