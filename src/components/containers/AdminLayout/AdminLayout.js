import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Header from "./Header";
import "./style.css";
import logo from "../../../../src/3x4logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faArrowRightFromBracket, faGear, faInfoCircle, faMoneyBillTrendUp, faTv, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'

const AdminLayout = () => {
    return (
      <>
        <main>
      {/* <h1>AdminLayout</h1> */}
          {<Outlet />}
          <div className="adminContainer">
            <div className="navigation">
              <ul>
                <li>
                    <img className="logo" src={logo} alt="logo" width="100px" />
                    <span className="title">Фотокопіцентр 3х4</span>
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
          </div>
        </main>
        </>
    );
}

export default AdminLayout;