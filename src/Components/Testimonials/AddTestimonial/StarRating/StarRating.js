import React, { useState } from "react";
import classes from "./StarRating.module.scss";
import { FaStar } from "react-icons/fa";

function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className={classes.radio}
              onClick={() => {
                setRating(ratingValue);
                props.onPickRating(ratingValue);
              }}
            />
            <FaStar
              className={classes.star}
              color={ratingValue <= (hover || rating) ? "#ffd43b" : "#ced4da"}
              size="4rem"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
