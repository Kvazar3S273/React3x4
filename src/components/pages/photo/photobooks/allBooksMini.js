import React from "react";
import ServicePhotoBookCards from "./servicePhotoBookCards";
import { useSelector } from "react-redux";
import BamBook from "./bambook";
import SlimBook from "./slimbook";
import { useState } from "react";



export function AllBooksMini() {

//   const [showSlimBook, setShowSlimBook] = useState(false);
// const [showBamBook, setShowBamBook] = useState(false);
// const [showUniBook, setShowUniBook] = useState(false);
// const [showPrintBook, setShowPrintBook] = useState(false);
// const [showPhotoBook, setShowPhotoBook] = useState(false);
// const [showPlanshet, setShowPlanshet] = useState(false);

//   const handleClickSlimBook = (event) => {
//     // 👇️ щоб по кліку відкривалось і по наступному закривалось
//     // setShowSlimBook((current) => !current);
//     // 👇️ щоб по кліку тільки відкривалось
//     setShowSlimBook(true);
//     setShowBamBook(false);
//     setShowUniBook(false);
//     setShowPrintBook(false);
//     setShowPhotoBook(false);
//     setShowPlanshet(false);
//   };

  return (
    <>
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h1 className="text-center mt-3">Фотокниги</h1>
      </div>
      <button 
      // onClick={handleClickSlimBook}
      >1</button>

{/* стейти для підгрузки компонентів: */}

      {/* {showSlimBook && <SlimBook />}
      {showBamBook && <BamBook />} */}


    </div>
    </>
  );
};
