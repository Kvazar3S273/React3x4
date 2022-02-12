import logo from "./3x4logo.jpg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="100" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Головна
                  </a>
                </li>

                     
      


                <li className="navbar-nav nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Фотопослуги
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Фото на документи
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Фотодрук
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Сканування фото
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Комп'ютерні послуги
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Ксерокопії, друк
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Сканування
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ламінування
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Поліграфія
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Візитки
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Листівки
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Календарики
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Контакти
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Пошук по сайту"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Пошук
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default App;
