"use client";
import { pricing as services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Pricing = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  
  return (
    <section
      className="w-full dark-blue-gradient py-20 xs:px-[10px] md:px-[50px] lg:px-[90px]"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          Solution <span className="text-primaryBlue">Plans</span>
        </h2>
        
        <p 
          className="text-white xs:text-[15px] md:text-[18px] lg:text-[22px] font-pts font-[400] text-center mt-4 max-w-3xl mx-auto"
        >
          Premium solutions tailored to your needs with transparent pricing and exceptional value
        </p>
        
        <div className="mt-16">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-6">
              {/* Service Selection */}
              <div className="col-span-4">
                <div className="bg-navy/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl h-[600px] overflow-scroll" >
                  {services.map((data, idx) => (
                    <div
                      key={idx}
                      className={classNames(
                        "cursor-pointer transition-all duration-300 border-l-4 hover-lift",
                        data.id === selectedService.id
                          ? "bg-primaryBlue/20 border-primaryBlue"
                          : "bg-transparent border-transparent hover:border-primaryBlue/50"
                      )}
                      onClick={() => setSelectedService(data)}
                    >
                      <div className="p-6">
                        <div 
                          className="h-16 w-full rounded-lg mb-4 overflow-hidden"
                          style={{
                            backgroundImage: `url(${data.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <h3
                          className={classNames(
                            "text-xl font-pr font-bold uppercase tracking-wide mb-2",
                            data.id === selectedService.id
                              ? "text-primaryBlue"
                              : "text-white"
                          )}
                        >
                          {data.name}
                        </h3>
                        <p className="text-white/80 text-sm font-pts line-clamp-2">
                          {data.dec}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Service Details */}
              <div className="col-span-8">
                <div className="glass-effect rounded-xl overflow-hidden shadow-2xl h-full">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-primaryBlue text-3xl font-pr font-bold uppercase tracking-wide">
                          {selectedService.tittle}
                        </h3>
                        <p className="text-white/80 mt-2 font-pts">
                          {selectedService.dec}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-primaryBlue text-4xl font-bold font-pr">
                          {selectedService.startingPrice}
                        </div>
                        <p className="text-white/70 text-sm mt-1 font-pts">
                          Delivery: {selectedService.deliveryTime} | Revisions: {selectedService.revision}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-navy/30 rounded-lg p-6 mb-8">
                      <h4 className="text-primaryBlue text-xl font-pr font-semibold mb-4">What You Get</h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {selectedService?.whatYouGet?.map((feature, idx) => (
                          <li
                            className="text-white font-pts flex items-start"
                            key={idx}
                          >
                            <svg className="h-5 w-5 text-primaryBlue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedService.clients && selectedService.clients.length > 0 && (
                      <div>
                        <h4 className="text-primaryBlue text-xl font-pr font-semibold mb-4">Featured Clients</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedService.clients.map((client, idx) => (
                            <a
                              key={idx}
                              href={client.url}
                              target="_blank"
                              className="px-4 py-2 bg-primaryBlue/10 hover:bg-primaryBlue/20 rounded-full text-white font-pts transition-all duration-300 hover-lift"
                            >
                              {client.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-8 text-center">
                      <a
                        href="#contact"
                        className="inline-block px-8 py-3 blue-gradient rounded-lg text-white font-pts font-semibold uppercase tracking-wider hover-lift transition-all duration-300"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="flex items-center gap-4 hideScroll overflow-x-auto pb-4 mb-6">
              {services.map((data, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    "flex-shrink-0 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden shadow-lg",
                    data.id === selectedService.id
                      ? "border-2 border-primaryBlue"
                      : "border border-white/20"
                  )}
                  onClick={() => setSelectedService(data)}
                  style={{
                    width: "180px",
                  }}
                >
                  <div 
                    className="h-24 w-full"
                    style={{
                      backgroundImage: `url(${data.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div 
                    className={classNames(
                      "p-3 text-center",
                      data.id === selectedService.id
                        ? "bg-primaryBlue/20"
                        : "bg-navy/30"
                    )}
                  >
                    <h3
                      className={classNames(
                        "font-pr font-bold uppercase tracking-wide text-sm",
                        data.id === selectedService.id
                          ? "text-primaryBlue"
                          : "text-white"
                      )}
                    >
                      {data.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-effect rounded-xl overflow-hidden shadow-2xl">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-primaryBlue text-2xl font-pr font-bold uppercase tracking-wide">
                    {selectedService.tittle}
                  </h3>
                  <div className="text-primaryBlue text-3xl font-bold font-pr mt-2">
                    {selectedService.startingPrice}
                  </div>
                  <p className="text-white/70 text-xs mt-1 font-pts">
                    Delivery: {selectedService.deliveryTime} | Revisions: {selectedService.revision}
                  </p>
                </div>
                
                <div className="bg-navy/30 rounded-lg p-4 mb-6">
                  <h4 className="text-primaryBlue text-lg font-pr font-semibold mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {selectedService?.whatYouGet?.map((feature, idx) => (
                      <li
                        className="text-white text-sm font-pts flex items-start"
                        key={idx}
                      >
                        <svg className="h-4 w-4 text-primaryBlue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-white/80 text-sm font-pts mb-6">
                  {selectedService.dec}
                </p>
                
                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-block w-full px-6 py-3 blue-gradient rounded-lg text-white font-pts font-semibold uppercase tracking-wider hover-lift transition-all duration-300"
                  >
                    Get Started
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

export default Pricing;
