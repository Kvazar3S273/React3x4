import React from "react";
import "./lightbox.css";

const Lightbox = () => {
    function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block";
    }
    function handleClick(){
        this.parentElement.style.display='none';
    }
  return (
    <>
      <div className="row">
        <div className="column">
          <img src="/images/slider/bg1.jpg" alt="Nature" style={{width:"100%"}} onclick={myFunction} />
        </div>
        <div className="column">
        <img src="/images/slider/bg2.jpg" alt="Nature" style={{width:"100%"}} onclick={myFunction} />
        </div>
        <div className="column">
        <img src="/images/slider/bg3.jpg" alt="Nature" style={{width:"100%"}} onclick={myFunction} />
        </div>
        <div className="column">
        <img src="/images/slider/bg4.jpg" alt="Nature" style={{width:"100%"}} onclick={myFunction} />
        </div>
      </div>

      <div className="container">
        <span
          onclick={handleClick}
          className="closebtn"
        >
          &times;
        </span>
        <img id="expandedImg" style={{width:"100%"}} />
        <div id="imgtext"></div>
      </div>
    </>
  );
};

export default Lightbox;
