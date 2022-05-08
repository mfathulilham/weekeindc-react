import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({children}) {
  const settings = {
    // className: "slider variable-width",
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <Slider {...settings}>
      {children}      
    </Slider>
  );
}