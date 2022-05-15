import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../src/3x4logo.png";

const Navbar = () => {
  const { isAuth, username } = useSelector((redux) => redux.auth);
  console.log("Auth user info ", isAuth);
  return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="100" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Головна
                </Link>
              </li>

              <li className="navbar-nav nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/photo"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Фотопослуги
                </Link>
                <ul
                  className="dropdown-menu bg-secondary"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/photo">
                      Повний перелік
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo/fnd">
                      Фото на документи
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo/photoprint">
                      Фотодрук
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo/scan">
                      Сканування фото
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo/photobooks">
                      Фотокниги
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/comp"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Комп'ютерні послуги
                </Link>
                <ul
                  className="dropdown-menu bg-secondary"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/comp">
                      Повний перелік
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Ксерокопії, друк
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Сканування
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Ламінування
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/poligraph"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Поліграфія
                </Link>
                <ul
                  className="dropdown-menu bg-secondary"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/poligraph">
                      Повний перелік
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Візитки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Листівки
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Календарики
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white-50"
                  aria-current="page"
                  to="/contacts"
                >
                  Контакти
                </Link>
              </li>
            </ul>

            {!isAuth ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white-50"
                    aria-current="page"
                    to="/register"
                  >
                    Реєстрація
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white-50"
                    aria-current="page"
                    to="/login"
                  >
                    Вхід
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white-50"
                    aria-current="page"
                    to="/profile"
                  >
                    {username}
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white-50"
                    aria-current="page"
                    to="/logout"
                  >
                    Вихід
                  </Link>
                </li>
              </ul>
            )}

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Пошук по сайту"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Пошук
              </button>
            </form> */}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
