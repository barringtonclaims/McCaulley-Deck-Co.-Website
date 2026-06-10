interface TestimonialCardProps {
  name: string;
  project?: string;
  stars?: number;
  verified?: boolean;
  text: string;
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-timber"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  name,
  project,
  stars,
  verified,
  text,
}: TestimonialCardProps) {
  return (
    <div className="py-8 border-b border-paper-dark last:border-b-0">
      <div className="flex items-center gap-3">
        {stars && <StarRating count={stars} />}
        {verified && (
          <span className="text-[10px] tracking-wide uppercase text-bronze/80 border border-bronze/30 px-2 py-0.5 rounded-full">
            Verified
          </span>
        )}
      </div>
      <p className="text-charcoal/70 leading-relaxed italic mt-3">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-charcoal/70 text-sm font-medium">{name}</p>
        {project && (
          <>
            <span className="text-charcoal/20">&middot;</span>
            <p className="text-charcoal/50 text-sm">{project}</p>
          </>
        )}
      </div>
    </div>
  );
}
