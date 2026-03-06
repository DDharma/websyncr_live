"use client";
import React from "react";

const Footer = () => {
  const services = [
    "AI & LLM Solutions", "AI Chatbot Development", "Web Development",
    "Mobile App Development", "AWS Cloud Management", "WordPress Development"
  ];

  return (
    <footer className="relative w-full overflow-hidden section-divider">
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + Description */}
          <div className="md:col-span-4">
            <a href="/" className="flex items-center space-x-2.5 mb-5 group">
              <img loading="lazy" decoding="async" src="/img/logo.svg" className="h-9 group-hover:scale-110 transition-transform duration-300" alt="Websyncr" />
              <span className="text-2xl font-sans font-semibold gradient-text">websyncr</span>
            </a>
            <p className="text-textMuted font-pts text-[15px] leading-relaxed mb-6 max-w-sm">
              Engineering intelligent AI solutions, premium web development, and cloud infrastructure that transform businesses.
            </p>
            <div className="flex space-x-3">
              {[
                { name: "LinkedIn", href: "https://linkedin.com", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { name: "Twitter", href: "https://twitter.com", d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="w-9 h-9 bg-surface border border-borderColor/50 rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/20 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-sm font-pr font-semibold mb-5 uppercase tracking-wider">Services</h3>
              <ul className="space-y-2.5">
                {services.map((s, idx) => (
                  <li key={idx}>
                    <a href="#services" className="text-textMuted hover:text-primary text-sm font-pts transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-pr font-semibold mb-5 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2.5">
                {[{ n: "About Us", h: "#about" }, { n: "Projects", h: "#project" }, { n: "Testimonials", h: "#testimonial" }, { n: "Pricing", h: "#pricing" }].map((l, idx) => (
                  <li key={idx}>
                    <a href={l.h} className="text-textMuted hover:text-primary text-sm font-pts transition-colors duration-300">{l.n}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-pr font-semibold mb-5 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2.5">
                <li><a href="#contact" className="text-textMuted hover:text-primary text-sm font-pts transition-colors duration-300">Get in Touch</a></li>
                <li><a href="mailto:websyncr.info@gmail.com" className="text-textMuted hover:text-primary text-sm font-pts transition-colors duration-300">websyncr.info@gmail.com</a></li>
              </ul>
              <a
                href="https://calendly.com/websyncr-info/30min"
                target="_blank"
                className="inline-flex items-center mt-4 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-xs font-pts font-semibold hover:bg-primary/15 transition-all duration-300"
              >
                Schedule Call
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-borderColor/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-textMuted text-sm font-pts">
                &copy; {new Date().getFullYear()} <a href="/" className="hover:text-primary font-semibold transition-colors">Websyncr</a>. All Rights Reserved.
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-textMuted text-xs font-pts">Available for projects</span>
              </div>
            </div>
            <a
              href="#"
              className="text-textMuted hover:text-primary text-sm font-pts transition-colors inline-flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
