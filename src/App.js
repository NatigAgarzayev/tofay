import './App.css';
import TextForm from "./TextForm"
import ListToDo from './ListToDo';
import TextContext from './context/TextContext';
function App() {
  return (
    <TextContext>
      <TextForm />
      <ListToDo />
    </TextContext>
  );
}

export default App;
