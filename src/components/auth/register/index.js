import React, { Component } from "react";
//import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import authService from "../../../services/auth.service";
import TextBoxField from "../../common/TextBoxField";
//import "./indexreg.css";

export class RegisterPage extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errormessages: {
    }
  };

  onChangeHandler = (e) => {
    // console.log("onChange name", e.target.name);
    // console.log("onChange value", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitFormHandler = async (e) => {
    e.preventDefault();
    console.log("Відправка на сервер", this.state);
    try {
      const result = await authService.register(this.state);
      console.log("Server is good", result);
      this.props.history.push("/");
    } catch (error) {
      // console.log("Server is bad", error.response);
      var err = error.response.data.errors;
      var takeerr = Object.keys(err).map((key) => err[key]);
      const listErrors = takeerr.map((item) => <li key={item}>{item}</li>);
      this.setState({ errormessages: listErrors });
      console.log(this.state.errormessages);
    }
  };

  render() {
    //console.log("state", this.state);
    const { email, password, confirmPassword, errormessages, num } = this.state;
    return (
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <h2 className="text-center mt-3">Реєстрація</h2>
          <form
            className="row g-3 was-validated"
            onSubmit={this.onSubmitFormHandler}
          >
            <TextBoxField
              field="email"
              label="E-mail"
              num="0"
              value={email}
              onChangeHandler={this.onChangeHandler}
            />
            <span className="text-danger">{errormessages[num]}</span>

            <TextBoxField
              field="password"
              label="Пароль"
              num="1"
              type="password"
              value={password}
              onChangeHandler={this.onChangeHandler}
            />
            <span className="text-danger">{errormessages[num]}</span>

            <TextBoxField
              field="confirmPassword"
              label="Підтвердження пароля"
              num="2"
              type="password"
              value={confirmPassword}
              onChangeHandler={this.onChangeHandler}
            />

            <button type="submit" className="btn btn-primary mt-4">
              Реєструватись
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);
