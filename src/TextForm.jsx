import React from 'react'
import { useState } from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { Context } from "./context/TextContext";
import './form.css'

const schema = Yup.object().shape({
    text: Yup.string().required("Please fill the field!")
});

function TextForm() {

  const {list,setList}=useContext(Context)

  function removeAll(){
      setList([]);
  }

  return (
    <Formik
        initialValues={{ text: '' }}
        validationSchema = {schema}
        onSubmit={(values) => {
          setList([...list, values]);
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
  )
}

export default TextForm