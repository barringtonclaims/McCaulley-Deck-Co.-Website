import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { GOOGLE_ADS_ID } from "@/lib/gtag";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mccaulleydeck.co"),
  title: {
    default: "McCaulley Deck Co. | Deck Builder in Barrington & NW Suburbs",
    template: "%s | McCaulley Deck Co.",
  },
  description:
    "Custom cedar, composite & pressure-treated decks across Barrington and the NW Chicago suburbs. Every deck starts with a free 3D design. Get a free quote.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "McCaulley Deck Co. | Custom Deck Builder, NW Chicago Suburbs",
    description:
      "Custom decks designed & built by hand in Barrington and the NW Chicago suburbs. Cedar, composite & pressure-treated. Free 3D design.",
    url: "https://mccaulleydeck.co",
    siteName: "McCaulley Deck Co.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#20211F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {/* Google tag (gtag.js) — Google Ads conversion tracking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
