import React, { useState } from "react";
import classes from "./AddCar.module.scss";
import useHttp from "../../hooks/useHttp";
import SelectCars from "../Inputs/SelectCars";

function AddCar() {
  const [brand, setBrand] = useState();
  const [brandIsValid, setBrandIsValid] = useState(true);
  const [model, setModel] = useState();
  const [modelIsValid, setModelIsValid] = useState(true);
  const [year, setYear] = useState();
  const [gearbox, setGearbox] = useState();
  const [fuel, setFuel] = useState();
  const [engine, setEngine] = useState();
  const [doors, setDoors] = useState();
  const [seats, setSeats] = useState();
  const [ac, setAc] = useState();
  const [abs, setAbs] = useState();
  const [price, setPrice] = useState();
  const [priceIsValid, setPriceIsValid] = useState(true);

  const [successAdding, setSuccessAdding] = useState(false);

  const carData = {
    brand: brand,
    model: model,
    year: year,
    engine_capacity: engine,
    gearbox: gearbox,
    fuel: fuel,
    doors: doors,
    seats: seats,
    price: price,
    ac: ac,
    abs: abs,
  };

  function dataHandling() {
    setSuccessAdding(true);
  }

  const {
    error: errorAdding,
    setError: setErrorAdding,
    sendRequest,
  } = useHttp(
    {
      url: "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: carData,
      errorMessage: "Failed adding!",
    },
    dataHandling
  );

  function submitHandler(e) {
    e.preventDefault();

    //validating inputs
    if (brand.trim().length < 1) {
      setBrandIsValid(false);
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

  return (
    <div className={classes.container}>
      <h2>Add New Car</h2>
      {successAdding && (
        <div className={classes.success}>
          You successfully added new car!
          <button
            onClick={() => setSuccessAdding(false)}
            className={classes.btnAgain}
          >
            Add another
          </button>
        </div>
      )}

      {errorAdding && (
        <div className={classes.invalidInput}>
          Error adding car!
          <button
            onClick={() => setErrorAdding(false)}
            className={classes.btnAgain}
          >
            Try again
          </button>
        </div>
      )}

      {!successAdding && !errorAdding && (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.card}>
            <div>
              <label className={classes.label} htmlFor="brand">
                Car brand
              </label>
              <input
                id="brand"
                className={classes.inputField}
                required
                onChange={(e) => setBrand(e.target.value)}
              />
              {!brandIsValid && (
                <p className={classes.invalidInput}>Input not valid!</p>
              )}
            </div>

            <div>
              <label htmlFor="model" className={classes.label}>
                Model
              </label>
              <input
                id="model"
                type="text"
                className={classes.inputField}
                required
                onChange={(e) => setModel(e.target.value.trim())}
              />
              {!modelIsValid && (
                <p className={classes.invalidInput}>Input not valid!</p>
              )}
            </div>

            <div>
              <label htmlFor="year" className={classes.label}>
                Year
              </label>
              <select
                id="year"
                className={classes.selectField}
                required
                onChange={(e) => setYear(Number(e.target.value))}
              >
                <option value="">Select year</option>
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

            <div>
              <label htmlFor="gearbox" className={classes.label}>
                Gearbox
              </label>
              <select
                id="gearbox"
                className={classes.selectField}
                required
                onChange={(e) => setGearbox(e.target.value)}
              >
                <option value="">Select</option>
                <option value="automatic">automatic</option>
                <option value="manual">manual</option>
              </select>
            </div>

            <div>
              <label htmlFor="fuel" className={classes.label}>
                Fuel
              </label>
              <select
                id="fuel"
                className={classes.selectField}
                required
                onChange={(e) => setFuel(e.target.value)}
              >
                <option value="">Select</option>
                <option value="diesel">diesel</option>
                <option value="gasoline">gasoline</option>
                <option value="electric">electric</option>
                <option value="hybrid">hybrid</option>
              </select>
            </div>

            <div>
              <label htmlFor="engine" className={classes.label}>
                Engine capacity
              </label>
              <select
                id="engine"
                className={classes.selectField}
                required
                onChange={(e) => setEngine(Number(e.target.value))}
              >
                <option value="">Select</option>
                <option value="1000">1000</option>
                <option value="1100">1100</option>
                <option value="1200">1200</option>
                <option value="1300">1300</option>
                <option value="1400">1400</option>
                <option value="1500">1500</option>
                <option value="1600">1600</option>
                <option value="1700">1700</option>
                <option value="1800">1800</option>
                <option value="1900">1900</option>
                <option value="2000">2000</option>
                <option value="2100">2100</option>
                <option value="2200">2200</option>
                <option value="2300">2300</option>
              </select>
            </div>

            <div>
              <label htmlFor="doors" className={classes.label}>
                Doors
              </label>
              <select
                id="doors"
                className={classes.selectField}
                required
                onChange={(e) => setDoors(Number(e.target.value))}
              >
                <option value="">Select</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label htmlFor="seats" className={classes.label}>
                Seats
              </label>
              <select
                id="seats"
                className={classes.selectField}
                required
                onChange={(e) => setSeats(Number(e.target.value))}
              >
                <option value="">Select</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>

            <div>
              <label htmlFor="ac" className={classes.label}>
                A/C
              </label>
              <select
                id="ac"
                className={classes.selectField}
                required
                onChange={(e) => setAc(e.target.value === "yes" ? true : false)}
              >
                <option value="">Select</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div>
              <label htmlFor="abs" className={classes.label}>
                ABS
              </label>
              <select
                id="abs"
                className={classes.selectField}
                required
                onChange={(e) =>
                  setAbs(e.target.value === "yes" ? true : false)
                }
              >
                <option value="">Select</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className={classes.label}>
                Price (&euro;)
              </label>
              <input
                id="price"
                type="number"
                className={classes.inputField}
                required
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              {!priceIsValid && (
                <p className={classes.invalidInput}>Input not valid!</p>
              )}
            </div>
          </div>

          <button type="submit" className={classes.btn}>
            Add
          </button>
        </form>
      )}
    </div>
  );
}

export default AddCar;
