import "../../../home/fancy.css";
import Fancybox from "../../../home/fancy.js";

export default function Fancybox29x19() {
  return (
    <div className="MakeFancybox">
        <div className="container">
            <div className="container">
                <div className="text-center wow fadeInUp" 
                    data-wow-delay="0.1s" 
                    style={{maxWidth: '600px', 
                    visibility: 'visible', 
                    animationDelay: '0.1s', 
                    animationName: 'fadeInUp'}}>
                </div>
                <Fancybox>
                <div class="row justify-content-center">
                    <div className="faded-img col-7 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/services/photo/photobooks/parameters/29x19/3-25_cover_29x19.jpg">
                            <img className="img-fluid rounded " 
                            src="/images/services/photo/photobooks/parameters/29x19/3-25_cover_29x19.jpg" 
                            alt="Файл обкладинки для 3-25 розворотів"/>
                            <div class="overlay">
                                <div class="text">Файл обкладинки A</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-7 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/services/photo/photobooks/parameters/29x19/26-40_cover_29x19.jpg">
                            <img className="img-fluid rounded " 
                            src="/images/services/photo/photobooks/parameters/29x19/26-40_cover_29x19.jpg" 
                            alt="Файл обкладинки для 26-40 розворотів"/>
                            <div class="overlay">
                                <div class="text">Файл обкладинки B</div>
                            </div>
                        </a>
                    </div>
                    <div className="faded-img col-7 p-4 rounded">
                        <a className="service-item d-block rounded text-center h-100 p-4" 
                            data-fancybox="gallery"
                            href="/images/services/photo/photobooks/parameters/29x19/page_29x19.jpg">
                            <img className="img-fluid rounded " 
                            src="/images/services/photo/photobooks/parameters/29x19/page_29x19.jpg" 
                            alt="Файл розвороту"/>
                            <div class="overlay">
                                <div class="text">Файл розвороту</div>
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
