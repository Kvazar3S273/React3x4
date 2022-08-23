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
import ClaimUnibook from "./claimUnibook";

const UniBook = () => {
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
          <h1 className="text-center">Фотокниги UniBook</h1>

          {/* HD цифровий друк з імітацією фотопаперу FUJI Lustre */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/1.jpg"
                alt="FUJI Lustre"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                HD цифровий друк з імітацією фотопаперу FUJI Lustre
              </h3>
              <p>
                Друк блоку відбувається на новітній цифровій машині Iridesse®
                Production Press зі збільшеним кольоровим охопленням та фінішною
                термообробкою сторінок, що відтворює друк на фотопапері FUJI
                Lustre. Його практично неможливо відрізнити від сторінок
                фотокниг, надрукованих класичним фотохімічним способом.
              </p>
            </div>
          </div>

          {/* Товсті сторінки, що збільшують цінність, але не вартість */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Товсті сторінки, що збільшують цінність, але не вартість
              </h3>
              <p>
                Хтось пропонує фотокниги з прошарком, щоб зменшити кількість
                сторінок і не втратити загальне враження, а хтось підкреслює цим
                солідність та вартість альбому. UniBook стандартно виготовляють
                з картонним прошарком, тому він задовольняє потреби обох
                категорій.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/2.jpg"
                alt="Товсті сторінки"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Новинка - UniBook Light! Сторінки без прошарку роблять його ще цікавішим. */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/3.jpg"
                alt="UniBook Light"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Новинка - UniBook Light! Сторінки без прошарку роблять його ще
                цікавішим.
              </h3>
              <p>
                Тепер UniBook можна замовити і в полегшеній версії - без
                прошарку. У цьому виконанні ви отримуєте ще доступнішу фотокнигу
                яку практично неможливо відрізнити від нашого фотокнижкого
                «флагмана» SlimBook-а.
              </p>
            </div>
          </div>

          {/* Звісно, це Lay Flat з розворотом на 180° */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">
                Звісно, це Lay Flat з розворотом на 180°
              </h3>
              <p>
                Ну, а як інакше? Фотокниги з панорамними знімками та знімками на
                весь розворот просто зобов'язані розкриватись на 180°. Це
                безкомпромісне рішення, тому так, UniBook — це фотокнига саме з
                такою будовою блоку.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/UniBook/4.jpg"
                alt="Flat"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Обкладинка */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider.map((each, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <img
                      style={{ objectFit: "cover", width: "100%" }}
                      src={each}
                    />
                  </div>
                ))}
              </Zoom>
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Обкладинка</h3>
              <p>
                Будь-яка фотокнига починається з обкладинки. У базовій
                комплектації всі фотокниги оздоблюють твердою ламінованою
                фотообкладинкою, але її можна оформити і такими матеріалами як:
                шкірзам, тканина, велюр.
                <br />
                На усіх матеріалах обкладинок можна використати додаткове
                оздоблення, щоб Ваша книга стала ще більш індивідуальною.
              </p>
            </div>
          </div>
        </div>

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
export default UniBook;
