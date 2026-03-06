"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="absolute inset-0 bg-[url('/img/bannerBg.png')] bg-center bg-cover opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight"></div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-primaryLight/[0.04] blur-[80px] animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,194,255,0.08) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 bg-primary/[0.06] rounded-full border border-primary/10 mb-8">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse"></span>
                <span className="text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase">AI-Powered Digital Engineering</span>
              </div>
            </div>

            <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block xs:text-[38px] sm:text-[52px] lg:text-[72px] xl:text-[82px] font-pr font-[700] text-white leading-[0.95] tracking-tight">
                Build
              </span>
              <span className="block xs:text-[38px] sm:text-[52px] lg:text-[72px] xl:text-[82px] font-pr font-[700] gradient-text leading-[0.95] tracking-tight mt-1">
                Intelligent
              </span>
              <span className="block xs:text-[38px] sm:text-[52px] lg:text-[72px] xl:text-[82px] font-pr font-[700] text-white leading-[0.95] tracking-tight mt-1">
                Systems
              </span>
            </h1>

            <p className={`mt-8 xs:text-[16px] sm:text-[18px] lg:text-[20px] font-pts text-textMuted max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We engineer AI chatbots, RAG pipelines, and LLM integrations alongside premium web and mobile applications. From prototype to production.
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="https://calendly.com/websyncr-info/30min"
                target="_blank"
                className="group inline-flex items-center justify-center text-midnight font-pts font-[600] px-7 py-3.5 bg-primary rounded-full uppercase tracking-wider text-[14px] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03]"
              >
                Build Your AI Solution
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center text-primary font-pts font-[600] px-7 py-3.5 border border-primary/20 rounded-full uppercase tracking-wider text-[14px] hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                Explore Services
                <svg className="w-4 h-4 ml-2 group-hover:translate-y-[2px] transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Geometric visual */}
          <div className={`lg:col-span-5 hidden lg:flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-[400px] h-[400px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow"></div>
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-primary/15 animate-spin-slower"></div>
              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
              {/* Center orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primaryLight/10 border border-primary/20 backdrop-blur-xl flex items-center justify-center animate-glow-pulse">
                  <div className="w-16 h-16 rounded-full bg-primary/30 blur-sm"></div>
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 animate-pulse"></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-primaryLight/80 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-4 w-2.5 h-2.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`mt-16 lg:mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap items-center justify-center gap-0 bg-surface/50 backdrop-blur-sm rounded-2xl border border-borderColor/50 overflow-hidden">
            {[
              { value: '50+', label: 'Projects Delivered', color: 'text-primary' },
              { value: 'AI', label: 'Systems Built', color: 'text-primaryLight' },
              { value: '100%', label: 'Client Satisfaction', color: 'text-primary' },
              { value: '4.9', label: 'Average Rating', color: 'text-primaryLight' },
            ].map((stat, idx) => (
              <div key={idx} className="flex-1 min-w-[140px] text-center py-5 px-4 border-r border-borderColor/30 last:border-r-0">
                <div className={`${stat.color} text-2xl lg:text-3xl font-bold font-pr`}>{stat.value}</div>
                <div className="text-textMuted text-xs font-pts uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent"></div>
    </div>
  );
};

export default Banner;
