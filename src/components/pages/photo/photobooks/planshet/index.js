import React from "react";
import { Zoom } from "react-slideshow-image";
import { HashLink } from 'react-router-hash-link';
import { ShowCalculator } from '../calculator';
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { AvailableUniBooks } from "../availableBooks";
import { UpToBooksList } from "../upToBooksList";
import { MoreServices } from "../moreServices";
import ClaimUnibook from "../unibook/claimUnibook";

const Planshet = () => {
  //see more here:
  //https://www.npmjs.com/package/react-slideshow-image

  const img_slider = [
    "images/services/photo/photobooks/UniBook/5.jpg",
    "images/services/photo/photobooks/UniBook/6.jpg",
    "images/services/photo/photobooks/UniBook/7.jpg",
    "images/services/photo/photobooks/UniBook/8.jpg"
  ];

  const zoomInProperties = {
    // indicators: true,
    scale: 1.4,
    duration: 3000,
  };

  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Випускні планшети</h1>

          {/* Класичний планшет (фотодрук) */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/1.jpg"
                alt="Класичний планшет"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Класичний планшет (фотодрук)
              </h3>
              <p>
                Добре відомі планшети з 1 або 2-ма розворотами зі спеціальним 
                прошарком між сторінками. Класичний фотохімічний друк сторінок 
                та тверда ламінована обкладинка. Максимальна якість друку та 
                швидке виготовлення.
              </p>
              <p className="mx-5">
                Формати:
                <ul>
                  <li>20x30</li>
                  <li>18x24</li>
                  <li>29x19</li>
                  <li>23x23</li>
                  <li>19x19</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Класичний планшет (цифровий друк) */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
              Класичний планшет (цифровий друк)
              </h3>
              <p>
                Як і попередній, цей планшет може бути виконано в 1 або 2-х розворотах,
                але його середину надруковано цифровим способом на крейдованому папері 
                граматурою 200 г/м² і вкрито глянцевою ламінацією. Обкладинка тверда
                ламінована. Для друку використовуються поліграфічні машини XEROX . <br/>
                Можливий формат — 20х30.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/2.jpg"
                alt="Класичний планшет"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Трюмо */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/3.jpg"
                alt="Трюмо"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Трюмо
              </h3>
              <p>
                Трюмо — беззаперечний хіт останніх років у початковій школі. 
                У ньому ідеально розмістяться портрет учня, класного керівника
                або вихователя та групова фотографія. Зручний формат 30x20 
                дозволяє встановити його на стіл або полицю. Як і у попередньому
                планшеті, середину надруковано цифровим способом та вкрито
                ламінацією. Ідеальний планшет для садочка або початкової школи.
              </p>
            </div>
          </div>

          {/* Тріо */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Тріо
              </h3>
              <p>
                Планшет Тріо ми представили ще у 2018 році і за цей час він отримав 
                неабияку популярність. Зумовлено це тим, що класична планшет-папка 
                в згорнутому вигляді має стандартний формат 20х30, проте у розгорнутому,
                 її формат стає 60х30, що дозволяє розмістити багато фото. Планшет 
                 надруковано цифровим поліграфічним способом з глянцевою ламінацією.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/4.jpg"
                alt="Тріо"
                style={{ width: "100%" }}
              />
            </div>
          </div>

        </div>

        <div className="row">
          <div
            className="col py-3 mt-3 mb-3"
            style={{ backgroundColor: "#CDE8F2" }} >
            <div className="row">
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 p-5">
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2">
                    <i
                      className="d-flex justify-content-center text-danger"
                      style={{ fontSize: "4.5em" }}
                    >
                      <FontAwesomeIcon icon={faCalculator} />
                    </i>
                  </div>
                  <div className="col-10 col-sm-10 col-md-10">
                    <h4 className="text-danger">
                      Розрахунок вартості друку фотокниги
                    </h4>
                    <p>
                      *Окремо розраховується вартість розробки дизайну (див.
                      Додаткові послуги)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <img
                  src="images/services/photo/photobooks/calc.png"
                  alt="Розрахунок"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div>
              <HashLink smooth to={"#calculator"}>
                <button
                  type="submit"
                  className="btn btn-success btn-lg mt-4 mb-4 p-3"
                  onClick={ShowCalculator}
                  id="show_calc"
                  style={{ width: "100%", background: "#26979F" }}
                >
                  Розрахунок вартості фотокниг
                </button>
              </HashLink>
              <section id="calculator"></section>
              <div
                id="widget_calc_user"
                data-user-key="9893e8659bc23351fd92d9c626c02df4"
                data-user-lang="uk"
                data-user-currency="UAH"
              ></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        {AvailableUniBooks()}

        <ClaimUnibook />

        {MoreServices()}

        {UpToBooksList()}
      </div>
    </>
  );
};
export default Planshet;
