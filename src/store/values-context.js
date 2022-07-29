import React, { useState } from "react";

// creating context
const ValuesContext = React.createContext({});

// creating context provider
export function ValuesContextProvider(props) {
  const [rating, setRating] = useState(null);
  const [carBrand, setCarBrand] = useState("");

  const calculateRating = (testimonials) => {
    let sumRating = 0;
    testimonials.map((testimonial) => (sumRating += testimonial[1].rating));
    setRating(sumRating / testimonials.length);
  };

  const contextValue = {
    rating,
    calculateRating,
    carBrand,
    setCarBrand,
  };

  return (
    <ValuesContext.Provider value={contextValue}>
      {props.children}
    </ValuesContext.Provider>
  );
}

export default ValuesContext;
