
import React , {useState} from 'react';

function MyComponent(){

    let [count,setCount] = useState(0);

    let increament = ()=>{
        count++;
        count = setCount(count);
    };
    let decreament = ()=>{
        count--;
        count = setCount(count);
    };
    let reset = ()=>{
        count = 0;
        count = setCount(count);
    };

    return(
        <div className='container'>

            <p>{`${count}`}</p>
            
            <button onClick={increament}>increament</button>
            <button onClick={reset}>reset</button>
            <button onClick={decreament}>decrement</button>
            
        </div>
    );
}

export default MyComponent;