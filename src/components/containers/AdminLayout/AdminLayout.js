import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Header from "./Header";
import "./style.css";
import logo from "../../../../src/3x4logo.png";
import user from "../../../../src/user.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faArrowRightFromBracket, faCamera, faGear, faInfoCircle, faMoneyBillTrendUp, faSearch, faTv, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'

const AdminLayout = () => {
  function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');

  }
    return (
      <>
        <main>
          {<Outlet />}
          <div className="adminContainer">
            <div className="navigation">
              <ul>
                <li>
                  <a>
                    {/* <img className="logo" src={logo} alt="logo"/> */}
                    <span className="icon" ><i style={{color:"#03a9f4", fontSize:"35px"}}><FontAwesomeIcon icon={faCamera} /></i></span>
                    <span className="title" style={{color:"#03a9f4", fontSize:"20px"}}>3х4 Фотокопіцентр</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faGear} /></i></span>
                      <span className="title">Панель керування</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faUserCircle} /></i></span>
                      <span className="title">Користувачі</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faMoneyBillTrendUp} /></i></span>
                      <span className="title">Управління цінами</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faAd} /></i></span>
                      <span className="title">Управління рекламою</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faInfoCircle} /></i></span>
                      <span className="title">Зміна інформації</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link className="navLink" aria-current="page" to="#">
                      <span className="icon"><i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i></span>
                      <span className="title">Вихід</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>

            <div className="main">
              <div className="topbar">
                <div className="toggle" onClick={toggleMenu}></div>
                <div className="search">
                  <label>
                    <input type="text" placeholder="Search here"/>
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                  </label>
                </div>
                <div className="user">
                    <img src={user} alt="user"/>
                </div>

              </div>

            </div>



          </div>
        </main>
        </>
    );
}

export default AdminLayout;