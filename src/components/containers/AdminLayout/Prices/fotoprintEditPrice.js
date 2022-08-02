import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetFotoprints,
  UpdateFotoprintTable,
} from "../../../../constants/actions/photoActions/fotoprint";
import { useNavigate } from "react-router-dom";

const FotoprintEditPrice = () => {
  const input = useRef();

  const initialFotoprintState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listfotoprints } = useSelector((state) => state.fotoprint);
  const [editFotoprint, setEditFotoprint] = useState(initialFotoprintState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetFotoprints());
  }, []);

  const Table = ({ listfotoprints }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Формат</th>
              <th scope="col" className="text-center">Точні розміри, мм</th>
              <th scope="col" className="text-center">
                Ціна
              </th>
            </tr>
          </thead>
          <tbody>
            {listfotoprints.map((row, index) => (
              <TableRow key={row.id} row={row} index={listfotoprints[index]} />
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
    const item = listfotoprints.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

    if (!foc) {
      setEditFotoprint(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    //console.log("Datatype",dataType);
    //console.log("datas:",values);
    setEditFotoprint({ ...editFotoprint, [dataType]: values });
    //console.log("Final:",editFnd);
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateFotoprintItem = () => {
    //console.log("FND:",editFnd);
    const idItem = editFotoprint.id;

    const upd = {
      price: editFotoprint.price,
    };

    dispatch(UpdateFotoprintTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetFotoprints());
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
      <td className="text-center">{row.exactSizes}</td>
      {isOpen == row.id && complete ? (
          <td>
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
                  value={editFotoprint.price}
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
                  onClick={updateFotoprintItem}
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
        <h1 className="text-center">Фотодрук</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listfotoprints={listfotoprints} />
      </div>
    </div>
  );
};
export default FotoprintEditPrice;
