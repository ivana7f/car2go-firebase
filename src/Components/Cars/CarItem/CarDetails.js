import React from "react";
import classes from "./CarItem.module.scss";
import useFetch from "../../../hooks/useFetch";

function CarDetails(props) {
  const { data } = useFetch(
    "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars/" +
      props.id +
      ".json"
  );

  const car = Object.fromEntries(data);
  return (
    <div className={classes.carDetails}>
      <div className={classes.detail}>
        <span>Brand:</span> {car.brand}
      </div>
      <div className={classes.detail}>
        <span>Model:</span> {car.model}
      </div>
      <div className={classes.detail}>
        <span>Seats:</span> {car.seats}
      </div>
      <div className={classes.detail}>
        <span>Doors:</span> {car.doors}
      </div>
      <div className={classes.detail}>
        <span>Air Conditioning:</span> {car.ac ? "Yes" : "No"}
      </div>
      <div className={classes.detail}>
        <span>ABS:</span> {car.abs ? "Yes" : "No"}
      </div>
      <div className={classes.detail}>
        <span>Fuel:</span> {car.fuel}
      </div>
      <div className={classes.detail}>
        <span>Gearbox:</span> {car.gearbox}
      </div>
      <div className={classes.detail}>
        <span>Year:</span> {car.year}
      </div>
      <div className={classes.detail}>
        <span>Price:</span> {car.price}&euro; per day
      </div>
    </div>
  );
}

export default CarDetails;
