import React from "react";
//import "./lightbox.css";
//src="/images/slider/bg1.jpg"
//import { Fancybox } from "@fancyapps/ui";
//import "fancyapps/ui/dist/fancybox.css";

const Gallery = () => {

  return (
    <div>
        

      <div className="row">
        <div className="col">
          <img src="/images/slider/bg1.jpg" alt="Nature1" style={{ width: "100%" }}
           />
        </div>
        <div className="col">
        <img src="/images/slider/bg2.jpg" alt="Nature2" style={{ width: "100%" }}
            />
        </div>
        <div className="col">
        <img src="/images/slider/bg3.jpg" alt="Nature3" style={{ width: "100%" }}
            />
        </div>
        <div className="col">
        <img src="/images/slider/bg4.jpg" alt="Nature4" style={{ width: "100%" }}
            />
        </div>
      </div>

      <div className="container">
        <span
          onClick="this.parentElement.style.display='none'"
          className="closebtn"
        >
          X
        </span>
        <img id="expandedImg" style={{ width: "100%" }} />
        <div id="imgtext"></div>
      </div>
     </div>
   );
 };

export default Gallery;
