'use client'
import React from "react";
import Slider from "react-slick";
import { testimonial } from "@/app/helper/data";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 lg:pt-36 [&>li]:!w-auto [&>li>div]:bg-white [&>li.slick-active>div]:bg-primaryBlue ">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="h-2 w-5"></div>,
  };

  return (
    <div className="w-full mt-[50px] mb-[50px]" id="testimonial">
      <div className="text-black text-[60px] font-pr font-[700] text-center">
        Testimonial
      </div>
      <div className="mt-[30px]">
        <Slider {...settings}>
          {testimonial.map((data, idx) => (
            <div key={idx} className="px-[90px] pt-[10px] pb-[30px]">
              <div className="text-[30px] text-justify text-black font-pts font-[300]">
                {data.dec}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
