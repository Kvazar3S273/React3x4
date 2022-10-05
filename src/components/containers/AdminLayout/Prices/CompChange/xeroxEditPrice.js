import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetXeroxes, UpdateXeroxTable } from "../../../../../constants/actions/compActions/xerox";

const XeroxEditPrice = () => {
  const input = useRef();

  const initialXeroxState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listxeroxes } = useSelector((state) => state.xerox);
  const [editXerox, setEditXerox] = useState(initialXeroxState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetXeroxes());
  }, []);

  const Table = ({ listxeroxes }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Вид документа</th>
              <th scope="col" className="text-center">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {listxeroxes.map((row, index) => (
              <TableRow key={row.id} row={row} index={listxeroxes[index]} />
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
    const item = listxeroxes.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

    if (!foc) {
      setEditXerox(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    //console.log("Datatype",dataType);
    //console.log("datas:",values);
    setEditXerox({ ...editXerox, [dataType]: values });
    //console.log("Final:",editFnd);
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateXeroxItem = () => {
    //console.log("FND:",editFnd);
    const idItem = editXerox.id;

    const upd = {
      price: editXerox.price,
    };

    dispatch(UpdateXeroxTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetXeroxes());
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
      <th scope="row">{row.name}</th>
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
                  value={editXerox.price}
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
                  onClick={updateXeroxItem}
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

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Ксерокопії</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listxeroxes={listxeroxes} />
      </div>
    </div>
  );
};
export default XeroxEditPrice;
