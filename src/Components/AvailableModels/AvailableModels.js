import React from "react";
import classes from "./AvailableModels.module.scss";
import mercedes from "../../img/car-logos/mercedes.png";
import audi from "../../img/car-logos/audi.png";
import toyota from "../../img/car-logos/toyota.png";
import citroen from "../../img/car-logos/citroen.png";
import renault from "../../img/car-logos/renault.png";
import hyundai from "../../img/car-logos/hyundai.png";
import opel from "../../img/car-logos/opel.png";
import peugeot from "../../img/car-logos/peugeot.png";
import volvo from "../../img/car-logos/volvo.png";
import volkswagen from "../../img/car-logos/volkswagen.png";

function AvailableModels() {
  return (
    <section className={classes.models}>
      <div className={classes.container}>
        <h2>Available models</h2>
        <div className={classes.logos}>
          <img src={mercedes} alt=""></img>
          <img src={audi} alt=""></img>
          <img src={toyota} alt=""></img>
          <img src={citroen} alt=""></img>
          <img src={renault} alt=""></img>
          <img src={peugeot} alt=""></img>
          <img src={opel} alt=""></img>
          <img src={volvo} alt=""></img>
          <img src={hyundai} alt=""></img>
          <img src={volkswagen} alt=""></img>
        </div>
      </div>
    </section>
  );
}

export default AvailableModels;
