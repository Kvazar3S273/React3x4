import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Attention extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col rounded  mb-3"
          style={{ backgroundColor: "#8F0B0B" }}
        >
          <div className="row justify-content-center">
            <div className="container">
              <div>
                <h1 className="text-light text-center mt-2">Увага!</h1>
                <h5 className="text-light text-center mt-2">
                З технічних причин відбулися тимчасові зміни в графіку роботи<br />
                Фотокопіцентру "3х4"
                </h5>

                <Link aria-current="page" to="/contacts">
                  <h3 className="text-light text-center mb-4">
                    Подивитись поточний графік роботи
                  </h3>
                </Link>
                <p className="text-light text-center">
                  Перепрошуємо за незручності
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Attention;
