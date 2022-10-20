import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  GetPvcs, 
  UpdatePvcTable, 
  ChangePvcByPercent 
} from "../../../../../constants/actions/poligraphActions/pvc";
import ModalPercent from "../ModalPercent";

const PvcEditPrice = () => {
  const input = useRef();

  const initialPvcState = {
    id: null,
    price: null
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { listpvcs } = useSelector((state) => state.pvc);
  const [editPvc, setEditPvc] = useState(initialPvcState);
  const [isOpen, setIsOpen] = useState(null);
  const [foc, setFoc] = useState(false);
  const [complete, setComplete] = useState(false);
  const [percent, setPersent] = useState(1);
  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    dispatch(GetPvcs());
  }, []);

  const Table = ({ listpvcs }) => (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-primary">
              <th scope="col">Товщина</th>
              <th scope="col" className="text-center">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {listpvcs.map((row, index) => (
              <TableRow key={row.id} row={row} index={listpvcs[index]} />
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
    const item = listpvcs.find((row) => row.id == e.currentTarget.id);

    setIsOpen(item.id);
    setEditPvc(item);
    setComplete(true);
    const data = {
      id: item.id,
      price: item.price,
    };

  };

  const handleInputChange = (dataType, values, index) => {
    setEditPvc({ ...editPvc, [dataType]: values });
  };

  const handleInputPercentChange=(value)=>{
    setErrorInput(false);
    setPersent(value);
    if(value==-100){
      console.log("-100===>");      
      setErrorInput(true);
    }
  }

  const handleToggle = () => {
    setFoc((preState) => !preState);
  };

  const updatePvcItem = () => {
    const idItem = editPvc.id;

    const upd = {
      price: editPvc.price,
    };

    dispatch(UpdatePvcTable(idItem, upd))
      .then((res) => {
        console.log("Result:", res);
        setComplete(false);
        navigator("/admin");
        dispatch(GetPvcs());
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
      <th scope="row">{row.thickness}</th>
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
                  value={editPvc.price}
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
                  onClick={updatePvcItem}
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

  const [modalActive, setModalActive] = useState(false);
  //console.log("Input value",document.getElementById('percentValue').value);
 
  return (
    <div className="row mt-3 mb-3" style={{overflowX:"auto"}}>
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">ПВХ</h1>
        <h4 className="text-center text-danger">Редагування цін</h4>

        <Table listpvcs={listpvcs} />

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
                name="percent"
                  onChange={(e) =>
                    handleInputPercentChange( e.currentTarget.value)
                  }
                style={{
                  width: "180px",
                  height: "35px",
                  textAlign: "center",
                }}
              />
              %
            </div>
            <div className="col text-start">
           
            {errorInput ? (
                <button
                  type="button"
                  className="open-btn btn btn-danger"
                  onClick={() => setModalActive(false)}
                >
                  Збільшити
                </button>
              ) : (
                <button
                  type="button"
                  className="open-btn btn btn-primary"
                  onClick={() => setModalActive(true)}
                >
                  Збільшити
                </button>
              )}
            </div>
          </div>

          <ModalPercent 
            active={modalActive} 
            onClose={()=>setModalActive(false)} 
            children={percent} 
            actiontype={ChangePvcByPercent}/>           
          
        </div>
      </div>
    </div>
  );
};
export default PvcEditPrice;

