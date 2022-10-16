import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetBinders,
  UpdateBinderTable,
} from "../../../../../constants/actions/compActions/binder";

const BinderEditPrice = () => {
  const input = useRef();

  const initialBinderState = {
    id: null,
    price: null,
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listbinders } = useSelector((state) => state.binder);
  const [editBinder, setEditBinder] = useState(initialBinderState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetBinders());
  }, []);

  const Table = ({ listbinders }) => (
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
            {listbinders.map((row, index) => (
              <TableRow key={row.id} row={row} index={listbinders[index]} />
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
    const item = listbinders.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

    if (!foc) {
      setEditBinder(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    setEditBinder({ ...editBinder, [dataType]: values });
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateBinderItem = () => {
    const idItem = editBinder.id;

    const upd = {
      price: editBinder.price,
    };

    dispatch(UpdateBinderTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetBinders());
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
      <th scope="row">{row.pagesQty}</th>
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
                value={editBinder.price}
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
                onClick={updateBinderItem}
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
        <h1 className="text-center">Брошурування</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listbinders={listbinders} />
      </div>
    </div>
  );
};
export default BinderEditPrice;
