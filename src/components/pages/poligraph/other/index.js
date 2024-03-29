import React from "react";
// import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import Broshura from "../broshura";
import Buklet from "../buklet";
import Plakat from "../plakat";
import { useSelector, useDispatch  } from "react-redux";
import { 
    PoligraphBuklet,
    PoligraphPlakat,
    PoligraphBroshura,
    PoligraphCalendar3d,
    PoligraphBlank,
    PoligraphMenu,
    PoligraphBloknot,
    PoligraphCards,
    PoligraphLeaf,
    PoligraphKonvert,
    PoligraphFolder
} from "../../../../constants/actions/poligraph";
import Calendar3d from "../calendar3d";
import Menu from "../menu";
import Bloknot from "../bloknot";
import Cards from "../cards";
import Leaf from "../leaf";
import Konvert from "../konvert";
import Folder from "../folder";
import classNames from "classnames";
import Blank from "../blank";

const Other = () => {
  
  const dispatch = useDispatch();

  const handleClickBuklet = () => { dispatch(PoligraphBuklet()); }
  const handleClickPlakat = () => { dispatch(PoligraphPlakat()); }
  const handleClickBroshura = () => { dispatch(PoligraphBroshura()); }
  const handleClickCalendar3d = () => { dispatch(PoligraphCalendar3d()); }
  const handleClickBlank = () => { dispatch(PoligraphBlank()); }
  const handleClickMenu = () => { dispatch(PoligraphMenu()); }
  const handleClickBloknot = () => { dispatch(PoligraphBloknot()); }
  const handleClickCards = () => { dispatch(PoligraphCards()); }
  const handleClickLeaf = () => { dispatch(PoligraphLeaf()); }
  const handleClickKonvert = () => { dispatch(PoligraphKonvert()); }
  const handleClickFolder = () => { dispatch(PoligraphFolder()); }

  const {
    isPoligraphBuklet,
    isPoligraphPlakat,
    isPoligraphBroshura,
    isPoligraphCalendar3d,
    isPoligraphBlank,
    isPoligraphMenu,
    isPoligraphBloknot,
    isPoligraphCards,
    isPoligraphLeaf,
    isPoligraphKonvert,
    isPoligraphFolder
  } = useSelector((state) => state.poligraph);

  return (
    <>
      <div className="row">
        {/* Бордовий блок для карток */}
        <div className="col px-3 mt-4 mb-4" style={{ background: "#4D4D4D"}}>
          <h1 className="text-center text-light mt-4 mb-4">Інша поліграфія</h1>

          <div className="tab ">
            <button className={classNames("tablinks", isPoligraphBuklet ? "active" : "")} 
                    onClick={handleClickBuklet}> Буклети </button>
            <button className={classNames("tablinks", isPoligraphPlakat ? "active" : "")} 
                    onClick={handleClickPlakat}> Плакати </button>
            <button className={classNames("tablinks", isPoligraphBroshura ? "active" : "")} 
                    onClick={handleClickBroshura}> Брошури </button>
            <button className={classNames("tablinks", isPoligraphCalendar3d ? "active" : "")} 
                    onClick={handleClickCalendar3d}> Об'ємні календарі </button>
            <button className={classNames("tablinks", isPoligraphMenu ? "active" : "")} 
                    onClick={handleClickMenu}> Меню </button>
            <button className={classNames("tablinks", isPoligraphBloknot ? "active" : "")} 
                    onClick={handleClickBloknot}> Блокноти </button>
            <button className={classNames("tablinks", isPoligraphCards ? "active" : "")} 
                    onClick={handleClickCards}> Пластикові картки </button>
            <button className={classNames("tablinks", isPoligraphLeaf ? "active" : "")} 
                    onClick={handleClickLeaf}> Блоки для запису </button>
            <button className={classNames("tablinks", isPoligraphKonvert ? "active" : "")} 
                    onClick={handleClickKonvert}> Конверти </button>
            <button className={classNames("tablinks", isPoligraphFolder ? "active" : "")} 
                    onClick={handleClickBlank}> Бланки </button>
          </div>

          <div className="tabcontent mb-4 overflow-auto">
            {!isPoligraphBuklet && !isPoligraphPlakat && !isPoligraphBroshura &&
              !isPoligraphCalendar3d && !isPoligraphBlank && !isPoligraphMenu &&
              !isPoligraphBloknot && !isPoligraphCards && !isPoligraphLeaf &&
              !isPoligraphKonvert && !isPoligraphFolder ? <Buklet/>:""}
            {isPoligraphBuklet ? <Buklet /> : ""}
            {isPoligraphPlakat ? <Plakat /> : ""}
            {isPoligraphBroshura ? <Broshura /> : ""}
            {isPoligraphCalendar3d ? <Calendar3d /> : ""}
            {isPoligraphMenu ? <Menu /> : ""}
            {isPoligraphBloknot ? <Bloknot />  : ""}
            {isPoligraphCards ? <Cards /> : ""}
            {isPoligraphLeaf ? <Leaf /> : ""}
            {isPoligraphKonvert ? <Konvert /> : ""}
            {isPoligraphBlank ? <Blank /> : ""}
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Other;

