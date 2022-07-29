import React, { useState } from "react";
import classes from "./ImageSlider.module.scss";

function ImageSlider(props) {
  const slides = props.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  return (
    <div className={classes.slider}>
      <div
        onClick={previousSlide}
        className={`${classes.arrow} ${classes.left}`}
      >
        ❰
      </div>
      <div onClick={nextSlide} className={`${classes.arrow} ${classes.right}`}>
        ❱
      </div>

      <div
        className={classes.slide}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className={classes.dotsContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={classes.dot}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
