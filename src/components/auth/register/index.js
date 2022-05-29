import { Formik, Form } from "formik";
import React, {useRef}  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { REGISTER } from "../../../constants/actionTypes";
import MyPhotoInput from "../../common/MyPhotoInput";
import "./index.css";

const RegisterPage = () => {
  const initState = {
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
      console.log("submit data ", values);

      console.log("Server submit file", JSON.stringify(
        {
          fileName: values.photo.name,
          type: values.photo.type,
          size: `${values.photo.size} bytes`
        }));


      const result = await authService.register(values);
      console.log("Server is good", result);
      dispatch({ type: REGISTER, payload: values.email });
      await navigator("/");

    } catch (error) {
      console.log("Server is very bad", error.response);
    }
  };

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
              label="Логін" 
              id="email" 
              name="email" 
              type="text" />


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

export default RegisterPage;
