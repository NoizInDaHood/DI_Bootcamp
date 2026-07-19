import { useState } from "react";


function Events() {
    const clickMe = () => {
        alert("I was clicked")
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert("The Enter key was pressed, your input is: "+ event.target.value)
        }
    }
    const [isToggleOn , changeState] = useState(true);
    
    const changeToggle = () => {
        changeState(!isToggleOn);
    };
    return (
        <div>
        <button onClick={clickMe}>Click Me</button>
        <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}/>
        <button onClick={changeToggle}>{isToggleOn ? "ON" : "OFF"}</button>
        </div>
    );
};

export default Events;