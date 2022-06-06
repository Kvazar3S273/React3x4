import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMoneyBillTrendUp,
  faAd,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="row justify-content-center">
      {/* Картка 1 */}
      {/* <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded "> */}
      <div className="col m-3 p-2 border bg-light rounded">
        <Link aria-current="page" to="#">
            <i style={{ fontSize: "4em", color: "#03a9f4", alignItems:"center" }}>
              <FontAwesomeIcon icon={faUserCircle} />
            </i>
          <div>
            <h4 className="card-title text-center">Користувачі</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Перегляд списку зареєстрованих користувачів
            </p>
          </div>
        </Link>
      </div>

      {/* Картка 2 */}
      {/* <div className="col-9 col-sm-5 col-md-3  m-2 p-2 border bg-light rounded "> */}
      <div className="col  m-3 p-2 border bg-light rounded ">
        <Link aria-current="page" to="#">
            <i style={{ fontSize: "4em", color: "#03a9f4", alignItems:"center" }}>
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            </i>
          <div>
            <h4 className="card-title text-center">Управління цінами</h4>
          </div>

          <div className="card-body">
            <p className="card-text">
              Зміна прейскурантів, завантаження файлів прейскурантів
            </p>
          </div>
        </Link>
      </div>

      {/* Картка 3 */}
      {/* <div className="col-9 col-sm-5 col-md-3  m-2 p-2 border bg-light rounded "> */}
      <div className="col m-3 p-2 border bg-light rounded ">
        <Link aria-current="page" to="#">
            <i style={{ fontSize: "4em", color: "#03a9f4", alignItems:"center" }}>
              <FontAwesomeIcon icon={faAd} />
            </i>
          <div>
            <h4 className="card-title text-center">Управління рекламою</h4>
          </div>

          <div className="card-body">
            <p className="card-text">Заміна або оновлення рекламних блоків</p>
          </div>
        </Link>
      </div>

      {/* Картка 4 */}
      {/* <div className="col-9 col-sm-5 col-md-3  m-2 p-2 border bg-light rounded "> */}
      <div className="col m-3 p-2 border bg-light rounded ">
        <Link aria-current="page" to="#">
            <i style={{ fontSize: "4em", color: "#03a9f4", alignItems:"center" }}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </i>
          <div>
            <h4 className="card-title text-center">Зміна інформації</h4>
          </div>

          <div className="card-body">
            <p className="card-text">
              Зміна персональної інформації (графік роботи, поточний рік тощо)
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;
