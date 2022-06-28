import React from "react";

const Page404 = () => {
  return (
    <>
      <div className="row">
        <div className="col ">
              <img src="/images/services/404.jpg" className="w-100 img-responsive" />
              <div className="carousel-caption" style={{ top:"5em"}}>
                <h1 className="text-dark" style={{fontSize:"500%", fontWeight:"900"}}>404</h1>
                {/* <h3 className="text-dark">Сторінка відсутня або в розробці</h3> */}
                <h3 className="text-dark">Пейдж нот фаунд</h3>
                <h4 className="text-dark">(Storinka ne znajdena)</h4>
                <p className="text-dark">Приносимо свої вибачення за незручності</p>
              </div>
        </div>
      </div>
    </>
  );
};
export default Page404;
