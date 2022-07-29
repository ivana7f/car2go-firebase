import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export function SamplePrevArrow(props) {
  let { className, onClick } = props;
  return <GrFormPrevious className={className} onClick={onClick} />;
}

export function SampleNextArrow(props) {
  let { className, onClick } = props;
  return <GrFormNext className={className} onClick={onClick} />;
}
