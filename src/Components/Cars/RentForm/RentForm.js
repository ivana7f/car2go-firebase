import React, { useState } from "react";
import classes from "./RentForm.module.scss";

function RentForm(props) {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [dateIsValid, setDateIsValid] = useState(true);

  const [pickupLoc, setPickupLoc] = useState("");
  const [dropoffLoc, setDropoffLoc] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState(true);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailisValid] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  function submitHandler(e) {
    e.preventDefault();

    // calculate number of days between two selected dates
    let datePickup = new Date(pickup);
    let dateDropoff = new Date(dropoff);

    let days =
      (dateDropoff.getTime() - datePickup.getTime()) / (1000 * 3600 * 24) + 1;

    if (days < 1) {
      setDateIsValid(false);
      return;
    }

    datePickup = datePickup.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    dateDropoff = dateDropoff.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    //validating inputs
    if (firstName.trim().length < 1) {
      setFirstNameIsValid(false);
      return;
    }
    if (lastName.trim().length < 1) {
      setLastNameIsValid(false);
      return;
    }
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      setEmailisValid(false);
      return;
    }
    if (phoneNumber.trim().length < 9) {
      setPhoneNumberIsValid(false);
      return;
    }

    const rentData = {
      days,
      datePickup,
      dateDropoff,
      pickupLoc,
      dropoffLoc,
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    props.onRent(rentData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.dates}>
        <div>
          <label htmlFor="pickUp">Pick-Up Date</label>
          <input
            id="pickUp"
            type="date"
            min={today}
            className={classes.date}
            required
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dropOff">Drop-Off Date</label>
          <input
            id="dropOff"
            type="date"
            min={today}
            className={classes.date}
            required
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>
      </div>
      {!dateIsValid && (
        <p className={classes.invalidInput}>
          Pick up date must be before drop off date!
        </p>
      )}

      <div>
        <select
          required
          className={classes.selectInput}
          onChange={(e) => setPickupLoc(e.target.value)}
        >
          <option value="">Pick-Up Location</option>
          <option value="Banja Luka">Banja Luka</option>
          <option value="Airport Banja Luka">Airport Banja Luka</option>
        </select>
        <select
          required
          className={classes.selectInput}
          onChange={(e) => setDropoffLoc(e.target.value)}
        >
          <option value="">Drop-Off Location</option>
          <option value="Banja Luka">Banja Luka</option>
          <option value="Airport Banja Luka">Airport Banja Luka</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="First Name *"
          className={classes.input}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name *"
          className={classes.input}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {!firstNameIsValid && (
        <p className={classes.invalidInput}>First name not valid!</p>
      )}
      {!lastNameIsValid && (
        <p className={classes.invalidInput}>Last name not valid!</p>
      )}
      <div>
        <input
          type="email"
          placeholder="Email Address *"
          className={classes.input}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number *"
          className={classes.input}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      {!emailIsValid && (
        <p className={classes.invalidInput}>Email not valid!</p>
      )}
      {!phoneNumberIsValid && (
        <p className={classes.invalidInput}>
          Phone number must contain at least 9 characters!
        </p>
      )}

      <button type="submit" className={classes.btn}>
        Rent this car
      </button>
    </form>
  );
}

export default RentForm;
