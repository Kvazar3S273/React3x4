import React, { useState, useRef } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";
import "../style.css";
import "../../photo/photopicture/stylepicture.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPhotopictures } from "../../../../constants/actions/photoActions/photopicture";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
//see more here:
//https://www.npmjs.com/package/react-slideshow-image

const Photopicture = () => {
  const initCurrentPicture = {
    nameImage: "images/services/photo/interiors/1.jpg",
    locationTop: "25%",
    locationLeft: "60%",
    boxShadow: "-3px 1px 7px 1px rgba(17, 24, 16, 0.5)",
  };

  const initDefaultImageSize = {
    widthSize: "0%",
  };

  const dispatch = useDispatch();
  const [currentPicture, SetCurrentPicture] = useState(initCurrentPicture);
  const [imageSize, SetImageSize] = useState(initDefaultImageSize);
  const [selectImage, setSelectImage] = useState(null);
  const [decrese, setDecrese] = useState("");
  const [vertical, setVertical] = useState(false);
  const hiddenFileInput = useRef(null);

  const { listphotopictures } = useSelector((state) => state.photopicture);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    // const img = document.createElement('img');
    const fileUploaded = event.target.files[0];
    console.log("select", fileUploaded);
    const objectURL = URL.createObjectURL(fileUploaded);
    setSelectImage(objectURL);
  };

  //   img.onload = ()=> {
  //     console.log(`Width: ${img.width}, Height: ${img.height}`);

  //     if (img.width < img.height) {
  //       console.log(
  //         `Ширина фото менша за висоту.Ваше фото вертикальне.`,

  //       );
  //       setVertical(true);
  //       console.log(`Vertical:`,vertical);
  //     }
  //     else  {
  //       console.log(
  //         `Ширина фото більша за висоту.Ваше фото горизонтальне.`,
  //       );
  //     }
  //     URL.revokeObjectURL(objectURL);}
  //     img.src = objectURL;
  // };

  useEffect(() => {
    dispatch(GetPhotopictures());

    const img = document.createElement("img");
    img.onload = () => {
      console.log(`Width: ${img.width}, Height: ${img.height}`);

      if (img.width < img.height) {
        console.log(`Ширина фото менша за висоту.Ваше фото вертикальне.`);
        setVertical(true);
      } else {
        console.log(`Ширина фото більша за висоту.Ваше фото горизонтальне.`);
        setVertical(false);
      }
      console.log(`Vertical useeffect final:`, vertical);
      URL.revokeObjectURL(selectImage);
    };
    img.src = selectImage;
    var res = imageSize.widthSize;
    const res2 = res.replace(/%/g, "");
    setDecrese(res2);

    // window.addEventListener('error', e => {
    //   if (e.message === 'ResizeObserver loop completed with undelivered notifications.' || e.message === 'Script error.') {
    //     const resizeObserverErrDiv = document.getElementById(
    //       'webpack-dev-server-client-overlay-div'
    //     )
    //     const resizeObserverErr = document.getElementById(
    //       'webpack-dev-server-client-overlay'
    //     )
    //     if (resizeObserverErr) {
    //       resizeObserverErr.setAttribute('style', 'display: none');
    //     }
    //     if (resizeObserverErrDiv) {
    //       resizeObserverErrDiv.setAttribute('style', 'display: none');
    //     }
    //   }
    // })
  }, [selectImage, imageSize]);

  const images = [
    "images/services/photo/photopicture1.jpg",
    "images/services/photo/photopicture2.jpg",
    "images/services/photo/photopicture3.jpg",
  ];

  const imagess = [
    {
      nameImage: "images/services/photo/interiors/1.jpg",
      locationTop: "25%",
      locationLeft: "60%",
      boxShadow: "-3px 1px 7px 1px rgba(17, 24, 16, 0.5)",
    },
    {
      nameImage: "images/services/photo/interiors/2.jpg",
      locationTop: "25%",
      locationLeft: "40%",
      boxShadow: "-3px 1px 7px 1px rgba(17, 24, 16, 0.5)",
    },
    {
      nameImage: "images/services/photo/interiors/3.jpg",
      locationTop: "32%",
      locationLeft: "48%",
      boxShadow: "0px 3px 7px 1px rgba(17, 24, 16, 0.5)",
    },
    {
      nameImage: "images/services/photo/interiors/4.jpg",
      locationTop: "32%",
      locationLeft: "52%",
      boxShadow: "3px 1px 7px 1px rgba(17, 24, 16, 0.5)",
    },
    {
      nameImage: "images/services/photo/interiors/5.jpg",
      locationTop: "35%",
      locationLeft: "36%",
      boxShadow: "0px 3px 7px 1px rgba(17, 24, 16, 0.5)",
    },
    {
      nameImage: "images/services/photo/interiors/6.jpg",
      locationTop: "40%",
      locationLeft: "46%",
      boxShadow: "3px 1px 7px 1px rgba(17, 24, 16, 0.5)",
    },
  ];
  //const interior2 = "images/services/photo/interiors/2.jpg";
  //const pictureUser = "images/services/photo/interiors/picture.jpg";

  const buttonsItems = [
    { title: "20x30", size: "4.5%" },
    { title: "30x40", size: "8%" },
    { title: "40x60", size: "10.5%" },
    { title: "50x70", size: "13%" },
    { title: "60x90", size: "15%" },
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    duration: 3000,
  };
  return (
    <section id="photopicture">
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
                З розвитком нових технологій стала можливою ще одна нова послуга
                - друк на полотні. Ми можемо надрукувати вашу фотографію або
                репродукцію картини на справжньому полотні! Раніше таке
                задоволення міг позволити собі далеко не кожен. Послуги
                художників завжди оплачувались не дешево. Та й часу це займало
                багато. Сьогодні виготовлення вашої картини займає набагато
                менше часу і коштує набагато менше. В послугу "Полотно з
                підрамником" входить галерейна натяжка полотна і кріплення типу
                "крокодил".
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
                  <h2 className="text-center text-danger">АКЦІЯ!</h2>
                  <h5 className="text-center ">
                    При замовленні більше однієї картини, кожна наступна картина
                    такого ж або меншого розміру
                  </h5>
                  <h5 className="text-center mb-4">
                    {" "}
                    буде зі знижкою <b>25%</b> від вартості, яка вказана в
                    прейскуранті
                  </h5>
                </div>
                <div className="col-md-2"></div>
              </div>

              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <h3 className="text-center mt-4">
                    Цікаво як виглядатиме картина в інтер'єрі?
                  </h3>

                  {/* Вибір зображення */}
                  <div className="row mt-3">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 ">
                      <div
                        class="m-4 p-0 rounded"
                        style={{ background: "#59BAC7 " }}
                        // style={{ background: "#C2DBCF " }}
                        id="imageField"
                        onClick={handleClick}
                      >
                        {/* <img id="selectedImage" src="#" alt="Selected Image" /> */}

                        {selectImage ? (
                          <img
                            src={selectImage}
                            className="img-fluid w-100 "
                            alt="uploadimage"
                          ></img>
                        ) : (
                          <h3 className="text-center mt-5 mb-5">
                            Крок 1: Завантажте зображення
                          </h3>
                        )}
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>

                  {/* Вибір розміру картини */}
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                      <div
                        class="m-1 p-5 text-white rounded"
                        style={{ background: "#66A586 " }}
                      >
                        <h3 className="text-center">
                          Крок 2: Виберіть розмір картини
                        </h3>

                        {/*Buttons for select size*/}

                        <div className="row justify-content-center mt-3">
                          {buttonsItems.map((item) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
                              <div className="row justify-content-center">
                                <button
                                  type="button"
                                  class="btn-pict btn-lg btn-outline-success text-dark"
                                  onClick={() =>
                                    SetImageSize({ widthSize: item.size })
                                  }
                                >
                                  {item.title}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>

                  <h3 className="text-center mb-3">
                    Крок 3: Виберіть інтер'єр
                  </h3>

                  <div className="row">
                    {imagess.map((imageItem, index) => (
                      <div className="col-md-2 col-2">
                        <img
                          className="thumbnail"
                          src={imageItem.nameImage}
                          alt={imageItem.nameImage}
                          key={index}
                          onClick={() => SetCurrentPicture(imageItem)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="container-fluid bg-1">
                    <img
                      id="mainImage"
                      className="photo-service mt-2"
                      src={currentPicture.nameImage}
                      alt="Інтер'єр"
                    />
                    {selectImage ? (
                      <img
                        className="img-2"
                        src={selectImage}
                        style={
                          vertical
                            ? {
                                top: currentPicture.locationTop,
                                left: currentPicture.locationLeft,
                                height: `${decrese * 1.5}%`,
                                boxShadow: currentPicture.boxShadow,
                              }
                            : {
                                top: currentPicture.locationTop,
                                left: currentPicture.locationLeft,
                                width: imageSize.widthSize,
                                boxShadow: currentPicture.boxShadow,
                              }
                        }
                        alt="Картина"
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Photopicture;
