import React from "react";


const Photobooks = () => { 
  
  const handleClick = () => {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://pro.cyfrolab.com/widget/calc.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Фотокниги</h2>

        <div
          id="widget_calc_user"
          data-user-key="9893e8659bc23351fd92d9c626c02df4"
          data-user-lang="uk"
          data-user-currency="UAH"
        >
          <button
            type="submit"
            className="btn btn-primary mt-4"
            onClick={handleClick}
          >
            Калькулятор
          </button>
        </div>
      </div>
    </div>
  );
};
export default Photobooks;
