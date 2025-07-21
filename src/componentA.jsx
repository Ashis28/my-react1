
import React, { useState } from "react";
import ComponentB from "./componentB.jsx";

function ComponentA() {
    const [user,setUser] = useState("BroCode");

    return (
        <div className="box">
            <p>componentA</p>
            <p>{`Hello ${user}`}</p>

            <ComponentB user = {user}/> 
        </div>
    );
}

export default ComponentA;