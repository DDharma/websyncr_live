"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Projects = () => {
  const [selectedServices, setSelectedServices] = useState(pricing[0]);
  return (
    <div className="w-full mt-[50px] xs:px-[10px] lg:px-[90px]" id='project'>
      <div className="text-black xs:text-[30px] lg:text-[60px] font-pr font-[700] text-center">
        Projects
      </div>
      <div className="flex justify-between items-start mt-[30px] xs:flex-col lg:flex-row">
        <div className=" xs:w-full lg:w-[50%] xs:flex lg:block overflow-scroll hideScroll gap-[20px] scrollbar-hidden">
          {pricing?.map((data, idx) => {
            return (
              <div
                key={idx}
                onClick={() => setSelectedServices(data)}
                className={classNames(" xs:text-[15px] lg:text-[30px] font-[600]  font-pr mb-[20px] cursor-pointer capitalize",data.id === selectedServices.id
                ? "text-primaryBlue"
                : "text-gray-500")}
              >
                {data.name}
              </div>
            );
          })}
        </div>
        <div className="xs:w-full justify-center items-center lg:w-[50%] grid grid-cols-2 gap-3">
          {selectedServices?.clients?.map((client,id) => {
            return(
              <div key={id} className=" xs:text-[15px] lg:text-[30px] text-black font-pts font-[500] capitalize mb-[20px] text-center">
                <a className="border-b-[1px] border-primaryDarkBlue" target="_blank" href={client?.url}>{client?.name}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
