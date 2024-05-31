import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const BackgroundCarousel = ({ data, text1, text2, text3 }) => {
  return (
    <div className="relative  lg:h-screen">
      <Slider {...settings} className="h-full">
        {data?.map(({ icon }, index) => (
          <div key={index} className="w-screen h-screen">
            <img
              src={icon}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-white text-5xl lg:text-7xl font-thin  mt-0 lg:mt-24">
          {text1}
        </h1>
        <h2 className="text-white text-2xl lg:text-4xl font-extrabold mt-10">
          {text2}
        </h2>
        <p className="text-white text-lg lg:text-xl mt-4">{text3}</p>
      </div>
    </div>
  );
};

export default BackgroundCarousel;
