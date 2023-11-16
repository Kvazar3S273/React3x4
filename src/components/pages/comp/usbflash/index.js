import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetUsbFlashes } from "../../../../constants/actions/compActions/usbflash";

const Usbflash = () => {
  const dispatch = useDispatch();
  const { listusbflashes } = useSelector((state) => state.usbflash);
  useEffect(() => {
    dispatch(GetUsbFlashes());
  }, []);

  return (
    <section id="usbflash">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Запис цифрових носіїв</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/comp/compusbflash.jpg"
                alt="Запис цифрових носіїв"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>Записуємо інформацію на диски, флешки, карти пам'яті.</p>
              <p>
                Увага! Ми НЕ скачуємо та не копіюємо музику, ігри, програмне
                забезпечення та будь-яку іншу інформацію, яка захищена
                авторськими правами!
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
                  {listusbflashes &&
                    listusbflashes.map((item) => (
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
export default Usbflash;
