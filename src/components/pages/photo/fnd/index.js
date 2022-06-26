import React from "react";
//import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faImage,
    faFileWord,
    faEye,
    faMoneyBill1
} from "@fortawesome/free-solid-svg-icons";



const Fnd = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фото на документи</h1>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Ви плануєте поїздку за кордон і Вам необхідна віза, поступаєте до
              ВУЗу чи отримуєте посвідчення водія? Ми допоможемо Вам зробити
              фотографію потрібного формату швидко і якісно. Можливий будь-який
              необхідний Вам розмір, ми виконаємо вимоги будь-якого з консульств
              і установ. Зробимо фото з куточком або без нього. У вартість фото
              для документів входить повна обробка зображення, прибирання
              прищів, почервоніння шкіри та інші недоліки. Додатково можемо
              замінити Ваш одяг на костюм з краваткою.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Прайс */}
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-8">
            <h3 className="text-center text-danger">
              Вартість виготовлення фотографій на документи
            </h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Документ</th>
                  <th scope="col">К-сть</th>
                  <th scope="col" style={{ background: "#E1A3B3" }}>
                    Ціна, грн
                  </th>
                  <th scope="col">Архів, грн</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Паспорт
                    <br />
                    Посвідчення водія
                    <br />
                    Медична довідка
                    <br />
                    Фото абітурієнта
                    <br />
                    Інші посвідчення
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">
                    Пенсійне посвідчення
                    <br />
                    Фото 4х6
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">Учнівський квиток</th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>55</td>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">
                    Віза
                    <br />
                    Дитячий проїзний за кордон
                    <br />
                    Посвідка на ПМП
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>70</td>
                  <td>48</td>
                </tr>
                <tr>
                  <th scope="row">
                    Віза США
                    <br />
                    Грін карта
                  </th>
                  <td>1</td>
                  <td style={{ background: "#E1A3B3" }}>80</td>
                  <td>56</td>
                </tr>
                <tr>
                  <th scope="row">
                    Спеціальний формат
                    <br />
                    9х12, 9х13, 10х15
                  </th>
                  <td>1</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Додаткові послуги */}
        <div className="row">
          <div className="col py-4" style={{ background: "#868686" }}>
            <div className="row gx-5 p-4 justify-content-center">
              <h1 className="text-dark text-center mb-4">Додаткові послуги</h1>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-light"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faPrint} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                    <h4>Більше</h4>
                    <p>
                    Кожне наступне фото: +5 грн
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
              <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-warning"
                      style={{ fontSize: "4em" }}
                      >
                      <FontAwesomeIcon icon={faImage} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                      <h4>Швидко</h4>
                    <p>
                    Термінове фото: +20 грн за 7-10 хв
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
              <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-light"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faFileWord} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                      <h4>Костюм</h4>
                    <p>
                    Заміна одягу: +30 грн, вибір з каталога
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-warning"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                      <h4>Без друку</h4>
                    <p>
                    Тільки фотографування, скидання на флешку -10 грн від ціни
                    </p>
                  </div>
                </div> 
              </div>
              <div className="col-md-4">
              <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-light"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faMoneyBill1} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                      <h4>Архів</h4>
                    <p>
                    Зберігання фото в архіві. Друк з архіва зі знижкою 30%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3 col-3">
                    <i
                      className="d-flex justify-content-center text-warning"
                      style={{ fontSize: "4em" }}
                    >
                      <FontAwesomeIcon icon={faMoneyBill1} />
                    </i>
                  </div>
                  <div className="col-md-9 col-9">
                      <h4>Оригінал</h4>
                    <p>
                    Скидання фото з архіва на носій 20 грн
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
export default Fnd;