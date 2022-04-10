import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../common/MyTextInput";

const LoginPage = () => {
 
  return (
    <div className="row">
        <div className="offset-md-4 col-md-4">
          <h2 className="text-center mt-3">Вхід на сайт</h2>

      
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema = {Yup.object({
          email: Yup.string()
          .email("Не коректно вказана пошта")
          .required("Вкажіть пошту"),
          password: Yup.string()
          .required("Введіть пароль")
          .min(5,"Пароль не може бути коротшим за 5 символів")
          .matches(/[a-zA-Z]/,"Пароль повинен містити латинські символи")
        })}
        onSubmit={(values) => {
          console.log("values submit", values);
        }}
      >
        <Form>
          
          <MyTextInput 
          label="Логін"
          id="email" 
          name="email" 
          type="text" 
          />

          <MyTextInput 
          label="Пароль" 
          id="password"
          name="password" 
          type="password" 
          />
          
          <input 
          type="submit" 
          className="btn btn-primary mt-4"
          value="Вхід">
            </input>  
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default LoginPage;
