"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(pricing[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const selected = pricing.find(s => s.id === selectedId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden section-divider" id="project">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-xs font-pts font-medium tracking-[0.2em] uppercase mb-4">Our Portfolio</span>
          <h2 className="text-white xs:text-[32px] md:text-[44px] lg:text-[56px] font-pr font-[700] leading-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-textMuted text-lg font-pts mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our successful projects across AI, web, mobile, and cloud
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pricing.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className={classNames(
                "px-4 py-2 rounded-full text-[13px] font-pts font-semibold transition-all duration-300 border",
                selectedId === cat.id
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-surface/50 border-borderColor/50 text-textMuted hover:text-primary hover:border-primary/20"
              )}
            >
              {cat.name}
              <span className={classNames(
                "ml-2 text-[11px] px-1.5 py-0.5 rounded-full",
                selectedId === cat.id ? "bg-primary/20 text-primary" : "bg-surfaceLight text-textMuted"
              )}>
                {cat.clients?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {selected?.clients?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {selected.clients.map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface/60 backdrop-blur-sm rounded-2xl border border-borderColor/50 p-6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 card-shine"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                    <span className="text-lg font-bold font-pr">{client.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white text-lg font-pr font-semibold capitalize group-hover:text-primary transition-colors">{client.name}</h4>
                    <p className="text-textMuted text-sm font-pts">{selected.name}</p>
                  </div>
                </div>

                <p className="text-textMuted font-pts text-sm leading-relaxed mb-4">
                  A premium {selected.name.toLowerCase()} project delivered with modern design and cutting-edge technology.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-borderColor/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-textMuted font-pts">Live</span>
                  </div>
                  <span className="text-primary text-sm font-pts group-hover:translate-x-1 transition-transform inline-flex items-center">
                    View
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-pr font-semibold mb-2">No Projects Yet</h4>
            <p className="text-textMuted font-pts mb-6 max-w-md mx-auto">
              We're working on exciting projects in this category. Yours could be the first!
            </p>
            <a href="#contact" className="group inline-flex items-center px-6 py-3 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03]">
              Start Your Project
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '50+', label: 'Projects', color: 'primary' },
            { value: '100%', label: 'Satisfaction', color: 'primaryLight' },
            { value: '24h', label: 'Avg Delivery', color: 'success' },
            { value: '4.9', label: 'Rating', color: 'warm' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center bg-surface/40 rounded-xl border border-borderColor/30 p-6">
              <div className={`text-${stat.color} text-3xl font-bold font-pr`}>{stat.value}</div>
              <div className="text-textMuted text-xs font-pts uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
