import React, { useEffect, useState, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../../src/3x4logo.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { HashLink } from 'react-router-hash-link';
import { LOG_OUT } from '../../constants/actionTypes';
import { useNavigate } from "react-router-dom";
import { logoutservice } from '../../services/logout.service';

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
    const { user } = useSelector(res => res.auth);
    console.log("User: ", user.name);

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
          {/* ???????? */}
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="navbar-brand" aria-current="page" to="/">
                <img src={logo} alt="" width="100" />
                </Link>
            </Nav>

          {/* ?????????????????? */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/" >
                ??????????????
                </Link>
            </Nav>

            {/* ?????????????????????? */}

            <NavDropdown title="??????????????????????" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/photo" >
                        <h6 style={{color:"#000"}}>???????????? ??????????????</h6>
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickFnd}>???????? ???? ??????????????????</h6>
                    </HashLink>
                    
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickFotoprint}>???????? ????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    {/* <Link className="nav-link" aria-current="page" to="/page404" >
                        <h6 style={{color:"#000"}}>??????????????????</h6>
                    </Link> */}
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickPhotobooks}>??????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickScan}>???????????????????? ????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickDuplicate}>?????????????????? ????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickRestoration}>??????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickBackground}>???????????? ????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickAddition}>????'?????????????? ????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickBottle}>???????????????? ???? ????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/photo#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickPhotopicture}>??????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>

                
            </NavDropdown>

            {/* ????????'???????????? ?????????????? */}

            <NavDropdown title="????????'???????????? ??????????????" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/comp" >
                        <h6 style={{color:"#000"}}>???????????? ??????????????</h6>
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickXerox}>????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickScaner}>????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickLaminate}>??????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickBinder}>????????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickUsbflash}>?????????? ???????????????? ????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickDiscprint}>???????? ???? ????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/comp#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickEmail}>?????????????? E-mail</h6>
                    </HashLink>
                </NavDropdown.Item>

            </NavDropdown>

            {/* ???????????????????? */}

            <NavDropdown title="????????????????????" id="basic-nav-dropdown">

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <Link className="nav-link" aria-current="page" to="/poligraph" >
                        <h6 style={{color:"#000"}}>???????????? ??????????????</h6>
                    </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickVisitcard}>??????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickFlyer}>????????????????, ????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickCalendar}>??????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickTag}>??????????????, ??????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickSticker}>????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickHanger}>??????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickOracal}>???????????????????? ????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickBaner}>??????????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickPvc}>???????? ???? ??????</h6>
                    </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setNavExpanded(false)}>
                    <HashLink smooth to="/poligraph#component" style={{color:"#000"}}>
                        <h6 onClick={handleClickOther}>???????? ????????????????????</h6>
                    </HashLink>
                </NavDropdown.Item>
            </NavDropdown>

            {/* ???????????????? */}
            <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" aria-current="page" to="/contacts">
                ????????????????
                </Link>
            </Nav>


            {!isAuth ? (
                <Nav onClick={() => setNavExpanded(false)}>
                <Link className="nav-link" to="/login">
                  ????????
                </Link>
                <Link className="nav-link" to="/register">
                ????????????????????
                </Link>
              </Nav>
                ) : (
                    <Nav onClick={() => setNavExpanded(false)}>
              <Link className="nav-link" to="/profile">
              {user.name}
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                ??????????
              </Link>
            </Nav>
            )}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;