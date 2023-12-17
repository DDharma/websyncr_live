import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 my-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="xs:flex xs:items-center xs:justify-between xs:flex-col md:flex-row">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse xs:mb-[20px] md:mb-0"
            >
              <img
                loading="lazy"
                decoding="async"
                src="/img/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-[30px] font-semibold whitespace-nowrap text-primaryBlue font-sans dark:text-white">
                websyncr
              </span>
            </a>
            <div className="flex flex-col gap-[10px]">
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:underline hover:text-primaryBlue text-[20px] font-pts me-4 md:me-6"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="/"
              class="hover:underline hover:text-primaryBlue text-[20px] font-pts "
            >
              websyncr
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
