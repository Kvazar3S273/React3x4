import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"
import { useSelector, useDispatch } from "react-redux";
import { GetOracals } from "../../../../constants/actions/poligraphActions/oracal";
import { useEffect } from "react";

const Oracal = () => {

  const dispatch = useDispatch();
  const { listoracals } = useSelector((state) => state.oracal);
  useEffect(() => {
    dispatch(GetOracals());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Самоклейка плівка</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" 
            src="/images/services/poligraph/main_img/oracal.jpg" 
            alt="Самоклейка плівка"/>
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Друк на самоклейкій плівці (типу оракал) знайшов застосування 
              у виробництві засобів зовнішньої реклами, виготовленні лицьових 
              поверхонь для світлових коробів, в рекламно-інформаційному оформленні 
              інтер'єрів, інтер'єрному друці, оформлення вітрин і вікон офісних 
              і торгових приміщень, в рекламі на транспорті та багатьох інших 
              сферах. Друк на самоклейках став основою для виробництва наклейок, 
              вивісок, табличок, постерів, плакатів, стікерів, штендерів, піктограм 
              і багато чого іншого.
            </p>
            <p>
             <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з наступного дня 
             після готовності макету. При замовленні ламінування термін виготовлення 
             збільшується на 1 день.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Ціни на самоклейку:
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
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Вид плівки</th>
                      <th scope="col">Ламінація</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listoracals &&
                      listoracals.map((item) => (
                        <tr key={item.id}>
                          <td>{item.tape}</td>
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
export default Oracal;