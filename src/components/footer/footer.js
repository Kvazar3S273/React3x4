import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="row bg-dark mt-3">
      <div className="col-md-4 text-secondary text-md-start p-2">
        <div className="p-3">
          ©
          <Link aria-current="page" to="/">
            3x4.com.ua
          </Link>
          , All Right Reserved. <br/>Designed by Hologram-IT, 2009-{new Date().getFullYear()}
        </div>
      </div>
      <div className="col-md-2 text-secondary text-center p-2">
        <h6 style={{marginTop:"2em"}}>
          <Link aria-current="page" to="/photo">
            Фотопослуги
          </Link>
        </h6>
      </div>

      <div className="col-md-2 text-secondary text-center p-2">
        <h6 style={{marginTop:"2em"}}>
          <Link aria-current="page" to="/comp">
            Комп'ютерні послуги
          </Link>
        </h6>
      </div>
      <div className="col-md-2 text-secondary text-center p-2">
        <h6 style={{marginTop:"2em"}}>
          <Link aria-current="page" to="/poligraph">
            Поліграфія
          </Link>
        </h6>
      </div>
      <div className="col-md-2 text-secondary text-center p-2">
        <h6 style={{marginTop:"2em"}}>
          <Link aria-current="page" to="/contacts">
            Контакти
          </Link>
        </h6>
      </div>

      {/* <div className="col mt-3">
            <div className="row gx-4 justify-content-center">
                <div className="footer container bg-dark p-3">
                    <div className="footer-text row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="text-light mb-4">Контакти:</h5>
                            <p>вул. Богоявленська, 41 відділ 9</p>
                            <p>+38 096 9060050</p>
                            <p>ba2h@ukr.net</p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="title1 mb-4"><Link aria-current="page" to="/">Фотопослуги</Link></h5>
                            
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="mb-4"><Link aria-current="page" to="/">Комп'ютерні послуги</Link></h5>
                            
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="mb-4"><Link aria-current="page" to="/">Поліграфія</Link></h5>
                            
                        </div>
                    </div>
                </div>
                <div className="bg-dark">
                        <div className="row mb-4">
                            <div className="col-md-6 text-center text-secondary text-md-start ">
                                © 
                                <Link aria-current="page" to="/">3x4.com.ua</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-secondary text-md-end">
                                Designed by Hologram-IT, 2022
                            </div>
                        </div>
                </div>
            </div>
        </div> */}
    </div>
  );
};
export default Footer;
