import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComputer,
  faPrint,
  faGears
} from "@fortawesome/free-solid-svg-icons";

export function MoreServices() {
  return (
    <>
      <div className="row">
        <div className="col py-4" style={{ background: "#e0e3e5" }}>
          <div className="row gx-5 p-4 justify-content-center">
            <h1 className="text-danger text-center mb-4">Додаткові послуги</h1>

            <div className="col-md-5">
              <div className="row">
                <div className="col-md-3 col-3">
                  <i
                    className="d-flex justify-content-center text-success"
                    style={{ fontSize: "3.5em" }}
                  >
                    <FontAwesomeIcon icon={faComputer} />
                  </i>
                </div>
                <div className="col-md-9 col-9">
                  <h4>Розробка макету</h4>
                  <p>Дизайн макету <br/> 1 сторінки/обкладинки <br/>від 40 грн</p>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="row">
                <div className="col-md-3 col-3">
                  <i
                    className="d-flex justify-content-center text-success"
                    style={{ fontSize: "3.5em" }}
                  >
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                </div>
                <div className="col-md-9 col-9">
                  <h4>Термін розробки</h4>
                  <p>Час розробки <br/>макету фотокниги <br/>від 5 днів</p>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="row">
                <div className="col-md-3 col-3">
                  <i
                    className="d-flex justify-content-center text-success"
                    style={{ fontSize: "3.5em" }}
                  >
                    <FontAwesomeIcon icon={faPrint} />
                  </i>
                </div>
                <div className="col-md-9 col-9">
                  <h4>Термін виготовлення</h4>
                  <p>Фотокниги друкуються <br/>5 днів (терміново) +30%<br/> 8 днів (звичайна ціна)</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-3 col-3">
                  <i
                    className="d-flex justify-content-center text-success"
                    style={{ fontSize: "3.5em" }}
                  >
                    <FontAwesomeIcon icon={faGears} />
                  </i>
                </div>
                <div className="col-md-9 col-9">
                  <h4>Інші послуги</h4>
                  <p>
                  Сканування фотографій,<br/> ретушування, реставрація <br/>згідно прейскуранту
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
