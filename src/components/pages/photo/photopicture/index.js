import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide, Zoom } from 'react-slideshow-image';

//see more here:
//https://www.npmjs.com/package/react-slideshow-image

const Photopicture = () => {
  const images = [
  'images/services/photopicture1.jpg',
  'images/services/photopicture2.jpg',
  'images/services/photopicture3.jpg'
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    duration: 3000
  }
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фотокартини</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Zoom {...zoomInProperties}>
              {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              З розвитком нових технологій стала можливою ще одна нова послуга -
              друк на полотні. Ми можемо надрукувати вашу фотографію або
              репродукцію картини на справжньому полотні! Раніше таке
              задоволення міг позволити собі далеко не кожен. Послуги художників
              завжди оплачувались не дешево. Та й часу це займало багато.
              Сьогодні виготовлення вашої картини займає набагато менше часу і
              коштує набагато менше. В послугу "Полотно з підрамником" входить
              галерейна натяжка полотна і кріплення типу "крокодил".
            </p>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h3 className="text-center text-danger">Вартість виготовлення фотокартин</h3>
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Формат</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">20x30</th>
                      <td>410</td>
                    </tr>
                    <tr>
                      <th scope="row">30x40</th>
                      <td>580</td>
                    </tr>
                    <tr>
                      <th scope="row">40x60</th>
                      <td>770</td>
                    </tr>
                    <tr>
                      <th scope="row">50x70</th>
                      <td>1050</td>
                    </tr>
                    <tr>
                      <th scope="row">60x90</th>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <th scope="row">1 кв.м.</th>
                      <td>1700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};
export default Photopicture;
