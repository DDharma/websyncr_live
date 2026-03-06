"use client";
import React, { useState, useEffect } from "react";
import { testimonial } from "@/app/helper/data";

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Split testimonials into 3 columns for masonry
  const columns = [[], [], []];
  testimonial.forEach((t, i) => columns[i % 3].push({ ...t, originalIndex: i }));

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="testimonial">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">Client Testimonials</span>
          <h2 className="text-white xs:text-[32px] md:text-[44px] lg:text-[56px] font-pr font-[700] leading-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-textMuted text-lg font-pts mt-4 max-w-2xl mx-auto leading-relaxed">
            Real feedback from businesses we've helped transform with AI and digital solutions
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-5">
              {column.map((data) => (
                <div
                  key={data.id}
                  className={`group relative bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-6 transition-all duration-500 hover:border-primary/15 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + data.originalIndex * 80}ms` }}
                >
                  {/* Left accent border */}
                  <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/40 via-primaryLight/20 to-transparent rounded-full"></div>

                  {/* Quote mark */}
                  <div className="absolute top-4 right-5 text-primary/[0.06] font-pr text-[80px] leading-none select-none">"</div>

                  {/* Stars */}
                  <div className="flex space-x-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary/70" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-textMuted font-pts text-[15px] leading-relaxed italic mb-5 relative z-10">
                    "{data.dec}"
                  </p>

                  {data.name && (
                    <div className="flex items-center space-x-3 pt-4 border-t border-borderColor/30">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-pr font-bold text-sm">{data.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-pr font-semibold text-sm">{data.name}</p>
                        {data.company && <p className="text-textMuted text-xs font-pts">{data.company}</p>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-textMuted font-pts mb-5">Ready to join our satisfied clients?</p>
          <a
            href="#contact"
            className="group inline-flex items-center px-7 py-3.5 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03]"
          >
            Start Your Project
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
