/**
 * Home page composition - the single-page section order, top to bottom.
 * The skip link precedes Nav so keyboard focus reaches it first.
 */

import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProofBar } from '@/components/sections/ProofBar';
import { EngagementModel } from '@/components/sections/EngagementModel';
import { Offers } from '@/components/sections/Offers';
import { Capabilities } from '@/components/sections/Capabilities';
import { Work } from '@/components/sections/Work';
import { Testimonials } from '@/components/sections/Testimonials';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { StructuredData } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-3 focus-visible:left-3 focus-visible:z-100 focus-visible:rounded-tag focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2.5 focus-visible:font-mono focus-visible:text-mbase focus-visible:text-paper"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <ProofBar />
        <EngagementModel />
        <Offers />
        <Capabilities />
        <Work />
        <Testimonials />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
