/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='banner'>
      <Carousel
        className='banner__carousel'
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover
        dynamicHeight
      >
        <div>
          <img
            src='https://cdn.pixabay.com/photo/2020/04/30/20/51/flower-5114574_960_720.jpg'
            height='300'
          />
          <p className='legend'>소개 1</p>
        </div>
        <div>
          <img
            src='https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718_960_720.jpg'
            height='300'
          />
          <p className='legend'>소개 2</p>
        </div>
        <div>
          <img
            src='https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014_960_720.jpg'
            height='300'
          />
          <p className='legend'>소개 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
