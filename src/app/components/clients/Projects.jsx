"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [selectedServices, setSelectedServices] = useState(pricing[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full bg-gradient-to-b from-slate-800 via-blue-900 to-slate-900 py-20 overflow-hidden" 
      id="project"
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

      <div className="relative max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px]">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/10 backdrop-blur-sm rounded-full border border-primaryBlue/20 mb-6">
            <span className="text-primaryBlue text-sm font-medium tracking-wider uppercase">Our Portfolio</span>
          </div>
          
          <h2 className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] mb-6">
            Featured <span className="bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Service Categories */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-auto lg:h-[700px] flex flex-col">
                <div className="p-4 md:p-6 border-b border-white/10 flex-shrink-0">
                  <h3 className="text-white text-lg md:text-xl font-pr font-semibold">Project Categories</h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">Browse by service type</p>
                </div>
                
                <div className="p-2">
                  {pricing?.map((data, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedServices(data)}
                      className={classNames(
                        "w-full text-left py-4 px-4 rounded-xl transition-all duration-300 font-pr font-semibold capitalize text-base mb-2 group",
                        data.id === selectedServices.id
                          ? "bg-gradient-to-r from-primaryBlue/20 to-lightBlue/10 text-primaryBlue border border-primaryBlue/30"
                          : "text-white hover:bg-white/5 border border-transparent hover:border-primaryBlue/20"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={classNames(
                            "w-3 h-3 rounded-full transition-all duration-300",
                            data.id === selectedServices.id ? "bg-primaryBlue" : "bg-slate-600 group-hover:bg-primaryBlue/50"
                          )}></div>
                          <span>{data.name}</span>
                        </div>
                        <span className={classNames(
                          "text-xs px-2 py-1 rounded-full transition-all duration-300",
                          data.id === selectedServices.id 
                            ? "bg-primaryBlue/20 text-primaryBlue" 
                            : "bg-slate-700 text-slate-400 group-hover:bg-primaryBlue/10 group-hover:text-primaryBlue"
                        )}>
                          {data?.clients?.length || 0}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Client List */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-[700px] flex flex-col">
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div>
                      <h3 className="text-white text-2xl font-pr font-bold">
                        {selectedServices.name} Projects
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        Successful implementations and satisfied clients
                      </p>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 bg-primaryBlue/20 rounded-full border border-primaryBlue/30">
                      <span className="text-primaryBlue text-sm font-pts font-semibold">
                        {selectedServices?.clients?.length || 0} Projects
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                  {selectedServices?.clients?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedServices.clients.map((client, id) => (
                        <a 
                          key={id} 
                          href={client?.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <div className="bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-primaryBlue/30 p-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 h-full flex flex-col">
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 rounded-xl bg-primaryBlue/20 flex items-center justify-center text-primaryBlue border border-primaryBlue/30">
                                <span className="text-lg font-bold font-pr">{client.name.charAt(0).toUpperCase()}</span>
                              </div>
                              <div className="ml-4 flex-1">
                                <h4 className="text-white text-lg font-pr font-semibold capitalize group-hover:text-primaryBlue transition-colors duration-300">
                                  {client.name}
                                </h4>
                                <p className="text-slate-400 text-sm font-pts">
                                  {selectedServices.name} Project
                                </p>
                              </div>
                            </div>
                            
                            <p className="text-slate-300 font-pts mb-4 flex-grow leading-relaxed">
                              A premium {selectedServices.name.toLowerCase()} project delivered with excellence, 
                              featuring modern design and cutting-edge technology.
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green rounded-full"></div>
                                <span className="text-sm text-slate-400 font-pts">Live Project</span>
                              </div>
                              
                              <div className="flex items-center text-primaryBlue group-hover:text-lightBlue transition-colors duration-300">
                                <span className="text-sm font-pts mr-2">View Project</span>
                                <svg 
                                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-primaryBlue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <svg 
                          className="w-10 h-10 text-primaryBlue" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      
                      <h4 className="text-white text-xl font-pr font-semibold mb-2">
                        No Projects Yet
                      </h4>
                      <p className="text-slate-400 font-pts text-base mb-6 max-w-md mx-auto">
                        We're currently working on exciting projects in this category. 
                        Your project could be the first featured here!
                      </p>
                      
                      <a 
                        href="#contact" 
                        className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>Start Your Project</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryBlue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primaryBlue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">50+</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-lightBlue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-lightBlue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">100%</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">24h</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Average Delivery</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primaryDarkBlue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primaryDarkBlue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-primaryBlue text-2xl lg:text-3xl font-bold font-pr">4.9★</div>
              <div className="text-slate-400 text-sm font-pts uppercase tracking-wider">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
