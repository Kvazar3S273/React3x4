import React, { Component } from "react";
//import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router";
import authService from "../../../services/auth.service";
import TextBoxField from "../../common/TextBoxField";
//import "./indexreg.css";

export class RegisterPage extends Component {
  state = {
    email: "",
    password: ""
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
      console.log("Server is bad", error.response);
    }
  };

  render() {
    //console.log("state", this.state);
    const { email, password } = this.state;
    return (
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <h2 className="text-center mt-3">Реєстрація</h2>
          <form onSubmit={this.onSubmitFormHandler}>
            <TextBoxField
              field="email"
              label="E-mail"
              placeholder="Email"
              value={email}
              onChangeHandler={this.onChangeHandler}
            />
            <TextBoxField
              field="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChangeHandler={this.onChangeHandler}
            />

            <button type="submit" className="btn btn-primary">Реєструватись</button>
          </form>
        </div>
      </div>

      // <section>
      //   <div className="box">
      //     <div className="form">
      //       <h2>Реєстрація</h2>
      //       <form onSubmit={this.onSubmitFormHandler}>
      //         <TextBoxField
      //           field="email"
      //           value={email}
      //           placeholder="Email"
      //           onChangeHandler={this.onChangeHandler}
      //         />
      //         <TextBoxField
      //           field="password"
      //           type="password"
      //           value={password}
      //           placeholder="Password"
      //           onChangeHandler={this.onChangeHandler}
      //         />
      //         {/* <TextBoxField
      //           field=""
      //           type="submit"
      //           value="Реєструватись"
      //           placeholder=""
      //           onChangeHandler={this.onChangeHandler}
      //         /> */}

      //         <div className="inputBx">
      //           <input type="submit" value="Реєструватись" />
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default withRouter(RegisterPage);
