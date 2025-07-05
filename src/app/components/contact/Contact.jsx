"use client";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 py-20 overflow-hidden" 
      id="contact"
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
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Get In Touch</span>
          </div>
          
          <h2 className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] mb-6">
            Begin Your <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-slate-300 xs:text-[15px] md:text-[18px] lg:text-[22px] font-pts font-[400] max-w-3xl mx-auto leading-relaxed">
            Share your vision with us, and we'll transform it into a captivating digital experience that elevates your brand
          </p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 h-full">
              <h3 className="text-white text-2xl md:text-3xl font-pr font-bold mb-6">
                Get In 
                <span className="block bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">
                  Touch
                </span>
              </h3>
              
              <p className="text-slate-300 font-pts mb-8 leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-pr font-semibold mb-1">Email Us</h4>
                    <a 
                      href="mailto:websyncr.info@gmail.com"
                      className="text-primaryBlue font-pts hover:text-lightBlue transition-colors duration-300"
                    >
                      websyncr.info@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-lightBlue/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-pr font-semibold mb-1">Response Time</h4>
                    <p className="text-slate-300 font-pts">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-pr font-semibold mb-1">Free Consultation</h4>
                    <p className="text-slate-300 font-pts">30-minute discovery call</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <a 
                  href="https://forms.gle/JEHEHnH3VC9wPgYB6" 
                  target="_blank"
                  className="group w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Schedule Consultation</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>

                <a 
                  href="mailto:websyncr.info@gmail.com"
                  className="group w-full flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-primaryBlue/30 rounded-xl text-primaryBlue font-pts font-semibold uppercase tracking-wider hover:bg-primaryBlue/10 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>Send Email</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-pr font-semibold mb-4">Why Choose Websyncr?</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primaryBlue rounded-full mr-3"></div>
                    <span className="text-slate-300 font-pts text-sm">24-hour delivery guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lightBlue rounded-full mr-3"></div>
                    <span className="text-slate-300 font-pts text-sm">Premium quality & modern design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green rounded-full mr-3"></div>
                    <span className="text-slate-300 font-pts text-sm">Dedicated 24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-full">
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-white text-2xl md:text-3xl font-pr font-bold mb-4">
                    Let's Create Something 
                    <span className="block bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">
                      Extraordinary
                    </span>
                  </h3>
                  <p className="text-slate-300 font-pts">Fill out the form below to get started on your project</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdEJZ1E1y9jPRLxDjoE5eWh_NffPVoEmNIfk_YIkRV5Lawatw/viewform?embedded=true"
                    className="w-full h-[600px] md:h-[700px] rounded-lg"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
