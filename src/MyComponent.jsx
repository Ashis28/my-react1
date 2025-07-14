/* onChange() -  Event handler use primarily with form elements 
                 e.g. <input> , <textarea> , <select> , <radio>
                 Triggers a function everytime the value of input changes
*/

import React , {useState} from 'react';

function MyComponent(){

    let [carname,setName] = useState("Ford");
    let [caryear, setYear] = useState(new Date().getFullYear());
    let [carmodel,setModel] = useState("mustang");
    let [cars,setCars] = useState([]);

    function handleModel(event){
        setModel(event.target.value);
    }

    function handleRemoveElement(index){
        setCars(c=>c.filter((e,i)=>i!=index));
    }
    return(
        <div>
            <h2>List Of car Objects</h2>
            <ul>
                {/* BUG: Using forEach here does not return an array of elements to render. 
                    Suggestion: Use map instead of forEach to render the list of cars. */}
                {cars.map((element,index)=>
                    <li key={index} onClick={()=>handleRemoveElement(index)}>
                        {element.name} - {element.model} - {element.year}
                    </li>
                )}
            </ul>
            <input type="text" value={carname} onChange={(event)=>setName(event.target.value)} />
            <br />
            <input type="text" value={carmodel} onChange={handleModel} />
            <br />
            <input type="number" value={caryear} onChange={(e)=>setYear(e.target.value)}/>
            <br />
            <button onClick={()=>
                setCars(c=>[...c,{name:carname,model:carmodel,year:caryear}])
            }>Add Cars</button>
        </div>
    );
}

export default MyComponent;