import React from "react";

const Banner = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-start'>
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/img/bannerBg.png')] bg-center bg-cover">
        <div className="absolute inset-0 bg-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 xs:px-[20px] md:px-[50px] lg:px-[90px] max-w-7xl mx-auto w-full">
        <h1 
          className="xs:text-[40px] sm:text-[50px] lg:text-[80px] font-[800] font-pr text-white"
        >
          <span className="text-primaryBlue">Elevate</span> Your Digital Presence
        </h1>
        
        <h2 
          className="xs:text-[18px] sm:text-[22px] lg:text-[32px] font-[400] font-pts text-white mt-4 max-w-2xl"
        >
          Crafting premium digital experiences that captivate and convert. 
          <span className="text-skyBlue font-semibold"> Delivered in 24 hours.</span>
        </h2>
        
        <div className="xs:mt-[30px] lg:mt-[60px]">
          <a 
            href="https://forms.gle/JEHEHnH3VC9wPgYB6" 
            target="_blank"
            className="inline-block text-white xs:text-[15px] lg:text-[20px] font-pts font-[600] px-[30px] py-[15px] blue-gradient hover-lift rounded-lg uppercase tracking-wider transition-all duration-300"
          >
            Transform Your Brand
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80">
          <span className="text-primaryBlue text-sm mb-2 font-pts">Scroll to explore</span>
          <svg className="w-6 h-6 text-primaryBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
