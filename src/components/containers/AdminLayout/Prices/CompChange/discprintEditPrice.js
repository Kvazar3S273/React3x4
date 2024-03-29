import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetDiscprints,
  UpdateDiscprintTable,
} from "../../../../../constants/actions/compActions/discprint";

const DiscprintEditPrice = () => {
  const input = useRef();

  const initialDiscprintState = {
    id: null,
    price: null,
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listdiscprints } = useSelector((state) => state.discprint);
  const [editDiscprint, setEditDiscprint] = useState(initialDiscprintState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetDiscprints());
  }, []);

  const Table = ({ listdiscprints }) => (
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
            {listdiscprints.map((row, index) => (
              <TableRow key={row.id} row={row} index={listdiscprints[index]} />
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
    const item = listdiscprints.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setEditDiscprint(item);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

  };

  const handleInputChange = (dataType, values, index) => {
    setEditDiscprint({ ...editDiscprint, [dataType]: values });
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateDiscprintItem = () => {
    const idItem = editDiscprint.id;

    const upd = {
      price: editDiscprint.price,
    };

    dispatch(UpdateDiscprintTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetDiscprints());
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
                value={editDiscprint.price}
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
                onClick={updateDiscprintItem}
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
        <h1 className="text-center">Друк на дисках</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listdiscprints={listdiscprints} />
      </div>
    </div>
  );
};
export default DiscprintEditPrice;
