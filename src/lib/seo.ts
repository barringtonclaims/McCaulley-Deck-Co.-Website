import { companyInfo, testimonials } from "@/lib/data";

export const SITE_URL = "https://mccaulleydeck.co";

// ~20 mile radius around Barrington, IL — the NW Chicago suburbs we serve.
export const serviceAreas = [
  "Barrington",
  "South Barrington",
  "North Barrington",
  "Lake Barrington",
  "Inverness",
  "Palatine",
  "Arlington Heights",
  "Buffalo Grove",
  "Long Grove",
  "Kildeer",
  "Lake Zurich",
  "Hawthorn Woods",
  "Deer Park",
  "Wauconda",
  "Crystal Lake",
  "Cary",
  "Algonquin",
  "Lake in the Hills",
  "Fox River Grove",
  "Schaumburg",
  "Hoffman Estates",
  "Rolling Meadows",
  "Mount Prospect",
  "Prospect Heights",
  "Wheeling",
  "Vernon Hills",
  "Mundelein",
];

export const deckServices = [
  "Custom Deck Design & Build",
  "Composite Deck Installation",
  "Cedar & Wood Deck Building",
  "Pressure-Treated Decks",
  "Deck Railings & Stairs",
  "Deck Replacement",
  "Multi-Level Decks",
  "3D Deck Design",
];

// schema.org structured data — helps Google understand this is a local,
// deck-focused contractor and powers rich results (stars, service area).
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: companyInfo.name,
  alternateName: "McCaulley Deck Company",
  description:
    "Custom deck builder serving Barrington and the NW Chicago suburbs. Cedar, composite, and pressure-treated decks, designed in 3D and built by hand.",
  url: SITE_URL,
  telephone: "+1-224-655-9041",
  email: companyInfo.email,
  image: `${SITE_URL}/opengraph-image.png`,
  logo: `${SITE_URL}/icon.png`,
  priceRange: "$$$",
  slogan: companyInfo.tagline,
  founder: { "@type": "Person", name: "Max McCaulley" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barrington",
    addressRegion: "IL",
    postalCode: "60010",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.1542, longitude: -88.1362 },
  areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
  knowsAbout: deckServices,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Deck Building Services",
    itemListElement: deckServices.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.stars),
      bestRating: "5",
    },
    reviewBody: t.text,
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: companyInfo.name,
  publisher: { "@id": `${SITE_URL}/#business` },
};
