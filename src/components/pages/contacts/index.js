import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthEurope,
  faMobileScreenButton,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const ContactsPage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h2 className="text-center mt-3">Як нас знайти?</h2>
            <h5>Наша адреса: м. Рівне, вул. Богоявленська, 41 відділ 9</h5>
            <p>
              Магазин знаходиться в торговому ряду поблизу супермаркету
              АРСЕН (по вул. Коновальця)
            </p>
          </div>

          <div className="row">
            <div className="col-md-9 col-sm-8 p-3">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.9860779605833!2d26.264214829262144!3d50.6413928492101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3efd5eccbd5cd006!2zNTDCsDM4JzI5LjAiTiAyNsKwMTUnNTMuMSJF!5e1!3m2!1suk!2sua!4v1656614057123!5m2!1suk!2sua"
                  width="100%"
                  height="500em"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 p-3">
              <h3 style={{ color: "red" }}>Контакти:</h3>
              <p>
                33008, м. Рівне
                <br />
                вул. Богоявленська, 41 відділ 9<br />
                Телефон: +38 096 90 600 50
                <br />
                Email: ba2h@ukr.net
                <br />
                https://www.3x4.com.ua
              </p>
              <h3 style={{ color: "red" }}>До нас можна доїхати:</h3>
              <p>
                Тролейбусами:
                <br />
                №№ 7, 9, 9а, 12
              </p>
              <p>
                Маршрутними таксі:
                <br />
                №№ 35, 35а, 39
              </p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-center mt-3">Наш графік роботи:</h2>
            <h5 className="text-center mt-3">*тимчасові зміни в графіку</h5>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                    <span className="badge rounded-pill m-3 p-5" style={{ background: "#116C6E" }}>
                      ПОНЕДІЛОК <br />
                      ---------- <br />
                      10:00 - 19:00 <br />
                      Перерва: <br />
                      14:00 - 15:00
                    </span>
                  </h3>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                    <span className="badge rounded-pill m-3 p-5" style={{ background: "#626262" }}>
                      ВІВТОРОК<br />
                      ----------<br />
                      15:30 - 19:00<br />
                      ----------<br />
                      без перерви
                    </span>
                  </h3>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                    <span className="badge rounded-pill m-3 p-5" style={{ background: "#626262 " }}>
                      СЕРЕДА<br />
                      ----------<br />
                      15:30 - 19:00<br />
                      ----------<br />
                      без перерви
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                  <span className="badge rounded-pill m-3 p-5" style={{ background: "#116C6E" }}>
                      ЧЕТВЕР <br />
                      ---------- <br />
                      10:00 - 19:00 <br />
                      Перерва: <br />
                      14:00 - 15:00
                    </span>
                  </h3>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                  <span className="badge rounded-pill m-3 p-5" style={{ background: "#626262 " }}>
                      П'ЯТНИЦЯ<br />
                      ----------<br />
                      15:30 - 19:00<br />
                      ----------<br />
                      без перерви
                    </span>
                  </h3>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                  <h3>
                    <span className="badge rounded-pill m-3 p-5" style={{ background: "#B31942 " }}>
                      СУБОТА<br />
                      і<br />
                      НЕДІЛЯ<br />
                      ----------<br />
                      ВИХІДНИЙ
                    </span>
                  </h3>
                </div>
                {/* <p>*графік тимчасовий, на період війни</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Як зробити замовлення?</h1>
          <p className="text-center">
            Замовити наші послуги можна одним із найзручніших способів:
          </p>

          <div className="row m-3 p-2 justify-content-center">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-4">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 px-5">
                  <i style={{ fontSize: "4.5em", color: "#B31942" }}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </i>
                </div>
                <div className="col-8 col-sm-8 col-md-8 p-2">
                  <h3>На місці</h3>
                  <p>
                    Прийти до нас за адресою:
                    <br />
                    м. Рівне, вул. Богоявленська, 41/9
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 px-5">
                  <i style={{ fontSize: "4.5em", color: "#B31942" }}>
                    <FontAwesomeIcon icon={faEarthEurope} />
                  </i>
                </div>
                <div className="col-8 col-sm-8 col-md-8 p-2">
                  <h3>Через інтернет</h3>
                  <p>Написати нам листа на електронну пошту ba2h@ukr.net</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 px-5">
                  <i style={{ fontSize: "4.5em", color: "#B31942" }}>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </i>
                </div>
                <div className="col-8 col-sm-8 col-md-8 p-2">
                  <h3>Через месенджери</h3>
                  <p>
                    Написати нам на
                    <br />
                    Viber, Telegram +380969060050
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
          </div>

        </div>
      </div>
    </>
  );
};
export default ContactsPage;
