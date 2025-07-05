"use client";
import { pricing as services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 pt-20 pb-32 overflow-hidden"
      id="pricing"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBlue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primaryDarkBlue/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 194, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Pricing Plans</span>
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-pr font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">
              Solution Plan
            </span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Premium solutions tailored to your needs with transparent pricing and exceptional value. 
            Transform your digital presence with our cutting-edge services.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Service Selection - Desktop */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-[600px] lg:h-[700px] flex flex-col">
                <div className="p-4 lg:p-6 border-b border-white/10 flex-shrink-0">
                  <h3 className="text-white text-lg lg:text-xl font-pr font-semibold">Select Service</h3>
                  <p className="text-slate-400 text-xs lg:text-sm mt-1">Choose from our premium offerings</p>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {services.map((service, idx) => (
                    <div
                      key={service.id}
                      className={classNames(
                        "relative cursor-pointer transition-all duration-300 group",
                        selectedService.id === service.id
                          ? "bg-gradient-to-r from-primaryBlue/20 to-lightBlue/10"
                          : "hover:bg-white/5"
                      )}
                      onClick={() => handleServiceChange(service)}
                    >
                      {selectedService.id === service.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryBlue to-lightBlue"></div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div
                              className="w-16 h-16 rounded-xl bg-cover bg-center shadow-lg"
                              style={{
                                backgroundImage: `url(${service.img})`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                            </div>
                            {selectedService.id === service.id && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primaryBlue rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className={classNames(
                              "font-pr font-semibold text-sm uppercase tracking-wide mb-1",
                              selectedService.id === service.id ? "text-primaryBlue" : "text-white"
                            )}>
                              {service.name}
                            </h4>
                            <p className="text-slate-400 text-xs line-clamp-2">
                              {service.dec}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Selection - Mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={classNames(
                    "flex-shrink-0 cursor-pointer transition-all duration-300 rounded-xl overflow-hidden border-2",
                    selectedService.id === service.id
                      ? "border-primaryBlue shadow-lg shadow-primaryBlue/25"
                      : "border-white/20 hover:border-primaryBlue/50"
                  )}
                  onClick={() => handleServiceChange(service)}
                  style={{ width: "160px" }}
                >
                  <div
                    className="h-20 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.img})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {selectedService.id === service.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primaryBlue rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className={classNames(
                    "p-3 text-center",
                    selectedService.id === service.id ? "bg-primaryBlue/10" : "bg-white/5"
                  )}>
                    <h4 className={classNames(
                      "font-pr font-semibold text-xs uppercase tracking-wide",
                      selectedService.id === service.id ? "text-primaryBlue" : "text-white"
                    )}>
                      {service.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-h-[500px] md:min-h-[600px] lg:h-[700px] flex flex-col">
              {/* Header */}
              <div className="relative p-4 md:p-6 lg:p-8 bg-gradient-to-r from-primaryBlue/10 to-lightBlue/5 border-b border-white/10 flex-shrink-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cover bg-center shadow-lg"
                        style={{ backgroundImage: `url(${selectedService.img})` }}
                      ></div>
                      <div>
                        <h3 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-pr font-bold uppercase tracking-wide">
                          {selectedService.tittle}
                        </h3>
                        <p className="text-primaryBlue text-xs md:text-sm font-medium uppercase tracking-wider">
                          {selectedService.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedService.dec}
                    </p>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green/20 to-green/10 rounded-xl border border-green/30">
                      <div className="text-green text-2xl md:text-3xl lg:text-4xl font-bold font-pr">
                        {selectedService.startingPrice}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-3 space-y-1">
                      <p className="text-slate-400 text-xs md:text-sm">
                        <span className="text-primaryBlue">⚡</span> Delivery: {selectedService.deliveryTime}
                      </p>
                      <p className="text-slate-400 text-xs md:text-sm">
                        <span className="text-primaryBlue">🔄</span> Revisions: {selectedService.revision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 lg:p-8">
                <div className="mb-6 md:mb-8">
                  <h4 className="text-white text-lg md:text-xl font-pr font-semibold mb-4 md:mb-6 flex items-center">
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-primaryBlue/20 rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    What's Included
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {selectedService?.whatYouGet?.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="w-6 h-6 bg-primaryBlue/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-300 font-pts">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Clients */}
                {selectedService.clients && selectedService.clients.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-white text-xl font-pr font-semibold mb-6 flex items-center">
                      <span className="w-8 h-8 bg-primaryBlue/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 15l-3-3 1.41-1.41L8 12.17l5.59-5.59L15 8l-7 7z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Featured Clients
                    </h4>
                    
                    <div className="flex flex-wrap gap-3">
                      {selectedService.clients.map((client, idx) => (
                        <a
                          key={idx}
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-4 py-2 bg-white/5 hover:bg-primaryBlue/20 rounded-full border border-white/10 hover:border-primaryBlue/50 text-slate-300 hover:text-primaryBlue font-pts transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="flex items-center">
                            {client.name}
                            <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Get Started Now</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <p className="text-slate-400 text-sm mt-4">
                    💬 Free consultation • 🚀 Quick turnaround • ✨ Premium quality
                  </p>
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
