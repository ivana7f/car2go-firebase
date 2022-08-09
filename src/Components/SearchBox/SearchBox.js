import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ValuesContext from "../../store/values-context";
import SelectCars from "../Inputs/SelectCars";
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
        <SelectCars
          id="cars"
          name="cars"
          onChange={(e) => valuesCtx.setCarBrand(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
