import React, { useEffect, useState, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown, Dropdown, DropdownButton, ButtonGroup, SplitButton, Button } from 'react-bootstrap';
import logo from "../../../src/3x4logo.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { HashLink } from 'react-router-hash-link';
import { LOG_OUT } from '../../constants/actionTypes';
import { useNavigate } from "react-router-dom";
import { logoutservice } from '../../services/logout.service';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock
} from "@fortawesome/free-solid-svg-icons";

import { 
  PhotoFnd, 
  PhotoFotoprint,
  PhotoPhotobooks,
  PhotoScan,
  PhotoDuplicate,
  PhotoRestoration,
  PhotoBackground,
  PhotoAddition,
  PhotoBottle,
  PhotoPhotopicture,
} from "../../constants/actions/foto";

import { 
  CompXerox,
  CompScan,
  CompLaminate,
  CompBinder,
  CompUsbflash,
  CompVhs,
  CompDiscprint,
  CompEmail
} from "../../constants/actions/comp";

import {
  PoligraphVisitcard,
  PoligraphFlyer,
  PoligraphCalendar,
  PoligraphTag,
  PoligraphSticker,
  PoligraphHanger,
  PoligraphOracal,
  PoligraphBaner,
  PoligraphPvc,
  PoligraphOther,
} from "../../constants/actions/poligraph";

const Header = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        logoutservice.logout();
        dispatch({ type: LOG_OUT });
        navigator("/");
    };

    const handleClickFnd = () => { dispatch(PhotoFnd()); }
    const handleClickFotoprint = () => { dispatch(PhotoFotoprint()); }
    const handleClickPhotobooks = () => { dispatch(PhotoPhotobooks()); }
    const handleClickScan = () => { dispatch(PhotoScan()); }
    const handleClickDuplicate = () => { dispatch(PhotoDuplicate()); }
    const handleClickRestoration = () => { dispatch(PhotoRestoration()); }
    const handleClickBackground = () => { dispatch(PhotoBackground()); }
    const handleClickAddition = () => { dispatch(PhotoAddition()); }
    const handleClickBottle = () => { dispatch(PhotoBottle()); }
    const handleClickPhotopicture = () => { dispatch(PhotoPhotopicture()); }
    
    const handleClickXerox = () => { dispatch(CompXerox()); }
    const handleClickScaner = () => { dispatch(CompScan()); }
    const handleClickLaminate = () => { dispatch(CompLaminate()); }
    const handleClickBinder = () => { dispatch(CompBinder()); }
    const handleClickUsbflash = () => { dispatch(CompUsbflash()); }
    const handleClickVhs = () => { dispatch(CompVhs()); }
    const handleClickDiscprint = () => { dispatch(CompDiscprint()); }
    const handleClickEmail = () => { dispatch(CompEmail()); }

    const handleClickVisitcard = () => { dispatch(PoligraphVisitcard()); }
    const handleClickFlyer = () => { dispatch(PoligraphFlyer()); }
    const handleClickCalendar = () => { dispatch(PoligraphCalendar()); }
    const handleClickTag = () => { dispatch(PoligraphTag()); }
    const handleClickSticker = () => { dispatch(PoligraphSticker()); }
    const handleClickHanger = () => { dispatch(PoligraphHanger()); }
    const handleClickOracal = () => { dispatch(PoligraphOracal()); }
    const handleClickBaner = () => { dispatch(PoligraphBaner()); }
    const handleClickPvc = () => { dispatch(PoligraphPvc()); }
    const handleClickOther = () => { dispatch(PoligraphOther()); }
    
    const { isAuth, user } = useSelector((redux) => redux.auth);
    console.log("User: ", user.name);
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
      // console.log("prevScrollpos = ", prevScrollpos);
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
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/photo">
                  <h6 style={{ color: "#000" }}>Повний перелік</h6>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFnd}>Фото на документи</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFotoprint}>Друк фотографій</h6>
                </HashLink>
              </NavDropdown.Item>

              {/* {['end'].map(
          (direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-end`}
              drop={direction}
              variant="secondary"
              title={`Фотокниги`}
            >
              <Dropdown.Item eventKey="1">BamBook</Dropdown.Item>
              <Dropdown.Item eventKey="2">SlimBook</Dropdown.Item>
              <Dropdown.Item eventKey="3">UniBook</Dropdown.Item>
              <Dropdown.Item eventKey="4">PhotoBook</Dropdown.Item>
              <Dropdown.Item eventKey="5">PrintBook</Dropdown.Item>
              <Dropdown.Item eventKey="6">Планшет</Dropdown.Item>
            </SplitButton>
          ),
        )} */}






              {/* <Dropdown as={ButtonGroup}>
                <Button variant="primary">
                  Фотокниги                                   
                  </Button>
                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <HashLink
                      smooth
                      to="/photo#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobooks}>BamBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">SlimBook</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">UniBook</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">PhotoBook</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">PrintBook</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Планшет</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}








              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                {/* <Link className="nav-link" aria-current="page" to="/page404" >
                        <h6 style={{color:"#000"}}>Фотокниги</h6>
                    </Link> */}
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickPhotobooks}>Фотокниги</h6>
                </HashLink>
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickScan}>Сканування фотографій</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickDuplicate}>Дублікати фотографій</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickRestoration}>Реставрація</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBackground}>Заміна фону</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickAddition}>Об'єднання фотографій</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBottle}>Етикетки на пляшку</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/photo#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickPhotopicture}>Фотокартини</h6>
                </HashLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Комп'ютерні послуги */}

            <NavDropdown title="Комп'ютерні послуги" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/comp">
                  <h6 style={{ color: "#000" }}>Повний перелік</h6>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickXerox}>Ксерокопії</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickScaner}>Сканування</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickLaminate}>Ламінування</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickBinder}>Брошурування</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickUsbflash}>Запис цифрових носіїв</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickVhs}>Оцифровка відеокасет</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickDiscprint}>Друк на дисках</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink smooth to="/comp#component" style={{ color: "#000" }}>
                  <h6 onClick={handleClickEmail}>Послуги E-mail</h6>
                </HashLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* Поліграфія */}

            <NavDropdown title="Поліграфія" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/poligraph">
                  <h6 style={{ color: "#000" }}>Повний перелік</h6>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickVisitcard}>Візитки</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFlyer}>Листівки, флаєри</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickCalendar}>Календарі</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickTag}>Цінники, бірки</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickSticker}>Наклейки</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickHanger}>Хенгери</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickOracal}>Самоклейка плівка</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBaner}>Банер</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickPvc}>Друк на ПВХ</h6>
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickOther}>Інша поліграфія</h6>
                </HashLink>
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
                  {/* Вхід */}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faLock} />
                  </i>
                </Link>
                {/* <Link className="nav-link" to="/register">
                  Реєстрація
                </Link> */}
              </Nav>
            ) : (
              <Nav onClick={() => setNavExpanded(false)}>
                {/* <Link className="nav-link text-danger" to="/admin">
                  Admin panel
                </Link> */}
                <Link className="nav-link" to="/admin">
                  {user.name}
                </Link>
                <Link className="nav-link" to="/" onClick={logout}>
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