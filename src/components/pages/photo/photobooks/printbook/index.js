import React from "react";
import { Zoom } from "react-slideshow-image";
import { HashLink } from 'react-router-hash-link';
import { ShowCalculator } from '../calculator';
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { UpToBooksList } from "../upToBooksList";
import ClaimPrintbook from "./claimPrintbook";
import { AvailablePrintBooks } from "../availableBooks";
import { MoreServices } from "../moreServices";

const PrintBook = () => {
  //see more here:
  //https://www.npmjs.com/package/react-slideshow-image

  const img_slider1 = [
    "images/services/photo/photobooks/PrintBook/1.jpg",
    "images/services/photo/photobooks/PrintBook/2.jpg",
    "images/services/photo/photobooks/PrintBook/3.jpg",
    "images/services/photo/photobooks/PrintBook/4.jpg"
  ];
  const img_slider2 = [
    "images/services/photo/photobooks/PrintBook/5.jpg",
    "images/services/photo/photobooks/PrintBook/6.jpg",
    "images/services/photo/photobooks/PrintBook/7.jpg"
  ];
  const img_slider3 = [
    "images/services/photo/photobooks/PrintBook/8.jpg",
    "images/services/photo/photobooks/PrintBook/9.jpg"
  ];
  const img_slider4 = [
    "images/services/photo/photobooks/PrintBook/10.jpg",
    "images/services/photo/photobooks/PrintBook/11.jpg"
  ];
  const img_slider5 = [
    "images/services/photo/photobooks/PrintBook/12.jpg",
    "images/services/photo/photobooks/PrintBook/13.jpg"
  ];
  const img_slider6 = [
    "images/services/photo/photobooks/PrintBook/14.jpg",
    "images/services/photo/photobooks/PrintBook/15.jpg",
    "images/services/photo/photobooks/PrintBook/16.jpg",
    "images/services/photo/photobooks/PrintBook/17.jpg"
  ];
  const img_slider7 = [
    "images/services/photo/photobooks/PrintBook/18.jpg",
    "images/services/photo/photobooks/PrintBook/19.jpg"
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
          <h1 className="text-center">Фотокниги PrintBook</h1>

          {/* Про PrintBook */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider1.map((each, index) => (
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
              <h3 className="text-center">Про PrintBook</h3>
              <p>
                  Фотокнига printbook — це надрукована на сучасному цифровому обладнанні 
                  поліграфічним способом книга. Внутрішні листи надруковані на 170 г/м 
                  крейдованому папері. Обкладинка — тверда ламінована палітурка з 
                  індивідуальним дизайном. Це найбільш популярний у світі формат 
                  фотокниг. Основною рисою фотокниги є оперативність виготовлення, 
                  унікальність її зовнішнього вигляду і доступність в ціні. 
                  Для кожної фотокниги Ви можете створити свій, унікальний дизайн 
                  обкладинки, форзаців і сторінок.
              </p>
            </div>
          </div>

          {/* Папір */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Папір</h3>
              <p>
                Для друку фотокниг ми використовуємо крейдований папір щільністю 170 г/м 
                (до прикладу журнали друкують на папері 80 г/м). Також, Ви можете замовити
                 фотокнигу на premium папері, який більш яскравий і біліший.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider2.map((each, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <img
                      style={{ objectFit: "cover", width: "100%" }}
                      src={each}
                    />
                  </div>
                ))}
              </Zoom>
            </div>
          </div>

          {/* Ламінування книжкового блоку */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
            <Zoom {...zoomInProperties}>
                {img_slider3.map((each, index) => (
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
              <h3 className="text-center">Ламінування книжкового блоку</h3>
              <p>
                Глянцеве ламінування блоку дозволяє наблизити цифровий друк до 
                традиційного фотодруку. Ламінування додає кольорам глибину і 
                контрастність, сторінки фотокниги стають більш цупкими, менш 
                схильні до механічних пошкоджень і вологи. Форзаци фотокниги 
                не ламінують. При підготовці макету фотокниги під ламінування,
                рекомендуємо врахувати, що кольори будуть насиченіші і внести
                в макет відповідні коригування кольору. 
              </p>
            </div>
          </div>

          {/* Форзац */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Форзац</h3>
              <p>
                Це аркуш паперу призначений для фіксації блоку в корінці. Форзац 
                складається з 2 окремих паперових заготовок на початку та в кінці 
                книги, які одночасно з'єднуються в корінцевій частині та приклеюються 
                до зворотньої сторони обкладинки. На форзаци також можна нанести зображення. 
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider4.map((each, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <img
                      style={{ objectFit: "cover", width: "100%" }}
                      src={each}
                    />
                  </div>
                ))}
              </Zoom>
            </div>
          </div>

          {/* Фотообкладинка */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider5.map((each, index) => (
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
              <h3 className="text-center">Фотообкладинка</h3>
              <p>
                Базова обкладинка всіх наших фотокниг. Вона тверда, видрукувана 
                цифровим способом і покрита глянцевою ламінацією. 
              </p>
            </div>
          </div>

          {/* Обкладинка з шкірозамінника */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Обкладинка з шкірозамінника</h3>
              <p>
                Більше життя, більше кольору! Обирайте ту обкладинку, яка підходить 
                під тональність та настрій Вашої фотокниги. Високоякісний італійський 
                шкірозамінник залишить приємні тактильні відчуття, а Ваша совість 
                залишиться спокійною, бо жодне звірятко не було вбите.
              </p>
            </div>
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider6.map((each, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <img
                      style={{ objectFit: "cover", width: "100%" }}
                      src={each}
                    />
                  </div>
                ))}
              </Zoom>
            </div>
          </div>

          {/* Тканина */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <Zoom {...zoomInProperties}>
                {img_slider7.map((each, index) => (
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
              <h3 className="text-center">Тканина</h3>
              <p>
                Обкладинка зі спеціальної тканини від відомого голландського 
                виробника палітурних матеріалів. Фотокнига в такій обкладинці
                 виглядає більш «книжно» і злегка нагадує традиційну палітурку,
                  як в старих книгах. Обирайте, яка саме вам до душі: фактурна 
                  серія «Льон», чи яскраві та блискучі кольори обкладинок «Люкс».
              </p>
            </div>
          </div>

        </div>
        
        <div
          className="col py-3 mt-3 mb-3"
          style={{ backgroundColor: "#CDE8F2" }}
        >
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
                    *Окремо розраховується вартість розробки дизайну (див. Додаткові
                    послуги)
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

        {AvailablePrintBooks()}

        <ClaimPrintbook />

        {MoreServices()}

        {UpToBooksList()}

      </div>
    </>
  );
};
export default PrintBook;
