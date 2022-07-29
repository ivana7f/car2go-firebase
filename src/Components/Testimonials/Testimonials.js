import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.scss";
import { SamplePrevArrow, SampleNextArrow } from "./CustomArrows/CustomArrows";
import AddTestimonial from "./AddTestimonial/AddTestimonial";
import AuthContext from "../../store/auth-context";
import ValuesContext from "../../store/values-context";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import NotFound from "../NotFound/NotFound";

//slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};

function Testimonials() {
  const [openAddTestimonial, setOpenAddTestimonial] = useState(false);
  const [testimonialAdded, setTestimonialAdded] = useState(false);
  const authCtx = useContext(AuthContext);
  const valuesCtx = useContext(ValuesContext);
  const [testimonialsShow, setTestimonialsShow] = useState(null);

  const {
    data: testimonials,
    isLoading,
    error,
  } = useFetch(
    "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/reviews.json"
  );

  useEffect(() => {
    valuesCtx.calculateRating(testimonials);
  }, [valuesCtx.rating, testimonials]);

  // show only testimoials with rating greater than 3
  useEffect(() => {
    setTestimonialsShow(
      testimonials.filter((testimonial) => testimonial[1].rating > 3)
    );
  }, [testimonials]);

  function onSubmitTestimonial() {
    setTestimonialAdded(true);
  }

  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <h2 className={classes.headingTestimonial}>Testimonials</h2>
        {error && <NotFound error={error} />}
        {isLoading && <LoadingSpinner />}
        {!isLoading && !error && (
          <div className={classes.slider}>
            <Slider {...settings}>
              {testimonialsShow.map((testimonial) => (
                <Testimonial
                  key={testimonial[0]}
                  rating={testimonial[1].rating}
                  text={testimonial[1].comment}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
      {authCtx.isLoggedIn && !openAddTestimonial && (
        <button
          className={classes.btnAdd}
          onClick={() => setOpenAddTestimonial(true)}
        >
          Add testimonial
        </button>
      )}
      {openAddTestimonial && !testimonialAdded && (
        <AddTestimonial onSubmitTestimonial={onSubmitTestimonial} />
      )}
      {testimonialAdded && (
        <div className={classes.added}>Testimonial successfully added!</div>
      )}
    </section>
  );
}

export default Testimonials;
