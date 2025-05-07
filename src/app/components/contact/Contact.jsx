import React from "react";

const Contact = () => {
  return (
    <section 
      className="w-full dark-blue-gradient py-20" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px]">
        <h2 
          className="text-white xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          Begin Your <span className="text-primaryBlue">Journey</span>
        </h2>
        
        <p 
          className="text-white xs:text-[15px] md:text-[18px] lg:text-[22px] font-pts font-[400] text-center mt-4 max-w-3xl mx-auto"
        >
          Share your vision with us, and we'll transform it into a captivating digital experience that elevates your brand
        </p>
        
        <div className="flex justify-center items-center py-8">
          <div className="glass-effect text-center font-pts font-[600] border-primaryBlue border-[1px] py-4 px-8 rounded-full shadow-lg transition-all duration-300">
            <span className="text-white xs:text-[14px] md:text-[18px] lg:text-[22px] uppercase tracking-wide">
              Email Us:
            </span>{" "}
            <span className="text-primaryBlue xs:text-[16px] md:text-[20px] lg:text-[24px] ml-2">
              <a 
                href="mailto:websyncr.info@gmail.com"
                className="border-b-2 border-primaryBlue/30 hover:border-primaryBlue transition-colors duration-300"
              >
                websyncr.info@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl">
            <div className="p-6 md:p-8 lg:p-10 bg-navy/20">
              <h3 className="text-primaryBlue text-2xl md:text-3xl font-pr font-bold mb-6 text-center">
                Let's Create Something Extraordinary
              </h3>
              
              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdEJZ1E1y9jPRLxDjoE5eWh_NffPVoEmNIfk_YIkRV5Lawatw/viewform?embedded=true"
                  className="w-full max-w-3xl h-[600px] md:h-[700px] lg:h-[800px]"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white font-pts text-lg">
              Prefer a direct conversation?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="https://forms.gle/JEHEHnH3VC9wPgYB6" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-primaryBlue text-white rounded-lg font-pts font-semibold hover-lift transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Schedule a Consultation
              </a>
              <a 
                href="mailto:websyncr.info@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-primaryBlue/30 rounded-lg font-pts font-semibold hover-lift transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
