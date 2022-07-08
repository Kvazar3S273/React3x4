import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"

const Sticker = () => {

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Наклейки</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/sticker.jpg" 
            alt="Наклейки"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
             Наклейки, вони ж - стікери, можуть бути різними. Найбільш часто 
             вживається в рекламі визначення - «оракал», прозора або матова 
             плівка будь-якого формату, що підходить для обклеювання навіть 
             самих великих поверхонь.<br/>
             Рафлатак - наклейки з паперу. Друк наклейок на папері набагато 
             більш економічно вигідний, ніж друк на плівці, тому його використовують 
             набагато частіше. Наклейка наклеюється на будь-яку чисту знежирену 
             поверхню: скло, пластик, дерево, метал і т.д.<br/>
             Ми друкуємо наклейки наступних стандартних розмірів: 50х90, 
             70х100, 90х90, 99х210 (Флаєр), 105х148 (А6), 148х210 (А5), 
             210х297 (А4), 297х420 (А3).<br/>
             Замовити друк можна на основі підкладки з висічками або без них. 
             Висічки служать для зручного від'єднання захисної основи.
            </p>
            <p>
              <b>Мінімальний тираж: </b>100 шт<br/>
              <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з 
              наступного дня після готовності макету. 
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Ціни на наклейки:
          </h3>
          <p className="text-center">
            Прайс на найпоширеніші варіанти замовлення 
            (формат - 70х100 мм, термін - 5 роб. днів, папір - Reflatak, 
            щільність 163 г/м.кв., основа - з висічками)
            </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <table className="table table-primary  table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Щільність паперу</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">250</th>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <th scope="row">300</th>
                      <td>3000</td>
                    </tr>
                    <tr>
                      <th scope="row">350</th>
                      <td>4000</td>
                    </tr>
                    <tr>
                      <th scope="row">450</th>
                      <td>5000</td>
                    </tr>
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
export default Sticker;