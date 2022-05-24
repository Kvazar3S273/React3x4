import React from "react";
import { Link } from "react-router-dom";
//import "./index.css";

const Footer = () => {

  return (
    <div className="row">
        <div className="col mt-3">
            <div className="row gx-4 justify-content-center">
                <div className="container bg-dark p-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="text-light mb-4">Контакти</h5>
                            <p className="text-secondary">вул. Богоявленська, 41 відділ 9</p>
                            <p className="text-secondary">+38 096 9060050</p>
                            <p className="text-secondary">ba2h@ukr.net</p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="text-light mb-4">Фотопослуги</h5>
                            <p><Link className="text-secondary" aria-current="page" to="/">Фото на документи</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Друк фотографій</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Фотокниги</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Реставрація</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Фотокартини</Link></p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="text-light mb-4">Комп'ютерні послуги</h5>
                            <p><Link className="text-secondary" aria-current="page" to="/">Ксерокопії</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Друк</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Сканування</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Ламінування</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Брошурування</Link></p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h5 className="text-light mb-4">Поліграфія</h5>
                            <p><Link className="text-secondary" aria-current="page" to="/">Візитки</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Календарики</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Листівки</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Наклейки</Link></p>
                            <p><Link className="text-secondary" aria-current="page" to="/">Банери</Link></p>
                        </div>
                    </div>
                </div>
                <div className="container bg-dark">
                        <div className="row mb-5">
                            <div className="col-md-6 text-center text-secondary text-md-start ">
                                © 
                                <Link className="text-secondary" aria-current="page" to="/">3x4.com.ua</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-secondary text-md-end">
                                Designed by Hologram-IT, 2022
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Footer;