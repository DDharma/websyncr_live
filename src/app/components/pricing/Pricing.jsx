"use client";
import { pricing as services } from "@/app/helper/data";
import classNames from "classnames";
import React, { useState } from "react";

const Pricing = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  return (
    <>
      <div
        className="w-full bg-white pt-[50px] xs:px-[10px] lg:px-[90px] pb-[50px]"
        id="pricing"
      >
        <div className="text-black xs:text-[30px] lg:text-[60px] font-pr font-[700] text-center">
          Pricing
        </div>
        <div className="text-black xs:text-[15px] lg:text-[30px] font-pts font-[400] text-center">
          You can find the best charger for our services all over the world
        </div>
        <div className="mt-[20px] lg:flex gap-2  xs:hidden">
          <div className="w-[30%] bg-primaryDarkBlue h-fit">
            {services.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={classNames(
                    "bg-white mb-[10px] py-[50px] cursor-pointer hover:font-[700] flex relative",
                    idx === 3 ? "mb-0" : ""
                  )}
                  style={{
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => setSelectedService(data)}
                >
                  <div
                    className={classNames(
                      "text-[20px] font-pr font-[700px] px-[16px] py-[8px] uppercase absolute bottom-[2px] right-[2px]",
                      data.id === selectedService.id
                        ? "text-white text-[22px] bg-primaryBlue"
                        : "text-primaryBlue bg-white"
                    )}
                  >
                    {data.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="w-[70%] relative"
            style={{
              backgroundImage: `url(${selectedService.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col justify-center px-[30px]">
              <div className="text-primaryBlue text-[40px] uppercase font-pr text-center font-[700]">
                {selectedService?.tittle}
              </div>
              <div className="grid grid-cols-2 mt-[30px]">
                <div className="text-[50px] font-[900] font-pts text-red flex justify-center items-center px-[40px] text-center uppercase border-r-[2px] border-white">
                  {selectedService?.startingPrice}
                </div>
                <div className="text-[30px] text-white flex justify-center px-[40px]">
                  <ul>
                    {selectedService?.whatYouGet?.map((data, idx) => {
                      return (
                        <li
                          className="text-[25px] font-pts capitalize"
                          key={idx}
                        >
                          {"> "}
                          {data}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="text-center text-white text-[30px] font-pr font-[500] mt-[30px]">
                {selectedService.dec}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px] xs:block lg:hidden px-[10px]">
          <div className="flex items-center gap-[20px] hideScroll overflow-scroll">
            {services.map((data, idx) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="text-[15px] font-pr  px-[30px] py-[10px] rounded"
                  onClick={() => setSelectedService(data)}
                >
                  <div
                    className={classNames(
                      "bg-black/70 px-[16px] py-[4px] rounded",
                      data.id === selectedService.id
                        ? "text-primaryBlue font-[700]"
                        : "text-white font-[500]"
                    )}
                  >
                    {data.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="w-full mt-[10px] py-[10px] rounded"
            style={{
              backgroundImage: `url(${selectedService.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/80 flex flex-col justify-center px-[15px]">
              <div className="text-primaryBlue text-[20px] uppercase font-pr text-center font-[700]">
                {selectedService?.tittle}
              </div>
              <div className="grid grid-cols-2 mt-[15px]">
                <div className="text-[25px] font-[900] font-pts text-red flex justify-center items-center px-[20px] text-center uppercase border-r-[2px] border-white">
                  {selectedService?.startingPrice}
                </div>
                <div className="text-[15px] text-white flex justify-center px-[20px]">
                  <ul>
                    {selectedService?.whatYouGet?.map((data, idx) => {
                      return (
                        <li
                          className="text-[12px] font-pts capitalize"
                          key={idx}
                        >
                          {"> "}
                          {data}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="text-center text-white text-[15px] font-pr font-[500] mt-[30px]">
                {selectedService.dec}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
