import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import MyTextInput from "../../common/MyTextInput";
import { useDispatch } from "react-redux";
import validationFields from "./validation";
import { ERRORS } from "../../../constants/actionTypes";
import { LoginUser } from '../login/loginAction';
const LoginPage = () => {
  const initState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onSubmitHandler = async (values) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        formData.append(key, value)
      );
      dispatch(LoginUser(formData))
        .then((result) => {
          if(result.roles==="admin") {
            navigator("/admin");
            return;
          }
          navigator("/");
        })
        .catch((ex) => {
          let answer_errors = {
            email: "",
          };
          Object.entries(ex.errors).forEach(([key, values]) => {
            let str = "";
            values.forEach((text) => {
              str += text + " ";
            });
            answer_errors.email = str;
            dispatch({ type: ERRORS, payload: answer_errors.email });
          });
        });
    } catch (problem) {
      var res = problem.response.data.errors;
      console.log("Another errors:", res);
    }
  };

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Вхід на сайт</h2>
        <p className="text-center">(для адміністратора)</p>

        <Formik
          initialValues={initState}
          validationSchema={validationFields()}
          onSubmit={onSubmitHandler}
        >
          <Form>
            <MyTextInput 
              label="Login" 
              id="email" 
              name="email" 
              type="email" />

            <MyTextInput
              label="Password"
              id="password"
              name="password"
              type="password" />

            <input
              type="submit"
              className="btn btn-primary mt-4"
              value="          Enter          "
            ></input>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
