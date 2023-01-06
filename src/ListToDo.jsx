import React from 'react'
import { useContext } from "react";
import { Context } from "./context/TextContext";
import './form.css'
function ListToDo() {

  const {list,setList}=useContext(Context)
  function removeTask(e, index){
    setList(list.filter(x => index !== 2))
  }
  console.log('list =',list)
  return (
    <div>
        <ul className='list'>
            {
                list && list.map((item, index) => (
                    <li className='list__item' key={index}>
                        {item.text}
                        <div onClick={(e) => removeTask(e, index)}>
                            Delete
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListToDo