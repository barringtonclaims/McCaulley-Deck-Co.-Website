const progressPhotos = [
  "/images/progress%20photos/67053384648__13CC29E0-8361-4B29-B4B7-374DB311EBDF.JPG",
  "/images/progress%20photos/IMG_0203.jpeg",
  "/images/progress%20photos/IMG_0213.jpeg",
  "/images/progress%20photos/IMG_0244.jpeg",
  "/images/progress%20photos/IMG_0421.jpeg",
  "/images/progress%20photos/IMG_0914.jpeg",
];

export default function ProgressMarquee() {
  // Triple for seamless loop with fewer source images
  const tripled = [...progressPhotos, ...progressPhotos, ...progressPhotos];

  return (
    <section className="relative py-6 overflow-hidden border-t border-cream-dark">
      {/* Gradient masks */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-48 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 sm:w-48 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />

      <div
        className="flex gap-2.5 animate-marquee-right opacity-60"
        style={{ animationDuration: "50s" }}
      >
        {tripled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-44 h-28 sm:w-52 sm:h-32 rounded-sm overflow-hidden"
          >
            <img
              src={src}
              alt="Build in progress"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
