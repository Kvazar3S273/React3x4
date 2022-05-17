import React from "react";

const Carousel = () => {
  return (
    <section id="main-slider" className="no-margin">
      {/* Карусель слайдер */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Кнопки */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        {/* Слайди */}
        <div className="carousel-inner">
          {/* Слайд 1 */}
          <div className="carousel-item active">
            <img
              src="/images/slider/bg1.jpg"
              className="d-block w-100"
              alt="slide_bg1"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="position-relative">
                    <div
                      className="text-start position-absolute start-0"
                      style={{ textShadow: "4px 4px 10px #000" }}
                    >
                      <h2>Фотопослуги</h2>
                      <div className="fs-5">
                        <p>
                          Фото на документи, друк фотографій, <br />
                          фотокниги, сканування фотографій, <br />
                          заміна фону, реставрація...
                        </p>
                      </div>
                      <button type="button" className="btn btn-danger">
                        Більше...
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src="/images/slider/img1.png" />
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 2 */}
          <div className="carousel-item">
            <img
              src="/images/slider/bg2.jpg"
              className="d-block w-100"
              alt="slide_bg2"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  <div className="position-relative">
                    <div
                      className="text-start position-absolute  start-0"
                      style={{ textShadow: "4px 4px 10px #000", top: "150px" }}
                    >
                      <h2>Комп'ютерні послуги</h2>
                      <div className="fs-5">
                        <p>
                          Ксерокопії, друк, сканування, <br />
                          запис цифрових носіїв, ламінування, <br />
                          брошурування, друк на дисках...
                        </p>
                      </div>
                      <button type="button" className="btn btn-danger">
                        Більше...
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-6">
                  <div
                    className="position-relative"
                    style={{ marginLeft: "-30%" }}
                  >
                    <img src="/images/slider/img2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Слайд 3 */}
          <div className="carousel-item">
            <img
              src="/images/slider/bg3.jpg"
              className="d-block w-100"
              alt="slide_bg3"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  <div className="position-relative">
                    <div
                      className="text-start position-absolute  start-0"
                      style={{ textShadow: "4px 4px 10px #000", top: "150px" }}
                    >
                      <h2>Поліграфія</h2>
                      <div className="fs-5">
                        <p>
                          Візитки, календарики, листівки, флаєри, <br />
                          бірки, цінники, наклейки, хенгери,
                          <br />
                          банери, самоклейка...
                        </p>
                      </div>
                      <button type="button" className="btn btn-danger">
                        Більше...
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-6">
                  <img src="/images/slider/img3.png" />
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 4 */}
          <div className="carousel-item">
            <img
              src="/images/slider/bg4.jpg"
              className="d-block w-100"
              alt="slide_bg3"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  <div className="position-relative">
                    <div
                      className="text-start position-absolute  start-0"
                      style={{ textShadow: "4px 4px 10px #000", top: "150px" }}
                    >
                      <h2>Сувеніри</h2>
                      <div className="fs-5">
                        <p>
                          Фото на чашках, пазлах, годинниках, подушках,
                          <br />
                          етикетки на пляшки, друк на полотні, фотокартини...
                        </p>
                      </div>
                      <button type="button" className="btn btn-danger">
                        Більше...
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-6">
                  <div className="position-relative">
                    <img
                      src="/images/slider/img4.png"
                      style={{ marginLeft: "0", width: "120%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 5 */}
          <div className="carousel-item">
            <img
              src="/images/slider/bg5.jpg"
              className="d-block w-100"
              alt="slide_bg3"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-sm-5 col-md-6">
                  <div className="position-relative">
                    <div
                      className="text-start position-absolute  start-0"
                      style={{ textShadow: "4px 4px 10px #000", top: "150px" }}
                    >
                      <h2>Продаж</h2>
                      <div className="fs-5">
                        <p>
                          Фоторамки, фотоальбоми, диски, елементи живлення,
                          <br />
                          канцтовари, обкладинки на документи, LED-лампи...
                        </p>
                      </div>
                      <button type="button" className="btn btn-danger">
                        Більше...
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-6">
                  <div className="position-relative">
                    <img
                      src="/images/slider/img5.png"
                      style={{ marginLeft: "0", width: "130%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>

        {/* Кнопна назад */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Кнопка вперед */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
