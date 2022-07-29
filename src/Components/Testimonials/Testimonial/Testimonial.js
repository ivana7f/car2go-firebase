import React from "react";
import { FaStar } from "react-icons/fa";

import classes from "./Testimonial.module.scss";

function Testimonial(props) {
  return (
    <div className={classes.testimonialContainer}>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FaStar
              key={i}
              color={ratingValue <= props.rating ? "#ffd43b" : "#ced4da"}
              size="2rem"
            />
          );
        })}
      </div>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
}

export default Testimonial;
