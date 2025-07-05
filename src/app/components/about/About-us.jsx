"use client";
import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full bg-gradient-to-b from-slate-800 via-blue-900 to-slate-900 py-20 overflow-hidden" 
      id="about"
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

      <div className="relative max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px]">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">About Websyncr</span>
          </div>
          
          <h2 className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] mb-6">
            Our <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Story</span>
          </h2>
        </div>
        
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
              <h3 className="xs:text-[24px] md:text-[32px] lg:text-[36px] text-white font-pr font-[600] mb-6">
                Crafting Digital Excellence for 
                <span className="block bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">
                  Discerning Clients
                </span>
              </h3>
              
              <div className="space-y-6 xs:text-[14px] md:text-[16px] lg:text-[18px] text-slate-300 font-pts font-[400] leading-relaxed">
                <p>
                  Welcome to <a href="/" className="text-primaryBlue font-semibold hover:text-lightBlue transition-colors duration-300">Websyncr</a>, 
                  where digital aspirations transform into captivating realities. With a rich portfolio spanning over four years in premium web 
                  development, two years in sophisticated mobile app creation, and four years mastering the intricacies of WordPress, 
                  we are the artisans behind exceptional digital experiences.
                </p>
                
                <p>
                  Our journey began with a passion for crafting seamless, user-centric web experiences that not only meet but exceed expectations. 
                  Over the years, we've expanded our expertise into the dynamic realm of mobile app development, bringing innovation and 
                  functionality to the palm of your hands.
                </p>
                
                <p>
                  What distinguishes us is not merely the code we write, but the bespoke solutions we deliver. We excel in translating your 
                  vision into captivating websites, intuitive mobile applications, and robust WordPress platforms that resonate with your audience.
                </p>
                
                <p>
                  Our expertise extends into the cloud with two years of specialized experience in AWS infrastructure. We understand that a 
                  reliable, scalable foundation is essential for maintaining a secure and high-performing digital presence.
                </p>
                
                <div className="pt-6 border-t border-primaryBlue/30">
                  <div className="bg-primaryBlue/10 rounded-xl p-4 border border-primaryBlue/20">
                    <p className="font-pr text-primaryBlue text-lg italic">
                      "We don't just build websites; we craft digital experiences that elevate brands and captivate audiences."
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Let's create something extraordinary</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primaryBlue/20 to-lightBlue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/img/aboutus.webp"
                    alt="About Websyncr - Premium Web Development"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-white font-pr text-xl font-semibold">Websyncr</p>
                      <p className="text-primaryBlue font-pts">Premium Digital Solutions</p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-primaryBlue text-lg font-bold font-pr">4+</div>
                          <div className="text-slate-300 text-xs font-pts">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-primaryBlue text-lg font-bold font-pr">50+</div>
                          <div className="text-slate-300 text-xs font-pts">Projects Delivered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-white text-2xl md:text-3xl font-pr font-bold mb-4">
              Our <span className="text-primaryBlue">Expertise</span>
            </h3>
            <p className="text-slate-300 font-pts">Technologies we master to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-primaryBlue rounded-full"></div>
              </div>
              <h4 className="text-white font-pr font-semibold mb-1">Web Development</h4>
              <p className="text-slate-400 text-sm font-pts">4+ Years</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-lightBlue/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-lightBlue rounded-full"></div>
              </div>
              <h4 className="text-white font-pr font-semibold mb-1">Mobile Apps</h4>
              <p className="text-slate-400 text-sm font-pts">2+ Years</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-green rounded-full"></div>
              </div>
              <h4 className="text-white font-pr font-semibold mb-1">WordPress</h4>
              <p className="text-slate-400 text-sm font-pts">4+ Years</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primaryDarkBlue/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-primaryDarkBlue rounded-full"></div>
              </div>
              <h4 className="text-white font-pr font-semibold mb-1">AWS Cloud</h4>
              <p className="text-slate-400 text-sm font-pts">2+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
