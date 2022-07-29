import React from "react";
import classes from "./HowItWorks.module.scss";
import { IoCalendarOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { GiCartwheel } from "react-icons/gi";

function HowItWorks() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span className={classes.subheading}>How it works </span>
        <h2>Make 4 simple steps to rent a car!</h2>
        <div className={classes.steps}>
          <div className={classes.step}>
            <span className={classes.number}>1</span>
            <IoCarSportOutline size="4rem" color="#1f5c90" />
            <h3>Choose A Car</h3>
            <p>Choose a car that fits your needs</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>2</span>
            <IoCalendarOutline size="4rem" color="#1f5c90" />
            <h3>Pick A Date</h3>
            <p>Select date when you want to book a car</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>3</span>
            <IoBookOutline size="4rem" color="#1f5c90" />
            <h3>Make A Booking</h3>
            <p>Enter your name and booking details.</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>4</span>
            <GiCartwheel size="4rem" color="#1f5c90" />
            <h3>Enjoy Your Ride</h3>
            <p>Enjoy your trip and our good service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
