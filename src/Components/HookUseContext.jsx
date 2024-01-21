import React, { useState, createContext, useContext } from "react";
import NewComponent from './NewComponent'

// Create a context
const UserContext = createContext();

function HookUseContext() {
  const [name, setName] = useState("useContext");

  return (
    <UserContext.Provider value={name}>
      <div>
        <div>Global uses of state.</div>
        <div>
          <NewComponent />
        </div>
      </div>
    </UserContext.Provider>
  );
}



export default HookUseContext;
export {UserContext}
