import React, { useState } from 'react'
import { useContext } from "react";
import TextContext from "./context/TextContext";
import './form.css'
function ListToDo() {


  const {list,setList, edit, setEdit, editText, setEditText}=useContext(TextContext);

  function removeTask(id){
    setList(list.filter(x => x.id !== id))
  }
  function editTask(text, id){
    setEdit(true);
    let obj = {
      id: id,
      text: text
    }
    setEditText(obj);
  }
  return (
    <div>
        <ul className='list'>
            {
              console.log('render'),
                list && list.map((item, index) => (
                    <li className='list__item' key={index}>
                        <span>
                            {item.text}
                        </span>
                        <div onClick={() => removeTask(item.id)}>
                            Delete
                        </div>
                        <div onClick={() => editTask(item.text, item.id)}>
                            Edit
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListToDo