import React, { useState } from "react";
import Addition from "./addition";
import Background from "./background";
import CarouselPhoto from "./carouselPhoto";
import Restoration from "./restoration";
import "./style.css";
// import ServicePhotoCards from "./servicePhotoCards";

const PhotoPage = () => {

  const [showAddition, setAddition] = useState(false);
  const [showBackground, setBackground] = useState(false);
  const [showRestoration, setRestoration] = useState(false);

  const handleClickAddition = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setPhotoChangePrice((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setAddition(true);
    setBackground(false);
    setRestoration(false);
  };
  const handleClickBackground = (event) => {
    setAddition(false);
    setBackground(true);
    setRestoration(false);
  };
  const handleClickRestoration = (event) => {
    setAddition(false);
    setBackground(false);
    setRestoration(true);
  };

  return (
    <>
    <CarouselPhoto />
       {/* Рядок для темно-сірого блока */}
      <div classNameName="row">
        {/* Темно-сірий блок для карток */}
        <div className="col bg-dark rounded py-4">
          {/* Рядок для карток */}

          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Фотопослуги</h1>
            <p className="text-light text-center">Пропонуємо Вам широкий асортимент фотопослуг, серед яких:</p>
            
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded">
              <div className="card" >
                <img
                  src="/images/services/fp1.png"
                  className="card-img-top"
                  alt="Фото на документи"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Фото на документи</h6>
                </div>
              </div>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp2.png"
                  className="card-img-top"
                  alt="Друк фотографій"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Друк фотографій</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp3.png"
                  className="card-img-top"
                  alt="Фотокниги"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Фотокниги</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp4.png"
                  className="card-img-top"
                  alt="Сканування фотографій"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Сканування фотографій</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 5 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp5.png"
                  className="card-img-top"
                  alt="Дублікати фотографій"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Дублікати фотографій</h6>
                </div>
              </div>
            </div>

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
            onClick={handleClickRestoration}>
              <div className="card" >
                <img
                  src="/images/services/fp6.png"
                  className="card-img-top"
                  alt="Реставрація"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Реставрація</h6>
                </div>
              </div>
            </div>

            {/* Картка 7 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
            onClick={handleClickBackground}>
              <div className="card" >
                <img
                  src="/images/services/fp7.png"
                  className="card-img-top"
                  alt="Заміна фону"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Заміна фону</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 8 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded" 
            onClick={handleClickAddition}>
              <div className="card" >
                <img
                  src="/images/services/fp8.png"
                  className="card-img-top"
                  alt="Об'єднання фотографій"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Об'єднання фотографій</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 9 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp9.png"
                  className="card-img-top"
                  alt="Етикетки на пляшку"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Етикетки на пляшку</h6>
                </div>
              </div>
            </div>
            
            {/* Картка 10 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded ">
              <div className="card" >
                <img
                  src="/images/services/fp10.png"
                  className="card-img-top"
                  alt="Фотокартини"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Фотокартини</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {showAddition && <Addition />}
      {showBackground && <Background />}
      {showRestoration && <Restoration />}
      
      {/* <ServicePhotoCards /> */}
    </>
  );
};
export default PhotoPage;
