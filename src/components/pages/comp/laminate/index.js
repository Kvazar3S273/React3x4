import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetLaminates } from "../../../../constants/actions/compActions/laminate";

const Laminate = () => {
  const dispatch = useDispatch();
  const { listlaminates } = useSelector((state) => state.laminate);
  useEffect(() => {
    dispatch(GetLaminates());
  }, []);

  return (
    <section id="laminate">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Ламінування документів</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/comp/complaminate.jpg"
                alt="Ламінування"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Конвертне ламінування документів від посвідчення розміром як
                візитна картка до аркушів формату А4. Переламіновуємо старі
                потрепані посвідчення. Ламінація документів надійно захищає їх
                від пошкоджень і сприяє довготривалому зберіганню. Не ламінуємо
                пластикові посвідчення, товсті документи (грубші за 0,7 мм) та
                книжки.
              </p>
              <h3 className="text-center text-danger">Вартість ламінування</h3>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Формат</th>
                    <th scope="col">Ціна, грн</th>
                  </tr>
                </thead>
                <tbody>
                  {listlaminates &&
                    listlaminates.map((item) => (
                      <tr key={item.id}>
                        <td> {item.format} </td>
                        <td> {item.price} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Laminate;
