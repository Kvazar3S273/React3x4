import { Formik, Form } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { REGISTER } from "../../../constants/actionTypes";
//import "./indexreg.css";

const RegisterPage = () => {
  const initState = {
    email: "",
    password: "",
    confirmPassword: "",
    errormessages: {},
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values);
      console.log("Server is good", result);
      dispatch({type: REGISTER, payload: values.email});
      history.push("/");
    } catch (error) {
      console.log("Server is bad", error.response);
    }
  };

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Реєстрація</h2>

        <Formik
          initialValues={initState}
          validationSchema={validationFields()}
          onSubmit={onSubmitHandler}
        >
          <Form>
            <MyTextInput label="Логін" id="email" name="email" type="text" />

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

            <button
              type="submit"
              className="btn btn-primary mt-4"
            >
              Реєструватись
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
