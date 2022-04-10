import { Formik, Form } from "formik";
import React, { Component } from "react";
//import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import * as Yup from "yup";
//import "./indexreg.css";

const RegisterPage = () => {
  // state = {
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   errormessages: {
  //   }
  // };

  // onChangeHandler = (e) => {
  //   // console.log("onChange name", e.target.name);
  //   // console.log("onChange value", e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // onSubmitFormHandler = async (e) => {
  //   e.preventDefault();
  //   console.log("Відправка на сервер", this.state);
  //   try {
  //     const result = await authService.register(this.state);
  //     console.log("Server is good", result);
  //     this.props.history.push("/");
  //   } catch (error) {
  //     // console.log("Server is bad", error.response);
  //     var err = error.response.data.errors;
  //     var takeerr = Object.keys(err).map((key) => err[key]);
  //     const listErrors = takeerr.map((item) => <li key={item}>{item}</li>);
  //     this.setState({ errormessages: listErrors });
  //     console.log(this.state.errormessages);
  //   }
  // };

  //console.log("state", this.state);
  //const { email, password, confirmPassword, errormessages, num } = this.state;

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Реєстрація</h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Не коректно вказана пошта")
              .required("Вкажіть пошту"),
            password: Yup.string()
              .required("Введіть пароль")
              .min(5, "Пароль не може бути коротшим за 5 символів")
              .matches(
                /[a-zA-Z]/,
                "Пароль повинен містити великі і малі символи"
              ),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'),null],"Не співпадає з введеним паролем")
              .required("Потрібно підтвердити пароль")
  
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

            <input
              type="submit"
              className="btn btn-primary mt-4"
              value="Реєструватись"
            ></input>
          </Form>
        </Formik>
          
      </div>
    </div>
  );
};

export default withRouter(RegisterPage);
