import React from "react";
import "../style.css";

const Addition = () => {
  return (
    <section id="addition">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Об'єднання фотографій</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/photo/photoservice8.jpg"
                alt="Об'єднання фотографій"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Об'єднання фотографій допомагає в тих випадках, коли не було
                можливості зняти удачний кадр за один раз, або до основного
                знімка потрібно додати певні об'єкти. Успішний результат в такій
                процедурі досягається при дотриманні таких факторів як
                правильний ракурс, однакове освітлення, однакова роздільна
                здатність, баланс кольорів та ін.
              </p>
              <p>
                Всі ціни на роботи, пов'язані з фотообробкою, узгоджуються в
                індивідуальному порядку.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Addition;
