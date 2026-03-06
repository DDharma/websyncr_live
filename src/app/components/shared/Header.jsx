"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["services", "pricing", "testimonial", "about", "project", "contact"];

  return (
    <>
      <nav
        className={classNames(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-midnight/80 backdrop-blur-2xl border-b border-primary/8 py-2"
            : "bg-transparent py-5"
        )}
      >
        {/* Top glow line when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        )}

        <div className="max-w-7xl flex items-center justify-between mx-auto px-5 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src="/img/logo.svg"
                className={classNames(
                  "transition-all duration-300 group-hover:scale-110",
                  scrolled ? "h-7" : "h-9"
                )}
                alt="Websyncr Logo"
              />
            </div>
            <span className={classNames(
              "font-sans font-semibold whitespace-nowrap gradient-text transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl"
            )}>
              websyncr
            </span>
          </a>

          {/* Desktop Nav — centered */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative px-3 py-2 text-textMuted text-[13px] font-pts font-medium uppercase tracking-[0.15em] hover:text-primary transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-primaryLight rounded-full transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="https://calendly.com/websyncr-info/30min"
              target="_blank"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-[13px] font-pts font-semibold uppercase tracking-wider hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              Reach Out
              <svg className="w-3.5 h-3.5 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              type="button"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-borderColor text-primary transition-all duration-300 hover:bg-surfaceLight"
            >
              <span className="sr-only">Menu</span>
              {!mobileMenu ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={classNames(
          "fixed top-0 left-0 w-full h-screen z-40 transition-all duration-500",
          mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-2xl" onClick={() => setMobileMenu(false)}></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-2">
          {navItems.map((item, idx) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-2xl font-pr font-semibold text-textMuted hover:text-primary uppercase tracking-widest transition-all duration-300 py-3"
              style={{
                transitionDelay: mobileMenu ? `${idx * 60}ms` : '0ms',
                transform: mobileMenu ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileMenu ? 1 : 0,
              }}
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://calendly.com/websyncr-info/30min"
            target="_blank"
            className="mt-6 px-8 py-3 bg-primary text-midnight rounded-full font-pts font-semibold uppercase tracking-wider text-sm"
            style={{
              transitionDelay: mobileMenu ? `${navItems.length * 60}ms` : '0ms',
              transform: mobileMenu ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenu ? 1 : 0,
              transition: 'all 0.4s ease',
            }}
            onClick={() => setMobileMenu(false)}
          >
            Reach Out
          </a>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Header;
