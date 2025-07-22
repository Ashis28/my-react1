import React, { useEffect, useRef } from "react";

//useRef returns an object with single attribute 
function MyComponent() {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RERENDERED");
    });

    function handleInp() {
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = "green";
        }
    }

    return (
        <div>
            <button onClick={handleInp}>ClickMe</button>
            <input ref={inputRef} />
        </div>
    );
}

export default MyComponent;