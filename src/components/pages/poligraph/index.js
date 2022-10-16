import React from "react";
import { useSelector } from "react-redux";
import Baner from "./baner";
import Blank from "./blank";
import Bloknot from "./bloknot";
import Broshura from "./broshura";
import Buklet from "./buklet";
import Calendar from "./calendar";
import Calendar3d from "./calendar3d";
import Cards from "./cards";
import CarouselPoligraph from "./carouselPoligraph";
import Claim from "./claim";
import Flyer from "./flyer";
import Hanger from "./hanger";
import Konvert from "./konvert";
import Leaf from "./leaf";
import Menu from "./menu";
import Oracal from "./oracal";
import Plakat from "./plakat";
import Pvc from "./pvc";
import ServiceCardsOther from "./serviceCardsOther";
import ServicePoligraphCards from "./servicePoligraphCards";
import Sticker from "./sticker";
import Tag from "./tag";
import Visitcard from "./visitcard";

const PoligraphPage = () => {
  const {
    isPoligraphVisitcard,
    isPoligraphFlyer,
    isPoligraphCalendar,
    isPoligraphTag,
    isPoligraphSticker,
    isPoligraphHanger,
    isPoligraphOracal,
    isPoligraphBaner,
    isPoligraphPvc,
    isPoligraphBuklet,
    isPoligraphPlakat,
    isPoligraphBroshura,
    isPoligraphCalendar3d,
    isPoligraphMenu,
    isPoligraphBloknot,
    isPoligraphCards,
    isPoligraphLeaf,
    isPoligraphKonvert,
    isPoligraphBlank,
  } = useSelector((state) => state.poligraph);

  return (
    <>
      <CarouselPoligraph />
      <ServicePoligraphCards />

      {isPoligraphVisitcard ? <Visitcard /> : ""}
      {isPoligraphFlyer ? <Flyer /> : ""}
      {isPoligraphCalendar ? <Calendar /> : ""}
      {isPoligraphTag ? <Tag /> : ""}
      {isPoligraphSticker ? <Sticker /> : ""}
      {isPoligraphHanger ? <Hanger /> : ""}
      {isPoligraphOracal ? <Oracal /> : ""}
      {isPoligraphBaner ? <Baner /> : ""}
      {isPoligraphPvc ? <Pvc /> : ""}

      {isPoligraphBuklet ? (
        <>
          <section id="other"></section>
          <Buklet />
        </> 
        ) : ("")}
      {isPoligraphPlakat ? (
        <>
          <section id="other"></section>
          <Plakat />
        </> 
        ) : ("")}
      {isPoligraphBroshura ? (
        <>
          <section id="other"></section>
          <Broshura />
        </> 
        ) : ("")}
      {isPoligraphCalendar3d ? (
        <>
          <section id="other"></section>
          <Calendar3d />
        </> 
        ) : ("")}
      {isPoligraphMenu ? (
        <>
          <section id="other"></section>
          <Menu />
        </> 
        ) : ("")}
      {isPoligraphBloknot ? (
        <>
          <section id="other"></section>
          <Bloknot />
        </> 
        ) : ("")}
      {isPoligraphCards ? (
        <>
          <section id="other"></section>
          <Cards />
        </>
        ) : ("")}
      {isPoligraphLeaf ? (
        <>
          <section id="other"></section>
          <Leaf />
        </>
        ) : ("")}
      {isPoligraphKonvert ? (
        <>
          <section id="other"></section>
          <Konvert />
        </>
        ) : ("")}
      {isPoligraphBlank ? (
        <>
          <section id="other"></section>
          <Blank />
        </>
        ) : ("")}

      <Claim />
    </>
  );
};

export default PoligraphPage;
