import React from "react";
import classes from "./Modal.module.scss";

function Modal(props) {
  return (
    <div
      className={classes.modalBackground}
      onClick={() => props.setOpenModal(false)}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.title}>
          <h1>{props.title}</h1>
        </div>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={() => props.action()}>
            Yes
          </button>
          <button
            className={classes.btn}
            onClick={() => props.setOpenModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
