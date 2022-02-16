import React, { Component } from "react";
import './index.css';

export class RegisterPage extends Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <section>
        <div className="box">
          <div className="form">
            <h2>Реєстрація</h2>
            <form>
              <div className="inputBx">
                <input type="text" placeholder="Email" />
              </div>
              <div className="inputBx">
                <input type="password" placeholder="Password" />
              </div>
              {/* <label className="remember">
                <input type="checkbox" />
                Запам'ятати мене
              </label> */}
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

export default RegisterPage;
