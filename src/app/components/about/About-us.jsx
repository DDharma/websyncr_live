"use client";
import React, { useState, useEffect } from "react";

const expertise = [
  {
    name: "AI & LLM",
    years: "2+",
    sub: "RAG pipelines, vector databases, prompt engineering & LLM fine-tuning",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        {[[30,30,100,50],[30,30,100,110],[30,130,100,50],[30,130,100,110],[100,50,170,80],[100,110,170,80]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00C2FF" strokeWidth="0.6"><animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2+i*0.3}s`} repeatCount="indefinite"/></line>
        ))}
        {[[30,30],[30,130],[100,50],[100,110],[170,80]].map(([cx,cy],i)=>(
          <g key={i}><circle cx={cx} cy={cy} r="5" fill="none" stroke="#00C2FF" strokeWidth="1"><animate attributeName="r" values="4;6;4" dur={`${2+i*0.4}s`} repeatCount="indefinite"/></circle><circle cx={cx} cy={cy} r="2" fill="#00C2FF"><animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/></circle></g>
        ))}
      </svg>
    ),
  },
  {
    name: "Chatbot Systems",
    years: "4+",
    sub: "Multi-channel bots with human handoff, analytics & continuous learning",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="80" height="40" rx="10" fill="none" stroke="#80E1FF" strokeWidth="0.8"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/></rect>
        <path d="M40 70 L35 85 L55 70" fill="none" stroke="#80E1FF" strokeWidth="0.8"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/></path>
        {[40,60,80].map((cx,i)=>(<circle key={i} cx={cx} cy="50" r="3" fill="#80E1FF"><animate attributeName="opacity" values="0.2;1;0.2" dur="1s" begin={`${i*0.2}s`} repeatCount="indefinite"/><animate attributeName="cy" values="52;48;52" dur="1s" begin={`${i*0.2}s`} repeatCount="indefinite"/></circle>))}
        <rect x="100" y="80" width="80" height="40" rx="10" fill="none" stroke="#00C2FF" strokeWidth="0.8"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/></rect>
        <path d="M160 120 L165 135 L145 120" fill="none" stroke="#00C2FF" strokeWidth="0.8"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/></path>
      </svg>
    ),
  },
  {
    name: "Web Development",
    years: "5+",
    sub: "React, Next.js & Tailwind — building high-performance web apps",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 35 L25 80 L50 125" fill="none" stroke="#00C2FF" strokeWidth="1.2" strokeLinecap="round"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite"/></path>
        <path d="M150 35 L175 80 L150 125" fill="none" stroke="#00C2FF" strokeWidth="1.2" strokeLinecap="round"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" begin="0.5s" repeatCount="indefinite"/></path>
        <line x1="120" y1="30" x2="80" y2="130" stroke="#80E1FF" strokeWidth="1" strokeLinecap="round"><animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite"/></line>
        <rect x="85" y="72" width="2" height="14" fill="#00C2FF"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>
      </svg>
    ),
  },
  {
    name: "Mobile Apps",
    years: "3+",
    sub: "React Native & Expo — cross-platform iOS & Android apps",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="10" width="60" height="140" rx="12" fill="none" stroke="#00C2FF" strokeWidth="1"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/></rect>
        <rect x="88" y="18" width="24" height="4" rx="2" fill="#00C2FF" opacity="0.4"/>
        {[45,70,95].map((y,i)=>(<rect key={i} x="80" y={y} width="40" height="16" rx="4" fill="none" stroke="#80E1FF" strokeWidth="0.6"><animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${2.5+i*0.5}s`} begin={`${i*0.3}s`} repeatCount="indefinite"/></rect>))}
        {[88,100,112].map((cx,i)=>(<circle key={i} cx={cx} cy="138" r="2.5" fill={i===1?"#00C2FF":"none"} stroke="#00C2FF" strokeWidth="0.8" opacity="0.5"/>))}
      </svg>
    ),
  },
  {
    name: "WordPress",
    years: "4+",
    sub: "Custom themes, WooCommerce, Elementor & plugin development",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="55" fill="none" stroke="#00C2FF" strokeWidth="0.8"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/></circle>
        {[-25,0,25].map((offset,i)=>(<ellipse key={i} cx="100" cy={80+offset} rx={Math.sqrt(55*55-offset*offset)} ry="6" fill="none" stroke="#80E1FF" strokeWidth="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${3+i*0.3}s`} repeatCount="indefinite"/></ellipse>))}
        <ellipse cx="100" cy="80" rx="25" ry="55" fill="none" stroke="#80E1FF" strokeWidth="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite"/></ellipse>
        <rect x="75" y="60" width="50" height="40" rx="3" fill="none" stroke="#00C2FF" strokeWidth="0.5" opacity="0.3"/>
        <line x1="75" y1="72" x2="125" y2="72" stroke="#00C2FF" strokeWidth="0.4" opacity="0.2"/>
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    years: "2+",
    sub: "EC2, S3, RDS, Route 53, Amplify — scalable cloud infrastructure",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    bg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 95 Q40 60 70 60 Q70 35 100 35 Q130 35 130 60 Q160 60 160 85 Q160 105 135 105 L65 105 Q40 105 40 95Z" fill="none" stroke="#00C2FF" strokeWidth="1"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/></path>
        {[70,100,130].map((x,i)=>(<g key={i}><line x1={x} y1="140" x2={x} y2="110" stroke="#80E1FF" strokeWidth="0.8" strokeDasharray="3 3"><animate attributeName="strokeDashoffset" values="0;-6" dur={`${1+i*0.2}s`} repeatCount="indefinite"/></line><polygon points={`${x-3},114 ${x},108 ${x+3},114`} fill="#80E1FF"><animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/></polygon></g>))}
      </svg>
    ),
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="about">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">About Websyncr</span>
          <h2 className="text-white xs:text-[32px] md:text-[44px] lg:text-[56px] font-pr font-[700] leading-tight">
            Our <span className="gradient-text">Story</span>
          </h2>
        </div>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-white text-3xl lg:text-4xl font-pr font-semibold mb-8 leading-snug">
              Engineering Intelligent
              <span className="block gradient-text">Digital Solutions</span>
            </h3>

            <div className="space-y-5 text-textMuted font-pts text-[16px] leading-[1.8]">
              <p>
                Welcome to <a href="/" className="text-primary font-semibold hover:text-primaryLight transition-colors">Websyncr</a>,
                where cutting-edge AI meets premium digital craftsmanship. With deep expertise in AI engineering, LLM integrations, and
                RAG systems, alongside four years in web development and mobile app creation, we build intelligent systems that
                transform how businesses operate.
              </p>
              <p>
                Our AI practice builds production-grade RAG pipelines, custom chatbots, and LLM integrations that solve
                real business problems. We combine deep knowledge of vector databases, embedding models, and prompt
                engineering with practical understanding of business workflows.
              </p>
              <p>
                Beyond AI, we craft seamless web experiences, mobile applications, and WordPress platforms.
                Our AWS cloud expertise ensures your infrastructure is scalable, secure, and optimized.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-primary/30">
              <p className="font-pr text-primary/80 text-lg italic leading-relaxed">
                "We don't just write code; we engineer intelligent systems that give businesses a competitive edge."
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center mt-8 px-7 py-3.5 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03]"
            >
              Let's build something intelligent
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right — Image + Stats */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-primaryLight/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-borderColor/50">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/img/aboutus.webp"
                  alt="About Websyncr"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent"></div>

                {/* Overlay stats */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-3">
                    <div className="flex-1 bg-surface/80 backdrop-blur-xl rounded-xl p-4 border border-borderColor/30 text-center">
                      <div className="text-primary text-2xl font-bold font-pr">5+</div>
                      <div className="text-textMuted text-xs font-pts mt-0.5">Years Exp</div>
                    </div>
                    <div className="flex-1 bg-surface/80 backdrop-blur-xl rounded-xl p-4 border border-borderColor/30 text-center">
                      <div className="text-primaryLight text-2xl font-bold font-pr">25+</div>
                      <div className="text-textMuted text-xs font-pts mt-0.5">Projects</div>
                    </div>
                    <div className="flex-1 bg-surface/80 backdrop-blur-xl rounded-xl p-4 border border-borderColor/30 text-center">
                      <div className="text-primary text-2xl font-bold font-pr">AI</div>
                      <div className="text-textMuted text-xs font-pts mt-0.5">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">What We Master</span>
            <h3 className="text-white text-3xl md:text-4xl font-pr font-bold">
              Our <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-textMuted font-pts mt-3 max-w-lg mx-auto">Technologies and domains we've mastered to deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 hover:border-primary/25 transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                {/* Animated SVG background */}
                <div className="absolute inset-0 pointer-events-none">
                  {item.bg}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(0,194,255,0.1), 0 0 40px rgba(0,194,255,0.05)'
                }}></div>

                <div className="relative z-10 p-6 flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-400">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h4 className="text-white font-pr font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                      <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-pts font-bold tracking-wider shrink-0">{item.years} YRS</span>
                    </div>
                    <p className="text-textMuted text-sm font-pts leading-relaxed">{item.sub}</p>

                    {/* Progress bar */}
                    <div className="mt-3 h-1 w-full bg-borderColor/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primaryLight rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? (idx < 2 ? '95%' : idx < 4 ? '85%' : '80%') : '0%', transitionDelay: `${800 + idx * 150}ms` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
