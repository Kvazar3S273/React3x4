import React from "react";

const Cards = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Пластикові картки</h1>

        {/* Таблиця Доступні матеріали */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Доступні матеріали:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <table className="table text-center table-striped">
                <tbody>
                    <tr>
                      <th>Матеріал</th>
                      <td>білий</td>
                      <td>прозорий</td>
                      <td>срібний</td>
                      <td>тонкий</td>
                    </tr>
                    <tr>
                      <th>Покриття</th>
                      <td>глянцеве</td>
                      <td>матове</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Друк</th>
                      <td>односторонній</td>
                      <td>двосторонній</td>
                      <td></td>
                      <td></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>

        {/* Таблиця Доступні опції */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Доступні опції:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center">
                <tbody>
                    <tr>
                      <td>Персоніфікація</td>
                      <td>Ембосування</td>
                      <td>Нумерація</td>
                      <td>Штрих-код</td>
                      <td>Магнітна стрічка</td>
                    </tr>
                    <tr>
                      <td>Скретч панель</td>
                      <td>Смужка для підпису</td>
                      <td>Тиснення</td>
                      <td>Смарт-чіп</td>
                      <td>П/е упаковка</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        <p className="mx-5 mt-4">
          Мінімальний тираж - <b>10 шт</b>
        </p>
        <p className="mx-5 mt-4">
          Термін виготовлення - <b>7 днів</b>
        </p>
        <p className="mx-5">
          Розрахунок ціни на виготовлення пластикових карток проводиться 
          після запиту. Вкажіть необхідний вид пластику, всі необхідні 
          Вам опції і ми розрахуємо для Вас вартість виготовлення даної продукції.
        </p>

      </div>
    </div>
  );
};
export default Cards;
