"use client";
import { services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full bg-gradient-to-b from-slate-800 via-blue-900 to-slate-900 py-20 xs:px-[10px] md:px-[50px] lg:px-[90px] overflow-hidden" 
      id="services"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primaryBlue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primaryDarkBlue/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 194, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Our Services</span>
          </div>
          
          <h2 className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] mb-6">
            <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Premium</span> Services
          </h2>
          
          <p className="text-slate-300 xs:text-[15px] md:text-[20px] lg:text-[24px] font-pts font-[400] max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that elevate your brand and captivate your audience with cutting-edge technology
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-white text-xl font-pr font-semibold">Select Service</h3>
                  <p className="text-slate-400 text-sm mt-1">Explore our premium offerings</p>
                </div>
                
                <div className="p-2">
                  {services.map((data, idx) => (
                    <div
                      key={idx}
                      className={classNames(
                        "relative mb-2 p-4 rounded-xl transition-all duration-300 cursor-pointer group",
                        data.id === selectedService.id
                          ? "bg-gradient-to-r from-primaryBlue/20 to-lightBlue/10 border border-primaryBlue/30"
                          : "hover:bg-white/5 border border-transparent hover:border-primaryBlue/20"
                      )}
                      onClick={() => setSelectedService(data)}
                    >
                      {data.id === selectedService.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryBlue to-lightBlue rounded-r-full"></div>
                      )}
                      
                      <div className="flex items-center space-x-3">
                        <div className={classNames(
                          "w-3 h-3 rounded-full transition-all duration-300",
                          data.id === selectedService.id ? "bg-primaryBlue" : "bg-slate-600 group-hover:bg-primaryBlue/50"
                        )}></div>
                        
                        <h3 className={classNames(
                          "xs:text-[14px] md:text-[16px] lg:text-[18px] font-pr font-bold uppercase tracking-wide transition-colors duration-300",
                          data.id === selectedService.id ? "text-primaryBlue" : "text-white group-hover:text-primaryBlue"
                        )}>
                          {data.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Service Content */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-[400px] md:h-[500px] relative group">
                <div 
                  className="absolute inset-0 transition-all duration-700 transform scale-105 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${selectedService.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-primaryBlue rounded-full"></div>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-pr font-bold">
                        {selectedService.name}
                      </h3>
                    </div>
                    
                    <p className="text-slate-300 font-pts text-base md:text-lg leading-relaxed mb-6">
                      {selectedService.des}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center px-3 py-1 bg-primaryBlue/20 rounded-full border border-primaryBlue/30">
                        <span className="text-primaryBlue text-sm font-medium">Premium Quality</span>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-green/20 rounded-full border border-green/30">
                        <span className="text-green text-sm font-medium">Fast Delivery</span>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-lightBlue/20 rounded-full border border-lightBlue/30">
                        <span className="text-lightBlue text-sm font-medium">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-primaryBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Services</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
