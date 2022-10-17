import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from "react-redux";
import { GetCalendars } from "../../../../constants/actions/poligraphActions/calendar";
import { useEffect } from "react";

const Calendar = () => {
  const dispatch = useDispatch();
  const { listcalendars } = useSelector((state) => state.calendar);
  useEffect(() => {
    dispatch(GetCalendars());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Календарики</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img
              className="comp-service"
              src="/images/services/poligraph/main_img/calendar.jpg"
              alt="Календарики"
            />
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Кишеньковий календарик має невеликі розміри (10х7 см), але, не
              дивлячись на це, він надає величезне поле діяльності для
              розміщення інформаційного, або рекламного тексту та зображення.
              Календарики додають при знайомстві разом з візитками або вкладають
              в сувеніри-подарунки для партнерів. На них можна розміщувати як
              загальні рекламні відомості, так і конкретні контакти. Великий
              плюс цих календарів – їх невеликий розмір, що дозволяє носити їх в
              гаманці, кишені тощо та актуальність на протязі всього року!
              <br />
              Ми друкуємо календарики на крейдованому папері різної щільності –
              від <b>250 г/м.кв.</b>, до <b>450 г/м.кв.</b> з глянцевим,
              матовим, ультрафіолетовим (повним або вибірковим) покриттям або
              без нього.
            </p>
            <p>
              <b>Вимоги до розмірів макету:</b> 104х74 мм.
              <br />
              <b>Мінімальний тираж:</b> 100 шт
              <br />
              <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з
              наступного дня після готовності макету.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Ціни на календарики:</h3>
          <p className="text-center">
            Прайс на найпоширеніші варіанти замовлення (формат - 70х100 мм,
            тираж - 1000 екз., термін - 7 роб. днів)
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
                    {listcalendars &&
                      listcalendars.map((item) => (
                        <tr key={item.id}>
                          <td>{item.density}</td>
                          <td>{item.laminating}</td>
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
export default Calendar;
