import React, {useState} from "react";
//useState returns a variable and array and we will be using object destructuring to do so

//1step 1 we will be using a normal variable 
//ALso u will notice that the name changed in the console but not updated inside the dom
/*
function MyComponent(){

    let [name,setName] = useState();

    const updateName = () => {
        name = "SPongeBob";
        console.log(name);
    };

    return(
        <div>
            <p>Your name is : {name}</p>
            <button onClick={updateName}>clickMe</button>
        </div>
    );
}

export default MyComponent;
*/

//2 imprivement is use the function returned by react to update in dom as well
/*
function MyComponent(){

    let [name,setName] = useState("default");

    const updateName = () => {
        name = setName("Sponge Bob");
        // console.log(name);
    };

    return(
        <div>
            <p>Your name is : {name}</p>
            <button onClick={updateName}>clickMe</button>
        </div>
    );
}

export default MyComponent;
*/

//3 Adding some more features
function MyComponent(){

    let [name,setName] = useState("default");
    let [age,setAge] = useState(0);
    let [isEmployed,setIsEmployed] = useState(false);

    const updateName = () => {
        name = setName("SPongeBob");
    };

    const updateAge = () => {
        age = setAge(29);
    };

    const updateStatus = () => {
        isEmployed = setIsEmployed(isEmployed?false:true);
    };

    return(
        <div>
            <p>Your name is : {name}</p>
            <button onClick={updateName}>clickMe</button>

            <p>Your age is : {age}</p>
            <button onClick={updateAge}>set Age</button>

            <p>Your name is : {`${isEmployed}`}</p>
            <button onClick={updateStatus}>toggle status</button>
        </div>
    );
}

export default MyComponent;