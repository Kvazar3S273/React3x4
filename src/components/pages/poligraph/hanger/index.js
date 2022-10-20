import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from "react-redux";
import { GetHangers } from "../../../../constants/actions/poligraphActions/hanger";
import { useEffect } from "react";

const Hanger = () => {

  const dispatch = useDispatch();
  const { listhangers } = useSelector((state) => state.hanger);
  useEffect(() => {
    dispatch(GetHangers());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Хенгери</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/hanger.jpg" 
            alt="Хенгери"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Хенгер - походить від англійського слова hanger - "підвіска". 
              У сучасному світі хенгери найчастіше представлені у вигляді 
              дорхенгеров (дорхенгери, door hangers або дверні "підвіски")
               - це рекламні листівки з гачком, що підвішуються на дверні 
               ручки номерів у готелях, офісів і квартир.<br/>
               Також хенгери з успіхом підвішують на ручки автомобілів, 
               торговельне обладнання в супермаркетах при оформленні торгових 
               зон і т.д. Крім того, хенгери з успіхом підвішуються на пляшках, 
               але назва у них в такому випадку трішки інша - нек-хенгери 
               (НЕК хенгер, neck hanger).<br/>
               Рекламні хенгери - надзвичайно ефективний і недорогий спосіб 
               прорекламувати товар або послугу, допоможуть проанонсувати 
               подію чи акцію. Немає сумнівів, що хенгер, який буде висіти 
               на дверній ручці офісу або квартири, обов'язково зверне увагу 
               Вашого майбутнього клієнта!
            </p>
            <p>
            <b>Вимоги до розмірів макету:</b> 94х204 мм.<br/>
            <b>Мінімальний тираж:</b> 100 шт<br/>
            <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з наступного 
            дня після готовності макету.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Таблиця Доступні варіанти */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Доступні варіанти:
          </h3>
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                
              <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>Варіант 1</th>
                      <th>Варіант 2</th>
                    </tr>
                    <tr>
                      <td>
                        <img className="tabsimgkatalog" src="/images/services/poligraph/hanger/h1.jpg" />
                      </td>
                      <td>
                        <img className="tabsimgkatalog" src="/images/services/poligraph/hanger/h2.jpg" />
                      </td>
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
            Ціни на хенгери:
          </h3>
          <p className="text-center">
            Прайс на перший варіант хенгерів (тираж - 1000 екз., 
            без покриття, термін - 5 роб. днів)
            </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Кількість</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listhangers &&
                      listhangers.map((item) => (
                        <tr key={item.id}>
                          <td>{item.qty}</td>
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
export default Hanger;