import "./fancy.css";
import Fancybox from "./fancy.js";

export default function MakeFancybox() {
  return (
    <div className="MakeFancybox">
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" 
                    data-wow-delay="0.1s" 
                    style={{maxWidth: '600px', 
                    visibility: 'visible', 
                    animationDelay: '0.1s', 
                    animationName: 'fadeInUp'}}>
                    <h1 className="display-6 mb-4">Наша продукція</h1>
                    <p className="text-dark text-center">Це далеко не повний перелік того, 
                    що ми можемо запропонувати Вам:</p>
                </div>
                <Fancybox>
                <div class="row gx-5 justify-content-center">
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item1.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item1.png" 
                            alt="Візитки"/>
                            <div class="overlay">
                                <div class="text">Візитки</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item2.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item2.png" 
                            alt="Календарики"/>
                            <div class="overlay">
                                <div class="text">Календарики</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item3.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item3.png" 
                            alt="Годинники"/>
                            <div class="overlay">
                                <div class="text">Годинники</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item4.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item4.png" 
                            alt="Фотокниги"/>
                            <div class="overlay">
                                <div class="text">Фотокниги</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item5.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item5.png" 
                            alt="Чашки"/>
                            <div class="overlay">
                                <div class="text">Чашки</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item6.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item6.png" 
                            alt="Календарі"/>
                            <div class="overlay">
                                <div class="text">Календарі</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item7.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item7.png" 
                            alt="Пазли"/>
                            <div class="overlay">
                                <div class="text">Пазли</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-9 col-sm-5 col-md-3 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/fancybox/item8.png">
                            <img className="img-fluid rounded " src="/images/fancybox/item8.png" 
                            alt="Фотографії"/>
                            <div class="overlay">
                                <div class="text">Фотографії</div>
                            </div>
                        </a>
                    </div>
                </div>
                </Fancybox>
            </div>
        </div>
    </div>
  );
}
