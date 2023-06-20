import { colours } from 'nodemon/lib/config/defaults';
import React, { useState } from 'react'

function Fruit() {

    //array of fruits & color 
    const [fruits, setFruits] = useState ([
        {id:0, name: 'Strawberry', color: getRandomColor() },
        {id:2, name: 'Blueberry', color: getRandomColor() },
        {id:3, name: 'Raspberry', color: getRandomColor() },
        {id:4, name: 'Blackberry', color: getRandomColor() }
    ]);

    //function getRandomColor
    function getRandomColor() {
        const colors = ["red", "blue", "green", "yellow", "purple"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    //console.log(getRandomColor);

    //function changeColor 
    function changeColor() {
        
    }

    function deleteFruit(id) {
        setFruits(fruits => fruits.filter(fruit => fruit.id !== id))

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
                            <button onClick={changeColor} >changeColor</button>
                            <button onClick={deleteFruit}>deleteFruit</button>
                        </li>
                    ))}
            </ul>
        </div>
    )

};



export default Fruit;