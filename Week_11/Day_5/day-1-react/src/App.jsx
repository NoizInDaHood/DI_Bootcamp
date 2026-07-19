import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserFavoriteAnimals from "./UserFavoriteAnimals.jsx"

function App() {
  
  const myelement = <h1>I Love JSX!</h1>;
  const helloWorld = <p>Hello World!</p>;
  const sum = 5 + 5;
  const sentence = <p>React is {sum} times better with JSX</p>

  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
  
  const firstName = <h3>{user.firstName}</h3>;
  const lastName = <h3>{user.lastName}</h3>;

  return (
    <>
      {myelement}
      {helloWorld}
      {sentence}
      {firstName}
      {lastName}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </>
  )
}

export default App
