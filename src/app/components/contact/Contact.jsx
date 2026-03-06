"use client";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="contact">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">Get In Touch</span>
          <h2 className="text-white xs:text-[32px] md:text-[44px] lg:text-[56px] font-pr font-[700] leading-tight">
            Start <span className="gradient-text">Building</span>
          </h2>
          <p className="text-textMuted text-lg font-pts mt-4 max-w-2xl mx-auto leading-relaxed">
            Share your vision and we'll engineer an intelligent solution that transforms your business
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left — Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-7 h-full">
              <h3 className="text-white text-2xl font-pr font-bold mb-2">
                Get In <span className="gradient-text">Touch</span>
              </h3>
              <p className="text-textMuted font-pts mb-8 leading-relaxed">
                Ready to build intelligent systems? Let's discuss your project together.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z", title: "Email Us", value: "websyncr.info@gmail.com", href: "mailto:websyncr.info@gmail.com", color: "primary" },
                  { icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", title: "Response Time", value: "Within 24 hours", color: "primaryLight" },
                  { icon: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", title: "Free Consultation", value: "30-minute discovery call", color: "success" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-surfaceLight/30 rounded-xl border border-borderColor/30 hover:border-primary/15 transition-all duration-300">
                    <div className={`w-11 h-11 bg-${item.color}/10 rounded-lg flex items-center justify-center mr-4 shrink-0`}>
                      <svg className={`w-5 h-5 text-${item.color}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-pr font-semibold text-sm">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-primary text-sm font-pts hover:text-primaryLight transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-textMuted text-sm font-pts">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href="https://calendly.com/websyncr-info/30min"
                  target="_blank"
                  className="group w-full flex items-center justify-center px-6 py-3.5 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  Schedule Consultation
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="mailto:websyncr.info@gmail.com"
                  className="group w-full flex items-center justify-center px-6 py-3.5 border border-primary/20 text-primary rounded-full font-pts font-semibold uppercase tracking-wider text-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                >
                  Send Email
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* Why Choose */}
              <div className="mt-8 pt-6 border-t border-borderColor/30">
                <h4 className="text-white font-pr font-semibold text-sm mb-4">Why Choose Websyncr?</h4>
                <div className="space-y-2.5">
                  {["AI & LLM engineering expertise", "Premium quality & modern design", "Dedicated 24/7 support", "Fast turnaround delivery"].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      <span className="text-textMuted font-pts text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 overflow-hidden h-full">
              <div className="p-7">
                <div className="text-center mb-6">
                  <h3 className="text-white text-2xl font-pr font-bold mb-2">
                    Let's Create Something <span className="gradient-text">Extraordinary</span>
                  </h3>
                  <p className="text-textMuted font-pts text-sm">Fill out the form below to get started</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-borderColor/30">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdEJZ1E1y9jPRLxDjoE5eWh_NffPVoEmNIfk_YIkRV5Lawatw/viewform?embedded=true"
                    className="w-full h-[600px] md:h-[700px]"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading...
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
