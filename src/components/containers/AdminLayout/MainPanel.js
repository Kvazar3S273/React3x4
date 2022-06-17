import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMoneyBillTrendUp,
  faAd,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";
import Users from "./Users";
import Prices from "./Prices";
import Advertise from "./Advertise";
import Info from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { ShowAdvertise, ShowInfo, ShowPrices, ShowUsers } from "../../../constants/actions/show";

const MainPanel = () => {
  // const [showUsers, setShowUsers] = useState(false);

  // const handleClickUsers = (event) => {
  //   // 👇️ щоб по кліку відкривалось і по наступному закривалось
  //   setShowUsers((current) => !current);
  //   // 👇️ щоб по кліку тільки відкривалось
  //   // setShowUsers(true);
  //   setShowAd(false);
  //   setShowPrices(false);
  //   setShowInfo(false);
  // };

  const dispatch = useDispatch();
  
  const handleClickUsers = () => { dispatch(ShowUsers()); }
  const handleClickPrices = () => { dispatch(ShowPrices()); }
  const handleClickAdvertise = () => { dispatch(ShowAdvertise()); }
  const handleClickInfo = () => { dispatch(ShowInfo()); }
  const {isShowU, isShowP, isShowA, isShowI, notShowMenu} = useSelector((state) => state.show);

  return (
    <div className="row justify-content-center">

      {/* Картка 1 */}
      <div className="card-panel col m-3 p-2 border bg-light rounded" onClick={handleClickUsers}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#03a9f4" }}>
              <FontAwesomeIcon icon={faUserCircle} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center">Список користувачів</h5>
          </div>
        </div>
      </div>

      {/* Картка 2 */}
      <div className="card-panel col m-3 p-2 border bg-light rounded" onClick={handleClickPrices}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#03a9f4"}}>
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Керування цінами</h5>
          </div>
        </div>
      </div>

      {/* Картка 3 */}
      <div className="card-panel col m-3 p-2 border bg-light rounded" onClick={handleClickAdvertise}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#03a9f4"}}>
              <FontAwesomeIcon icon={faAd} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Управління рекламою</h5>
          </div>
        </div>
      </div>

      {/* Картка 4 */}
        {/* Як робити картку для підгружання компонента: */}
      <div className="card-panel col m-3 p-2 border bg-light rounded" 
        // тут прописуємо onClick
      onClick={handleClickInfo}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#03a9f4"}}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Зміна інформації</h5>
          </div>
        </div>
      </div>
      
      {/* стейти для підгрузки компонентів: */}

      {/* {showUsers && <Users />}
      {showPrices && <Prices />}
      {showAd && <Advertise />}
      {showInfo && <Info />} */}

      {isShowU ? <Users/> : ""}
      {isShowP ? <Prices/> : ""}
      {isShowA ? <Advertise/> : ""}
      {isShowI ? <Info/> : ""}
      {notShowMenu && ""}

    </div>
  );
};
export default MainPanel;
