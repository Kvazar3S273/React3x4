import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../common/MyTextInput";
import { useDispatch } from "react-redux";

const LoginPage = () => {
 
  const initState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const loginComplete = (e) => {
    e.preventDefault();
    dispatch({type: "LOGINED_EVENT"});
  }
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
          <input 
          type="button" 
          className="btn btn-danger mt-4"
          onClick={loginComplete}
          value="Зайшов">
            </input>  
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default LoginPage;
