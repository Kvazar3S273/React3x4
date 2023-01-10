import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="row mt-3" style={{background:"#1B1C1B"}}>
      <div className="col-md-4 text-secondary text-md-start p-2">
        <div className="p-3">
          ©
          <Link aria-current="page" to="/">
            3x4.com.ua
          </Link>
          , All Right Reserved. <br/>Designed by Hologram-IT, 2009-{new Date().getFullYear()}
        </div>
      </div>
      <div className="col-md-8 text-secondary text-center p-2">
        <div className="row" style={{marginTop:"1em"}}>
        <div className="col-md-3 col-sm-6 text-secondary text-center p-2">
        <h6>
          <Link aria-current="page" to="/photo">
            Фотопослуги
          </Link>
        </h6>
      </div>

      <div className="col-md-3 col-sm-6 text-secondary text-center p-2">
        <h6>
          <Link aria-current="page" to="/comp">
            Комп'ютерні послуги
          </Link>
        </h6>
      </div>
      <div className="col-md-3 col-sm-6 text-secondary text-center p-2">
        <h6>
          <Link aria-current="page" to="/poligraph">
            Поліграфія
          </Link>
        </h6>
      </div>
      <div className="col-md-3 col-sm-6 text-secondary text-center p-2">
        <h6>
          <Link aria-current="page" to="/contacts">
            Контакти
          </Link>
        </h6>
      </div>

        </div>
      </div>
      
    </div>
  );
};
export default Footer;
