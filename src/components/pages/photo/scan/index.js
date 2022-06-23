import React, { Component } from "react";

const ScanPage = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Сканування фотографій</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/photoservice4.jpg"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Сканування фотографій переведе ваші знімки в цифровий формат і
              дасть змогу проглядати їх безпосередньо на екрані монітора,
              телевізора, цифрової фоторамки чи обробляти їх у графічних
              редакторах. З часом стан ваших фотографій може погіршитись, то
              чому б не записати їх на цифрові носії та зберегти якнайдовше?
            </p>
            <h3 className="text-center">Ціни на сканування</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Формат</th>
                  <th scope="col">300 dpi</th>
                  <th scope="col">600 dpi</th>
                  <th scope="col">1200 dpi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">На документи</th>
                  <td></td>
                  <td></td>
                  <td>15,00</td>
                </tr>
                <tr>
                  <th scope="row">10х15</th>
                  <td>5,00</td>
                  <td>9,00</td>
                  <td>15,00</td>
                </tr>
                <tr>
                  <th scope="row">15х21</th>
                  <td>8,00</td>
                  <td>14,00</td>
                  <td>24,00</td>
                </tr>
                <tr>
                  <th scope="row">20х30</th>
                  <td>10,00</td>
                  <td>17,00</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScanPage;
