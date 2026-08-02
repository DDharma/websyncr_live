import { site, founder, links } from '@/lib/site';
import { offers, faqs, capabilities } from '@/content/content';

/**
 * JSON-LD graph: the studio, the person behind it, the four engagements, and
 * the FAQ. Prices are stated as the exact published ranges — nothing rounded,
 * nothing implied.
 */
export function StructuredData() {
  /**
   * Two price shapes are published: a range ("$15,000 – $22,000") and a single
   * fixed fee ("$2,500"). A fixed fee has no upper bound to parse, so maxPrice
   * falls back to minPrice — emitting 0 would advertise a free engagement.
   */
  const priceOf = (price: string) => {
    const money = [...price.matchAll(/\$([\d,]+)/g)].map((m) =>
      Number(m[1]!.replace(/,/g, '')),
    );
    const min = money[0] ?? 0;
    return { min, max: money[1] ?? min };
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#studio`,
        name: site.name,
        // The mark is read aloud as "web syncer" and typed several ways.
        // Declaring the variants lets search and LLM retrieval collapse them
        // onto one entity instead of treating them as unrelated strings.
        alternateName: site.alternateNames,
        url: site.url,
        email: site.email,
        description: site.description,
        slogan: 'Fixed scope. Fixed price. Shipped.',
        priceRange: '$2,500–$35,000',
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
        // Derived from the published capability list so the graph can never
        // drift from what the page actually claims.
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
            return {
              '@type': 'Offer',
              name: offer.name,
              description: offer.description,
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                minPrice: min,
                maxPrice: max,
              },
              url: `${site.url}/#offers`,
            };
          }),
        },
      },
      // One Service node per capability. `knowsAbout` alone is a bag of
      // strings; these are typed, provider-linked entities, which is what gets
      // resolved when something asks "who builds RAG pipelines".
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
      // Static, author-controlled object with no user input — serialised once
      // at build time into the prerendered HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
