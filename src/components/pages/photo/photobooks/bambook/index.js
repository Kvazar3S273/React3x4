import React from "react";
import { Zoom } from "react-slideshow-image";
import { HashLink } from 'react-router-hash-link';
import { ShowCalculator } from '../calculator';
import "../../style.css";
import ClaimBambook from "./claimBambook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { AvailableBamBooks } from "../availableBooks";
import { MoreServices } from "../moreServices"
import { UpToBooksList } from "../upToBooksList";
const BamBook = () => {
  //see more here:
  //https://www.npmjs.com/package/react-slideshow-image

  const img_slider1 = [
    "images/services/photo/photobooks/BamBook/1.jpg",
    "images/services/photo/photobooks/BamBook/2.jpg",
  ];
  const img_slider2 = [
    "images/services/photo/photobooks/BamBook/3.jpg",
    "images/services/photo/photobooks/BamBook/4.jpg",
  ];
  const img_slider4 = [
    "images/services/photo/photobooks/BamBook/6.jpg",
    "images/services/photo/photobooks/BamBook/7.jpg",
  ];
  const img_slider5 = [
    "images/services/photo/photobooks/BamBook/8.jpg",
    "images/services/photo/photobooks/BamBook/9.jpg",
    "images/services/photo/photobooks/BamBook/10.jpg",
    "images/services/photo/photobooks/BamBook/11.jpg",
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
          <h1 className="text-center">Фотокниги BamBook</h1>

          {/* Про BamBook */}
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
              <h3 className="text-center">Про BamBook</h3>
              <p>
                Фотокнига Bambook - це поліграфічна фотокнига з щільними
                крейдованими листами і розкриттям блоку на 180°. У новому БамБук
                Ілюмінат використана сучасна технологія покриття розворотів
                спеціалізованною цифровою плівкою, яка підсилює кольоропередачу,
                додає кольору глибини, а завдяки блискучій поверхні розвороти
                схожі на справжній глянцевий журнал. Для склейки сторінок
                використовується термоклеевий прошарок зі спеціального складу.
                Технологія перевірена роками і гарантує надійне та рівномірне
                склеювання листів.
              </p>
            </div>
          </div>

          {/* Основа */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Основа</h3>
              <p>
                Основа між розворотами — ідентична фотокнигам slimbook. В
                bambook не використовуються пластикові чи картонні прошарки між
                розворотами сторінок, завдяки чому книжковий блок виглядає
                достатньо цупким та гнучким одночасно. В той самий час,
                спеціальний склад між сторінками гарантує відсутність деформацій
                розворотів при правильних умовах зберігання фотокниг. В
                фотокнигах bambook Ви маєте змогу створювати макети обсягами до
                40 розворотів.
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

          {/* Папір */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
              <img
                src="images/services/photo/photobooks/BamBook/5.jpg"
                alt="Папір"
                style={{width:"100%"}}
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Папір</h3>
              <p>
                Розвороти Bambook-ів друкуються на крейдованому папері
                граматурою 200 г/м2, з використанням цифрових поліграфічних
                машин XEROX. Папір, що використовується, має підвищену ступінь
                білизни та покращені характеристики кольоропередачі. При
                поліграфічному друці згин посередині розвороту призводить до
                появи білої смуги, котра є об'єктивною особливістю цифрового
                друку. Ми не радимо використовувати у ділянці згину темні фони.
                Розміщення облич та сюжетно важливих елементів також не бажане у
                ділянці згину.
              </p>
            </div>
          </div>

          {/* Ламінація — Ілюмінація */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Ламінація — Ілюмінація</h3>
              <p>
                Це те, що ми називаємо БамБук Ілюмінат. З одного боку, це той
                самий БамБук, з іншого — абсолютно інша по якості та сприйняттю
                фотокнига. Багатомісячні експерименти та пошук правильних
                цифрових матеріалів дозволяють з впевненістю сказати, що це
                абсолютно новий вид поліграфічної фотокниги. Глянцеве покриття
                робить кольори насиченими та глибокоми. Блиск — надає
                презентабельності та розкоші. Виберіть при замовленні Бамбука
                опцію «ламінація» і переконайтесь на власні очі — це абсолютно
                нова фотокнига.
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

          {/* Обкладинка */}
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
                  Розрахувати вартість фотокниги
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

        {AvailableBamBooks()}

        <ClaimBambook />

        {MoreServices()}

        {UpToBooksList()}


      </div>
    </>
  );
};
export default BamBook;
