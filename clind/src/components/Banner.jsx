import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/slider/sl1.jpg";
import image2 from "./images/slider/sl2.jpg";
import image3 from "./images/slider/image3.jpg";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container z-10">
      <Slider {...settings} className="z-10">
        <div>
          <img src={image1} alt=".." className="" />
        </div>
        <div>
          <img src={image2} alt=".." className="" />
        </div>
        <div>
          <img src={image2} alt=".." className="" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
