import React, {createContext,  useState } from 'react'

export const Context=createContext();


function TextContext({children}) {
  const [list, setList] = useState([]);

  const data = {
    list, setList
  }

  return (
    <Context.Provider value={data}>
        {children}
    </Context.Provider>
  )
}

export default TextContext