import React from "react";

const Banner = () => {
  return (
    <>
      <div className='xs:h-[200px] lg:h-[500px] w-full bg-[url("/img/bannerBg.png")] bg-center bg-cover xs:px-[10px] lg:px-[90px] xs:pt-[20px] lg:pt-[50px]'>
        <div className="xs:text-[30px] lg:text-[60px] font-[800] font-pr text-primaryBlue">
          We Are Here
        </div>
        <div className="xs:text-[15px] lg:text-[30px] font-[400] font-pr text-primaryBlue">
          Elevate Your Online Presence in{" "}
          <span className="text-red"> 24-Hour</span>
        </div>
        <div className="xs:mt-[30px] lg:mt-[60px] text-white xs:text-[15px] lg:text-[30px] font-pts font-[700] px-[20px] py-[10px] bg-primaryBlue w-fit rounded-[10px]">
          <a href="https://forms.gle/JEHEHnH3VC9wPgYB6" target="_blank">
            Reach Out
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
