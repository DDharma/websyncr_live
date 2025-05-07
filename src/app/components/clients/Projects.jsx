"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Projects = () => {
  const [selectedServices, setSelectedServices] = useState(pricing[0]);

  return (
    <section 
      className="w-full bg-white py-20" 
      id="project"
    >
      <div className="max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px]">
        <h2 
          className="text-navy xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          Featured <span className="text-primaryBlue">Projects</span>
        </h2>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Service Categories */}
            <div className="lg:col-span-4">
              <div className="bg-white/80 rounded-xl shadow-lg p-6">
                <h3 className="text-primaryBlue text-2xl font-pr font-bold mb-6 text-center lg:text-left">
                  Project Categories
                </h3>
                
                <div className="space-y-2">
                  {pricing?.map((data, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedServices(data)}
                      className={classNames(
                        "w-full text-left py-4 px-6 rounded-lg transition-all duration-300 font-pr font-semibold capitalize text-lg hover-lift",
                        data.id === selectedServices.id
                          ? "bg-primaryBlue/20 text-primaryBlue border-l-4 border-primaryBlue"
                          : "text-navy hover:bg-primaryBlue/10 border-l-4 border-transparent"
                      )}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Client List */}
            <div className="lg:col-span-8">
              <div className="bg-white/80 rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-primaryBlue text-2xl font-pr font-bold">
                    {selectedServices.name} Clients
                  </h3>
                  <span className="bg-primaryBlue/20 text-primaryBlue px-4 py-1 rounded-full text-sm font-pts">
                    {selectedServices?.clients?.length || 0} Projects
                  </span>
                </div>
                
                {selectedServices?.clients?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedServices.clients.map((client, id) => (
                      <a 
                        key={id} 
                        href={client?.url} 
                        target="_blank"
                        className="group block"
                      >
                        <div className="bg-navy/5 hover:bg-primaryBlue/10 rounded-lg p-6 transition-all duration-300 hover-lift h-full flex flex-col">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-primaryBlue/20 flex items-center justify-center text-primaryBlue">
                              <span className="text-xl font-bold font-pr">{client.name.charAt(0).toUpperCase()}</span>
                            </div>
                            <h4 className="ml-4 text-navy text-xl font-pr font-semibold capitalize group-hover:text-primaryBlue transition-colors duration-300">
                              {client.name}
                            </h4>
                          </div>
                          
                          <p className="text-navy/70 font-pts mb-4 flex-grow">
                            A premium {selectedServices.name.toLowerCase()} project delivered with excellence.
                          </p>
                          
                          <div className="flex justify-between items-center mt-auto">
                            <span className="text-sm text-navy/60 font-pts">
                              View Project
                            </span>
                            <svg 
                              className="w-5 h-5 text-primaryBlue transform group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg 
                      className="w-16 h-16 text-primaryBlue/30 mx-auto mb-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <p className="text-navy/60 font-pts text-lg">
                      No projects to display in this category yet.
                    </p>
                    <p className="text-primaryBlue font-pr mt-2">
                      Your project could be featured here!
                    </p>
                    <a 
                      href="#contact" 
                      className="inline-block mt-4 px-6 py-2 bg-primaryBlue text-white rounded-lg font-pts font-medium hover-lift transition-all duration-300"
                    >
                      Start a Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
