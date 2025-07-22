
import React, { useContext } from "react";
import { UserContext } from "./componentA";

// The error "cannot access UserContext before initialization" occurs because
// you are trying to use the useContext(UserContext) hook at the top level,
// outside of a React component or hook. Hooks like useContext must be called
// inside a functional component or another hook, not at the module level.

function ComponentD() {
    const user = useContext(UserContext); // <-- useContext should be called here, inside the component
    return (
        <div className="box">
            <p>componentD</p>
            <p>{`Bye ${user}`}</p>
        </div>
    );
}

export default ComponentD;

//passing props in each component so we can use in last

//Props drillinng