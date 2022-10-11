import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetColorPrints,
  UpdateColorPrintTable,
} from "../../../../../constants/actions/compActions/colorprint";

const ColorPrintEditPrice = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const initialColorPrintState = {
    id: null,
    price25: null,
    price50: null,
    price100: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listcolorprints } = useSelector((state) => state.colorprint);
  const [ editColorPrint, setEditColorPrint ] = useState(initialColorPrintState);
  const [ isOpen, setIsOpen ] = useState(null);
  const [ foc, setFoc ] = useState(false);
  const [ complete, setComplete ] = useState(false);
  const [ three, setThree ] = useState(false);// it's hook for change focus into third input.
  const [ changeItem, setChangeItem ] = useState(null);//for click item when click to other row.

  useEffect(() => {
    dispatch(GetColorPrints());
  }, []);

  const Table = ({ listcolorprints }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Матеріал для друку</th>
              <th scope="col">Заливка 25%</th>
              <th scope="col">Заливка 50%</th>
              <th scope="col">Заливка 100%</th>
            </tr>
          </thead>
          <tbody>
            {listcolorprints.map((row, index) => (
              <TableRow key={row.id} row={row} index={listcolorprints[index]} />
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
    const item = listcolorprints.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setComplete(true);
    const data = {
      id: item.id,
      price25: item.price25,
      price50: item.price50,
      price100: item.price100
    };

    if (item.id != changeItem) {
      setEditColorPrint(data);
      setChangeItem(null);
      console.log("not equal");
    }

    console.log("data", data);
    console.log("item:", item);
    const edit = editColorPrint.price25;
    console.log("edit", edit);
    if (data.price25 != edit) {
      console.log("////", editColorPrint.price25);
    }

  };

  const handleInputChange = (dataType, values, index) => {
    setChangeItem(index.id);
    console.log("Datatype", dataType);
    console.log("datas values:", values);
    console.log("editColorPrint:", editColorPrint);
    console.log("INDEX:", index.id);
    setEditColorPrint({ ...editColorPrint, [dataType]: values });
    console.log("edit", editColorPrint);
  };

  const handleToggle = () => {
    setFoc((preState) => !preState);
    setThree(false);
  };

  const handleToggleForThree = () => {
    setThree(true);
  };

  const updateColorPrintItem = () => {
    const idItem = editColorPrint.id;

    const upd = {
      price25: editColorPrint.price25,
      price50: editColorPrint.price50,
      price100: editColorPrint.price100
    };

    dispatch(UpdateColorPrintTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetColorPrints());
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
            style={{ left: "3em" }} 
          >
            <td></td>
            <td>
              <input
                ref={
                  foc && !three
                    ? (input1) => {
                        input1 && input1.focus();
                      }
                    : input1
                }
                id="price25"
                value={editColorPrint.price25}
                name="price25"
                onChange={(e) =>
                  handleInputChange("price25", e.currentTarget.value, index)
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                }}
              />
            </td>
            <td>
              <input
                ref={
                  !foc && !three
                    ? (input2) => {
                        input2 && input2.focus();
                      }
                    : input2
                }
                id="price50"
                value={editColorPrint.price50}
                name="price50"
                onChange={(e) =>
                  handleInputChange("price50", e.currentTarget.value, index)
                }
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                }}
              />
            </td>
            <td>
              <input
                id="price100"
                value={editColorPrint.price100}
                name="price100"
                onChange={(e) =>
                  handleInputChange("price100", e.currentTarget.value, index)
                }
                ref={
                  three
                    ? (input3) => {
                        input3 && input3.focus();
                      }
                    : input3
                }
                onClick={handleToggleForThree}
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                  borderRadius: "7px",
                }}
              />
            </td>
            <td>
              <button
                className="btn btn-primary"
                style={{ width: "60px", height: "35px" }}
                onClick={updateColorPrintItem}
                type="submit"
              >
                Save
              </button>
            </td>
          </div>
        </td>
      ) : (
        <React.Fragment>
          <td className="text-center">{row.price25}</td>
          <td className="text-center">{row.price50}</td>
          <td className="text-center">{row.price100}</td>
        </React.Fragment>
      )}
    </tr>
  );

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Кольоровий друк</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>
        <Table listcolorprints={listcolorprints} />
      </div>
    </div>
  );
};
export default ColorPrintEditPrice;
