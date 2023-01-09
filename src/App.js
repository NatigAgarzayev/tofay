import './App.css';
import TextForm from "./TextForm"
import ListToDo from './ListToDo';
import TextContext from './context/TextContext';
import { useState } from 'react';
function App() {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState({});
  const [list, setList] = useState([]);
  const data = {
    list, 
    setList,
    editText,
    setEditText,
    edit,
    setEdit
  }
  return (
    <TextContext.Provider value={data}>
      <TextForm />
      <ListToDo />
    </TextContext.Provider>
  );
}

export default App;
