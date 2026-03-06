"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(pricing[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const selected = pricing.find(s => s.id === selectedId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="pricing">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">Pricing Plans</span>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-pr font-bold leading-tight">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-textMuted text-lg font-pts mt-4 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with exceptional value. Every plan includes dedicated support.
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {pricing.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              className={classNames(
                "px-5 py-2.5 rounded-full text-[13px] font-pts font-semibold uppercase tracking-wider transition-all duration-300 border",
                selectedId === service.id
                  ? "bg-primary/10 border-primary/30 text-primary shadow-lg shadow-primary/10"
                  : "bg-surface/50 border-borderColor/50 text-textMuted hover:text-primary hover:border-primary/20"
              )}
            >
              {service.name}
              {service.discount && (
                <span className="ml-2 px-1.5 py-0.5 bg-success/10 border border-success/20 rounded text-success text-[9px] font-bold">
                  {service.discount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Service Detail */}
        {selected && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left — Info */}
            <div className="lg:col-span-5">
              <div className="bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cover bg-center border border-borderColor/50 shadow-lg" style={{ backgroundImage: `url(${selected.img})` }}></div>
                  <div>
                    <h3 className="text-white text-2xl font-pr font-bold">{selected.tittle}</h3>
                    <p className="text-primary text-sm font-pts font-medium uppercase tracking-wider">{selected.name}</p>
                  </div>
                </div>

                <p className="text-textMuted font-pts leading-relaxed mb-8">{selected.dec}</p>

                {/* Price */}
                <div className="bg-primary/[0.04] rounded-xl p-5 border border-primary/10 mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    {selected.badge && (
                      <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-pts font-bold uppercase tracking-wider">
                        {selected.badge}
                      </span>
                    )}
                    {selected.discount && (
                      <span className="px-2.5 py-0.5 bg-success/10 border border-success/20 rounded-full text-success text-[10px] font-pts font-bold uppercase tracking-wider">
                        {selected.discount}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-3 mt-3">
                    <div className="gradient-text text-4xl font-pr font-bold">{selected.startingPrice}</div>
                    {selected.originalPrice && (
                      <span className="text-textMuted/60 text-lg font-pts line-through">{selected.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex gap-6 mt-3 text-textMuted text-sm font-pts">
                    <span>Delivery: <span className="text-primary">{selected.deliveryTime}</span></span>
                    <span>Revisions: <span className="text-primary">{selected.revision}</span></span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group w-full flex items-center justify-center px-6 py-3.5 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  Get Started Now
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Features + Clients */}
            <div className="lg:col-span-7">
              <div className="bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-8 h-full">
                <h4 className="text-white text-xl font-pr font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  What's Included
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selected?.whatYouGet?.map((feature, idx) => (
                    <div key={idx} className="flex items-center p-3.5 bg-surfaceLight/30 rounded-xl border border-borderColor/30 hover:border-primary/15 transition-all duration-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-textMuted font-pts text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Clients */}
                {selected.clients && selected.clients.length > 0 && (
                  <div>
                    <h4 className="text-white text-lg font-pr font-semibold mb-4">Featured Clients</h4>
                    <div className="flex flex-wrap gap-3">
                      {selected.clients.map((client, idx) => (
                        <a
                          key={idx}
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-4 py-2 bg-surfaceLight/30 hover:bg-primary/10 rounded-full border border-borderColor/30 hover:border-primary/30 text-textMuted hover:text-primary font-pts text-sm transition-all duration-300"
                        >
                          {client.name}
                          <svg className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
