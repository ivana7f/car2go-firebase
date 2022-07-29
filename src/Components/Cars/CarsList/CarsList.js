import React from "react";
import { Link } from "react-router-dom";
import classes from "./CarsList.module.scss";
import car1 from "../../../img/car.png";
import { GiCarSeat } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { IoSnow } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";

function CarsList(props) {
  const cars = props.cars;

  return (
    <section className={classes.container}>
      <ul>
        {cars.map((car) => (
          <li key={car[0]} className={classes.card}>
            <div className={classes.cardItem}>
              <img src={car1} />
            </div>
            <div className={classes.cardItem}>
              <h3>
                {car[1].brand} {car[1].model}
              </h3>
              <div className={classes.carDetails}>
                <p>
                  <GiCarSeat /> {car[1].seats} seats
                </p>
                <p>
                  <GiCarDoor /> {car[1].doors} doors
                </p>
                {car[1].ac && (
                  <p>
                    <IoSnow /> A/C
                  </p>
                )}
                <p>
                  <FaGasPump /> {car[1].fuel}
                </p>
                <p>
                  <BsGear /> {car[1].gearbox}
                </p>
                {car[1].abs && (
                  <p>
                    <BsGear /> abs
                  </p>
                )}
                <p>
                  <BsCalendarCheck /> {car[1].year}
                </p>
              </div>
            </div>
            <div className={`${classes.cardItem} ${classes.priceBox}`}>
              <div>
                <p className={classes.price}>{car[1].price}&euro;</p>
                <p>per day</p>
              </div>
              <Link to={`/cars/${car[0]}`} className={classes.btn}>
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarsList;
