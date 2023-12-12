import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-full px-[90px] bg-white pt-[50px] pb-[20px]" id="about">
        <div className="text-black text-[60px] font-pr font-[700] text-center">
          About Us
        </div>
        <div className="flex justify-between items-center mt-[30px]">
          <div className="w-[50%]">
            <div className="text-[40px] text-primaryBlue font-pr font-[600]">
              Helping businesses deliver exceptional online experiences for
              customer.
            </div>
            <div className="text-[20px] text-black font-pts font-[400] text-justify mt-[20px]">
              Welcome to <a href="/" className="text-primaryBlue">Websyncr</a> Corner, where digital dreams come to
              life! With a wealth of experience spanning over four years in web
              development, two years in mobile app development, and an
              additional four years dedicated to mastering the intricacies of
              WordPress, we are your go-to freelance developer for all things
              digital. Our journey began with a passion for crafting seamless
              and user-centric web experiences. Over the years, we&apos;ve expanded
              our expertise into the dynamic realm of mobile app development,
              bringing innovation and functionality to the palm of your hands.
              What sets us apart is not just the code we write, but the
              solutions we deliver. We thrive on translating your ideas into
              captivating websites, intuitive mobile apps, and robust WordPress
              platforms. Whether you&apos;re embarking on a digital venture or
              seeking to enhance your online presence, we&apos;ve got the skills to
              make it happen. But we don&apos;t stop there – our journey extends into
              the cloud with a solid two years of hands-on experience in AWS. We
              understand the importance of a reliable and scalable
              infrastructure, ensuring that your digital presence remains secure
              and performs at its best. At <a href="/" className="text-primaryBlue">Websyncr&apos;s</a> Corner, we believe in
              turning challenges into opportunities and dreams into reality. <br/>
              <hr className="my-[20px]"/>
              Let&apos;s collaborate and build something extraordinary for your
              digital future. Feel free to customize it further to align with
              your personal style and brand!
            </div>
          </div>
          <img
            className="h-[500px] w-[500px]"
            src="/img/aboutus.webp"
            alt="about"
          ></img>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
