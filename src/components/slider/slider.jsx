"use client";
import React from "react";
import Slider from "react-slick";
import "./style.css";
import { Button } from "@mui/material";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img
            className="w-full h-[80vh] object-cover object-top "
            src="https://danielhazard.netlify.app/assets/collections/spring-category.jpg"
          />
          <div className="slide-inner">
            <h1>First slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              numquam.
            </p>
            <Button variant="contained">Visit us</Button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[80vh] object-cover object-top "
            src="https://danielhazard.netlify.app/assets/collections/img11.jpg"
          />
          <div className="slide-inner">
            <h1>First slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              numquam.
            </p>
            <Button variant="contained">Visit us</Button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[80vh] object-cover object-top "
            src="https://danielhazard.netlify.app/assets/collections/autumn-category.jpg"
          />
          <div className="slide-inner">
            <h1>First slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              numquam.
            </p>
            <Button variant="contained">Visit us</Button>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[80vh] object-cover object-top "
            src="https://danielhazard.netlify.app/assets/collections/img1.jpg"
          />
          <div className="slide-inner ">
            <h1>First slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              numquam.
            </p>
            <Button variant="contained">Visit us</Button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
