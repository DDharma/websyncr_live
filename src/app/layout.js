import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Websyncr | Premium Web Development Solutions",
  description:
    "Elevate Your Online Presence with Professional Web Solutions. We create stunning websites, mobile apps, and digital experiences that captivate your audience.",
  keywords:
    "web development, professional websites, premium web design, mobile app development, AWS cloud management, WordPress development",
  openGraph: {
    title: "Websyncr | Premium Web Development Solutions",
    description: "Elevate Your Online Presence with Professional Web Solutions",
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <meta name="theme-color" content="#2B2B2B" />
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
