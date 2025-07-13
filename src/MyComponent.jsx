
import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "orange", "Banana"]);

    function handleAddFood(){
        const input = document.getElementById("food-cart");
        const newFood = input.value.trim();
        if (newFood) {
            setFoods([...foods, newFood]);
            input.value = "";
        }
    }

    function handleRemoveFood(index){
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((element, index) =>
                    <li key={index} onClick={()=>handleRemoveFood(index)} >{element}</li>
                )}
            </ul>

            <input type="text" id='food-cart'/>
            <button onClick={handleAddFood}>AddFood</button>
        </div>
    );
}

export default MyComponent;