import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetBinders } from "../../../../constants/actions/compActions/binder";

const Binder = () => {
  const dispatch = useDispatch();
  const { listbinders } = useSelector((state) => state.binder);
  useEffect(() => {
    dispatch(GetBinders());
  }, []);

  return (
    <section id="binder">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Брошурування</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/comp/compbinder.jpg"
                alt="Брошурування"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Брошурування - це зшивання рефератів, курсових, звітів та інших
                документів на пластикову пружину з додаванням спереду прозорої,
                а ззаду - цупкої кольорової обкладинки*. Таке зшивання дозволяє
                потім додати або забрати будь-яку кількість сторінок при
                потребі.
              </p>
              <h3 className="text-center text-danger">Вартість брошурування</h3>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Кількість сторінок**</th>
                    <th scope="col">Ціна, грн</th>
                  </tr>
                </thead>
                <tbody>
                  {listbinders &&
                    listbinders.map((item) => (
                      <tr key={item.id}>
                        <td> {item.pagesQty} </td>
                        <td> {item.price} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <p>
                * ціна враховує зшивання зі стандартними обкладинками, ціна за
                зшивку інших варіантів розраховується окремо
              </p>
              <p>
                ** ціни вказані для звичайного офісного паперу 80 г/м.кв., для
                цупкого паперу кількість множиться на 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Binder;
