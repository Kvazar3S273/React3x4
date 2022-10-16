import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetBlackPrints,
  UpdateBlackPrintTable,
} from "../../../../../constants/actions/compActions/blackprint";

const BlackPrintEditPrice = () => {
  const input1 = useRef();
  const input2 = useRef();

  const initialBlackPrintState = {
    id: null,
    priceText: null,
    price100: null,
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listblackprints } = useSelector((state) => state.blackprint);
  const [editBlackPrint, setEditBlackPrint] = useState(initialBlackPrintState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    dispatch(GetBlackPrints());
  }, []);

  const Table = ({ listblackprints }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Матеріал для друку</th>
              <th scope="col" className="text-center">
                Текст
              </th>
              <th scope="col" className="text-center">
                Заливка 100%
              </th>
            </tr>
          </thead>
          <tbody>
            {listblackprints.map((row, index) => (
              <TableRow key={row.id} row={row} index={listblackprints[index]} />
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
    const item = listblackprints.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      priceText: item.priceText,
      price100: item.price100,
    };

    if (!foc) {
      setEditBlackPrint(data);
    }
  };

  const handleInputChange = (dataType, values, index) => {
    setEditBlackPrint({ ...editBlackPrint, [dataType]: values });
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updateBlackPrintItem = () => {
    const idItem = editBlackPrint.id;

    const upd = {
      priceText: editBlackPrint.priceText,
      price100: editBlackPrint.price100,
    };

    dispatch(UpdateBlackPrintTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetBlackPrints());
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
      <th scope="row" className="text-start">
        {row.material}
      </th>
      {isOpen == row.id && complete ? (
        <td colSpan={3}>
          <div
            className="d-flex justify-content-between"
            style={{ left: "1em" }}
          >
            <td></td>
            <td>
              <input
                ref={
                  foc
                    ? (input1) => {
                        input1 && input1.focus();
                      }
                    : input1
                }
                id="priceText"
                value={editBlackPrint.priceText}
                name="priceText"
                onChange={(e) =>
                  handleInputChange("priceText", e.currentTarget.value, index)
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                  marginRight: "5px",
                }}
              />
            </td>
            <td>
              <input
                id="price100"
                value={editBlackPrint.price100}
                name="price100"
                onChange={(e) =>
                  handleInputChange("price100", e.currentTarget.value, index)
                }
                ref={
                  !foc
                    ? (input2) => {
                        input2 && input2.focus();
                      }
                    : input2
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                  marginRight: "8px",
                }}
              />
            </td>
            <td>
              <button
                className="btn btn-primary"
                style={{ width: "60px", height: "35px" }}
                onClick={updateBlackPrintItem}
                type="submit"
              >
                Save
              </button>
            </td>
          </div>
        </td>
      ) : (
        <React.Fragment>
          <td className="text-center">{row.priceText}</td>
          <td>{row.price100}</td>
        </React.Fragment>
      )}
    </tr>
  );

  return (
    <div className="row mt-3 mb-3" style={{overflowX:"auto"}}>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Чорно-білий друк</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listblackprints={listblackprints} />
      </div>
    </div>
  );
};
export default BlackPrintEditPrice;
