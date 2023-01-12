import React from "react";
import "./style.css";
const CarouselPhoto = () => {
  return (
    <div
    id="carouselBasicExample"
    className="carousel slide mb-3"
    data-bs-ride="carousel"
    >
      {/* <div style={{height:"73px", backgroundColor:"#212529"}}></div> */}
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
            src="/images/slider/fp1.jpg"
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
                <img src="/images/slider/fimg1.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/fimg1.png" style={{ width: "45%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/fimg1.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Фото на документи</h2>
                <p>
                  Фото на паспорт, візу, пенсійне, учнівський, посвідчення водія{" "}
                  <br />
                  медичну довідку, військовий квиток, Грін карту...
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Фото на документи</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 2  */}
        <div className="carousel-item">
          <img
            src="/images/slider/fp2.jpg"
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
                <img src="/images/slider/fimg2.png" style={{ width: "60%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/fimg2.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/fimg2.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Друк фотографій</h2>
                <p>Фотодрук на цифровій мінілабораторії збірним тиражем...</p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Друк фотографій</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 3 */}
        <div className="carousel-item">
          <img
            src="/images/slider/fp3.jpg"
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
                <img src="/images/slider/fimg3.png" style={{ width: "60%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/fimg3.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/fimg3.png" style={{ width: "40%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Фотокниги</h2>
                <p>
                  Фотокниги Slimbook, Printbook, Photobook, Bambook. <br />
                  10 форматів, багато додаткових опцій...
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Фотокниги</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 4 */}
        <div className="carousel-item">
          <img
            src="/images/slider/fp4.jpg"
            className="d-block w-100"
            alt="Backgroung slide 4"
          />
          <div
            className="carousel-caption"
            style={{ textShadow: "4px 4px 10px #000" }}
          >
            <div className="row">
              {/* Є картинка на великих, прихована тільки на sm */}
              <div className="d-sm-none d-none d-md-block">
                <img src="/images/slider/fimg4.png" style={{ width: "50%" }} />
              </div>
              {/* Є картинка тільки на sm */}
              <div className="d-none d-sm-block d-md-none">
                <img src="/images/slider/fimg4.png" style={{ width: "40%" }} />
              </div>
              {/* Є картинка тільки на xs */}
              <div className="d-block d-sm-none">
                <img src="/images/slider/fimg4.png" style={{ width: "30%" }} />
              </div>

              {/*Заголовок і опис на всіх, крім xs */}
              <div className="d-none d-sm-block">
                <h2>Фотокартини</h2>
                <p>
                  {" "}
                  Друк на фотополотні, натягування на підрамник, різні
                  формати...
                </p>
              </div>
              {/*Лише заголовок тільки на xs */}
              <div className="d-block d-sm-none">
                <h4>Фотокартини</h4>
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

export default CarouselPhoto;
