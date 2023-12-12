import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full px-[90px] bg-white pt-[50px]" id="contact">
        <div className="text-black text-[60px] font-pr font-[700] text-center">
          Contact Us
        </div>
        <div className="text-black text-[30px] font-pts font-[400] text-center">
          Share your idea or problem. We will provide you a prefect digital
          solution to elevate your online presence
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
