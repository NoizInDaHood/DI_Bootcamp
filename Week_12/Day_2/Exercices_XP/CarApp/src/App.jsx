// JSX
// Components
// React Lifecycle
// Event Handlers


// NOTE: You will use the same React App for all the Exercises XP
// Create a React App and start your app



// Exercise 1 : Car and components
// Instructions
// Part I : A Car Component

// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};

// In your React app create a new folder in the src path, name it Components. It should contain a Functional Component named Car.js.

// In the Car.js component render a header with the carInfo model, for example This car is <model>.

// Import the Car.js component to the App.js.


// Part II : useState Hook

// Use the state hook in the Car component to add a color variable to the state.

// Return the color property, for example This car is <color> <model>.


// Part III : Garage

// Create another Functional Component inside your Components folder, called Garage.js.

// Use an attribute to pass a size to the Garage component, <Garage size="small" />.

// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?


// Exercise 2 : Events
// Instructions
// Part I:

// Create a new Functional component named Events.

// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.

// In the return, create a button that when clicked on, calls the clickMe function. Use the onClick event handler.

// Expected output (without the grey border):
// events7



// Part II:

// In the Events Functional component, in the return, create an input tag that has an onKeyDown event handler, that listens to a function called handleKeyDown.

// keyEnter


// When you type something in the input field and press the ‘Enter key’, the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:

// keyEnter2


// events8



// Part III:

// In the Events Functional component, using the state hook, declare a state variable named isToggleOn and set it to true.

// In the return, create a button that has an onClick event that will switch the state variable between ‘ON’ and ‘OFF’

// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable.

// Output for ‘ON’:

// on

// Output for ‘OFF’:

// off



// Exercise 3 : Phone and components
// Instructions
// Part I : Phone

// Create a new Functional Component named Phone. Use the state hook to create the following state variables:

// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020


// In the return of the Phone component, display the values of the state variables.


// Import the Phone component and display it in your App.js.

// Expected output (without the grey border):

// ninja8



// Part II : Change the Phone

// In the Phone component create a function named changeColor that updates the state variable to ‘blue’

// In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.

// Expected output (without the grey border):when you click the button

// ninja9



// Exercise 4 : useEffect hook
// Instructions
// Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.

// Output the value in a header tag.

// Expected output (without the grey border):

// red


// Note : The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”

// Expected output (without the grey border):

// yellow


// Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.

// Expected output (without the grey border):

// blue


import Car from './Components/Car.jsx';
import Events from './Components/Events.jsx';
import Phone from './Components/Phone.jsx';
import Color from './Components/Color.jsx';
const carInfo = { name: "Ford", model: "Mustang" };


function App() {
  return (
    <div>
      <Car carInfo={carInfo}/>
      <Events/>
      <Phone/>
      <Color/>

    </div>
  );
}

export default App;
