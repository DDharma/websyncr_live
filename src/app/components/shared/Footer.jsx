"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBlue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lightBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 194, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse mb-6 group"
              >
                <div className="relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/img/logo.svg"
                    className="h-10 transition-transform duration-300 group-hover:scale-110"
                    alt="Websyncr Logo"
                  />
                  <div className="absolute inset-0 bg-primaryBlue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="self-center text-3xl font-semibold whitespace-nowrap bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent font-sans">
                  websyncr
                </span>
              </a>
              
              <p className="text-slate-300 font-pts mb-6 max-w-md leading-relaxed">
                Elevating digital experiences with premium web development, mobile applications, 
                and cloud solutions that captivate audiences and drive results.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-primaryBlue hover:bg-primaryBlue/20 hover:border-primaryBlue/30 transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white text-lg font-pr font-semibold mb-6 flex items-center">
                    <span className="w-6 h-6 bg-primaryBlue/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Services
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#services" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        AWS Cloud Management
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        WordPress Development
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white text-lg font-pr font-semibold mb-6 flex items-center">
                    <span className="w-6 h-6 bg-lightBlue/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#project" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#testimonial" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white text-lg font-pr font-semibold mb-6 flex items-center">
                    <span className="w-6 h-6 bg-green/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    Contact
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#contact" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        Get in Touch
                      </a>
                    </li>
                    <li>
                      <a href="mailto:websyncr.info@gmail.com" className="text-slate-400 hover:text-primaryBlue transition-colors duration-300 font-pts flex items-center group">
                        <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-primaryBlue transition-colors duration-300"></span>
                        websyncr.info@gmail.com
                      </a>
                    </li>
                    <li className="pt-2">
                      <a 
                        href="https://forms.gle/JEHEHnH3VC9wPgYB6" 
                        target="_blank"
                        className="group inline-flex items-center px-4 py-2 bg-primaryBlue/20 hover:bg-primaryBlue/30 border border-primaryBlue/30 hover:border-primaryBlue/50 text-primaryBlue rounded-lg font-pts text-sm transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Schedule Consultation</span>
                        <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <span className="text-slate-400 text-sm font-pts">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                    className="hover:text-primaryBlue transition-colors duration-300 font-semibold"
                  >
                    Websyncr
                  </a>
                  . All Rights Reserved.
                </span>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
                    <span className="text-slate-400 text-xs font-pts">Available for new projects</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-400 hover:text-primaryBlue text-sm font-pts transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryBlue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-slate-400 hover:text-primaryBlue hover:bg-primaryBlue/10 hover:border-primaryBlue/30 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-sm font-pts">Back to Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
