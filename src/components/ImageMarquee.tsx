import { projects } from "@/lib/data";
import heroData from "@/lib/heroes.json";

type HeroMap = Record<string, { renderingIndex: number; photoIndex: number }>;
const heroes: HeroMap = heroData;

// Additional curated hero photos (craftsmanship highlights)
const completedHeroPhotos = [
  "/images/completed%20hero%20photos/IMG_0090.jpeg",
  "/images/completed%20hero%20photos/IMG_0157.jpeg",
  "/images/completed%20hero%20photos/IMG_0577.jpeg",
  "/images/completed%20hero%20photos/IMG_0670.jpeg",
  "/images/completed%20hero%20photos/IMG_0673.jpeg",
  "/images/completed%20hero%20photos/IMG_0679.jpeg",
  "/images/completed%20hero%20photos/IMG_0706.jpeg",
  "/images/completed%20hero%20photos/IMG_0708.jpeg",
  "/images/completed%20hero%20photos/IMG_1103.jpeg",
  "/images/completed%20hero%20photos/IMG_1124.jpeg",
  "/images/completed%20hero%20photos/IMG_1195.jpeg",
];

// Interleave project hero images with curated hero photos
const images: { src: string; alt: string }[] = [];

projects.forEach((p, i) => {
  const h = heroes[p.id] || { renderingIndex: 0, photoIndex: 0 };

  // Add the project's admin-selected build photo
  images.push({
    src: p.photos[h.photoIndex] || p.photos[0],
    alt: `${p.title} - build`,
  });

  // Interleave a curated hero photo after every project photo
  if (completedHeroPhotos[i]) {
    images.push({
      src: completedHeroPhotos[i],
      alt: "Completed project detail",
    });
  }
});

// Add any remaining curated photos
completedHeroPhotos.slice(projects.length).forEach((src) => {
  images.push({ src, alt: "Completed project detail" });
});

export default function ImageMarquee() {
  const doubled = [...images, ...images];

  return (
    <section className="relative py-6 overflow-hidden border-t border-paper-dark">
      {/* Gradient masks - fade into paper at both edges */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 bg-gradient-to-l from-paper to-transparent pointer-events-none" />

      <div
        className="flex gap-2.5 animate-marquee-left opacity-70"
        style={{ animationDuration: "80s" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-44 h-28 sm:w-52 sm:h-32 rounded-sm overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
