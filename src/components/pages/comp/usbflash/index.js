import React from "react";

const Usbflash = () => {
  return (
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
            <p>
              Записуємо інформацію на диски, флешки, карти пам'яті.
            </p>
            <p>
              Увага! Ми НЕ скачуємо та не копіюємо музику, ігри, програмне 
              забезпечення та будь-яку іншу інформацію, яка захищена авторськими правами!  
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
                <tr>
                  <th scope="row">Запис CD дисків 700 Mb</th>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">Запис DVD дисків 4,7 Gb</th>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">Запис DVD-DL дисків 8,5 Gb</th>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">Запис флеш-носіїв до 8 Gb</th>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">Запис флеш-носіїв більше 8 Gb</th>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Usbflash;
