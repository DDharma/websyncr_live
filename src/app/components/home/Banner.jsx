"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-start overflow-hidden'>
      {/* Background with modern overlay */}
      <div className="absolute inset-0 bg-[url('/img/bannerBg.png')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBlue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primaryDarkBlue/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 194, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 xs:px-[20px] md:px-[50px] lg:px-[90px] max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Premium Digital Solutions</span>
          </div>

          <h1 className="xs:text-[40px] sm:text-[50px] lg:text-[80px] font-[800] font-pr text-white leading-tight">
            <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Elevate</span> Your Digital
            <br />
            <span className="text-white">Presence</span>
          </h1>
          
          <h2 className="xs:text-[18px] sm:text-[22px] lg:text-[32px] font-[400] font-pts text-slate-300 mt-6 max-w-3xl leading-relaxed">
            Crafting premium digital experiences that captivate and convert with cutting-edge technology.
            <br />
            <span className="text-primaryBlue font-semibold bg-primaryBlue/10 px-2 py-1 rounded-lg inline-block mt-2">
              ⚡ Delivered in 24 hours
            </span>
          </h2>
          
          <div className="xs:mt-[40px] lg:mt-[60px] flex flex-col sm:flex-row gap-4">
            <a 
              href="https://forms.gle/JEHEHnH3VC9wPgYB6" 
              target="_blank"
              className="group inline-flex items-center justify-center text-white xs:text-[15px] lg:text-[18px] font-pts font-[600] px-8 py-4 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
            >
              <span>Create your Digital Space</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            <a 
              href="#pricing"
              className="group inline-flex items-center justify-center text-primaryBlue xs:text-[15px] lg:text-[18px] font-pts font-[600] px-8 py-4 bg-white/5 backdrop-blur-sm border border-primaryBlue/30 rounded-xl uppercase tracking-wider hover:bg-primaryBlue/10 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Pricing</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="xs:mt-[50px] lg:mt-[80px] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">50+</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">24h</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">100%</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">4.9★</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primaryBlue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primaryBlue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
