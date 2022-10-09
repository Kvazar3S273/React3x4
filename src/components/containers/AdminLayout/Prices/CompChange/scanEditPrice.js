import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetScans, UpdateScanTable } from "../../../../../constants/actions/compActions/scan";

const ScanEditPrice = () => {
  const input = useRef();

  const initialScanState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listscans } = useSelector((state) => state.scan);
  const [editScan, setEditScan] = useState(initialScanState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetScans());
  }, []);

  const Table = ({ listscans }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Послуга</th>
              <th scope="col" className="text-center">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {listscans.map((row, index) => (
              <TableRow key={row.id} row={row} index={listscans[index]} />
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
    const item = listscans.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

    if (!foc) {
      setEditScan(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    setEditScan({ ...editScan, [dataType]: values });
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateScanItem = () => {
    const idItem = editScan.id;

    const upd = {
      price: editScan.price,
    };

    dispatch(UpdateScanTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetScans());
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
      <th scope="row">{row.service}</th>
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
                  value={editScan.price}
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
                  onClick={updateScanItem}
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
        <h1 className="text-center">Сканування</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listscans={listscans} />
      </div>
    </div>
  );
};
export default ScanEditPrice;
