import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";
import "../style.css";
import "../../photo/photopicture/stylepicture.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPhotopictures } from "../../../../constants/actions/photoActions/photopicture";
//see more here:
//https://www.npmjs.com/package/react-slideshow-image

const Photopicture = () => {
  const dispatch = useDispatch();
  const { listphotopictures } = useSelector((state) => state.photopicture);
  useEffect(() => {
    dispatch(GetPhotopictures());
  }, []);

  const images = [
    "images/services/photo/photopicture1.jpg",
    "images/services/photo/photopicture2.jpg",
    "images/services/photo/photopicture3.jpg",
  ];

  const interior1 = "images/services/photo/interiors/1.jpg";
  const interior2 = "images/services/photo/interiors/2.jpg";
  const interior3 = "images/services/photo/interiors/3.jpg";
  const interior4 = "images/services/photo/interiors/4.jpg";
  const interior5 = "images/services/photo/interiors/5.jpg";
  const interior6 = "images/services/photo/interiors/6.jpg";
  const pictureUser = "images/services/photo/interiors/picture.jpg";

  const changeMainImage = (thumbnail) => {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;

  }

  const openFileSelector = () => {
    const input = document.createElement("input");
    input.type = "file";
    // input.accept = "image/*";
    input.onchange = handleFileSelect();
    input.click();
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById("selectedImage");
        img.src = e.target.result;
        img.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  }

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    duration: 3000,
  };
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фотокартини</h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Zoom {...zoomInProperties}>
              {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              З розвитком нових технологій стала можливою ще одна нова послуга -
              друк на полотні. Ми можемо надрукувати вашу фотографію або
              репродукцію картини на справжньому полотні! Раніше таке
              задоволення міг позволити собі далеко не кожен. Послуги художників
              завжди оплачувались не дешево. Та й часу це займало багато.
              Сьогодні виготовлення вашої картини займає набагато менше часу і
              коштує набагато менше. В послугу "Полотно з підрамником" входить
              галерейна натяжка полотна і кріплення типу "крокодил".
            </p>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h3 className="text-center text-danger">
                  Вартість виготовлення фотокартин
                </h3>
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Формат</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listphotopictures &&
                      listphotopictures.map((item) => (
                        <tr key={item.id}>
                          <td>{item.format}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>

            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 className="text-center">
                  Цікаво як буде виглядати картина в інтер'єрі?
                </h3>

                {/* Вибір зображення */}
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                    <div id="imageField" onclick={openFileSelector}>
                      <img id="selectedImage" src="#" alt="Selected Image" />
                      <h2 className="text-center">
                        Крок 1: Завантажте зображення
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>

                {/* Вибір розміру картини */}
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                    <div
                      class="m-4 p-5 text-white rounded"
                      style={{ background: "#66A586 " }}
                    >
                      <h2 className="text-center mb-3">
                        Крок 2: Виберіть розмір картини
                      </h2>

  
                      <div className="row mt-3 me-auto">
                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            20x30
                          </button>
                        </div>

                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            30x40
                          </button>
                        </div>

                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            40x60
                          </button>
                        </div>
                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            50x70
                          </button>
                        </div>
                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            60x90
                          </button>
                        </div>
                        <div className="col-md-2 col-2">
                          <button type="button" class="btn btn-lg btn-outline-success">
                            90x120
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>

                <h2 className="text-center">Крок 3: Виберіть інтер'єр</h2>

                <div className="row">
                    <div className="col-md-2 col-2">
                      <img
                        className="thumbnail"
                        src={interior1}
                        alt="Інтер'єр1"
                        // onClick={changeMainImage(this)}
                      />
                    </div>
                    <div className="col-md-2  col-2">
                      <img
                        className="thumbnail"
                        src={interior2}
                        alt="Інтер'єр2"
                      />
                    </div>
                    <div className="col-md-2  col-2">
                      <img
                        className="thumbnail"
                        src={interior3}
                        alt="Інтер'єр3"
                      />
                    </div>
                    <div className="col-md-2  col-2">
                      <img
                        className="thumbnail"
                        src={interior4}
                        alt="Інтер'єр4"
                      />
                    </div>
                    <div className="col-md-2  col-2">
                      <img
                        className="thumbnail"
                        src={interior5}
                        alt="Інтер'єр5"
                      />
                    </div>
                    <div className="col-md-2  col-2">
                      <img
                        className="thumbnail"
                        src={interior6}
                        alt="Інтер'єр6"
                      />
                    </div>
                  </div>

                <div className="container-fluid bg-1">
                  <img
                    id="mainImage"
                    className="photo-service mt-2"
                    src={interior2}
                    alt="Інтер'єр2"
                  />
                  <img className="img-2" src={pictureUser} alt="Картина" />

                  


                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};
export default Photopicture;
