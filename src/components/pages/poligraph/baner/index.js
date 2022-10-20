import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from "react-redux";
import { GetBaners } from "../../../../constants/actions/poligraphActions/baner";
import { useEffect } from "react";

const Baner = () => {

  const dispatch = useDispatch();
  const { listbaners } = useSelector((state) => state.baner);
  useEffect(() => {
    dispatch(GetBaners());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Банер</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/bnr.jpg" 
            alt="Банер"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Зовнішня реклама немислима без банерів. Банер - це великий плакат, 
              який інформує людей про товар або послугу, тобто є рекламою, а 
              значить, виглядає привабливо.<br/>
              Банери розміщують: уздовж доріг на білбордах, на фасадах будівель, 
              всередині і зовні приміщень, в залежності від розміру і способу друку.<br/>
              Ще банер замовляють для оформлення урочистих подій в якості заднього 
              фону або як тло для фотозони<br/>
              Банер може бути будь-якого розміру: від найдрібнішого у вигляді 
              транспаранта або плаката, до величезного у вигляді великих розтяжок. 
              Банерні сітки з рекламним зображенням досягають найбільших розмірів, 
              ними можна покрити споруджуваний будинок цілком. Банерна сітка не 
              боїться вітру, тому широко використовується для реклами великих площ на вулиці.
            </p>
            <p>
             <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з наступного 
             дня після готовності макету. При замовленні ламінування термін виготовлення 
             збільшується на 1 день.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Ціни на банер:
          </h3>
          <p className="text-center">
          Найпоширеніші види друку, банер литий 440 г/м.кв.,
           ціна за 1 кв.м., термін - 5 роб. днів
            </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Якість друку</th>
                      <th scope="col">Послуга</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listbaners &&
                      listbaners.map((item) => (
                        <tr key={item.id}>
                          <td>{item.dpi}</td>
                          <td>{item.service}</td>
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
export default Baner;