import React from "react";
import "./modal.css";
import {  useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ChangePriceByPercent } from "../../../../../constants/actions/actionPercent";

const ModalPercent = (props) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const update = () => {
    const percentValue=props.children;
    dispatch(ChangePriceByPercent(percentValue))
    .then((result) => {
      if(result==200) {
        navigator("/");
        return;
      }      
    })
    .catch(ex => {
      console.log("Errorr", ex);
    })        

  };
  return (
    <div className={props.active ? "modal active" : "modal"}>
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h4 className="modal-title">Попередження</h4>
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.onClose}
          ></button>
        </div>
        <div className="modal-body">
          Ви справді плануєте збільшити ціну на {props.children} %
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onClose}
          >
            Ні, я передумав
          </button>
          <button type="button" className="btn btn-primary" onClick={update}>
            Так, збільшити
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalPercent;
