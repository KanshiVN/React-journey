import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();
const Context = (props) => {
    const [users,setUsers] = useState([
        {id:0,userName:"Kanshi",city:"pune"},
        {id:1,userName:"Omega",city:"CD"}
    ]);

    return <UserContext.Provider value={{users,setUsers}}>
         {props.children}
    </UserContext.Provider>
    
}

export default Context;
