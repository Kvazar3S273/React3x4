import React from "react";
//import "./index.css";

const Products = () => {

  return (
    <div className="row">
        {/* Темно-сірий блок для карток */}
        <div className="col rounded py-3" style={{backgroundColor:"#595959"}}>
          {/* Рядок для карток */}

          <div className="row gx-4 justify-content-center">
            <h1 className="text-light text-center">У нас можна придбати</h1>
            <p className="text-light text-center">Широкий асортимент фототоварів та інших супутніх товарів</p>
            
            {/* Картка 1 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">Фотоальбоми</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod1.jpg"
                        className="card-img-top"
                        alt="Фотоальбоми"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Пропонуємо асортимент альбомів для зберігання Ваших фотографій. 
                    Більшість альбомів - для фотографій формату 10х15.
                    {/* </p>
                    <p className="card-text text-truncate"> */}
                    Також маємо тематичні альбоми "Привіт! Я народився!" 
                    для дитячих фотографій першого року життя.
                    </p>
                </div>
            </div>

            {/* Картка 2 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">Фоторамки</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod2.jpg"
                        className="card-img-top"
                        alt="Фоторамки"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Маємо в продажу рамки наступних розмірів: 10х15, 13x18, 15х21, 
                    21х30см. <br/> Рамки виконані з якісного пластику,
                     мають гарний вигляд, всі під склом, з кріпленням на стіну, 
                     більшість рамок має підставку.
                    </p>
                </div>
            </div>

            {/* Картка 3 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">Елементи живлення</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod3.jpg"
                        className="card-img-top"
                        alt="Елементи живлення"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Дуже великий вибір номіналів батарейок - від мініатюрних 
                    таблеток в годинники до максимальних батарейок типу R20. 
                    Продаємо елементи живлення тільки перевірених брендів. 
                    В наявності тільки свіжі батарейки!
                    </p>
                </div>
            </div>

            {/* Картка 4 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">Канцтовари</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod4.jpg"
                        className="card-img-top"
                        alt="Канцтовари"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Завжди в наявності файли, папки, швидкозшивачі, кольоровий 
                    папір та картон, офісний папір, ручки, скотч, суперклей, маркери тощо.
                    </p>
                </div>
            </div>

            {/* Картка 5 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">Диски</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod5.jpg"
                        className="card-img-top"
                        alt="Диски"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Продаємо CD-R, CD-RW, DVD-R, DVD-RW диски, двошарові DVD-R DL диски, 
                    а також miniDVD диски для відеокамер. Всі диски як витратний 
                    матеріал, обміну та поверненню не підлягають.
                    </p>
                </div>
            </div>

            {/* Картка 6 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-2 border bg-light rounded ">
                <div>
                    <h4 className="card-title text-center">LED-лампи</h4>
                </div>
                <div className="card" style={{ width: "100%" }}>
                    <img
                        src="/images/products/prod6.jpg"
                        className="card-img-top"
                        alt="LED-лампи"/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                    Ми за економію! Пропонуємо 
                    Вам великий вибір енергоефективних світлодіодних ламп різної 
                    потужності під різні цоколі. Надаємо гарантію на лампи 2 роки!
                    </p>
                </div>
            </div>

            
          </div>
        </div>
      </div>
  );
};

export default Products;
