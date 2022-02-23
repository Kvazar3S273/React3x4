import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import authService from "../../../services/auth.service";
import TextBoxField from "../../common/TextBoxField";
import "./indexreg.css";

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
      <section>
        <div className="box">
          <div className="form">
            <h2>Реєстрація</h2>
            <form onSubmit={this.onSubmitFormHandler}>
              <TextBoxField
                field="email"
                value={email}
                placeholder="Email"
                onChangeHandler={this.onChangeHandler}
              />
              <TextBoxField
                field="password"
                type="password"
                value={password}
                placeholder="Password"
                onChangeHandler={this.onChangeHandler}
              />
              {/* <TextBoxField
                field=""
                type="submit"
                value="Реєструватись"
                placeholder=""
                onChangeHandler={this.onChangeHandler}
              /> */}

              <div className="inputBx">
                <input type="submit" value="Реєструватись" />
              </div>
            </form>
          </div>
        </div>
      </section>

      // <div className="row">
      //   <div className="offset-md-3 col-md-6">
      //     <h2 className="text-center mt-3">Реєстрація</h2>
      //     <form>
      //       <div className="mb-3">
      //         <label htmlFor="email" className="form-label">
      //           Електронна пошта
      //         </label>
      //         <input type="text" className="form-control" id="email" />
      //       </div>
      //       <div className="mb-3">
      //         <label htmlFor="password" className="form-label">
      //           Пароль
      //         </label>
      //         <input type="text" className="form-control" id="password" />
      //       </div>
      //     </form>
      //   </div>
      // </div>
    );
  }
}

export default withRouter(RegisterPage);
