import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"

const Pvc = () => {

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Таблички, вивіски, вказівники</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/pvc.jpg" 
            alt="ПВХ"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Пластик ПВХ на сьогодні - найпопулярніший матеріал, що використовуються 
              в рекламній справі. Друк на ньому дозволяє не використовувати самоклейку
              та інші додаткові матеріали. Завдяки друку безпосередньо на пластику,
              клієнт отримує готовий продукт, що має гарну якість і презентабельний вигляд.<br/>
              Цей спосіб друку дає можливість отримати вивіски, офісні таблички, стенди, картини, 
              та іншу рекламну продукцію.
            </p>
            <p>
             <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з наступного дня 
             після готовності макету. 
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Таблиця Доступні матеріали */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
          Доступні матеріали:
          </h3>
          <div className="col">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>ПВХ 1 мм</th>
                      <th>ПВХ 2 мм</th>
                      <th>ПВХ 3 мм</th>
                      <th>ПВХ 4 мм</th>
                    </tr>
                    <tr>
                      <th>ПВХ 5 мм</th>
                      <th>ПВХ 6 мм</th>
                      <th>ПВХ 8 мм</th>
                      <th>ПВХ 10 мм</th>
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
            Ціни на друк на ПВХ:
          </h3>
          <p className="text-center">
            Найпоширеніші види плівки та ламінації, якість друку - 1440 dpi, ціна 
            за 1 кв.м., термін - 5 роб. днів
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
export default Pvc;