import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ValuesContext from "../../store/values-context";
import classes from "./SearchBox.module.scss";

function SearchBox() {
  const valuesCtx = useContext(ValuesContext);
  const history = useHistory();

  function submitHandler(e) {
    e.preventDefault();

    history.push("/cars");
  }

  return (
    <div className={classes.box}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="cars">Select car brand</label>
        <select
          id="cars"
          name="cars"
          required
          onChange={(e) => valuesCtx.setCarBrand(e.target.value)}
        >
          <option value="">Please select one option</option>
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
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
