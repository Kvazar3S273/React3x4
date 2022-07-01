import React from "react";
import "../style.css"

const Restoration = () => {
  return (
    <>
    <div className="row mt-3 mb-3">
        <div className="col py-3" style={{backgroundColor:"#e0e3e5"}}>
            <h1 className="text-center">Реставрація</h1>
            <div className="row m-3 p-2">
                <div className="col-md-4">
                    <img className="photo-service" 
                    src="/images/services/photo/photoservice6.jpg"
                    alt="Реставрація"
                    />
                </div>
                <div className="col-md-8 px-3">
                <p>
                    З роками стан ваших фотографій не завжди залишається найкращим. 
                    Не завжди вдається зберегти дорогу вам фотокартку від впливу 
                    ультрафіолету, вологості, механічних пошкоджень чи інших чинників. 
                    У таких випадках на допомогу приходить реставрація. Відновлення 
                    старої фотографії трудоємкий і цікавий процес, винагородою якого 
                    завжди є результат. Ви будете вражені як "помолодшає" ваша фотокартка, 
                    особливо, якщо вона була у вкрай тяжкому стані.
                </p>
                <p>
                    Всі ціни на роботи, пов'язані з фотообробкою, 
                    узгоджуються в індивідуальному порядку.
                </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default Restoration;
