import React from "react";

const ServiceCards = () => {
  return (
    <div classNameName="container ">
      {/* Рядок для темно-сірого блока */}
      <div classNameName="row  ">
        {/* Темно-сірий блок для карток */}
        <div className="col bg-dark rounded py-4">
          {/* Рядок для карток */}
          {/* <div className="container"> */}

          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Наші послуги</h1>
            <p className="text-light text-center">13 років досвіду щоб запропонувати Вам:</p>
            {/* Картка 1 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/slider/img1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Фотопослуги</h5>
                  <p className="card-text">
                    Фото на документи <br/>
                    Друк фотографій <br/>
                    Фотокниги <br/>
                    Сканування фото <br/>
                    Реставрація
                  </p>
                  <a href="#" className="btn btn-success">
                    Детальніше...
                  </a>
                </div>
              </div>
            </div>

            {/* Картка 2 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/slider/img2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Комп'ютерні послуги</h5>
                  <p className="card-text">
                  Ксерокопії <br/>
                    Кольоровий та ч/б друк <br/>
                    Сканування <br/>
                    Ламінування <br/>
                    Брошурування
                  </p>
                  <a href="#" className="btn btn-success">
                  Детальніше...
                  </a>
                </div>
              </div>
            </div>
            {/* Картка 3 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/slider/img3.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Поліграфія</h5>
                  <p className="card-text">
                  Візитки, кредитки <br/>
                    Календарики <br/>
                    Флаєри, листівки <br/>
                    Наклейки <br/>
                    Широкоформатний друк
                  </p>
                  <a href="#" className="btn btn-success">
                  Детальніше...
                  </a>
                </div>
              </div>
            </div>
            {/* Картка 4 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/slider/img4.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Нанесення фото</h5>
                  <p className="card-text">
                  Фотокартини <br/>
                    Календарі <br/>
                    Етикетки на пляшку <br/>
                    Чашки <br/>
                    Фотопазли
                  </p>
                  <a href="#" className="btn btn-success">
                  Детальніше...
                  </a>
                </div>
              </div>
            </div>
            {/* Картка 5 */}
            <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="/images/slider/img5.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Продаж</h5>
                  <p className="card-text">
                  Фоторамки<br/>
                  Фотоальбоми <br/>
                  Батарейки <br/>
                    Диски <br/>
                    Канцтовари <br/>
                    LED-лампи
                  </p>
                  <a href="#" className="btn btn-success">
                  Детальніше...
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
  };
  

export default ServiceCards;
