import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";
import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faImage,
    faFileWord,
    faEye,
    faMoneyBill1

} from "@fortawesome/free-solid-svg-icons";

//see more here:
//https://www.npmjs.com/package/react-slideshow-image

const Fotoprint = () => {
  const images = [
    "images/services/photo/fotoprint1.jpg",
    "images/services/photo/fotoprint2.jpg",
    "images/services/photo/fotoprint3.jpg",
    "images/services/photo/fotoprint4.jpg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    duration: 3000,
  };

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фотодрук</h1>

        {/* Слайдшоу */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Zoom {...zoomInProperties}>
              {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Зараз практично кожен має смартфон з непоганою камерою. Це дає
              можливість знімати сотні і тисячі кадрів, закарбовуючи на
              світлинах зворушливі моменти свого життя чи інші цікаві події. Та
              не кожен знає, що надійність цифрових носіїв залишає чекати
              кращого. Диск може зіпсуватися, подряпатись, жорсткий накопичувач
              теж може втратити інформацію. Тому напрошується висновок -
              друкуйте фотографії! Ми пропонуємо Вам фотодрук з усіх видів
              цифрових носіїв, а також друк з електронної пошти, через Viber чи
              Telegram.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Ми друкуємо з */}
        <div className="container">
          <h1 className="text-center">Ми друкуємо з:</h1>
          <div className="row ">
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge rounded-pill bg-warning m-3 p-5">
                  ВСІХ <br />
                  КОМПАКТ
                  <br /> ДИСКІВ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge rounded-pill bg-success m-3 p-5">
                  ВСІХ <br />
                  USB-ФЛЕШ
                  <br />
                  НОСІЇВ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge rounded-pill bg-danger m-3 p-5">
                  БУДЬ-ЯКИХ <br /> КАРТ
                  <br /> ПАМ'ЯТІ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge rounded-pill bg-primary m-3 p-5">
                  TELEGRAM
                  <br /> VIBER <br />
                  E-MAIL
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Суперціна! */}
        <div className="row  m-4">
          <div className="col-md-7 p-3">
            <img
              src="/images/services/photo/fotoprint500.jpg"
              class="img-fluid img-thumbnail"
              alt="Суперціна"
            />
          </div>
          <div className="col-md-5">
            <div className="row p-2">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center text-secondary"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faPrint} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Друк здійснюється після зібрання мінімального тиражу - 200
                      фотографій (термін друку - 2 роб. дні)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center text-warning"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faImage} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <p>
                      До друку приймаються тільки файли у форматі JPG, з
                      роздільною здатністю 300 dpi, кольорова модель - RGB
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center text-primary"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faFileWord} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Не друкуємо зображень з текстових редакторів типу Word,
                      документів PDF та стоп-кадрів з відеофайлів
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center text-danger"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Фотокорекція ефекту "червоних очей" проводиться тільки за
                      бажанням замовника. Вартість - 1 грн/людина
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center text-success"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faMoneyBill1} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Друк фотографій проводиться тільки після оплати задатку у
                      розмірі мінімум 50% від вартості замовлення!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Прайс */}
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-8">
            <h3 className="text-center text-danger">
              Вартість друку фотографій
            </h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Формат</th>
                  <th scope="col">Точні розміри, мм</th>
                  <th scope="col">Ціна, грн</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">9x13</th>
                  <td>89x127</td>
                  <td>4,50</td>
                </tr>
                <tr>
                  <th scope="row">10x15</th>
                  <td>102x152</td>
                  <td>5,00</td>
                </tr>
                <tr>
                  <th scope="row">13x18</th>
                  <td>127x178</td>
                  <td>10,00</td>
                </tr>
                <tr>
                  <th scope="row">15x21</th>
                  <td>152x216</td>
                  <td>11,00</td>
                </tr>
                <tr>
                  <th scope="row">20x30</th>
                  <td>203x305</td>
                  <td>21,00</td>
                </tr>
                <tr>
                  <th scope="row">30x40</th>
                  <td>305x420</td>
                  <td>42,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Обладнання */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div class="m-4 p-5 bg-success text-white rounded">
              <h1 className="text-center">Обладнання</h1>
              <p className="text-center">
                Фотографії друкуються на цифрових мінілабах Noritsu QSS 3202
                Pro. При друці використовується фотопапір Fujicolor Crystal
                Archive. Все обладнання регулярно калібрується та тестується.
                Використовується тільки оригінальна хімія.
              </p>
              <div className="d-flex justify-content-center">
                <a href="http://minilab.com.ua/description/noritsu/qss32series/">
                  <button
                    type="button"
                    class="btn btn-light"
                    style={{ background: "#006D57" }}
                  >
                    Детальніше про обладнання...
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Кадрування */}
        <div className="row">
          <div className="col py-4" style={{ background: "#373737" }}>
            <div className="row gx-5 p-4 justify-content-center">
              <h1 className="text-light text-center">Кадрування</h1>
              <p className="text-light text-center">
                Декілька слів про нестандартні формати або чому Ваші фото були
                обрізані під час друку...
              </p>
              {/* Картка 1 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/photo/kadr1.png"
                    className="card-img-top"
                    alt="Оригінальний кадр"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Оригінальний кадр
                    </h5>
                    <p className="card-text">
                      Співвідношення сторін 3:4 або інше
                    </p>
                  </div>
                </div>
              </div>

              {/* Картка 2 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/photo/kadr2.png"
                    className="card-img-top"
                    alt="Обрізане фото"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Обрізане фото</h5>
                    <p className="card-text">
                      Всі фото автоматично обрізаються
                    </p>
                  </div>
                </div>
              </div>
              {/* Картка 3 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/photo/kadr3.png"
                    className="card-img-top"
                    alt="Кадроване фото"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Кадроване фото</h5>
                    <p className="card-text">
                      Додані білі поля, вартість послуги - 1 грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fotoprint;
