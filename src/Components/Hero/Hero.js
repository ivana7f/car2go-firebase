import React from "react";
import classes from "./Hero.module.scss";
import SearchBox from "../SearchBox/SearchBox";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h1>Easy and fast way to rent a car!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <SearchBox />
      </div>
    </section>
  );
}

export default Hero;
