import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BannerImages } from "../constants/index.jsx";
import Container from "./Container";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            cursor: "pointer",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "50px",
                height: "15px",
                borderRadius: "20px",
                backgroundColor: "#262626",
              }
            : {
                width: "15px",
                height: "15px",
                borderRadius: "20px",
                backgroundColor: "white",
              }
        }
      ></div>
    ),

  };
  return (
    <div>
      <Slider {...settings}>
        {BannerImages?.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item?.image}
              alt="bannerImage"
              className="h-full lg:h-[500px] w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30">
              <Container className="flex flex-col justify-center gap-2 md:gap-3  h-full">
                <p className="w-24 py-1 bg-red-600 text-white text-center rounded-md ">
                  {item?.sale}
                </p>
                <h2 className="text-xl md:text-5xl max-w-sm md:max-w-xl font-bold md:leading-[55px] capitalize">
                  {item?.title}
                </h2>
                <p className="text-sm md:text-lg font-bold">{item?.discount}</p>
                <p className="text-sm md:text-lg font-bold">
                  {" "}
                  From
                  <span className="md:text-xl font-bold text-blue-600 ">
                    {" "}
                    ${item?.from}
                  </span>
                </p>
                <button
                  onClick={() => navigate("/shop")}
                  className="w-24 md:w-44 md:text-xl py-2 md:py-3 bg-primary/90 hover:bg-black text-white rounded-md hoverEffect"
                >
                  Shop Now
                </button>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
