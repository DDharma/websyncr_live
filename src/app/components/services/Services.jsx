"use client";
import { services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <div className="w-full bg-white pt-[50px] px-[90px]" id="services">
        <div className="text-black text-[60px] font-pr font-[700] text-center">
          What We Offer
        </div>
        <div className="text-black text-[30px] font-pts font-[400] text-center">
          we offer services that help you establish a strong online presence
        </div>
        <div
          className="h-[500px] w-full mt-[20px] relative"
          style={{
            backgroundImage: `url(${selectedService.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col">
            {services.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={classNames(
                    "w-[380px] mb-[5px] py-[20px] ml-[10px] mt-[10px] font-[500] rounded px-[20px] cursor-pointer hover:font-[700]",
                    data.id === selectedService.id
                      ? "bg-primaryBlue"
                      : "bg-white "
                  )}
                  onClick={() => setSelectedService(data)}
                >
                  <div
                    className={classNames(
                      "text-[20px] font-pr font-[700px] uppercase",
                      data.id === selectedService.id
                        ? "text-white text-[22px]"
                        : "text-primaryBlue"
                    )}
                  >
                    {data.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-[20px] text-primaryBlue font-pts font-[700px] absolute right-[0px] bottom-[30px] w-[600px] bg-black/50 px-[20px] py-[10px] rounded">
            <div>{selectedService.des}</div>
              {/* <div  className="flex gap-[10px] mt-[20px] cursor-pointer text-white bg-primaryBlue w-fit px-[16px] py-[8px] rounded font-pts font-[500] hover:font-[700]">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
