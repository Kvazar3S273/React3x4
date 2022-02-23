import React, { Component } from 'react'
import './indexlog.css';

export class LoginPage extends Component {
  render() {
    return (
      <section>
        <div className="box">
          <div className="form">
            <h2>Вхід</h2>
            <form>
              <div className="inputBx">
                <input type="text" placeholder="Email" />
              </div>
              <div className="inputBx">
                <input type="password" placeholder="Password" />
              </div>
              <label className="remember">
                <input type="checkbox" />
                  Запам'ятати мене
              </label>
              <div className="inputBx">
                <input type="submit" value="Увійти" />
              </div>
            </form>
            <p>Забули пароль</p>
            <p>Зареєструватись</p>
          </div>
        </div>
      </section>
    )
  }
}

export default LoginPage;
