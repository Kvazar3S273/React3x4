import React from "react";
// import "./style.css"
const CarouselComp = () => {
    return (
        
<div id="carouselBasicExample" className="carousel slide mb-3" data-bs-ride="carousel">
  {/*<!-- Carousel wrapper -->*/}
  {/*<!-- Indicators -->*/}
  <div className="carousel-indicators" >
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
    
  </div>

  <div className="carousel-inner">

    {/* Слайд 1  */}
    <div className="carousel-item active">
    <img src="/images/slider/comp1.jpg" className="d-block w-100" alt="Backgroung slide 1"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/cimg1.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/cimg1.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/cimg1.png" style={{width:"40%"}}/>
                </div>

                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Фото на документи</h2>
                    <p>Фото на паспорт, візу, пенсійне, учнівський, посвідчення водія <br/>
                      медичну довідку, військовий квиток, Грін карту...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h2>Фото на документи</h2>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 2  */}
    <div className="carousel-item">
      <img src="/images/slider/comp2.jpg" className="d-block w-100" alt="Backgroung slide 2"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/cimg2.png" style={{width:"60%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/cimg2.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/cimg2.png" style={{width:"40%"}}/>
                </div>

                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Друк фотографій</h2>
                    <p>Фотодрук на цифровій мінілабораторії збірним тиражем...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h2>Друк фотографій</h2>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 3 */}
    <div className="carousel-item">
      <img src="/images/slider/comp3.jpg" className="d-block w-100" alt="Backgroung slide 3"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/cimg3.png" style={{width:"60%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/cimg3.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/cimg3.png" style={{width:"40%"}}/>
                </div>
                
                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Фотокниги</h2>
                    <p>Фотокниги Slimbook, Printbook, Photobook, Bambook. <br/>
                    10 форматів, багато додаткових опцій...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h2>Фотокниги</h2>
                </div>
            </div>
      </div>
    </div>

    

    
  </div>
  {/*<!-- Inner -->*/}

  {/*<!-- Controls -->*/}
  <button className="carousel-control-prev" type="button" 
  data-bs-target="#carouselBasicExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" 
  data-bs-target="#carouselBasicExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  {/*<!-- Carousel wrapper -->*/}
</div>
        );
    };
    
    export default CarouselComp;