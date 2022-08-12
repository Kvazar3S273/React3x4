import React from "react";
import { Zoom } from "react-slideshow-image";
import { HashLink } from 'react-router-hash-link';
import { ShowCalculator } from '../calculator';
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { AvailablePhotoBooks } from "../availableBooks";
import { UpToBooksList } from "../upToBooksList";
import { MoreServices } from "../moreServices";
import ClaimSlimbook from "../slimbook/claimSlimbook";

const UniBook = () => {
  //see more here:
  //https://www.npmjs.com/package/react-slideshow-image

  const img_slider1 = [
    "images/services/photo/photobooks/PhotoBook/1.jpg",
    "images/services/photo/photobooks/PhotoBook/2.jpg",
    "images/services/photo/photobooks/PhotoBook/3.jpg",
    "images/services/photo/photobooks/PhotoBook/4.jpg"
  ];
  const img_slider2 = [
    "images/services/photo/photobooks/PhotoBook/5.jpg",
    "images/services/photo/photobooks/PhotoBook/6.jpg"
  ];
  const img_slider3 = [
    "images/services/photo/photobooks/PhotoBook/7.jpg",
    "images/services/photo/photobooks/PhotoBook/8.jpg"
  ];
  const img_slider4 = [
    "images/services/photo/photobooks/PhotoBook/9.jpg",
    "images/services/photo/photobooks/PhotoBook/10.jpg"
  ];
  const img_slider6 = [
    "images/services/photo/photobooks/PhotoBook/12.jpg",
    "images/services/photo/photobooks/PhotoBook/13.jpg",
    "images/services/photo/photobooks/PhotoBook/14.jpg",
    "images/services/photo/photobooks/PhotoBook/15.jpg",
    "images/services/photo/photobooks/PhotoBook/16.jpg",
    "images/services/photo/photobooks/PhotoBook/17.jpg",
    "images/services/photo/photobooks/PhotoBook/18.jpg"
  ];
  const img_slider7 = [
    "images/services/photo/photobooks/PhotoBook/20.jpg",
    "images/services/photo/photobooks/PhotoBook/21.jpg",
    "images/services/photo/photobooks/PhotoBook/22.jpg",
    "images/services/photo/photobooks/PhotoBook/23.jpg"
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

          {/* Про UniBook */}
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
              <h3 className="text-center">Про PhotoBook</h3>
              <p>
                Серія класичних фотокниг photobook з листами, надрукованими фотохімічним 
                способом на фотопапері Fuji. Добротний і перевірений пластик або ж термокартон, 
                що використовуються у прошарку між розворотами, додають фотокнизі вагу та 
                солідність, а демократична ціна та якість — роблять цю класику доступною 
                для будь-якого фотографа.
              </p>
            </div>
          </div>

          {/* Папір Fujicolor Crystal Archive LUSTRE */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Папір Fujicolor Crystal Archive LUSTRE</h3>
              <p>
                Для друку ваших книг ми використовуємо фотопапір Fujicolor Crystal Archive 
                і лабораторії Noritsu 34 PRO. Папір LUSTRE використовується за замовчуванням 
                при друці всіх наших фотокниг. Фотографам старої школи добре відома так
                звана «тисненка». Фотопапір Lustre (називають «ластер» або «люстра»), 
                максимально на неї схожий. Папір має специфічний рельєф і характерну 
                кольоропередачу. В нас на сайті при оформленні замовлення цей папір 
                називається матовим. 
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

          {/* Папір Fujicolor Crystal Archive SILK */}
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
              <h3 className="text-center">Папір Fujicolor Crystal Archive SILK</h3>
              <p>
                Якщо Вам необхідно ще більше «преміальності» — цей папір по Вашу душу. 
                Текстурована фактура схожа на шовкову тканину з винятковою, характерною 
                лише для неї, глибокою передачею кольору. Як і для всього виняткового,
                в «шовку» є свої обмеження — папір доступний лише для форматів фотокниг
                23х23 та 30х30. 
              </p>
            </div>
          </div>

          {/* Основа */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Основа</h3>
              <p>
                Пластик передбачуваний у виробництві, не деформується в експлуатації 
                або при зміні температурних режимів. Його товщина і вага додають книзі 
                «фоліантності» та солідності. Дорожчий, але водночас гарантований по 
                якості результат.<br/>
                Також у виробництві ми використовуємо спеціальний термокартон з максимально 
                покращеними показниками гідрофобності та стійкості до зовнішніх факторів впливу. 
                Це доступний по ціні наповнювач, який зовнішньо мало чим відрізняється від пластику. 
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
            <img
                src="images/services/photo/photobooks/PhotoBook/11.jpg"
                alt="Фотообкладинка"
              />
            </div>
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Фотообкладинка</h3>
              <p>
                Базова обкладинка всіх наших фотокниг. Як і в Printbook, 
                вона тверда, надрукувана цифровим способом і покрита глянцевою ламінацією.
              </p>
            </div>
          </div>

          {/* Шкірозамінник */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-5 px-3">
              <h3 className="text-center">Шкірозамінник</h3>
              <p>
                Більше життя, більше кольору! Вибирайте ту, яка підходить під 
                тональність і настрій Вашої фотокниги. Італійський високоякісний 
                шкірзам залишить приємні тактильні відчуття, а совість не буде 
                гризти за невинно вбитих звіряток. 
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

          {/* Шкірзам з фотовставкою */}
          <div className="row m-3 p-2">
            <div className="col-sm-12 col-md-7">
            <img
                src="images/services/photo/photobooks/PhotoBook/19.jpg"
                alt="Шкірзам з фотовставкою"
              />
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

          {/* Тканина */}
          <div className="row m-3 p-2">
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

        {AvailablePhotoBooks()}

        <ClaimSlimbook />

        {MoreServices()}

        {UpToBooksList()}

      </div>
    </>
  );
};
export default UniBook;
