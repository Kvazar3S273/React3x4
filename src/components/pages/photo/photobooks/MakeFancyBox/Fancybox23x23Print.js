import "../../../home/fancy.css";
import Fancybox from "../../../home/fancy.js";

export default function Fancybox23x23Print() {
  return (
    <div className="MakeFancybox">
      <div className="container">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "600px",
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          ></div>
          <Fancybox>
            <div class="row justify-content-center">
              <div className="faded-img col-7 p-4 rounded">
                <a
                  className="service-item d-block rounded text-center h-100 p-4"
                  data-fancybox="gallery"
                  href="/images/services/photo/photobooks/parameters/Printbooks/23x23/cover_printbook_23x23.jpg"
                >
                  <img
                    className="img-fluid rounded "
                    src="/images/services/photo/photobooks/parameters/Printbooks/23x23/cover_printbook_23x23.jpg"
                    alt="Файл обкладинки"
                  />
                  <div class="overlay">
                    <div class="text">Файл обкладинки</div>
                  </div>
                </a>
              </div>
              <div className="faded-img col-7 p-4 rounded">
                <a
                  className="service-item d-block rounded text-center h-100 p-4"
                  data-fancybox="gallery"
                  href="/images/services/photo/photobooks/parameters/Printbooks/23x23/page_printbook_23x23.jpg"
                >
                  <img
                    className="img-fluid rounded "
                    src="/images/services/photo/photobooks/parameters/Printbooks/23x23/page_printbook_23x23.jpg"
                    alt="Файл сторінки"
                  />
                  <div class="overlay">
                    <div class="text">Файл сторінки</div>
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
