import React, { useState } from "react";
import classes from "./CarItem.module.scss";

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

  const [successAdding, setSuccessAdding] = useState(false);
  const [errorAdding, setErrorAdding] = useState(false);

  function confirmEdit() {
    //validating inputs
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

    const data = {
      brand: brand,
      model: model,
      year: year,
      engine_capacity: car.engine_capacity,
      gearbox: gearbox,
      fuel: fuel,
      doors: doors,
      seats: seats,
      price: price,
      ac: ac,
      abs: abs,
    };

    //sendind data to server
    fetch(
      "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars/" +
        id +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not send data");
        }
        return res.json();
      })
      .then((data) => {
        setSuccessAdding(true);
        props.setIsEditing(false);
      })
      .catch((error) => {
        setErrorAdding(true);
      });
  }

  function cancel() {
    props.setIsEditing(false);
  }

  return (
    <div className={classes.carDetails}>
      <div className={classes.detail}>
        <span> Brand:</span>
        <select
          className={classes.field}
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Volvo">Volvo</option>
          <option value="Renault">Renault</option>
          <option value="Opel">Opel</option>
          <option value="Toyota">Toyota</option>
          <option value="Citroen">Citroen</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>
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
        <select
          className={classes.field}
          required
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div className={classes.detail}>
        <span>Doors:</span>
        <select
          className={classes.field}
          required
          value={doors}
          onChange={(e) => setDoors(Number(e.target.value))}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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
        <select
          className={classes.field}
          required
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
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
