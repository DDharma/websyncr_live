'use client'
import React from "react";
import Slider from "react-slick";
import { testimonial } from "@/app/helper/data";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    appendDots: (dots) => (
      <div>
        <ul className="m-0 pt-20 [&>li]:!w-auto [&>li>div]:bg-primaryBlue/30 [&>li.slick-active>div]:bg-primaryBlue">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => <div className="h-2 w-8 rounded-full transition-all duration-300"></div>,
  };

  // Quotes for decoration
  const QuoteIcon = ({ className }) => (
    <svg 
      className={className} 
      width="48" 
      height="48" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.9999 14.4001H6.99992C6.99992 14.4001 6.99992 9.60006 11.9999 9.60006V7.20007C11.9999 7.20007 4.79993 7.20007 4.79993 14.4001V16.8001H11.9999V14.4001Z" />
      <path d="M19.1999 14.4001H14.1999C14.1999 14.4001 14.1999 9.60006 19.1999 9.60006V7.20007C19.1999 7.20007 11.9999 7.20007 11.9999 14.4001V16.8001H19.1999V14.4001Z" />
    </svg>
  );

  return (
    <section 
      className="w-full py-20 bg-white relative" 
      id="testimonial"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-primaryBlue/10 transform -skew-y-6"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primaryBlue/5 transform skew-y-3"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primaryBlue/5 transform -skew-x-6"></div>
      </div>
      
      <div className="max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px] relative z-10">
        <h2 
          className="text-navy xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          Client <span className="text-primaryBlue">Testimonials</span>
        </h2>
        
        <div className="mt-16 relative pb-16">
          {/* Decorative quotes */}
          <QuoteIcon className="absolute top-0 left-0 text-primaryBlue/20 transform -translate-x-1/2 -translate-y-1/2" />
          <QuoteIcon className="absolute bottom-0 right-0 text-primaryBlue/20 transform translate-x-1/2 translate-y-1/2 rotate-180" />
          
          <div className="hideSickAerrow">
            <Slider {...settings}>
              {testimonial.map((data, idx) => (
                <div key={idx} className="outline-none">
                  <div className="bg-gradient-to-r from-primaryBlue/10 to-skyBlue/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto mb-16 border border-primaryBlue/20">
                    <p className="xs:text-[16px] md:text-[20px] lg:text-[24px] text-center text-navy font-pts font-[300] italic leading-relaxed">
                      "{data.dec}"
                    </p>
                    
                    <div className="mt-8 flex justify-center items-center">
                      <div className="w-16 h-16 rounded-full bg-primaryBlue/20 flex items-center justify-center text-primaryBlue text-2xl font-bold font-pr">
                        {idx + 1}
                      </div>
                      <div className="ml-4">
                        <p className="text-primaryBlue font-pr font-semibold text-lg">Client {idx + 1}</p>
                        <p className="text-navy/70 font-pts text-sm">Satisfied Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
