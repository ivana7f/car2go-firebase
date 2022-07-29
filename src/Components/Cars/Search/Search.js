import React, { useContext, useState } from "react";
import ValuesContext from "../../../store/values-context";
import classes from "./Search.module.scss";

function Search(props) {
  const Ctx = useContext(ValuesContext);

  const [car, setCar] = useState(Ctx.carBrand);
  const [sort, setSort] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const filterData = {
      car,
      sort,
      minValue,
      maxValue,
    };

    props.onFilter(filterData);
  }

  return (
    <section className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <select
          name="cars"
          className={classes.selectField}
          onChange={(e) => setCar(e.target.value)}
          defaultValue={car}
        >
          <option value="">Car brand</option>
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
        <input
          type="number"
          min="1"
          placeholder="Lowest price ($)"
          className={classes.inputField}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <input
          type="number"
          min="1"
          placeholder="Highest price ($)"
          className={classes.inputField}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <select
          name="sort"
          className={classes.selectField}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="lowest">Lowest price first</option>
          <option value="highest">Highest price first</option>
        </select>
        <button type="submit" className={classes.btn}>
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
