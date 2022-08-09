import React, { useState } from "react";
import classes from "./AddCar.module.scss";
import useHttp from "../../hooks/useHttp";
import SelectCars from "../Inputs/SelectCars";
import SelectNumberValue from "../Inputs/SelectNumberValue";

function AddCar() {
  const [brand, setBrand] = useState();
  const [brandIsValid, setBrandIsValid] = useState(true);
  const [model, setModel] = useState();
  const [modelIsValid, setModelIsValid] = useState(true);
  const [year, setYear] = useState();
  const [gearbox, setGearbox] = useState();
  const [fuel, setFuel] = useState();
  const [doors, setDoors] = useState();
  const [seats, setSeats] = useState();
  const [ac, setAc] = useState();
  const [abs, setAbs] = useState();
  const [price, setPrice] = useState();
  const [priceIsValid, setPriceIsValid] = useState(true);

  const [successAdding, setSuccessAdding] = useState(false);

  const carData = {
    brand,
    model,
    year,
    gearbox,
    fuel,
    doors,
    seats,
    price,
    ac,
    abs,
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
              <SelectNumberValue
                id="year"
                className={classes.selectField}
                required
                onChange={(e) => setYear(Number(e.target.value))}
                beginn={2000}
                end={new Date().getFullYear()}
                emptyvalue="true"
              />
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
              <label htmlFor="doors" className={classes.label}>
                Doors
              </label>
              <SelectNumberValue
                id="doors"
                className={classes.selectField}
                required
                onChange={(e) => setDoors(Number(e.target.value))}
                beginn={3}
                end={6}
                emptyvalue="true"
              />
            </div>

            <div>
              <label htmlFor="seats" className={classes.label}>
                Seats
              </label>
              <SelectNumberValue
                id="seats"
                className={classes.selectField}
                required
                onChange={(e) => setSeats(Number(e.target.value))}
                beginn={4}
                end={9}
                emptyvalue="true"
              />
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
