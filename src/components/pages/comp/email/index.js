import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetEmails } from "../../../../constants/actions/compActions/email";

const Email = () => {
  const dispatch = useDispatch();
  const { listemails } = useSelector((state) => state.email);
  useEffect(() => {
    dispatch(GetEmails());
  }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Відправка електронної пошти</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/compemail.jpg"
              alt="Email"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Надаємо послугу скидання на будь-яку електронну пошту
              відсканованих документів. Також можемо роздрукувати Ваші файли,
              попередньо скачавши їх з Вашої пошти. До Ваших послуг також
              скачування електронних квитків з різних сервісів за Вашим
              посиланням. Якщо Ви скидаєте лист з файлами для роздруку на нашу
              пошту, додаткові послуги за використання пошти не сплачуються.
            </p>
            <h3 className="text-center text-danger">Вартість послуги</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Послуга</th>
                  <th scope="col">Ціна</th>
                </tr>
              </thead>
              <tbody>
                {listemails &&
                  listemails.map((item) => (
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
  );
};
export default Email;
