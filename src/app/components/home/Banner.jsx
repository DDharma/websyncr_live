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

          {/* Right — AI Neural Network Visual */}
          <div className={`lg:col-span-5 hidden lg:flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-[420px] h-[420px]">
              {/* Ambient glow behind the network */}
              <div className="absolute inset-[15%] rounded-full bg-primary/[0.06] blur-[60px] animate-glow-pulse"></div>

              {/* Neural network SVG */}
              <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="connectionGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#80E1FF" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="#80E1FF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#80E1FF" stopOpacity="0.05" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Layer connections — Input to Hidden 1 */}
                {[
                  [60,90,155,110], [60,90,155,190], [60,90,155,270], [60,90,155,345],
                  [60,175,155,110], [60,175,155,190], [60,175,155,270], [60,175,155,345],
                  [60,260,155,110], [60,260,155,190], [60,260,155,270], [60,260,155,345],
                  [60,345,155,110], [60,345,155,190], [60,345,155,270], [60,345,155,345],
                ].map(([x1,y1,x2,y2], i) => (
                  <line key={`c1-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#connectionGrad2)" strokeWidth="0.8">
                    <animate attributeName="strokeOpacity" values="0.1;0.4;0.1" dur={`${3 + (i % 4) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
                  </line>
                ))}

                {/* Layer connections — Hidden 1 to Hidden 2 */}
                {[
                  [155,110,265,130], [155,110,265,210], [155,110,265,290],
                  [155,190,265,130], [155,190,265,210], [155,190,265,290],
                  [155,270,265,130], [155,270,265,210], [155,270,265,290],
                  [155,345,265,130], [155,345,265,210], [155,345,265,290],
                ].map(([x1,y1,x2,y2], i) => (
                  <line key={`c2-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#connectionGrad)" strokeWidth="1">
                    <animate attributeName="strokeOpacity" values="0.15;0.5;0.15" dur={`${2.5 + (i % 3) * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
                  </line>
                ))}

                {/* Layer connections — Hidden 2 to Output */}
                {[
                  [265,130,365,175], [265,130,365,255],
                  [265,210,365,175], [265,210,365,255],
                  [265,290,365,175], [265,290,365,255],
                ].map(([x1,y1,x2,y2], i) => (
                  <line key={`c3-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#connectionGrad)" strokeWidth="1.2">
                    <animate attributeName="strokeOpacity" values="0.1;0.6;0.1" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </line>
                ))}

                {/* Data flow pulses along connections */}
                {[
                  [60,90,155,190], [60,260,155,270], [155,110,265,210],
                  [155,270,265,130], [265,210,365,175], [265,130,365,255],
                ].map(([x1,y1,x2,y2], i) => (
                  <circle key={`pulse-${i}`} r="2.5" fill="#00C2FF" opacity="0.8" filter="url(#glow)">
                    <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`}>
                      <mpath href={`#flow-${i}`} />
                    </animateMotion>
                  </circle>
                ))}
                {/* Hidden paths for pulse motion */}
                {[
                  [60,90,155,190], [60,260,155,270], [155,110,265,210],
                  [155,270,265,130], [265,210,365,175], [265,130,365,255],
                ].map(([x1,y1,x2,y2], i) => (
                  <path key={`flow-${i}`} id={`flow-${i}`} d={`M${x1},${y1} L${x2},${y2}`} fill="none" stroke="none" />
                ))}

                {/* Input layer nodes (4) */}
                {[90, 175, 260, 345].map((cy, i) => (
                  <g key={`input-${i}`}>
                    <circle cx="60" cy={cy} r="16" fill="url(#nodeGlow)" opacity="0.4">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy={cy} r="8" fill="#0C1220" stroke="#00C2FF" strokeWidth="1.5" opacity="0.9" filter="url(#glow)">
                      <animate attributeName="r" values="7;9;7" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy={cy} r="3" fill="#00C2FF" opacity="0.7">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Hidden layer 1 nodes (4) */}
                {[110, 190, 270, 345].map((cy, i) => (
                  <g key={`h1-${i}`}>
                    <circle cx="155" cy={cy} r="18" fill="url(#nodeGlow)" opacity="0.5">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2.8 + i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="155" cy={cy} r="10" fill="#0C1220" stroke="#00C2FF" strokeWidth="1.8" opacity="0.9" filter="url(#glow)">
                      <animate attributeName="r" values="9;11;9" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="155" cy={cy} r="4" fill="#80E1FF" opacity="0.8">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2.2 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Hidden layer 2 nodes (3) */}
                {[130, 210, 290].map((cy, i) => (
                  <g key={`h2-${i}`}>
                    <circle cx="265" cy={cy} r="20" fill="url(#nodeGlow)" opacity="0.5">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="265" cy={cy} r="11" fill="#0C1220" stroke="#00C2FF" strokeWidth="2" opacity="0.95" filter="url(#glow)">
                      <animate attributeName="r" values="10;12;10" dur={`${2.8 + i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="265" cy={cy} r="4.5" fill="#00C2FF" opacity="0.9">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Output layer nodes (2) */}
                {[175, 255].map((cy, i) => (
                  <g key={`output-${i}`}>
                    <circle cx="365" cy={cy} r="24" fill="url(#nodeGlow)" opacity="0.6">
                      <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${3 + i}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="365" cy={cy} r="13" fill="#0C1220" stroke="#00C2FF" strokeWidth="2.2" opacity="1" filter="url(#glow)">
                      <animate attributeName="r" values="12;14;12" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx="365" cy={cy} r="5" fill="#00C2FF" opacity="1">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur={`${1.8 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Layer labels */}
                <text x="60" y="395" textAnchor="middle" fill="#6B7A99" fontSize="10" fontFamily="Satoshi, sans-serif">Input</text>
                <text x="155" y="395" textAnchor="middle" fill="#6B7A99" fontSize="10" fontFamily="Satoshi, sans-serif">Hidden</text>
                <text x="265" y="395" textAnchor="middle" fill="#6B7A99" fontSize="10" fontFamily="Satoshi, sans-serif">Deep</text>
                <text x="365" y="395" textAnchor="middle" fill="#6B7A99" fontSize="10" fontFamily="Satoshi, sans-serif">Output</text>
              </svg>

              {/* Floating AI badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-surface/80 backdrop-blur-sm border border-primary/20 rounded-full">
                <span className="text-primary text-xs font-pts font-semibold tracking-wider">NEURAL NETWORK</span>
              </div>
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
