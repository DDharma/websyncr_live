"use client";
import { services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section 
      className="w-full bg-white py-20 xs:px-[10px] md:px-[50px] lg:px-[90px]" 
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-navy xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          <span className="text-primaryBlue">Premium</span> Services
        </h2>
        
        <p 
          className="text-navy xs:text-[15px] md:text-[20px] lg:text-[24px] font-pts font-[400] text-center mt-4 max-w-3xl mx-auto"
        >
          We craft exceptional digital experiences that elevate your brand and captivate your audience
        </p>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Service Navigation */}
            <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible hideScroll">
              {services.map((data, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    "flex-shrink-0 md:flex-shrink-1 mb-2 py-4 px-6 rounded-lg transition-all duration-300 cursor-pointer hover-lift",
                    data.id === selectedService.id
                      ? "blue-gradient shadow-lg"
                      : "bg-white/80 hover:bg-skyBlue/20"
                  )}
                  onClick={() => setSelectedService(data)}
                >
                  <h3
                    className={classNames(
                      "xs:text-[14px] md:text-[18px] lg:text-[22px] font-pr font-bold uppercase tracking-wide",
                      data.id === selectedService.id
                        ? "text-white"
                        : "text-navy"
                    )}
                  >
                    {data.name}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Service Content */}
            <div className="md:col-span-8 relative overflow-hidden rounded-xl shadow-2xl h-[400px] md:h-[500px]">
              <div 
                className="absolute inset-0 transition-all duration-700 transform scale-105"
                style={{
                  backgroundImage: `url(${selectedService.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-primaryBlue text-2xl md:text-3xl font-pr font-bold mb-4">
                  {selectedService.name}
                </h3>
                <p className="text-white font-pts text-base md:text-xl leading-relaxed">
                  {selectedService.des}
                </p>
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primaryBlue hover:text-white transition-colors duration-300 font-pts font-medium text-lg"
                  >
                    <span>Learn More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
