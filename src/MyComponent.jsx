/*
    updater function - A function that passed as an argument to setState() usually
    ex. setYear(year + 1)
    Allow for safe updaes based on previous state
    Used for multiple state updates and asynchronus functions
    Good practise to use updater functions
*/

import React ,{useState} from 'react'

function MyComponent(){

    let [count,setCount] = useState(0);

    function increament()
    {

        //use the current state to calculate the next state
        //set functions do not trigger an update
        // React batches together state updates for perfomance reasons
        // Next state bocomes the current state after an update.

        // setCount(count+1);
        // setCount(count+1)

        //but using updater function
        // take PENDING state to calculate the next state
        // react puts updater function in a queue (waiting in line)
        // During the render it will call them in the same order

        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    let reset = ()=>{
        setCount(0);
    }
    let decrement = ()=>{
        // setCount(count-1);
        setCount(c=>c-1);
    }
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={increament}>increament</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrement</button>
        </div>
        
    );
    
}

export default MyComponent;