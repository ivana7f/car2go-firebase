import React, { useState } from "react";
import classes from "./ConfirmRent.module.scss";

function ConfirmRent(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function confirmRent() {
    setIsConfirmed(true);
  }

  return (
    <div className={classes.confirm}>
      <h2>Reservation details</h2>
      <p>
        <span> Pick-Up Date:</span> {props.rentData.datePickup}
      </p>
      <p>
        <span>Drop-Off Date:</span> {props.rentData.dateDropoff}
      </p>
      <p>
        <span>Pick-Up Location:</span> {props.rentData.pickupLoc}
      </p>
      <p>
        <span>Drop-Off Location:</span> {props.rentData.dropoffLoc}
      </p>
      <p>
        <span>First Name:</span> {props.rentData.firstName}
      </p>
      <p>
        <span>Last Name:</span> {props.rentData.lastName}
      </p>
      <p>
        <span>Email:</span> {props.rentData.email}
      </p>
      <p>
        <span>Phone Number:</span> {props.rentData.phoneNumber}
      </p>
      <p>
        <span>Total Days:</span> {props.rentData.days}
      </p>
      <p>
        <span>Total Price:</span> {props.totalPrice}&euro;
      </p>
      {!isConfirmed && (
        <button onClick={confirmRent} className={classes.btn}>
          Confirm
        </button>
      )}
      {isConfirmed && (
        <div className={classes.success}>You successfuly rented car!</div>
      )}
    </div>
  );
}

export default ConfirmRent;
