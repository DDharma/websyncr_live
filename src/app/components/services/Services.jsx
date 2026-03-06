"use client";
import { services } from "@/app/helper/data";
import React, { useState, useEffect } from "react";

// Unique animated SVG backgrounds for each service card
const serviceBgs = {
  5: ( // AI & LLM — neural network nodes
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Neural connections */}
      {[[40,60,150,40],[40,60,150,125],[40,60,150,210],[40,190,150,40],[40,190,150,125],[40,190,150,210],[150,40,260,90],[150,40,260,170],[150,125,260,90],[150,125,260,170],[150,210,260,90],[150,210,260,170]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00C2FF" strokeWidth="0.8">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
        </line>
      ))}
      {/* Nodes */}
      {[[40,60],[40,190],[150,40],[150,125],[150,210],[260,90],[260,170]].map(([cx,cy],i)=>(
        <circle key={`n${i}`} cx={cx} cy={cy} r={i>4?8:6} fill="none" stroke="#00C2FF" strokeWidth="1.5">
          <animate attributeName="r" values={`${i>4?7:5};${i>4?10:8};${i>4?7:5}`} dur={`${2.5+i*0.4}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Pulse dots */}
      {[[40,60],[150,125],[260,90]].map(([cx,cy],i)=>(
        <circle key={`p${i}`} cx={cx} cy={cy} r="3" fill="#00C2FF">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5+i*0.5}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  ),
  6: ( // AI Chatbot — chat bubbles with signal waves
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble 1 */}
      <rect x="30" y="50" width="120" height="60" rx="16" fill="none" stroke="#00C2FF" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </rect>
      <path d="M60 110 L50 130 L80 110" fill="none" stroke="#00C2FF" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </path>
      {/* Typing dots */}
      {[60,90,120].map((cx,i)=>(
        <circle key={i} cx={cx} cy="80" r="4" fill="#00C2FF">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin={`${i*0.2}s`} repeatCount="indefinite"/>
          <animate attributeName="cy" values="82;78;82" dur="1.2s" begin={`${i*0.2}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Chat bubble 2 (response) */}
      <rect x="150" y="130" width="120" height="60" rx="16" fill="none" stroke="#80E1FF" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/>
      </rect>
      <path d="M240 190 L250 210 L220 190" fill="none" stroke="#80E1FF" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/>
      </path>
      {/* Signal waves from bot */}
      {[20,35,50].map((r,i)=>(
        <circle key={`w${i}`} cx="210" cy="160" r={r} fill="none" stroke="#80E1FF" strokeWidth="0.6">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
          <animate attributeName="r" values={`${r};${r+15};${r}`} dur="2.5s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  ),
  1: ( // Web Dev — code brackets and tags
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Left bracket < */}
      <path d="M80 60 L40 125 L80 190" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
      </path>
      {/* Right bracket > */}
      <path d="M220 60 L260 125 L220 190" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.5s" repeatCount="indefinite"/>
      </path>
      {/* Slash / */}
      <line x1="170" y1="50" x2="130" y2="200" stroke="#80E1FF" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      {/* Code lines */}
      {[70,95,120,145,170].map((y,i)=>(
        <rect key={i} x={100+i*8} y={y} width={50-i*5} height="2" rx="1" fill="#00C2FF">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${2+i*0.3}s`} begin={`${i*0.2}s`} repeatCount="indefinite"/>
          <animate attributeName="width" values={`${40-i*5};${60-i*5};${40-i*5}`} dur={`${2+i*0.3}s`} begin={`${i*0.2}s`} repeatCount="indefinite"/>
        </rect>
      ))}
      {/* Cursor blink */}
      <rect x="155" y="143" width="2" height="16" fill="#00C2FF">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
    </svg>
  ),
  2: ( // Mobile App — phone outline with UI elements
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Phone outline */}
      <rect x="100" y="20" width="100" height="210" rx="18" fill="none" stroke="#00C2FF" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
      </rect>
      {/* Notch */}
      <rect x="130" y="28" width="40" height="6" rx="3" fill="#00C2FF" opacity="0.5"/>
      {/* Screen content - header bar */}
      <rect x="112" y="50" width="76" height="4" rx="2" fill="#00C2FF">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
      </rect>
      {/* App cards */}
      {[70,110,150].map((y,i)=>(
        <g key={i}>
          <rect x="112" y={y} width="76" height="28" rx="6" fill="none" stroke="#80E1FF" strokeWidth="0.8">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${2.5+i*0.5}s`} begin={`${i*0.3}s`} repeatCount="indefinite"/>
          </rect>
          <rect x="118" y={y+8} width={30-i*5} height="3" rx="1.5" fill="#00C2FF" opacity="0.5"/>
          <rect x="118" y={y+16} width={50-i*8} height="2" rx="1" fill="#80E1FF" opacity="0.3"/>
        </g>
      ))}
      {/* Bottom nav dots */}
      {[130,150,170].map((cx,i)=>(
        <circle key={i} cx={cx} cy="208" r="3" fill={i===1?"#00C2FF":"none"} stroke="#00C2FF" strokeWidth="1">
          <animate attributeName="fill-opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Floating notification */}
      <g>
        <rect x="180" y="40" width="60" height="30" rx="8" fill="none" stroke="#00C2FF" strokeWidth="0.8">
          <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="y" values="45;35;45" dur="3s" repeatCount="indefinite"/>
        </rect>
        <circle cx="192" cy="55" r="4" fill="#00C2FF" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  ),
  3: ( // AWS Cloud — cloud with data streams
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Main cloud */}
      <path d="M80 150 Q80 100 120 100 Q120 70 160 70 Q200 70 200 100 Q240 100 240 140 Q240 170 210 170 L100 170 Q80 170 80 150Z" fill="none" stroke="#00C2FF" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/>
      </path>
      {/* Data arrows going up to cloud */}
      {[110,150,190].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1="230" x2={x} y2="175" stroke="#80E1FF" strokeWidth="1" strokeDasharray="4 4">
            <animate attributeName="strokeDashoffset" values="0;-8" dur={`${1+i*0.3}s`} repeatCount="indefinite"/>
          </line>
          <polygon points={`${x-4},180 ${x},170 ${x+4},180`} fill="#80E1FF">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
          </polygon>
        </g>
      ))}
      {/* Server racks at bottom */}
      {[90,140,190].map((x,i)=>(
        <g key={`s${i}`}>
          <rect x={x} y="210" width="30" height="30" rx="4" fill="none" stroke="#00C2FF" strokeWidth="0.8">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
          </rect>
          <circle cx={x+8} cy="225" r="2" fill="#00C2FF">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin={`${i*0.3}s`} repeatCount="indefinite"/>
          </circle>
          <rect x={x+14} y="221" width="10" height="2" rx="1" fill="#00C2FF" opacity="0.4"/>
          <rect x={x+14} y="226" width="8" height="2" rx="1" fill="#80E1FF" opacity="0.3"/>
        </g>
      ))}
      {/* Orbiting particles around cloud */}
      {[0,120,240].map((start,i)=>(
        <circle key={`o${i}`} r="3" fill="#00C2FF">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin={`${i*1}s`} repeatCount="indefinite"/>
          <animateMotion dur="6s" begin={`${i*2}s`} repeatCount="indefinite" path="M160,70 Q240,60 240,140 Q240,180 160,170 Q80,180 80,140 Q80,60 160,70Z"/>
        </circle>
      ))}
    </svg>
  ),
  4: ( // WordPress — globe with CMS grid
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      {/* Globe circle */}
      <circle cx="150" cy="125" r="80" fill="none" stroke="#00C2FF" strokeWidth="1.2">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/>
      </circle>
      {/* Latitude lines */}
      {[-40,-15,15,40].map((offset,i)=>(
        <ellipse key={`lat${i}`} cx="150" cy={125+offset} rx={Math.sqrt(80*80-offset*offset)} ry="8" fill="none" stroke="#00C2FF" strokeWidth="0.6">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${3+i*0.3}s`} repeatCount="indefinite"/>
        </ellipse>
      ))}
      {/* Longitude lines */}
      {[0,40,80].map((rx,i)=>(
        <ellipse key={`lon${i}`} cx="150" cy="125" rx={rx||1} ry="80" fill="none" stroke="#80E1FF" strokeWidth="0.6">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2.5+i*0.4}s`} repeatCount="indefinite"/>
        </ellipse>
      ))}
      {/* CMS layout grid overlay */}
      <rect x="110" y="85" width="80" height="80" rx="4" fill="none" stroke="#00C2FF" strokeWidth="0.8" opacity="0.4"/>
      <line x1="110" y1="105" x2="190" y2="105" stroke="#00C2FF" strokeWidth="0.6" opacity="0.3"/>
      <line x1="150" y1="105" x2="150" y2="165" stroke="#00C2FF" strokeWidth="0.6" opacity="0.3"/>
      {/* Content blocks */}
      <rect x="115" y="90" width="30" height="8" rx="2" fill="#00C2FF" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="115" y="110" width="30" height="20" rx="2" fill="#80E1FF" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" begin="0.5s" repeatCount="indefinite"/>
      </rect>
      <rect x="155" y="110" width="30" height="20" rx="2" fill="#00C2FF" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" begin="1s" repeatCount="indefinite"/>
      </rect>
      {/* Cursor */}
      <g>
        <path d="M170 140 L170 155 L176 150 L182 152 L180 146 L186 143 L170 140Z" fill="#00C2FF" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;5,3;0,0" dur="3s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  ),
};

const serviceIcons = {
  5: ( // AI & LLM
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  6: ( // AI Chatbot
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  1: ( // Web Dev
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  2: ( // Mobile App
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  3: ( // AWS
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  4: ( // WordPress
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="services">
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">Our Capabilities</span>
          <h2 className="text-white xs:text-[32px] md:text-[44px] lg:text-[56px] font-pr font-[700] leading-tight">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-textMuted text-lg font-pts mt-4 max-w-2xl mx-auto leading-relaxed">
            From intelligent AI systems to premium web experiences — solutions engineered to transform your business
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-7 transition-all duration-500 hover:border-primary/20 hover:bg-surfaceLight/60 hover:-translate-y-1 card-shine ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              {/* Animated BG */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {serviceBgs[service.id]}
              </div>

              {/* AI Badge */}
              {(service.id === 5 || service.id === 6) && (
                <div className="absolute top-5 right-5 px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-primary text-[10px] font-pts font-semibold uppercase tracking-wider">AI</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                {serviceIcons[service.id]}
              </div>

              <h3 className="text-white text-xl font-pr font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.name}
              </h3>

              <p className="text-textMuted font-pts text-[15px] leading-relaxed">
                {service.des}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                boxShadow: 'inset 0 1px 0 0 rgba(0,194,255,0.1), 0 0 30px rgba(0,194,255,0.05)'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
