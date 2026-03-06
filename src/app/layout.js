import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Websyncr | AI Solutions, LLM Engineering & Premium Web Development",
  description:
    "Build intelligent AI chatbots, RAG systems, and LLM integrations alongside premium web development, mobile apps, and cloud infrastructure. Websyncr delivers cutting-edge AI and digital solutions for forward-thinking businesses.",
  keywords:
    "AI solutions, LLM integration, RAG systems, AI chatbot development, retrieval augmented generation, custom chatbots, web development, mobile app development, AWS cloud management, WordPress development",
  openGraph: {
    title: "Websyncr | AI Solutions, LLM Engineering & Premium Web Development",
    description: "Build intelligent AI chatbots, RAG systems, and LLM integrations alongside premium web and mobile applications.",
    url: "https://websyncr.com",
    siteName: "Websyncr",
    images: [
      {
        url: "/img/fullLogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <meta name="theme-color" content="#060B14" />
      </head>
      <script
        dangerouslySetInnerHTML={{
          __html: `async src="https://www.googletagmanager.com/gtag/js?id=G-E5QYGTFSZ6"
        `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-E5QYGTFSZ6')`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55D6H5HS')`,
        }}
      />

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55D6H5HS"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>`,
          }}
        />

        {children}
      </body>
    </html>
  );
}
