import { useState, useEffect } from "react";

function Color () {
    const [favoriteColor, changeColor] = useState("red");

    useEffect(() =>{
        alert("useEffect reached");
        changeColor("yellow");
    }, []);

    
    
    return (
        <div>
            <h1>My favorite color is {favoriteColor}</h1>
            <button onClick ={() => changeColor("blue")}>Change Favorite Color</button>
        </div>
    )
};

export default Color;