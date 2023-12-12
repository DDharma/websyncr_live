import React from "react";

const Banner = () => {
  return (
    <>
      <div className='h-[500px] w-full bg-[url("/img/bannerBg.png")] bg-center bg-cover px-[90px] pt-[50px]'>
        <div className="text-[60px] font-[800] font-pr text-primaryBlue">
          We Are Here
        </div>
        <div className="text-[30px] font-[400] font-pr text-primaryBlue">
          Elevate Your Online Presence in{" "}
          <span className="text-red"> 24-Hour</span>
        </div>
        <div className="mt-[60px] text-white text-[30px] font-pts font-[700] px-[20px] py-[10px] bg-primaryBlue w-fit rounded-[10px]">
          <a href="https://forms.gle/JEHEHnH3VC9wPgYB6" target="_blank">
            Reach Out
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
