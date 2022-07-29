import React from "react";
import classes from "./LoadingSpinner.module.scss";

function LoadingSpinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.loadingSpinner}></div>
    </div>
  );
}

export default LoadingSpinner;
