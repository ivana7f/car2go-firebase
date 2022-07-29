import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.scss";

function NotFound(props) {
  return (
    <div className={classes.container}>
      <h2 className={classes.errorHeading}>Sorry</h2>
      <p className={classes.errorText}>{props.error}</p>
      <Link className={classes.errorLink} to="/home">
        Back to homepage...
      </Link>
    </div>
  );
}

export default NotFound;
