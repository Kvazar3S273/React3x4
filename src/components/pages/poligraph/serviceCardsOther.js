import React from "react";
// import "./style.css";
import { HashLink } from 'react-router-hash-link';
import { useDispatch } from "react-redux";
import { 

    PoligraphBuklet,
    PoligraphPlakat,
    PoligraphBroshura,
    Poligraph3dcalendar,
    PoligraphBlank,
    PoligraphMenu,
    PoligraphBloknot,
    PoligraphCards,
    PoligraphLeaf,
    PoligraphKonvert,
    PoligraphFolder
} from "../../../constants/actions/poligraph";

const ServiceCardsOther = () => {

  const dispatch = useDispatch();

  const handleClickBuklet = () => { dispatch(PoligraphBuklet()); }
  const handleClickPlakat = () => { dispatch(PoligraphPlakat()); }
  const handleClickBroshura = () => { dispatch(PoligraphBroshura()); }
  const handleClick3dcalendar = () => { dispatch(Poligraph3dcalendar()); }
  const handleClickBlank = () => { dispatch(PoligraphBlank()); }
  const handleClickMenu = () => { dispatch(PoligraphMenu()); }
  const handleClickBloknot = () => { dispatch(PoligraphBloknot()); }
  const handleClickCards = () => { dispatch(PoligraphCards()); }
  const handleClickLeaf = () => { dispatch(PoligraphLeaf()); }
  const handleClickKonvert = () => { dispatch(PoligraphKonvert()); }
  const handleClickFolder = () => { dispatch(PoligraphFolder()); }
  

  return (
    <>
      
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBuklet}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/buklet.png"
                  className="card-img-top"
                  alt="Буклети"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Буклети</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickPlakat}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/plakat.png"
                  className="card-img-top"
                  alt="Плакати"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Плакати</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBroshura}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/broshura.png"
                  className="card-img-top"
                  alt="Брошури"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Брошури</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClick3dcalendar}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/calendar.png"
                  className="card-img-top"
                  alt="Об'ємні календарі"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Об'ємні календарі</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 5 */}
            {/* <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBlank}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/blank.png"
                  className="card-img-top"
                  alt="Бланки"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Бланки</h6>
                </div>
              </div>
            </HashLink>
            </div> */}

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickMenu}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/menu.png"
                  className="card-img-top"
                  alt="Меню"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Меню</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBloknot}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/bloknot.png"
                  className="card-img-top"
                  alt="Блокноти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Блокноти</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 8 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickCards}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/card.png"
                  className="card-img-top"
                  alt="Пластикові картки"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Пластикові картки</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 9 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickLeaf}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/zapis.png"
                  className="card-img-top"
                  alt="Блоки для запису"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Блоки для запису</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 10 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickKonvert}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/konvert.png"
                  className="card-img-top"
                  alt="Конверти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Конверти</h6>
                </div>
              </div>
            </HashLink>
            </div>
            
            {/* Картка 11 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickFolder}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/papka.png"
                  className="card-img-top"
                  alt="Фірмові папки"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Фірмові папки</h6>
                </div>
              </div>
            </HashLink>
            </div>
            
    </>
  );
  };

export default ServiceCardsOther;