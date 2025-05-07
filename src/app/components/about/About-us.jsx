import React from "react";

const AboutUs = () => {
  return (
    <section 
      className="w-full bg-gradient-to-br from-skyBlue/10 to-primaryBlue/25 py-5" 
      id="about"
    >
      <div className="max-w-8xl mx-auto xs:px-[10px] md:px-[50px] lg:px-[90px]">
        <h2 
          className="text-navy xs:text-[30px] md:text-[40px] lg:text-[60px] font-pr font-[700] text-center"
        >
          Our <span className="text-primaryBlue">Story</span>
        </h2>
        
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 bg-white/80 p-8 rounded-xl shadow-lg">
            <h3 className="xs:text-[24px] md:text-[32px] lg:text-[40px] text-primaryBlue font-pr font-[600] mb-6">
              Crafting Digital Excellence for Discerning Clients
            </h3>
            
            <div className="space-y-6 xs:text-[14px] md:text-[16px] lg:text-[18px] text-navy font-pts font-[400] leading-relaxed">
              <p>
                Welcome to <a href="/" className="text-primaryBlue font-semibold hover:text-primaryDarkBlue transition-colors duration-300">Websyncr</a>, 
                where digital aspirations transform into captivating realities. With a rich portfolio spanning over four years in premium web 
                development, two years in sophisticated mobile app creation, and four years mastering the intricacies of WordPress, 
                we are the artisans behind exceptional digital experiences.
              </p>
              
              <p>
                Our journey began with a passion for crafting seamless, user-centric web experiences that not only meet but exceed expectations. 
                Over the years, we've expanded our expertise into the dynamic realm of mobile app development, bringing innovation and 
                functionality to the palm of your hands.
              </p>
              
              <p>
                What distinguishes us is not merely the code we write, but the bespoke solutions we deliver. We excel in translating your 
                vision into captivating websites, intuitive mobile applications, and robust WordPress platforms that resonate with your audience.
              </p>
              
              <p>
                Our expertise extends into the cloud with two years of specialized experience in AWS infrastructure. We understand that a 
                reliable, scalable foundation is essential for maintaining a secure and high-performing digital presence.
              </p>
              
              <div className="pt-6 border-t border-primaryBlue/30">
                <p className="font-pr text-primaryBlue text-xl italic">
                  "We don't just build websites; we craft digital experiences that elevate brands and captivate audiences."
                </p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primaryBlue hover:text-primaryDarkBlue transition-colors duration-300 font-pts font-medium"
                >
                  <span>Let's create something extraordinary together</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primaryBlue/20 rounded-xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  src="/img/aboutus.webp"
                  alt="About Websyncr - Premium Web Development"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-pr text-xl font-semibold">Websyncr</p>
                  <p className="text-primaryBlue font-pts">Premium Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
