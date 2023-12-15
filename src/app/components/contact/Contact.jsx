import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full xs:px-[10px] lg:px-[90px] bg-white pt-[50px]" id="contact">
        <div className="text-black xs:text-[30px] lg:text-[60px] font-pr font-[700] text-center">
          Contact Us
        </div>
        <div className="text-black xs:text-[15px] lg:text-[30px] font-pts font-[400] text-center">
          Share your idea or problem. We will provide you a prefect digital
          solution to elevate your online presence
        </div>
        <div className="flex justify-center items-center py-[20px]">
          <div className="text-black xs:text-[16px] lg:text-[32px] text-center font-pts font-[600] border-primaryDarkBlue border-[1px] w-fit py-[5px] px-[20px] rounded-[50px] bg-primaryBlue/50 uppercase">
            Mail Us :  {" "}
            <span className="text-red border-b-[1px] border-red ">
              <a href="mailto:websyncr.info@gmail.com">
                websyncr.info@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="flex justify-center item-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdEJZ1E1y9jPRLxDjoE5eWh_NffPVoEmNIfk_YIkRV5Lawatw/viewform?embedded=true"
            width="640"
            height="963"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
