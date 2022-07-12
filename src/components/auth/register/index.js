import { Formik, Form } from "formik";
import React, {useRef,useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { ERRORS } from "../../../constants/actionTypes";
import MyPhotoInput from "../../common/MyPhotoInput";
import "./index.css";
import { useSelector } from 'react-redux';
import { RegisterUser } from '../register/authAction';
import { push } from 'connected-react-router';

const Register = () => {
  const initState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const refFormik = useRef();
  
  const onSubmitHandler = async (values) => {
    
    try {

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      // Object.entries(values).forEach(([key, value]) =>{console.log("Key:",key)});
      Object.entries(values).forEach(([key, value]) =>{console.log("Value:",value)});
      // console.log("FormData: ", formData);
      // console.log("Values: ", values);
      dispatch(RegisterUser(formData))
          .then(result => {
             
              dispatch(push("/"));
              
          })
          .catch(ex => {
              let answer_errors = {
                  email: '',
              };
              Object.entries(ex.errors).forEach(([key, values]) => {
                  let str = '';
                  values.forEach(text => {
                      str += text + " ";
                  });
                  answer_errors.email = str;
                  dispatch({ type: ERRORS, payloads: answer_errors.email });

              })
          })
  }
  catch (problem) {

      var res = problem.response.data.errors;
      console.log("Another errors:", res);

  }
}
    
  const { errorvalid } = useSelector(res => res.auth);

    useEffect(() => {
        refFormik.current.setErrors({
           "email": errorvalid
        })       
      }, [errorvalid]);    
    
  return (
    // <div className="container">
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Реєстрація</h2>

        <Formik
          innerRef={refFormik}
          initialValues={initState}
          validationSchema={validationFields()}
          onSubmit={onSubmitHandler}
        >
          <Form>
          <MyTextInput 
              label="Ім'я" 
              id="userName" 
              name="userName" 
              type="text" />

            <MyTextInput 
              label="Електронна пошта" 
              id="email" 
              name="email" 
              type="email" />


            <MyTextInput
              label="Пароль"
              id="password"
              name="password"
              type="password"
            />

            <MyTextInput
              label="Підтвердження пароля"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />

            <label className="mb-3">Виберіть фото:</label>
            <MyPhotoInput 
              refFormik={refFormik}
              field="photo" />

            <button type="submit" className="btn btn-primary mt-4">
              Реєструватись
            </button>
          </Form>
        </Formik>
      </div>
    </div>
    // </div>
  );
};

export default Register;
