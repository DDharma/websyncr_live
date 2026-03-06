"use client";
import React, { useState, useEffect } from "react";

const expertise = [
  { name: "AI & LLM", sub: "RAG & Chatbots", color: "primary" },
  { name: "Chatbot Systems", sub: "Multi-channel", color: "primaryLight" },
  { name: "Web Development", sub: "4+ Years", color: "primary" },
  { name: "Mobile Apps", sub: "2+ Years", color: "primaryLight" },
  { name: "WordPress", sub: "4+ Years", color: "success" },
  { name: "AWS Cloud", sub: "2+ Years", color: "warm" },
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
                      <div className="text-primary text-2xl font-bold font-pr">4+</div>
                      <div className="text-textMuted text-xs font-pts mt-0.5">Years Exp</div>
                    </div>
                    <div className="flex-1 bg-surface/80 backdrop-blur-xl rounded-xl p-4 border border-borderColor/30 text-center">
                      <div className="text-primaryLight text-2xl font-bold font-pr">50+</div>
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
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-white text-2xl font-pr font-bold mb-2 text-center">
            Our <span className="text-primary">Expertise</span>
          </h3>
          <p className="text-textMuted font-pts text-center mb-10">Technologies we master to deliver exceptional results</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="group bg-surface/60 rounded-xl border border-borderColor/50 p-5 text-center hover:border-primary/20 hover:bg-surfaceLight/40 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-4 h-4 bg-${item.color} rounded-full`}></div>
                </div>
                <h4 className="text-white font-pr font-semibold text-sm mb-0.5">{item.name}</h4>
                <p className="text-textMuted text-xs font-pts">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
