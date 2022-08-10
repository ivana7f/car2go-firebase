import React from "react";
import useFetch from "../../hooks/useFetch";

function SelectCars(props) {
  const { data: cars } = useFetch(
    "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
  );

  let brands = new Set();

  cars.forEach((car) => {
    brands.add(car[1].brand);
  });

  return (
    <select {...props}>
      <option value="">All brands</option>
      {[...brands].map((brand) => (
        <option value={brand} key={brand}>
          {brand}
        </option>
      ))}
    </select>
  );
}

export default SelectCars;
