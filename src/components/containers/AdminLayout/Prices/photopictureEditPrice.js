import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetPhotopictures, UpdatePhotopictureTable } from "../../../../constants/actions/photoActions/photopicture";
import ModalPercent from "./ModalPercent";

const PhotopictureEditPrice = () => {
  const input = useRef();

  const initialPhotopictureState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listphotopictures } = useSelector((state) => state.photopicture);
  const [editPhotopicture, setEditPhotopicture] = useState(initialPhotopictureState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetPhotopictures());
  }, []);

  const Table = ({ listphotopictures }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Формат</th>
              <th scope="col" className="text-center">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {listphotopictures.map((row, index) => (
              <TableRow key={row.id} row={row} index={listphotopictures[index]} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
  );

  const RowHandleClick = (e, row) => {
    e.preventDefault();

    console.log("Row", row);
    //console.log("e.currentTarget.id",e.currentTarget.id)
    const item = listphotopictures.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

    if (!foc) {
      setEditPhotopicture(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    //console.log("Datatype",dataType);
    //console.log("datas:",values);
    setEditPhotopicture({ ...editPhotopicture, [dataType]: values });
    //console.log("Final:",editFnd);
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updatePhotopictureItem = () => {
    //console.log("FND:",editFnd);
    const idItem = editPhotopicture.id;

    const upd = {
      price: editPhotopicture.price,
    };

    dispatch(UpdatePhotopictureTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetPhotopictures());
      })
      .catch((ex) => {
        console.log("Errorr", ex);
      });
  };

  const TableRow = ({ row, index }) => (
    <tr
      className="table-light"
      id={row.id}
      onClick={(e) => RowHandleClick(e, row)}
    >
      <th scope="row">{row.format}</th>
      {isOpen == row.id && complete ? (
          <td >
            <div
              className="d-flex justify-content-end"
              style={{ left: "3em" }}
            >
              <td>
                <input
                  ref={
                    foc
                      ? (input) => {
                          input && input.focus();
                        }
                      : input
                  }
                  id="price"
                  value={editPhotopicture.price}
                  name="price"
                  onChange={(e) =>
                    handleInputChange("price", e.currentTarget.value, index)
                  }
                  onClick={handleToggle}
                  style={{
                    width: "100px",
                    height: "35px",
                    textAlign: "center",
                    borderRadius: "7px",
                    marginRight: "2em",
                  }}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary "
                  style={{
                    width: "60px",
                    height: "35px",
                  }}
                  onClick={updatePhotopictureItem}
                  type="submit"
                >
                  Save
                </button>
              </td>
            </div>
          </td>
      ) : (
        <td className="text-center">{row.price}</td>
      )}
    </tr>
  );

  const [modalActive, setModalActive] = useState(true);
  

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фотокартини</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>

        <Table listphotopictures={listphotopictures} />

        <ModalPercent active={modalActive} setActive={setModalActive}>
          <div id="modalPercent">

                <div className="modal-header">
                  <h4 className="modal-title">
                    Попередження
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    // data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModalActive(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  Ви справді плануєте збільшити ціну на ...%?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalActive(false)}
                  >
                    Ні, я передумав
                  </button>
                  <button type="button" className="btn btn-primary">
                    Так, збільшити
                  </button>
                </div>
          </div>
          </ModalPercent>
          
        <div className="row mt-3 mb-3">
          <h4 className="text-center text-danger mb-4">
            Збільшити ціни на певний %
          </h4>

          <div className="row text-center">
            <div className="col">
              <h5 className="text-end">Збільшити всі ціни на</h5>
            </div>
            <div className="col">
              <input
                id="percentValue"
                style={{
                  width: "180px",
                  height: "35px",
                  textAlign: "center",
                }}
              />
              %
            </div>
            <div className="col text-start">
              {/* <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Збільшити
              </button> */}
              <button
                type="button"
                className="open-btn btn btn-primary"
                onClick={() => setModalActive(true)}
              >
                Збільшити
              </button>
            </div>
          </div>

          {/* Modal */}
          {/* <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Попередження
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Ви справді плануєте збільшити ціну на ...%?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Ні
                  </button>
                  <button type="button" class="btn btn-primary">
                    Так, збільшити
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          
        </div>
      </div>
    </div>
  );
};
export default PhotopictureEditPrice;
