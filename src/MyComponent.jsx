/* onChange() -  Event handler use primarily with form elements 
                 e.g. <input> , <textarea> , <select> , <radio>
                 Triggers a function everytime the value of input changes
*/

import React , {useState} from 'react';

function MyComponent(){

    const [car,setObject] = useState({name : "ford",
                                      model : "mustang",
                                       year : 2025 });

    function handleNameChange(e){
        //this will update as Representing you ford then next text will be vanish
        // setObject({name:e.text.value});

        //use
        setObject(c=>({...c,name:e.target.value}))
    }
    function handleYearChange(e){
        // setObject(prevCar=>({...prevCar,year:e.target.value}));
        setObject({...car,year:e.target.value});  //...car = {name:"abc",mode:"xyz",year:1234}
        //and when two objects properties repeat the second one comes so we use ...spread operator
    }
    return(
        <div>
            <p>Representing you {car.name} {car.model} {car.year}</p>

            <input type="text" value={car.name} onChange={handleNameChange}/>
            <input
                type="text"
                value={car.model}
                onChange={e => setObject(c => ({ ...c, model: e.target.value }))}
            />
            <input type="number" value={car.year} onChange={handleYearChange} />
        </div>
    );
}

export default MyComponent;