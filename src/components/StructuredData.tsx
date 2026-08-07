/**
 * JSON-LD graph: studio, founder, engagements, services, and FAQ.
 * "From $X" is open-ended, so it emits minPrice alone; a flat fee repeats it as maxPrice.
 */

import { site, founder, links } from '@/lib/site';
import { offers, faqs, capabilities } from '@/content/content';

export function StructuredData() {
  const priceOf = (price: string) => {
    const money = [...price.matchAll(/\$([\d,]+)/g)].map((m) =>
      Number(m[1]!.replace(/,/g, '')),
    );
    const min = money[0] ?? 0;
    if (/^from/i.test(price.trim())) return { min, max: undefined };
    return { min, max: money[1] ?? min };
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#studio`,
        name: site.name,
        alternateName: site.alternateNames,
        url: site.url,
        email: site.email,
        description: site.description,
        slogan: 'Fixed scope. Fixed price. Shipped.',
        priceRange: '$2,500–$45,000+',
        image: `${site.url}/og.png`,
        areaServed: 'Worldwide',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gurugram',
          addressCountry: site.countryCode,
        },
        founder: { '@id': `${site.url}/#founder` },
        employee: { '@id': `${site.url}/#founder` },
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
        knowsAbout: [
          'Full-stack engineering',
          'AI systems architecture',
          'Retrieval-augmented generation',
          ...capabilities.flatMap((capability) => capability.stack),
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Fixed-price engagements',
          itemListElement: offers.map((offer) => {
            const { min, max } = priceOf(offer.price);
            const monthly = offer.meta.toLowerCase().includes('per month');
            return {
              '@type': 'Offer',
              name: offer.name,
              description: offer.description,
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': monthly ? 'UnitPriceSpecification' : 'PriceSpecification',
                priceCurrency: 'USD',
                minPrice: min,
                ...(max === undefined ? {} : { maxPrice: max }),
                ...(monthly ? { unitCode: 'MON', billingIncrement: 1 } : {}),
              },
              url: `${site.url}/#offers`,
            };
          }),
        },
      },
      ...capabilities.map((capability) => ({
        '@type': 'Service',
        '@id': `${site.url}/#service-${capability.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: capability.name,
        description: capability.description,
        serviceType: capability.stack.join(', '),
        provider: { '@id': `${site.url}/#studio` },
        areaServed: 'Worldwide',
        url: `${site.url}/#capabilities`,
      })),
      {
        '@type': 'Person',
        '@id': `${site.url}/#founder`,
        name: founder.name,
        jobTitle: founder.role,
        url: founder.website,
        worksFor: { '@id': `${site.url}/#studio` },
        sameAs: [founder.linkedin, founder.github, founder.website],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#studio` },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'ContactPage',
        '@id': `${site.url}/#contact`,
        url: `${site.url}/#contact`,
        significantLink: links.calendly,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
