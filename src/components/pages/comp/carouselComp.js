import React from "react";
// import "./style.css"
const CarouselComp = () => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide mb-3"
      data-bs-ride="carousel"
    >
      {/*<!-- Carousel wrapper -->*/}
      {/*<!-- Indicators -->*/}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselBasicExample"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        {/* Слайд 1  */}
        <div className="carousel-item active">
          <img
            src="/images/slider/comp1.jpg"
            className="d-block w-100"
            alt="Backgroung slide 1"
          />
          <div
            className="carousel-caption"
            style={{ textShadow: "4px 4px 10px #000" }}
          >
            <div className="row">
              {/* Є картинка на великих, прихована тільки на sm */}
              <div className="d-sm-none d-none d-md-block">
                <img src="/images/slider/cimg1.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/cimg1.png" style={{ width: "45%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/cimg1.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Ксерокопії та друк</h2>
                <p>
                  Кольоровий та чорно-білий друк формату А4 з усіх видів носіїв.
                  Різні види паперу.
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Ксерокопії та друк</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 2  */}
        <div className="carousel-item">
          <img
            src="/images/slider/comp2.jpg"
            className="d-block w-100"
            alt="Backgroung slide 2"
          />
          <div
            className="carousel-caption"
            style={{ textShadow: "4px 4px 10px #000" }}
          >
            <div className="row">
              {/* Є картинка на великих, прихована тільки на sm */}
              <div className="d-sm-none d-none d-md-block">
                <img src="/images/slider/cimg2.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/cimg2.png" style={{ width: "45%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/cimg2.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Ламінування</h2>
                <p>
                  Ламінування документів форматами від посвідчення до А4. <br />
                  Надійний захист від пошкоджень, гарантія тривалого
                  зберігання...
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Ламінування</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 3 */}
        <div className="carousel-item">
          <img
            src="/images/slider/comp3.jpg"
            className="d-block w-100"
            alt="Backgroung slide 3"
          />
          <div
            className="carousel-caption"
            style={{ textShadow: "4px 4px 10px #000" }}
          >
            <div className="row">
              {/* Є картинка на великих, прихована тільки на sm */}
              <div className="d-sm-none d-none d-md-block">
                <img src="/images/slider/cimg3.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/cimg3.png" style={{ width: "45%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/cimg3.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Брошурування</h2>
                <p>
                  Зшивання на пластикову пружину в цупку обкладинку рефератів,
                  курсових, брошур, звітів тощо...
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Брошурування</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 4 */}
        <div className="carousel-item">
          <img
            src="/images/slider/bg6.jpg"
            className="d-block w-100"
            alt="Backgroung slide 3"
          />
          <div
            className="carousel-caption"
            style={{ textShadow: "4px 4px 10px #000" }}
          >
            <div className="row">
              {/* Є картинка на великих, прихована тільки на sm */}
              <div className="d-sm-none d-none d-md-block">
                <img src="/images/slider/img7.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/img7.png" style={{ width: "45%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/img7.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Оцифровка</h2>
                <p>Перезапис відеокасет VHS, miniDV <br />
                    на комп'ютер, збереження на флешку...</p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Оцифровка</h4>
              </div>
            </div>
          </div>
        </div>



      </div>
      {/*<!-- Inner -->*/}

      {/*<!-- Controls -->*/}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselBasicExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/*<!-- Carousel wrapper -->*/}
    </div>
  );
};

export default CarouselComp;
