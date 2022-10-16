import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from 'react-redux';
import { GetFlyers } from "../../../../constants/actions/poligraphActions/flyer";
import { useEffect } from "react";

const Flyer = () => {

  const dispatch = useDispatch();
  const { listflyers } = useSelector(state => state.flyer);
  useEffect(() => {
          dispatch(GetFlyers());           
      }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Листівки, флаєри</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/flyer.jpg" 
            alt="Флаєри"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Останнім часом набуло широкого поширення виготовлення листівок, 
              що мають назву «флаєри». Як правило, друк листівок виробляється 
              величезними тиражами, а відмінні риси єврофлаєра - яскравість, 
              помітність, привабливість для клієнта. Невелика площа для розміщення 
              інформації - ось основна характеристика флаєра. Друк листівок 
              передбачає велику різноманітність. Це можуть бути запрошувальні, 
              інформаційні листки, «максі-візитки» та інші форми використання 
              флаєра як носія рекламно-захоплюючого тексту або картинки.<br/>
              <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з наступного 
              дня після готовності макету.
            </p>
            <p>
              Діапазон розмірів листівок дуже великий. Так само як і великий 
              асортимент паперу різної щільності, на якому ми друкуємо ваші 
              флаєри. В таблиці представлені різні формати листівок і 
              відповідно - вимоги до розмірів макетів.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Вимоги до розмірів макетів листівок */}
        <div className="row">
          <h4 className="text-center text-danger my-4">
            Вимоги до розмірів макетів листівок:
          </h4>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
              <table className="table table-success  table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Назва формату	</th>
                      <th scope="col">Розміри готової листівки, мм</th>
                      <th scope="col">Розміри макету, мм</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Єврофлаєр</th>
                      <td>99х210</td>
                      <td>103х214</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 Єврофлаєра</th>
                      <td>99х99</td>
                      <td>103х103</td>
                    </tr>
                    <tr>
                      <th scope="row">А7</th>
                      <td>70х100</td>
                      <td>74х104</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 А7</th>
                      <td>50х70</td>
                      <td>54х74</td>
                    </tr>
                    <tr>
                      <th scope="row">А6</th>
                      <td>105х148</td>
                      <td>109х152</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 А6</th>
                      <td>52х148</td>
                      <td>56х152</td>
                    </tr>
                    <tr>
                      <th scope="row">А5</th>
                      <td>148х210</td>
                      <td>152х214</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 А5</th>
                      <td>74х210</td>
                      <td>78х214</td>
                    </tr>
                    <tr>
                      <th scope="row">А4</th>
                      <td>210х297</td>
                      <td>214х301</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 А4</th>
                      <td>105х297</td>
                      <td>109х301</td>
                    </tr>
                    <tr>
                      <th scope="row">А3</th>
                      <td>297х420</td>
                      <td>301х424</td>
                    </tr>
                    <tr>
                      <th scope="row">1/2 А3</th>
                      <td>148х420</td>
                      <td>152х424</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Ціни на флаєри:
          </h3>
          <p className="text-center">
          Прайс на найпоширеніші варіанти замовлення (формат - 
          Єврофлаєр 99х210 мм, без покриття, термін - 7 роб. днів)
          </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Щільність паперу</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                  {listflyers &&
                  listflyers.map((item) => (
                    <tr key={item.id}>
                      <td>{item.format}</td>
                      <td>{item.qty}</td>
                      <td style={{ background: "#E1A3B3" }}> {item.price} </td>
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
export default Flyer;