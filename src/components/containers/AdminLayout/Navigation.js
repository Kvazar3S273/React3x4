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
import { useDispatch } from "react-redux";
import { NotShowMenu, ShowAdvertise, ShowInfo, ShowPrices, ShowUsers } from "../../../constants/actions/show";

const Navigation = () => {

  const dispatch = useDispatch();
  
  const handleClickUsers = () => { dispatch(ShowUsers()); }
  const handleClickPrices = () => { dispatch(ShowPrices()); }
  const handleClickAdvertise = () => { dispatch(ShowAdvertise()); }
  const handleClickInfo = () => { dispatch(ShowInfo()); }
  const handleClickNotShowMenu = () => { dispatch(NotShowMenu()); }

  return (
    <div className="navigation">
      <ul>
        <li>
          <a>
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
          <a onClick={handleClickNotShowMenu}>
            <span className="icon">
              <i>
                <FontAwesomeIcon icon={faGear} />
              </i>
            </span>
            <span className="title">Панель керування</span>
          </a>
        </li>
        <li>
          <a onClick={handleClickUsers}>
            <span className="icon">
              <i>
                <FontAwesomeIcon icon={faUserCircle} />
              </i>
            </span>
            <span className="title">Користувачі</span>
          </a>
        </li>
        <li>
          <a onClick={handleClickPrices}>
            <span className="icon">
              <i>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              </i>
            </span>
            <span className="title">Керування цінами</span>
          </a>
        </li>
        <li>
          <a onClick={handleClickAdvertise}>
            <span className="icon">
              <i>
                <FontAwesomeIcon icon={faAd} />
              </i>
            </span>
            <span className="title">Управління рекламою</span>
          </a>
        </li>
        <li>
          <a onClick={handleClickInfo}>
            <span className="icon">
              <i>
                <FontAwesomeIcon icon={faInfoCircle} />
              </i>
            </span>
            <span className="title">Зміна інформації</span>
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