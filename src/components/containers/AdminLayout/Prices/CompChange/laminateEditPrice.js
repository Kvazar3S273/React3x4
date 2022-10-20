import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetLaminates,
  UpdateLaminateTable,
} from "../../../../../constants/actions/compActions/laminate";

const LaminateEditPrice = () => {
  const input = useRef();

  const initialLaminateState = {
    id: null,
    price: null,
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listlaminates } = useSelector((state) => state.laminate);
  const [editLaminate, setEditLaminate] = useState(initialLaminateState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetLaminates());
  }, []);

  const Table = ({ listlaminates }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Послуга</th>
              <th scope="col" className="text-center">
                Ціна
              </th>
            </tr>
          </thead>
          <tbody>
            {listlaminates.map((row, index) => (
              <TableRow key={row.id} row={row} index={listlaminates[index]} />
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
    const item = listlaminates.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setEditLaminate(item);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

  };

  const handleInputChange = (dataType, values, index) => {
    setEditLaminate({ ...editLaminate, [dataType]: values });
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateLaminateItem = () => {
    const idItem = editLaminate.id;

    const upd = {
      price: editLaminate.price,
    };

    dispatch(UpdateLaminateTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetLaminates());
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
        <td>
          <div className="d-flex justify-content-end" style={{ left: "3em" }}>
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
                value={editLaminate.price}
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
                onClick={updateLaminateItem}
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
    <div className="row mt-3 mb-3" style={{overflowX:"auto"}}>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Ламінування</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listlaminates={listlaminates} />
      </div>
    </div>
  );
};
export default LaminateEditPrice;
