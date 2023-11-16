import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  SplitButton,
  Button,
} from "react-bootstrap";
import logo from "../../../src/3x4logo.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { LOG_OUT } from "../../constants/actionTypes";
import { useNavigate } from "react-router-dom";
import { logoutservice } from "../../services/logout.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  PhotoFnd,
  PhotoFotoprint,
  PhotoPhotobooks,
  PhotoPhotobooksUniBook,
  PhotoPhotobooksSlimBook,
  PhotoPhotobooksPhotoBook,
  PhotoPhotobooksPrintBook,
  PhotoPhotobooksBamBook,
  PhotoPhotobooksPlanshet,
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
  CompEmail,
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
  PoligraphBuklet,
  PoligraphPlakat,
  PoligraphBroshura,
  PoligraphCalendar3d,
  PoligraphMenu,
  PoligraphBloknot,
  PoligraphCards,
  PoligraphLeaf,
  PoligraphKonvert,
  PoligraphBlank
} from "../../constants/actions/poligraph";

const Header = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    logoutservice.logout();
    dispatch({ type: LOG_OUT });
    navigator("/");
  };

  const handleClickFnd = () => {
    dispatch(PhotoFnd());
  };
  const handleClickFotoprint = () => {
    dispatch(PhotoFotoprint());
  };
  const handleClickPhotobooks = () => {
    dispatch(PhotoPhotobooks());
  };
  const handleClickPhotobookBamBook = () => {
    dispatch(PhotoPhotobooksBamBook());
  };
  const handleClickPhotobookSlimBook = () => {
    dispatch(PhotoPhotobooksSlimBook());
  };
  const handleClickPhotobookUniBook = () => {
    dispatch(PhotoPhotobooksUniBook());
  };
  const handleClickPhotobookPhotoBook = () => {
    dispatch(PhotoPhotobooksPhotoBook());
  };
  const handleClickPhotobookPrintBook = () => {
    dispatch(PhotoPhotobooksPrintBook());
  };
  const handleClickPhotobookPlanshet = () => {
    dispatch(PhotoPhotobooksPlanshet());
  };
  const handleClickScan = () => {
    dispatch(PhotoScan());
  };
  const handleClickDuplicate = () => {
    dispatch(PhotoDuplicate());
  };
  const handleClickRestoration = () => {
    dispatch(PhotoRestoration());
  };
  const handleClickBackground = () => {
    dispatch(PhotoBackground());
  };
  const handleClickAddition = () => {
    dispatch(PhotoAddition());
  };
  const handleClickBottle = () => {
    dispatch(PhotoBottle());
  };
  const handleClickPhotopicture = () => {
    dispatch(PhotoPhotopicture());
  };

  const handleClickXerox = () => {
    dispatch(CompXerox());
  };
  const handleClickScaner = () => {
    dispatch(CompScan());
  };
  const handleClickLaminate = () => {
    dispatch(CompLaminate());
  };
  const handleClickBinder = () => {
    dispatch(CompBinder());
  };
  const handleClickUsbflash = () => {
    dispatch(CompUsbflash());
  };
  const handleClickVhs = () => {
    dispatch(CompVhs());
  };
  const handleClickDiscprint = () => {
    dispatch(CompDiscprint());
  };
  const handleClickEmail = () => {
    dispatch(CompEmail());
  };

  const handleClickVisitcard = () => {
    dispatch(PoligraphVisitcard());
  };
  const handleClickFlyer = () => {
    dispatch(PoligraphFlyer());
  };
  const handleClickCalendar = () => {
    dispatch(PoligraphCalendar());
  };
  const handleClickTag = () => {
    dispatch(PoligraphTag());
  };
  const handleClickSticker = () => {
    dispatch(PoligraphSticker());
  };
  const handleClickHanger = () => {
    dispatch(PoligraphHanger());
  };
  const handleClickOracal = () => {
    dispatch(PoligraphOracal());
  };
  const handleClickBaner = () => {
    dispatch(PoligraphBaner());
  };
  const handleClickPvc = () => {
    dispatch(PoligraphPvc());
  };
  const handleClickOther = () => {
    dispatch(PoligraphOther());
  };
  const handleClickBuklet = () => {
    dispatch(PoligraphBuklet());
  };
  const handleClickPlakat = () => {
    dispatch(PoligraphPlakat());
  };
  const handleClickBroshura = () => {
    dispatch(PoligraphBroshura());
  };
  const handleClickCalendar3d = () => {
    dispatch(PoligraphCalendar3d());
  };
  const handleClickMenu = () => {
    dispatch(PoligraphMenu());
  };
  const handleClickBloknot = () => {
    dispatch(PoligraphBloknot());
  };
  const handleClickCards = () => {
    dispatch(PoligraphCards());
  };
  const handleClickLeaf = () => {
    dispatch(PoligraphLeaf());
  };
  const handleClickKonvert = () => {
    dispatch(PoligraphKonvert());
  };
  const handleClickBlank = () => {
    dispatch(PoligraphBlank());
  };

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
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
          <Nav className="me-auto ms-2" onClick={() => setNavExpanded(false)}>
            <Button
              className="nav-button me-auto"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
            >
              <Nav.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/">
                  <h6>Головна</h6>
                </Link>
              </Nav.Item>
            </Button>
          </Nav>

          {/* Фотопослуги */}

          <Dropdown as={ButtonGroup} className="ms-2">
            <Button
              // variant="secondary"
              className="nav-button"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
            >
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/photo">
                  <h6>Фотопослуги</h6>
                </Link>
              </NavDropdown.Item>
            </Button>

            <Dropdown.Toggle
              split
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
              className="nav-button mr-2"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <HashLink
                  smooth
                  to="/photo#fnd"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFnd}>Фото на документи</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">
                <HashLink
                  smooth
                  to="/photo#printfoto"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFotoprint}>Друк фотографій</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-4">
                <HashLink
                  smooth
                  to="/photo#scan"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickScan}>Сканування фотографій</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-5">
                <HashLink
                  smooth
                  to="/photo#duplicate"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickDuplicate}>Дублікати фотографій</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-6">
                <HashLink
                  smooth
                  to="/photo#restoration"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickRestoration}>Реставрація</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-7">
                <HashLink
                  smooth
                  to="/photo#background"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBackground}>Заміна фону</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-8">
                <HashLink
                  smooth
                  to="/photo#addition"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickAddition}>Об'єднання фотографій</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-9">
                <HashLink
                  smooth
                  to="/photo#bottle"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBottle}>Етикетки на пляшку</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-10">
                <HashLink
                  smooth
                  to="/photo#photopicture"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickPhotopicture}>Фотокартини</h6>
                </HashLink>
              </Dropdown.Item>

              {/* Фотокниги */}

              <Dropdown as={ButtonGroup}>
                <Button
                  // variant="dark"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#C2C0BC",
                    borderRadius: "0px",
                  }}
                  className="nav-button"
                >
                  <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                    <HashLink
                      smooth
                      to="/photo#photobooks"
                      // style={{ color: "#fff" }}
                    >
                      <h6
                        onClick={handleClickPhotobooks}
                        style={{ color: "#000000" }}
                      >
                        Фотокниги
                      </h6>
                    </HashLink>
                  </NavDropdown.Item>
                </Button>

                <Dropdown.Toggle
                  split
                  // variant="dark"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#C2C0BC",
                    borderRadius: "0px",
                    color: "#000000",
                  }}
                  className="nav-button"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <HashLink
                      smooth
                      to="/photo#photobooks-bambook"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookBamBook}>BamBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <HashLink
                      smooth
                      to="/photo#photobooks-slimbook"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookSlimBook}>SlimBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <HashLink
                      smooth
                      to="/photo#photobooks-unibook"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookUniBook}>UniBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    <HashLink
                      smooth
                      to="/photo#photobooks-photobook"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookPhotoBook}>PhotoBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    <HashLink
                      smooth
                      to="/photo#photobooks-printbook"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookPrintBook}>PrintBook</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    <HashLink
                      smooth
                      to="/photo#photobooks-planshet"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPhotobookPlanshet}>Планшет</h6>
                    </HashLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>

          {/* Комп'ютерні послуги */}

          <Dropdown as={ButtonGroup} className="ms-2">
            <Button
              // variant="secondary"
              className="nav-button"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
            >
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/comp">
                  <h6>Комп'ютерні послуги</h6>
                </Link>
              </NavDropdown.Item>
            </Button>

            <Dropdown.Toggle
              split
              // variant="secondary"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
              className="nav-button mr-2"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <HashLink smooth to="/comp#xerox" style={{ color: "#000" }}>
                  <h6 onClick={handleClickXerox}>Ксерокопії</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">
                <HashLink smooth to="/comp#scaner" style={{ color: "#000" }}>
                  <h6 onClick={handleClickScaner}>Сканування</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-4">
                <HashLink smooth to="/comp#laminate" style={{ color: "#000" }}>
                  <h6 onClick={handleClickLaminate}>Ламінування</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-5">
                <HashLink smooth to="/comp#binder" style={{ color: "#000" }}>
                  <h6 onClick={handleClickBinder}>Брошурування</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-6">
                <HashLink smooth to="/comp#usbflash" style={{ color: "#000" }}>
                  <h6 onClick={handleClickUsbflash}>Запис цифрових носіїв</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-7">
                <HashLink smooth to="/comp#vhs" style={{ color: "#000" }}>
                  <h6 onClick={handleClickVhs}>Оцифровка відеокасет</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-8">
                <HashLink smooth to="/comp#discprint" style={{ color: "#000" }}>
                  <h6 onClick={handleClickDiscprint}>Друк на дисках</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-9">
                <HashLink smooth to="/comp#email" style={{ color: "#000" }}>
                  <h6 onClick={handleClickEmail}>Послуги E-mail</h6>
                </HashLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Поліграфія */}

          <Dropdown as={ButtonGroup} className="ms-2">
            <Button
              // variant="secondary"
              className="nav-button"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
            >
              <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/poligraph">
                  <h6>Поліграфія</h6>
                </Link>
              </NavDropdown.Item>
            </Button>

            <Dropdown.Toggle
              split
              // variant="secondary"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
              className="nav-button mr-2"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickVisitcard}>Візитки</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickFlyer}>Листівки, флаєри</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-4">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickCalendar}>Календарі</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-5">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickTag}>Цінники, бірки</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-6">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickSticker}>Наклейки</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-7">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickHanger}>Хенгери</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-8">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickOracal}>Самоклейка плівка</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-9">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickBaner}>Банер</h6>
                </HashLink>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-10">
                <HashLink
                  smooth
                  to="/poligraph#component"
                  style={{ color: "#000" }}
                >
                  <h6 onClick={handleClickPvc}>Друк на ПВХ</h6>
                </HashLink>
              </Dropdown.Item>

              {/* Фотокниги */}

              <Dropdown as={ButtonGroup}>
                <Button
                  // variant="dark"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#C2C0BC",
                    borderRadius: "0px",
                  }}
                  className="nav-button"
                >
                  <NavDropdown.Item onClick={() => setNavExpanded(false)}>
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      // style={{ color: "#fff" }}
                    >
                      <h6
                        onClick={handleClickOther}
                        style={{ color: "#000000" }}
                      >
                        Інша поліграфія
                      </h6>
                    </HashLink>
                  </NavDropdown.Item>
                </Button>

                <Dropdown.Toggle
                  split
                  // variant="dark"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#C2C0BC",
                    borderRadius: "0px",
                    color: "#000000",
                  }}
                  className="nav-button"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickBuklet}>Буклети</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickPlakat}>Плакати</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickBroshura}>Брошури</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickCalendar3d}>Об'ємні календарі</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickMenu}>Меню</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickBloknot}>Блокноти</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-7">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickCards}>Пластикові картки</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-8">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickLeaf}>Блоки для запису</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-9">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickKonvert}>Конверти</h6>
                    </HashLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-10">
                    <HashLink
                      smooth
                      to="/poligraph#component"
                      style={{ color: "#000" }}
                    >
                      <h6 onClick={handleClickBlank}>Бланки</h6>
                    </HashLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>

          {/* Контакти */}

          <Nav className="me-auto ms-2" onClick={() => setNavExpanded(false)}>
            <Button
              className="nav-button me-auto"
              style={{
                background: "#2F353A",
                borderColor: "#494E53",
                borderRadius: "0px",
              }}
            >
              <Nav.Item onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/contacts">
                  <h6>Контакти</h6>
                </Link>
              </Nav.Item>
            </Button>
          </Nav>


          {/* <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
            <Link className="nav-link" aria-current="page" to="/contacts">
              Контакти
            </Link>
          </Nav> */}

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
};

export default Header;
