import React from "react";
import {useContext} from 'react'
import {UserContext} from './HookUseContext'

function NewComponent() {
  // Use the context
  const user = useContext(UserContext);

  return <div>name is: {user}</div>;
}

export default NewComponent;
