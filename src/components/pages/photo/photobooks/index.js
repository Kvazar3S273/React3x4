import React from "react";
import { Zoom } from "react-slideshow-image";

//see more here:
//https://www.npmjs.com/package/react-slideshow-image

const Photobooks = () => {
  const images1 = [
    "images/services/photo/fotoprint1.jpg",
    "images/services/photo/fotoprint2.jpg",
    "images/services/photo/fotoprint3.jpg",
  ];
  const images2 = [
    "images/services/photo/fotoprint2.jpg",
    "images/services/photo/fotoprint3.jpg",
    "images/services/photo/fotoprint1.jpg",
  ];
  const images3 = [
    "images/services/photo/fotoprint3.jpg",
    "images/services/photo/fotoprint1.jpg",
    "images/services/photo/fotoprint2.jpg",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    duration: 2000,
  };

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Фотокниги</h2>
        
      </div>
      <div className="row">
          <div className="col-md-4">
            <Zoom {...zoomInProperties}>
              {images1.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
          <div className="col-md-4">
            <Zoom {...zoomInProperties}>
              {images2.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
          <div className="col-md-4">
            <Zoom {...zoomInProperties}>
              {images3.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <img
                    style={{ objectFit: "cover", width: "100%" }}
                    src={each}
                  />
                </div>
              ))}
            </Zoom>
          </div>
        </div>
    </div>
  );
};
export default Photobooks;
