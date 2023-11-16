import React from "react";
import "../style.css";

const Background = () => {
  return (
    <section id="background">
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Заміна фону</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/photo/photoservice7.jpg"
                alt="Заміна фону"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Якщо Ви поспішили відзняти гарний момент, а задній фон не
                видався удачним, або в кадр попали непотрібні об'єкти чи чужі
                люди, ми підберемо Вам новий задній фон, який гармонійно буде
                підходити до вашого знімка. Найкраще ця процедура проводиться
                при природньому освітленні і дещо гірше, коли освітлення штучне
                (особливо із фотоспалахом).
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
export default Background;
