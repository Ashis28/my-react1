
import React, { useState, createContext } from "react";
import ComponentB from "./componentB.jsx";

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("BroCode");

    return (
        <div className="box">
            <p>componentA</p>
            <p>{`Hello ${user}`}</p>

            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
             
        </div>
    );
}

export default ComponentA;