import React, { useState } from "react";
import classes from "./AddTestimonial.module.scss";
import StarRating from "./StarRating/StarRating";

function AddTestimonial(props) {
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function ratingHandler(starRating) {
    setRating(starRating);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    const testimonial = {
      rating: rating,
      comment: message,
    };

    fetch(
      "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
      {
        method: "POST",
        body: JSON.stringify(testimonial),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        props.onSubmitTestimonial();
        setError(null);
      })
      .catch((err) => setError(err.message));
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
