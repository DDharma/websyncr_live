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
            ? "bg-navy/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/img/logo.svg"
              className={classNames(
                "transition-all duration-300",
                scrolled ? "h-8" : "h-10"
              )}
              alt="Websyncr Logo"
            />
            <span className={classNames(
              "self-center font-semibold whitespace-nowrap font-sans transition-all duration-300",
              scrolled ? "text-2xl text-primaryBlue" : "text-3xl text-primaryBlue"
            )}>
              websyncr
            </span>
          </a>
          <button
            onClick={() => toggleMobileMenu()}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-primaryBlue/10 focus:outline-none focus:ring-2 focus:ring-primaryBlue text-primaryBlue"
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
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
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
                      "block py-2 px-3 rounded transition-all duration-300 md:p-0 uppercase tracking-wider text-sm",
                      scrolled ? "text-skyBlue hover:text-white" : "text-navy hover:text-primaryBlue"
                    )}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://forms.gle/JEHEHnH3VC9wPgYB6"
                  target="_blank"
                  type="button"
                  className={classNames(
                    "text-white transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase tracking-wider",
                    scrolled ? "bg-primaryBlue hover:bg-lightBlue" : "blue-gradient hover:opacity-90"
                  )}
                >
                  Reach Out
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
        <ul className="font-medium flex flex-col items-center p-6 glass-effect shadow-lg">
          {["services", "pricing", "testimonial", "about", "project", "contact"].map((item) => (
            <li key={item} className="w-full border-b border-primaryBlue/20 last:border-0">
              <a
                href={`#${item}`}
                className="block py-3 text-primaryDarkBlue hover:text-primaryBlue uppercase tracking-wider text-center font-pts"
                onClick={() => setMobileMenu("hidden")}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mt-4 w-full">
            <a
              href="https://forms.gle/JEHEHnH3VC9wPgYB6"
              target="_blank"
              type="button"
              className="w-full block text-white blue-gradient hover:opacity-90 font-medium rounded-lg text-sm px-5 py-3 text-center uppercase tracking-wider"
              onClick={() => setMobileMenu("hidden")}
            >
              Reach Out
            </a>
          </li>
        </ul>
      </div>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
