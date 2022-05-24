import React, { useEffect, useState, useRef  } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../../src/3x4logo.png";
import "./index.css";

const Header = () => {

    const { isAuth, username } = useSelector((redux) => redux.auth);
    const ref = useRef(null);
    const [navExpanded, setNavExpanded] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setNavExpanded(false);
            }
          };
          document.addEventListener('click', handleClickOutside, true);
          return () => {
            document.removeEventListener('click', handleClickOutside, true);
          };
    },[]);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-73px";
      }
      prevScrollpos = currentScrollPos;
    };

    return (
      <Navbar
        ref={ref}
        id="navbar"
        bg="light"
        expand="lg"
        onToggle={setNavExpanded}
        expanded={navExpanded}
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
      >
        <Container>
          {/* Лого */}
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="navbar-brand" aria-current="page" to="/">
                <img src={logo} alt="" width="100" />
                </Link>
            </Nav>

          {/* Гамбургер */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/">
                Головна
                </Link>
            </Nav>

            {/* Фотопослуги */}

            <NavDropdown title="Фотопослуги" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo">
                        Повний перелік
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo/fnd">
                        Фото на документи
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo/photoprint">
                        Фотодрук
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo/scan">
                        Сканування фото
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo/photobooks">
                        Фотокниги
                    </Link>
                </NavDropdown.Item>

            </NavDropdown>

            {/* Комп'ютерні послуги */}

            <NavDropdown title="Комп'ютерні послуги" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/comp">
                        Повний перелік
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/comp/xerox">
                        Ксерокопії, друк
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Сканування
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Ламінування
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Брошурування
                    </Link>
                </NavDropdown.Item>

            </NavDropdown>

            {/* Поліграфія */}

            <NavDropdown title="Поліграфія" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/poligraph">
                        Повний перелік
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Ксерокопії, друк
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Візитки
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Листівки
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="#">
                        Календарики
                    </Link>
                </NavDropdown.Item>

            </NavDropdown>

            {/* Контакти */}
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/contacts">
                Контакти
                </Link>
            </Nav>


            {!isAuth ? (
                <Nav onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" to="/login">
                  Вхід
                </Link>
                <Link className="nav-link" to="/register">
                Реєстрація
                </Link>
              </Nav>
                ) : (
                    <Nav onClick={() => setNavExpanded(false)}>
              <Link className="nav-link" to="/profile">
              {username}
              </Link>
              <Link className="nav-link" to="/logout">
                Вихід
              </Link>
            </Nav>
            )}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;