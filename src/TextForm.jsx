import React from 'react'
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import TextContext from "./context/TextContext";
import './form.css'
import { v4 as uuidv4 } from 'uuid';

const schema = Yup.object().shape({
    text: Yup.string().required("Please fill the field!"),
  });
const schemaEdit = Yup.object().shape({
    edit: Yup.string().required("Please fill the field!"),
  });

  
function TextForm() {

  const {list,setList, edit, setEdit, editText, setEditText}=useContext(TextContext)

  function removeAll(){
      setList([]);
  }

  function putTheData(text){
    list.forEach(item => {
      if(item.id === editText.id){
        item.text = text;
      }
    })
    setEdit(false);
  }

  function addTask(task){
    let objAdd = {
      id: uuidv4().substring(0, 6),
      text: task
    }
    setList([...list, objAdd]);
    console.log(list)
  }

  return (
   <>
    <Formik
        initialValues={{ text: '' }}
        validationSchema = {schema}
        onSubmit={(values) => {
          addTask(values.text);
          values.text = '';
        }}
      >
       {({errors}) => (
            <Form className='form'>
                <div>
                  <Field className="input__field" name="text" type="text" />
                  {errors.text ? <div style={{color: 'red'}}>{errors.text}</div> : null}
                </div>
                <button type="submit">ADD</button>
                <button onClick={removeAll} type='button'>Delete ALL</button>
            </Form>
       )}
      </Formik>
      {
          edit &&
              <Formik
                initialValues={{ edit: '' }}
                validationSchema = {schemaEdit}
                onSubmit={(values) => {
                  putTheData(values.edit);
                }}
              >
              {({errors}) => (
                    <Form className='form'>
                        <div>
                          <Field className="input__field" name="edit" type="text" />
                          {errors.edit ? <div style={{color: 'red'}}>{errors.edit}</div> : null}
                        </div>
                        <button type="submit">Submit Edit</button>
                    </Form>
              )}
              </Formik>
      }
   </>
  )
}

export default TextForm