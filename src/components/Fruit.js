import { colours } from 'nodemon/lib/config/defaults';
import React, { useState } from 'react'

function Fruit() {

    //array of fruits & color 
    const [fruits, setFruits] = useState([
        { id: 0, name: 'Strawberry', color: getRandomColor() },
        { id: 2, name: 'Blueberry', color: getRandomColor() },
        { id: 3, name: 'Raspberry', color: getRandomColor() },
        { id: 4, name: 'Blackberry', color: getRandomColor() }
    ]);

    //function getRandomColor
    function getRandomColor() {
        const colors = ["red", "blue", "green", "yellow", "purple"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    //console.log(getRandomColor);

    //function changeColor 
    function changeColor(id) {
        const selectedFruit = fruits.filter(fruit => fruit.id === id)[0];
        const unchosenFruits = fruits.filter(fruit => fruit.id !== id); // der rest 
        selectedFruit.color = getRandomColor();
        // selktierte elemente werden wieder zusammengefügt damit die liste vervollständigt ist
        //aktuell selektierte frucht am anfang => sort() - reihenfolge wieder herstellen
        setFruits([selectedFruit, ...unchosenFruits].sort((a, b) => a.id - b.id));
    }


    function deleteFruit(id) {
        setFruits(newFruits => newFruits.filter(fruit => fruit.id !== id))

    }

    //wahrscheinlich irgendwo ein [...fruits]oder so
    //map all fruits
    //click changeColor Button
    //deleteFruit Button to remove a fruit

    return (
        <div data-testid="fruit">
            <ul>
                {
                    fruits.map((fruit, i) => (
                        <li key={i}>
                            <p style={{ color: fruit.color }}> {fruit.name} </p>
                            <button onClick={() => changeColor(fruit.id)}>changeColor</button>
                            {/* annonyme function */}
                            <button onClick={() => deleteFruit(fruit.id)}>deleteFruit</button>
                        </li>
                    ))}
            </ul>
        </div>
    )

};



export default Fruit;