/* onChange() -  Event handler use primarily with form elements 
                 e.g. <input> , <textarea> , <select> , <radio>
                 Triggers a function everytime the value of input changes
*/

import React , {useState} from 'react';

function MyComponent(){

    let [name,setName] = useState("default");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    return(
        <div>
             <input value={name} onChange={handleNameChange}></input>
             <p>{name}</p>
        </div>
       
    );
}

export default MyComponent;