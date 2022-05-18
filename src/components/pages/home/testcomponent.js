import React from "react";

const TestComponent = () => {
  return (
    <div classNameName="container ">
      {/* Рядок для темно-сірого блока */}
      <div classNameName="row  ">
        {/* Темно-сірий блок для карток */}
        <div className="col bg-dark rounded py-4">
          {/* Рядок для карток */}
          {/* <div className="container"> */}

          <div className="row gx-5 justify-content-center">
              
              {/* Фігура 1 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded ">
              <figure className="figure">
                <img
                  src="/images/slider/img1.png"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  A caption for the above image 1.
                </figcaption>
              </figure>
              </div>
  
              {/* Фігура 2 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded">
              <figure className="figure">
                <img
                  src="/images/slider/img2.png"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  A caption for the above image 2.
                </figcaption>
              </figure>
              </div>
  
              {/* Фігура 3 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded">
              <figure className="figure">
                <img
                  src="/images/slider/img3.png"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  A caption for the above image 3.
                </figcaption>
              </figure>
              </div>
  
              {/* Фігура 4 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded">
              <figure className="figure">
                <img
                  src="/images/slider/img4.png"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  A caption for the above image 4.
                </figcaption>
              </figure>
              </div>

              {/* Фігура 5 */}
              <div className="col-9 col-sm-5 col-md-3 m-2 p-3 border bg-light rounded">
              <figure className="figure">
                <img
                  src="/images/slider/img5.png"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  A caption for the above image 5.
                </figcaption>
              </figure>
              </div>
  
            </div>
          {/* </div> */}
          
        </div>
       </div>
     </div>
  );
};

export default TestComponent;
