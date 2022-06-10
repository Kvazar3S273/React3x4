import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faArrowRightFromBracket,
  faCamera,
  faGear,
  faInfoCircle,
  faMoneyBillTrendUp,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a>
            {/* <img className="logo" src={logo} alt="logo"/> */}
            <Link aria-current="page" to={`/admin`}>
              <span className="icon">
                <i style={{ color: "#03a9f4", fontSize: "35px" }}>
                  <FontAwesomeIcon icon={faCamera} />
                </i>
              </span>
              <span
                className="title"
                style={{ color: "#03a9f4", fontSize: "20px" }}
              >
                3х4 Фотокопіцентр
              </span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="/admin/index">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faGear} />
                </i>
              </span>
              <span className="title">Панель керування</span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="/admin/users">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faUserCircle} />
                </i>
              </span>
              <span className="title">Користувачі</span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="/admin/prices">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </i>
              </span>
              <span className="title">Управління цінами</span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="/admin/ad">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faAd} />
                </i>
              </span>
              <span className="title">Управління рекламою</span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="#">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </i>
              </span>
              <span className="title">Зміна інформації</span>
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="navLink" aria-current="page" to="#">
              <span className="icon">
                <i>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </i>
              </span>
              <span className="title">Вихід</span>
            </Link>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;