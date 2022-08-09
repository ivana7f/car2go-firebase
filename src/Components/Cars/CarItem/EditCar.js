import React, { useState } from "react";
import classes from "./CarItem.module.scss";
import useHttp from "../../../hooks/useHttp";
import SelectCars from "../../Inputs/SelectCars";
import SelectNumberValue from "../../Inputs/SelectNumberValue";

function EditCar(props) {
  const car = props.car;
  const id = props.id;

  const [brand, setBrand] = useState(car.brand);
  const [model, setModel] = useState(car.model);
  const [modelIsValid, setModelIsValid] = useState(true);
  const [year, setYear] = useState(car.year);
  const [gearbox, setGearbox] = useState(car.gearbox);
  const [fuel, setFuel] = useState(car.fuel);
  const [doors, setDoors] = useState(car.doors);
  const [seats, setSeats] = useState(car.seats);
  const [ac, setAc] = useState(car.ac);
  const [abs, setAbs] = useState(car.abs);
  const [price, setPrice] = useState(car.price);
  const [priceIsValid, setPriceIsValid] = useState(true);

  const carData = {
    brand: brand,
    model: model,
    year: year,
    gearbox: gearbox,
    fuel: fuel,
    doors: doors,
    seats: seats,
    price: price,
    ac: ac,
    abs: abs,
  };

  function dataHandling() {
    props.setIsEditing(false);
  }

  const { error: errorAdding, sendRequest } = useHttp(
    {
      url:
        "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars/" +
        id +
        ".json",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: carData,
      errorMessage: "Failed editing!",
    },
    dataHandling
  );

  function confirmEdit() {
    //validating inputs
    if (brand === "") {
      return;
    }
    if (model.trim().length < 1) {
      setModelIsValid(false);
      return;
    } else {
      setModelIsValid(true);
    }
    if (price < 2) {
      setPriceIsValid(false);
      return;
    } else {
      setPriceIsValid(true);
    }

    sendRequest();
  }

  function cancel() {
    props.setIsEditing(false);
  }

  return (
    <div className={classes.carDetails}>
      <div className={classes.detail}>
        <span> Brand:</span>
        <SelectCars
          className={classes.field}
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className={classes.detail}>
        <span>Model:</span>
        <input
          type="text"
          className={classes.field}
          required
          value={model}
          onChange={(e) => setModel(e.target.value.trim())}
        />
        {!modelIsValid && (
          <span className={classes.invalidInput}>Input not valid!</span>
        )}
      </div>
      <div className={classes.detail}>
        <span>Seats:</span>
        <SelectNumberValue
          className={classes.field}
          required
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          beginn={4}
          end={9}
        />
      </div>
      <div className={classes.detail}>
        <span>Doors:</span>
        <SelectNumberValue
          className={classes.field}
          required
          value={doors}
          onChange={(e) => setDoors(Number(e.target.value))}
          beginn={3}
          end={6}
        />
      </div>
      <div className={classes.detail}>
        <span>Air Conditioning:</span>
        <select
          className={classes.field}
          required
          value={ac === true ? "yes" : "no"}
          onChange={(e) => setAc(e.target.value === "yes" ? true : false)}
        >
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div className={classes.detail}>
        <span>ABS:</span>
        <select
          className={classes.field}
          required
          value={abs === true ? "yes" : "no"}
          onChange={(e) => setAbs(e.target.value === "yes" ? true : false)}
        >
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div className={classes.detail}>
        <span>Fuel:</span>
        <select
          className={classes.field}
          required
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
          <option value="diesel">diesel</option>
          <option value="gasoline">gasoline</option>
          <option value="electric">electric</option>
          <option value="hybrid">hybrid</option>
        </select>
      </div>
      <div className={classes.detail}>
        <span>Gearbox:</span>
        <select
          className={classes.field}
          required
          value={gearbox}
          onChange={(e) => setGearbox(e.target.value)}
        >
          <option value="automatic">automatic</option>
          <option value="manual">manual</option>
        </select>
      </div>
      <div className={classes.detail}>
        <span>Year:</span>
        <SelectNumberValue
          className={classes.field}
          required
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          beginn={2000}
          end={new Date().getFullYear()}
        />
      </div>
      <div className={classes.detail}>
        <span>Price:</span>
        <input
          type="number"
          className={classes.field}
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        &euro; per day
        {!priceIsValid && (
          <span className={classes.invalidInput}>Input not valid!</span>
        )}
      </div>
      <div>
        <button onClick={confirmEdit} className={classes.btnConfirm}>
          Confirm
        </button>
        <button onClick={cancel} className={classes.btnCancel}>
          Cancel
        </button>
      </div>
      {errorAdding && (
        <div className={classes.invalidInput}>Error editing car!</div>
      )}
    </div>
  );
}

export default EditCar;
