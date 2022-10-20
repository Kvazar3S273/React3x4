import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from "react-redux";
import { GetBirkas } from "../../../../constants/actions/poligraphActions/birka";
import { useEffect } from "react";

const Tag = () => {

  const dispatch = useDispatch();
  const { listbirkas } = useSelector((state) => state.birka);
  useEffect(() => {
    dispatch(GetBirkas());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Цінники, бірки</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/tag.jpg" 
            alt="Бірки"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              При відкритті будь-якого магазину його власник вирішує масу проблем, 
              які виникають під час цієї, на жаль, нелегкої справи. Безумовно, 
              що рано чи пізно, а краще вчасно постає питання про те, які цінники 
              застосовувати. А саме дизайн цінника, його розмір, шрифт для нанесення 
              інформації і т. д.<br/>
              Також невід'ємним атрибутом багатьох магазинів (особливо відділів одягу) 
              є бірка, що містить багато корисної інформації. Ви хочете, щоб ваш магазин 
              впізнавали, а ваш логотип миттєво викликав асоціації з якістю ваших послуг 
              та широким асортиментом вашої продукції? Тоді бірки та цінники - це саме те, 
              на чому не можна економити.<br/>
              Пропонуємо 6 форматів даної продукції: 30х50мм, 45х50мм, 50х70мм, 50х90мм, 
              50х180мм та 90х100мм.<br/>
              Бірки можна замовити в трьох варіантах: з отвором, з перфорацією, 
              складані з отвором. Додатково можна замовити скруглювання кутів.<br/>
              Бірки ми друкуємо на крейдованому папері різної щільності – від <b>250 г/м.кв.</b>, 
              до <b>450 г/м.кв.</b> з глянцевим, матовим, ультрафіолетовим (повним або 
              вибірковим) покриттям або без нього, а також на дизайнерському картоні. 
            </p>
            <p>
                <b>Мінімальний тираж:</b> 100 шт<br/>
                <b>Термін виготовлення</b> - від 3-х робочих днів, 
                починаючи з наступного дня після готовності макету. 
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Вимоги до розмірів макетів бірок */}
        <div className="row">
          <h4 className="text-center text-danger my-4">
            Вимоги до розмірів макетів бірок:
          </h4>
          
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <table className="table table-success  table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Розміри готової бірки, мм</th>
                      <th scope="col">Розміри макету, мм</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>30x50</td>
                      <td>34x54</td>
                    </tr>
                    <tr>
                      <td>45x50</td>
                      <td>49x54</td>
                    </tr>
                    <tr>
                      <td>50x70</td>
                      <td>54x74</td>
                    </tr>
                    <tr>
                      <td>50x90</td>
                      <td>54x94</td>
                    </tr>
                    <tr>
                      <td>50x180</td>
                      <td>54x184</td>
                    </tr>
                    <tr>
                      <td>90x100</td>
                      <td>94x104</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Ціни на бірки:
          </h3>
          <p className="text-center">
          Прайс на найпоширеніші варіанти замовлення (формат - 50х70 мм з отвором, 
          тираж - 1000 екз., термін - 6 роб. днів)
          </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Формат</th>
                      <th scope="col">Щільність паперу</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listbirkas &&
                      listbirkas.map((item) => (
                        <tr key={item.id}>
                          <td>{item.format}</td>
                          <td>{item.density}</td>
                          <td style={{ background: "#E1A3B3" }}>
                            {" "}
                            {item.price}{" "}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Tag;