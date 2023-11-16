import React from "react";
import { Zoom } from "react-slideshow-image";
import { HashLink } from "react-router-hash-link";
import { ShowCalculator } from "../calculator";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { AvailableSlimBooks } from "../availableBooks";
import { UpToBooksList } from "../upToBooksList";
import ClaimSlimbook from "./claimSlimbook";
import { MoreServices } from "../moreServices";
import CalculatingPole from "../calculatingPole";

const SlimBook = () => {
  //see more here:
  //https://www.npmjs.com/package/react-slideshow-image

  const img_slider1 = [
    "images/services/photo/photobooks/SlimBook/1.jpg",
    "images/services/photo/photobooks/SlimBook/2.jpg",
    "images/services/photo/photobooks/SlimBook/3.jpg",
  ];
  const img_slider2 = [
    "images/services/photo/photobooks/SlimBook/4.jpg",
    "images/services/photo/photobooks/SlimBook/5.jpg",
  ];
  const img_slider3 = [
    "images/services/photo/photobooks/SlimBook/6.jpg",
    "images/services/photo/photobooks/SlimBook/7.jpg",
  ];
  const img_slider4 = [
    "images/services/photo/photobooks/SlimBook/8.jpg",
    "images/services/photo/photobooks/SlimBook/9.jpg",
  ];
  const img_slider5 = [
    "images/services/photo/photobooks/SlimBook/10.jpg",
    "images/services/photo/photobooks/SlimBook/11.jpg",
    "images/services/photo/photobooks/SlimBook/12.jpg",
    "images/services/photo/photobooks/SlimBook/13.jpg",
    "images/services/photo/photobooks/SlimBook/14.jpg",
    "images/services/photo/photobooks/SlimBook/15.jpg",
    "images/services/photo/photobooks/SlimBook/16.jpg",
  ];
  const img_slider6 = [
    "images/services/photo/photobooks/SlimBook/17.jpg",
    "images/services/photo/photobooks/SlimBook/18.jpg",
    "images/services/photo/photobooks/SlimBook/19.jpg",
    "images/services/photo/photobooks/SlimBook/20.jpg",
    "images/services/photo/photobooks/SlimBook/21.jpg",
  ];
  const img_slider7 = [
    "images/services/photo/photobooks/SlimBook/22.jpg",
    "images/services/photo/photobooks/SlimBook/23.jpg",
    "images/services/photo/photobooks/SlimBook/24.jpg",
    "images/services/photo/photobooks/SlimBook/25.jpg",
  ];

  const zoomInProperties = {
    // indicators: true,
    scale: 1.4,
    duration: 3000,
  };

  return (
    <section id="photobooks-slimbook">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Фотокниги SlimBook</h1>

          {/* Про SlimBook */}
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
              <h3 className="text-center">Про SlimBook</h3>
              <p>
                Фотокнига slimbook - це ідеальне поєднання поліграфії та
                фотодруку. Дана фотокнига поєднує у собі якість фотокниги та
                доступність поліграфічних технологій. Slimbook виготовлений за
                найбільш передовою технологією виробництва фотокниг, в основі
                якої лежить використання спеціального прошарку між сторінками, а
                не пластика чи картону. В результаті цього, сторінки,
                надруковані на фотопапері Fujicolor Crystal Archive LUSTRE,
                виходять щільними, гнучкими та не піддаються деформаціям.
              </p>
            </div>
          </div>

          {/* Основа */}
          {/* Для широких екранів */}
          <div className="d-none d-md-block">
            <div className="row m-3 p-2">
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Основа</h3>
                <p>
                  Основа між розворотами — головна «родзинка» Слімбука. Завдяки
                  їй він легкий, майже як поліграфічний printbook, і водночас
                  має якість зображення класичного photobook. У Slimbook не
                  використовуються пластикові та картонні прошарки між
                  розворотами сторінок, завдяки чому блок стає тоншим. У той
                  самий час спеціальний склад між сторінками гарантує
                  відсутність деформацій розворотів. За рахунок зменшення
                  товщини сторінок, технологія slimbook дозволяє створювати
                  макети книг об’ємом до 40-ка розворотів з розкриттям блоку на
                  180°!
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
          </div>

          {/* Для мобільних екранів */}
          <div className="d-block d-md-none">
            <div className="row m-3 p-2">
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
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Основа</h3>
                <p>
                  Основа між розворотами — головна «родзинка» Слімбука. Завдяки
                  їй він легкий, майже як поліграфічний printbook, і водночас
                  має якість зображення класичного photobook. У Slimbook не
                  використовуються пластикові та картонні прошарки між
                  розворотами сторінок, завдяки чому блок стає тоншим. У той
                  самий час спеціальний склад між сторінками гарантує
                  відсутність деформацій розворотів. За рахунок зменшення
                  товщини сторінок, технологія slimbook дозволяє створювати
                  макети книг об’ємом до 40-ка розворотів з розкриттям блоку на
                  180°!
                </p>
              </div>
            </div>
          </div>

          {/* Папір */}
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
              <h3 className="text-center">Папір</h3>
              <p>
                Розвороти Ваших Слімбуків ми друкуємо на фотопапері Fujicolor
                Crystal Archive Lustre. Даний тип паперу використовується за
                замовчуванням для друку фотокниг slimbook та photobook. Папір
                володіє специфічним рельєфом та характерною кольоропередачею. Ми
                не використовуємо традиційний матовий папір (Matte), тим не
                менш, при оформленні замовлення, коли у меню вибору паперу ви
                побачите опцію «матовий» — знайте, що це «люстра».
              </p>
            </div>
          </div>

          {/* Фотообкладинка */}
          {/* Для широких екранів */}
          <div className="d-none d-md-block">
            <div className="row m-3 p-2">
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Фотообкладинка</h3>
                <p>
                  Базова обкладинка усіх наших фотокниг. Як і у Printbook вона
                  тверда, надрукована цифровим способом та покрита глянцевою
                  ламінацією.
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
          </div>

          {/* Для мобільних екранів */}
          <div className="d-block d-md-none">
            <div className="row m-3 p-2">
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
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Фотообкладинка</h3>
                <p>
                  Базова обкладинка усіх наших фотокниг. Як і у Printbook вона
                  тверда, надрукована цифровим способом та покрита глянцевою
                  ламінацією.
                </p>
              </div>
            </div>
          </div>

          {/* Обкладинка з шкірзаму */}
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
              <h3 className="text-center">Обкладинка з шкірзаму</h3>
              <p>
                Більше життя, більше кольору! Обирайте ту обкладинку, яка
                підходить під тональність та настрій Вашої фотокниги.
                Високоякісний італійський шкірозамінник залишить приємні
                тактильні відчуття, а Ваша совість залишиться спокійною, бо
                жодне звірятко не було вбите.
              </p>
            </div>
          </div>

          {/* Шкірзам з фотовставкою */}
          {/* Для широких екранів */}
          <div className="d-none d-md-block">
            <div className="row m-3 p-2">
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Шкірзам з фотовставкою</h3>
                <p>
                  Чудове рішення для того, щоб прикрасити Вашу книгу. Замовляйте
                  шкірзамобкладинку з фотовставкою із акрилового скла, і Ваша
                  фотокнига стане унікальною та неповторною.
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
          </div>

          {/* Для мобільних екранів */}
          <div className="d-block d-md-none">
            <div className="row m-3 p-2">
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
              <div className="col-sm-12 col-md-5 px-3">
                <h3 className="text-center">Шкірзам з фотовставкою</h3>
                <p>
                  Чудове рішення для того, щоб прикрасити Вашу книгу. Замовляйте
                  шкірзамобкладинку з фотовставкою із акрилового скла, і Ваша
                  фотокнига стане унікальною та неповторною.
                </p>
              </div>
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

        <CalculatingPole />

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

        {AvailableSlimBooks()}

        <ClaimSlimbook />

        {MoreServices()}

        {UpToBooksList()}
      </div>
    </section>
  );
};
export default SlimBook;
