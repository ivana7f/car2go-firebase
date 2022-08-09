import React, { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import classes from "./AddTestimonial.module.scss";
import StarRating from "./StarRating/StarRating";

function AddTestimonial(props) {
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState("");

  const testimonial = {
    rating: rating,
    comment: message,
  };

  function dataHandling() {
    props.onSubmitTestimonial();
  }

  function ratingHandler(starRating) {
    setRating(starRating);
  }

  const { error, setError, sendRequest } = useHttp(
    {
      url: "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: testimonial,
      errorMessage: "Failed adding!",
    },
    dataHandling
  );

  function submitHandler(e) {
    e.preventDefault();

    if (message.trim() === "" || rating === null) {
      setError(true);
      return;
    }

    sendRequest();
  }

  return (
    <div className={classes.addTestimonial}>
      <StarRating onPickRating={ratingHandler} />
      <form onSubmit={submitHandler}>
        <textarea
          placeholder="Enter your feedback..."
          rows={10}
          cols={40}
          maxLength={200}
          className={classes.textarea}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
        {error && (
          <div className={classes.error}>Error adding testimonial!</div>
        )}
      </form>
    </div>
  );
}

export default AddTestimonial;
