"use client";
import React, { useState, useEffect } from "react";
import { testimonial } from "@/app/helper/data";

const Testimonial = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate dynamic positioning based on testimonial count
  const generatePositions = (count) => {
    const positions = [];
    const rotations = ["rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1", "-rotate-3"];
    
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      
      const topPercent = 15 + (row * 30) + (Math.random() * 10 - 5);
      const leftPercent = 10 + (col * 30) + (Math.random() * 10 - 5);
      
      positions.push({
        top: `${Math.max(5, Math.min(75, topPercent))}%`,
        left: `${Math.max(5, Math.min(70, leftPercent))}%`,
        rotation: rotations[i % rotations.length],
      });
    }
    
    return positions;
  };

  const testimonialPositions = generatePositions(testimonial.length);

  return (
    <section 
      className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 overflow-hidden" 
      id="testimonial"
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
      
      <div className="relative max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px] z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Client Testimonials</span>
          </div>
          
          <h2 className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] mb-6">
            What Our <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover why businesses trust us to deliver exceptional digital experiences that drive results
          </p>
        </div>
        
        {/* Testimonial Boxes Container */}
        <div 
          className="relative min-h-[800px]"
          style={{
            minHeight: `${Math.max(600, Math.ceil(testimonial.length / 3) * 250)}px`
          }}
        >
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden space-y-6">
            {testimonial.map((data, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-primaryBlue/20"
                style={{
                  animation: `bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${idx * 0.2}s both`
                }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <svg className="w-8 h-8 text-primaryBlue/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.9999 14.4001H6.99992C6.99992 14.4001 6.99992 9.60006 11.9999 9.60006V7.20007C11.9999 7.20007 4.79993 7.20007 4.79993 14.4001V16.8001H11.9999V14.4001Z" />
                    <path d="M19.1999 14.4001H14.1999C14.1999 14.4001 14.1999 9.60006 19.1999 9.60006V7.20007C19.1999 7.20007 11.9999 7.20007 11.9999 14.4001V16.8001H19.1999V14.4001Z" />
                  </svg>
                  
                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-[16px] text-slate-300 font-pts font-[300] italic leading-relaxed mb-6">
                  "{data.dec}"
                </p>
                
                {data.name && (
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primaryBlue/20 rounded-full flex items-center justify-center">
                        <span className="text-primaryBlue font-pr font-bold text-sm">
                          {data.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-pr font-semibold text-sm">{data.name}</p>
                        {data.company && (
                          <p className="text-slate-400 text-xs font-pts">{data.company}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Layout - Random Positioning */}
          <div className="hidden md:block">
            {testimonial.map((data, idx) => {
              const positionData = testimonialPositions[idx];
              const isHovered = hoveredIndex === idx;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;
              
              return (
                <div
                  key={idx}
                  className={`absolute ${positionData.rotation} bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 transform transition-all duration-500 cursor-pointer
                    ${isHovered ? 'scale-110 -translate-y-4 rotate-0 shadow-2xl shadow-primaryBlue/30 z-30 blur-none' : ''}
                    ${isOtherHovered ? 'blur-sm opacity-60 scale-95' : 'hover:scale-105 hover:-translate-y-2'}
                    ${!hoveredIndex ? 'hover:shadow-xl hover:shadow-primaryBlue/20' : ''}
                  `}
                  style={{
                    top: positionData.top,
                    left: positionData.left,
                    width: '300px',
                    animation: `floatIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${idx * 0.3}s both`
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Quote Icon and Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <svg className="w-8 h-8 text-primaryBlue/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.9999 14.4001H6.99992C6.99992 14.4001 6.99992 9.60006 11.9999 9.60006V7.20007C11.9999 7.20007 4.79993 7.20007 4.79993 14.4001V16.8001H11.9999V14.4001Z" />
                      <path d="M19.1999 14.4001H14.1999C14.1999 14.4001 14.1999 9.60006 19.1999 9.60006V7.20007C19.1999 7.20007 11.9999 7.20007 11.9999 14.4001V16.8001H19.1999V14.4001Z" />
                    </svg>
                    
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className={`text-[14px] lg:text-[15px] text-slate-300 font-pts font-[300] italic leading-relaxed mb-4 ${isHovered ? 'text-[15px] lg:text-[16px]' : ''}`}>
                    "{data.dec}"
                  </p>
                  
                  {data.name && (
                    <div className="border-t border-white/10 pt-3 mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primaryBlue/20 rounded-full flex items-center justify-center">
                          <span className="text-primaryBlue font-pr font-bold text-xs">
                            {data.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-pr font-semibold text-sm">{data.name}</p>
                          {data.company && (
                            <p className="text-slate-400 text-xs font-pts">{data.company}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating animation dots */}
                  <div className={`absolute -top-2 -right-2 w-3 h-3 bg-primaryBlue/30 rounded-full transition-all duration-300 ${isHovered ? 'animate-ping w-4 h-4' : 'animate-pulse'}`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-lightBlue/40 rounded-full transition-all duration-300 ${isHovered ? 'animate-pulse w-3 h-3' : 'animate-pulse'}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-300 font-pts mb-6">Ready to join our satisfied clients?</p>
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(100px) rotate(10deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.1) translateY(-20px) rotate(-5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(var(--rotation, 0deg));
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
