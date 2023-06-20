import React from "react";

const Carousel = () => {
    return (
        
<div id="carouselBasicExample" className="carousel slide mb-3" data-bs-ride="carousel">
  {/*<!-- Carousel wrapper -->*/}
  {/*<!-- Indicators -->*/}
  <div className="carousel-indicators" style={{top:"93%"}}>
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
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
  </div>

  <div className="carousel-inner">

    {/* Слайд 1  */}
    <div className="carousel-item active">
    <img src="/images/slider/bg1.jpg" className="d-block w-100" alt="Backgroung slide 1"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img1.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img1.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img1.png" style={{width:"40%"}}/>
                </div>

                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Фотопослуги</h2>
                    <p>Фото на документи, друк фотографій, фотокниги,<br />
                        сканування фотографій, заміна фону, реставрація...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h4>Фотопослуги</h4>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 2  */}
    <div className="carousel-item">
      <img src="/images/slider/bg2.jpg" className="d-block w-100" alt="Backgroung slide 2"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img2.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img2.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img2.png" style={{width:"40%"}}/>
                </div>

                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Комп'ютерні послуги</h2>
                    <p>Ксерокопії, друк, сканування, запис цифрових носіїв, <br />
                        ламінування, брошурування, друк на дисках...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h4>Комп'ютерні послуги</h4>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 3 */}
    <div className="carousel-item">
      <img src="/images/slider/bg3.jpg" className="d-block w-100" alt="Backgroung slide 3"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img3.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img3.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img3.png" style={{width:"40%"}}/>
                </div>
                
                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Поліграфія</h2>
                    <p>Візитки, календарики, листівки, флаєри, бірки, <br />
                        цінники, наклейки, хенгери, банери, самоклейка...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h4>Поліграфія</h4>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 4 */}
    <div className="carousel-item">
      <img src="/images/slider/bg4.jpg" className="d-block w-100" alt="Backgroung slide 4"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img4.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img4.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img4.png" style={{width:"40%"}}/>
                </div>
                
                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Нанесення фото</h2>
                    <p> Фото на чашках, пазлах, годинниках <br />
                    етикетки на пляшки, друк на полотні, фотокартини...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h4>Нанесення фото</h4>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 5 */}
    <div className="carousel-item">
      <img src="/images/slider/bg5.jpg" className="d-block w-100" alt="Backgroung slide 5"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img5.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img5.png" style={{width:"40%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img5.png" style={{width:"40%"}}/>
                </div>
                
                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Продаж</h2>
                    <p>Фоторамки, фотоальбоми, диски, елементи живлення, <br />
                    канцтовари, обкладинки на документи, LED-лампи...</p>
                </div>
                {/*Лише заголовок тільки на xs */}
                <div className="d-block d-sm-none">
                    <h4>Продаж</h4>
                </div>
            </div>
      </div>
    </div>

    {/* Слайд 6 */}
    <div className="carousel-item">
      <img src="/images/slider/bg6.jpg" className="d-block w-100" alt="Backgroung slide 6"/>
      <div className="carousel-caption" style={{ textShadow: "4px 4px 10px #000"}}>
            <div className="row">
                {/* Є картинка на великих, прихована тільки на sm */}
                <div className="d-sm-none d-none d-md-block">
                    <img src="/images/slider/img7.png" style={{width:"50%"}}/>
                </div>
                {/* Є картинка тільки на sm */}
                <div className="d-none d-sm-block d-md-none">
                    <img src="/images/slider/img7.png" style={{width:"45%"}}/>
                </div>
                {/* Є картинка тільки на xs */}
                <div className="d-block d-sm-none">
                    <img src="/images/slider/img7.png" style={{width:"40%"}}/>
                </div>
                
                {/*Заголовок і опис на всіх, крім xs */}
                <div className="d-none d-sm-block">
                    <h2>Оцифровка</h2>
                    <p>Перезапис відеокасет VHS, miniDV на комп'ютер, збереження на флешку...</p>
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
    
    export default Carousel;