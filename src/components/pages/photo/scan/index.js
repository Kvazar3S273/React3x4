import React from "react";
import { GetPhotoscans } from "../../../../constants/actions/photoActions/photoscan";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ScanPage = () => {
  const dispatch = useDispatch();
  const { listphotoscans } = useSelector((state) => state.photoscan);
  useEffect(() => {
    dispatch(GetPhotoscans());
  }, []);

  return (
    // <section id="scan">
    <section>
      <div className="row mt-3 mb-3">
        <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
          <h1 className="text-center">Сканування фотографій</h1>
          <div className="row m-3 p-2">
            <div className="col-md-4">
              <img
                className="photo-service"
                src="/images/services/photo/photoservice4.jpg"
                alt="Сканування фото"
              />
            </div>
            <div className="col-md-8 px-3">
              <p>
                Сканування фотографій переведе ваші знімки в цифровий формат і
                дасть змогу проглядати їх безпосередньо на екрані монітора,
                телевізора, цифрової фоторамки чи обробляти їх у графічних
                редакторах. З часом стан ваших фотографій може погіршитись, то
                чому б не записати їх на цифрові носії та зберегти якнайдовше?
              </p>
              <h3 className="text-center text-danger">Ціни на сканування</h3>
              <div className="row" style={{ overflowX: "auto" }}>
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Формат</th>
                      <th scope="col">300 dpi</th>
                      <th scope="col">600 dpi</th>
                      <th scope="col">1200 dpi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listphotoscans &&
                      listphotoscans.map((item) => (
                        <tr key={item.id}>
                          <td>{item.format}</td>
                          <td>
                            {item.price300dpi === 0 ? "" : item.price300dpi}
                          </td>
                          <td>
                            {item.price600dpi === 0 ? "" : item.price600dpi}
                          </td>
                          <td>
                            {item.price1200dpi === 0 ? "" : item.price1200dpi}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScanPage;
