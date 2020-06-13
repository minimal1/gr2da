/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/components/carousel.css"

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
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img
            src='https://user-images.githubusercontent.com/18658656/84562877-73ed8d80-ad92-11ea-9ec4-aeb07e461ea2.png'
          />
        </div>
        {/* <div>
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
        </div> */}
      </Carousel>
    </div>
  );
}

export default Banner;
