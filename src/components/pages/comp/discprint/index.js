import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetDiscprints } from "../../../../constants/actions/compActions/discprint";

const Discprint = () => {
  const dispatch = useDispatch();
  const { listdiscprints } = useSelector((state) => state.discprint);
  useEffect(() => {
    dispatch(GetDiscprints());
  }, []);

  return (
    <section>
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Друк на дисках</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/comp/compdiscprint.jpg"
                alt="Друк на дисках"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Ми здійснюємо друк на дисках струменевими принтерами. Для друку
                підходять виключно спеціальні диски з білою поверхнею
                (Printable). Друк не включає в себе розробку макета, проте за
                додаткову плату ця послуга також може бути надана.
              </p>
              <h3 className="text-center text-danger">Вартість послуги</h3>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Послуга</th>
                    <th scope="col">Ціна, грн</th>
                  </tr>
                </thead>
                <tbody>
                  {listdiscprints &&
                    listdiscprints.map((item) => (
                      <tr key={item.id}>
                        <td> {item.service} </td>
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
export default Discprint;
