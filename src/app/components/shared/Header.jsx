"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState("hidden");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    if (mobileMenu === "block") {
      setMobileMenu("hidden");
    }
    if (mobileMenu === "hidden") {
      setMobileMenu("block");
    }
    return;
  };

  return (
    <>
      <nav
        className={classNames(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-primaryBlue/10 py-2 border-b border-primaryBlue/20"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src="/img/logo.svg"
                className={classNames(
                  "transition-all duration-300 group-hover:scale-110",
                  scrolled ? "h-8" : "h-10"
                )}
                alt="Websyncr Logo"
              />
              <div className="absolute inset-0 bg-primaryBlue/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={classNames(
              "self-center font-semibold whitespace-nowrap font-sans transition-all duration-300 bg-gradient-to-r from-primaryBlue to-lightBlue bg-clip-text text-transparent",
              scrolled ? "text-2xl" : "text-3xl"
            )}>
              websyncr
            </span>
          </a>
          
          <button
            onClick={() => toggleMobileMenu()}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-xl md:hidden bg-white/5 backdrop-blur-sm border border-primaryBlue/30 hover:bg-primaryBlue/20 focus:outline-none focus:ring-2 focus:ring-primaryBlue text-primaryBlue transition-all duration-300"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenu === "hidden" ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              {["services", "pricing", "testimonial", "about", "project", "contact"].map((item) => (
                <li key={item} className="nav-item">
                  <a
                    href={`#${item}`}
                    className={classNames(
                      "block py-2 px-4 rounded-lg transition-all duration-300 md:p-2 uppercase tracking-wider text-sm font-pts font-semibold relative group",
                      scrolled 
                        ? "text-slate-300 hover:text-primaryBlue hover:bg-primaryBlue/10" 
                        : "text-white hover:text-primaryBlue hover:bg-white/10"
                    )}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primaryBlue to-lightBlue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://forms.gle/JEHEHnH3VC9wPgYB6"
                  target="_blank"
                  className="group inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Reach Out</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={classNames(
          "fixed top-[60px] left-0 w-full z-40 transition-all duration-300 ease-in-out",
          mobileMenu,
          mobileMenu === "block" ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-b border-primaryBlue/20 shadow-2xl">
          <ul className="font-medium flex flex-col items-center p-6">
            {["services", "pricing", "testimonial", "about", "project", "contact"].map((item) => (
              <li key={item} className="w-full border-b border-white/10 last:border-0">
                <a
                  href={`#${item}`}
                  className="block py-4 text-slate-300 hover:text-primaryBlue uppercase tracking-wider text-center font-pts font-semibold transition-all duration-300 hover:bg-primaryBlue/10 rounded-lg mx-2"
                  onClick={() => setMobileMenu("hidden")}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-6 w-full">
              <a
                href="https://forms.gle/JEHEHnH3VC9wPgYB6"
                target="_blank"
                className="group w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primaryBlue to-lightBlue rounded-xl text-white font-pts font-semibold uppercase tracking-wider shadow-lg shadow-primaryBlue/25 hover:shadow-xl hover:shadow-primaryBlue/40 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenu("hidden")}
              >
                <span>Reach Out</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
