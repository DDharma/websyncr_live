"use client";
import { pricing } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Projects = () => {
  const [selectedServices, setSelectedServices] = useState(pricing[0]);
  return (
    <div className="w-full mt-[50px] px-[90px]" id='project'>
      <div className="text-black text-[60px] font-pr font-[700] text-center">
        Projects
      </div>
      <div className="flex justify-between items-start mt-[30px]">
        <div className=" w-[50%]">
          {pricing?.map((data, idx) => {
            return (
              <div
                key={idx}
                onClick={() => setSelectedServices(data)}
                className={classNames("text-[30px] font-[600]  font-pr mb-[20px] cursor-pointer capitalize",data.id === selectedServices.id
                ? "text-primaryBlue"
                : "text-gray-500")}
              >
                {data.name}
              </div>
            );
          })}
        </div>
        <div className="w-[50%] grid grid-cols-2 gap-3">
          {selectedServices?.clients?.map((client,id) => {
            return(
              <div key={id} className="text-[30px] text-black font-pts font-[500] capitalize mb-[20px]">
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
