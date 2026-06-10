import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mccaulleydeck.co"),
  title: {
    default: "McCaulley Deck Co. - Designed & Built by Hand",
    template: "%s | McCaulley Deck Co.",
  },
  description:
    "Custom decks and outdoor living spaces in the greater Chicagoland area. Every project starts with a 3D design - and is built by hand.",
  openGraph: {
    title: "McCaulley Deck Co.",
    description:
      "Custom decks and outdoor living spaces, designed & built by hand.",
    url: "https://mccaulleydeck.co",
    siteName: "McCaulley Deck Co.",
    locale: "en_US",
    type: "website",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
