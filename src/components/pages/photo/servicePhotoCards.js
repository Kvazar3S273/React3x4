import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { 
  PhotoFnd, 
  PhotoFotoprint,
  PhotoPhotobooks,
  PhotoScan,
  PhotoDuplicate,
  PhotoRestoration,
  PhotoBackground,
  PhotoAddition,
  PhotoBottle,
  PhotoPhotopicture
} from "../../../constants/actions/show";
import { HashLink } from 'react-router-hash-link';

const ServicePhotoCards = () => {

  const dispatch = useDispatch();

  const handleClickFnd = () => { dispatch(PhotoFnd()); }
  const handleClickFotoprint = () => { dispatch(PhotoFotoprint()); }
  const handleClickPhotobooks = () => { dispatch(PhotoPhotobooks()); }
  const handleClickScan = () => { dispatch(PhotoScan()); }
  const handleClickDuplicate = () => { dispatch(PhotoDuplicate()); }
  const handleClickRestoration = () => { dispatch(PhotoRestoration()); }
  const handleClickBackground = () => { dispatch(PhotoBackground()); }
  const handleClickAddition = () => { dispatch(PhotoAddition()); }
  const handleClickBottle = () => { dispatch(PhotoBottle()); }
  const handleClickPhotopicture = () => { dispatch(PhotoPhotopicture()); }

  return (
    <>
      {/* Рядок для темно-сірого блока */}
      <div classNameName="row">
        {/* Темно-сірий блок для карток */}
        <div className="col bg-dark py-4">
          {/* Рядок для карток */}

          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Фотопослуги</h1>
            <p className="text-light text-center">Пропонуємо Вам широкий асортимент фотопослуг, серед яких:</p>
            
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickFnd}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickFotoprint}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickPhotobooks}>
            {/* <HashLink smooth to={'/photo#component'} style={{color:"#000"}}> */}
            <HashLink smooth to={'/page404'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickScan}>
            <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
            
            {/* Картка 5 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickDuplicate}>
            <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
            </HashLink>
            </div>

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickRestoration}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBackground}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
            </HashLink>
            </div>
            
            {/* Картка 8 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickAddition}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
            
            {/* Картка 9 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBottle}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
            
            {/* Картка 10 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
              onClick={handleClickPhotopicture}>
              <HashLink smooth to={'/photo#component'} style={{color:"#000"}}>
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
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      
      <section id="component">
      </section>
    </>
  );
  };

export default ServicePhotoCards;
