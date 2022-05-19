import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../common/MyTextInput";
import { useDispatch } from "react-redux";
import validationFields from "./validation";
import { LOGIN } from "../../../constants/actionTypes";

const LoginPage = () => {
 
  const initState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (values) => {
    dispatch({type: LOGIN, payload: values.email});
    console.log("values submit", values);
  };

  return (
    // <div className="container">
    <div className="row">
        <div className="offset-md-4 col-md-4">
          <h2 className="text-center mt-3">Вхід на сайт</h2>

      
      <Formik
        initialValues={initState}
        validationSchema = {validationFields()}
        onSubmit={onSubmitHandler}
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
    // </div>
  );
};

export default LoginPage;
