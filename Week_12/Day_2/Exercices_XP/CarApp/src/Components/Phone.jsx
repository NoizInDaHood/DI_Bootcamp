import { useState } from "react";


function Phone () {
    const [telephone, changeSet] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
    });
    const changeColor = () => {
        changeSet({
            ...telephone,
            color:"blue",
        })
    } 
    return (
        <div>
            <h1>My Phone is a {telephone.brand}</h1>
            <h3>It's a {telephone.color} {telephone.model} from {telephone.year}</h3>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}


export default Phone;