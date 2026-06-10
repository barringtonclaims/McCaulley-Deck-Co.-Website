/**
 * McCaulley Deck Co. brand lockup.
 *
 * Geometry of the mark is traced from the brand package (Mark Transparent 720.png):
 * a 320-unit rounded square of five 52-unit boards on a 72-unit pitch, rotated 45°
 * so the thin clipped board lands on the lower-right corner.
 *
 * variant "light" = for paper/light backgrounds (charcoal wordmark, bronze sub-line)
 * variant "dark"  = for charcoal/photo backgrounds (paper wordmark, timber sub-line)
 */

interface LogoProps {
  variant?: "light" | "dark";
  stacked?: boolean;
  className?: string;
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 460"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(230 230) rotate(-45)" fill="#D29A55">
        {/* top board - rounded outer corners */}
        <path d="M-144 -160 h288 a16 16 0 0 1 16 16 v36 h-320 v-36 a16 16 0 0 1 16 -16 z" />
        <rect x="-160" y="-88" width="320" height="52" />
        <rect x="-160" y="-16" width="320" height="52" />
        <rect x="-160" y="56" width="320" height="52" />
        {/* bottom board - clipped thin by the square edge, rounded outer corners */}
        <path d="M-160 128 h320 v16 a16 16 0 0 1 -16 16 h-288 a16 16 0 0 1 -16 -16 v-16 z" />
      </g>
    </svg>
  );
}

export default function Logo({
  variant = "light",
  stacked = false,
  className = "",
}: LogoProps) {
  const nameColor = variant === "light" ? "text-charcoal" : "text-paper";
  const subColor = variant === "light" ? "text-bronze" : "text-timber";

  // Stacked: mark above centered wordmark (hero / yard-sign style)
  if (stacked) {
    return (
      <span
        className={`inline-flex flex-col items-center ${className}`}
        role="img"
        aria-label="McCaulley Deck Co."
      >
        <BrandMark className="w-[4.5em] h-[4.5em]" />
        <span
          className={`font-bold tracking-tight leading-none text-[2.6em] mt-[0.3em] ${nameColor}`}
        >
          McCaulley
        </span>
        <span
          className={`font-semibold uppercase tracking-[0.42em] text-[1em] mt-[0.9em] ml-[0.42em] ${subColor}`}
        >
          Deck Co.
        </span>
      </span>
    );
  }

  // Horizontal lockup: mark left, wordmark right (header / footer)
  return (
    <span
      className={`inline-flex items-center gap-[0.55em] ${className}`}
      role="img"
      aria-label="McCaulley Deck Co."
    >
      <BrandMark className="w-[2.9em] h-[2.9em] -my-[0.45em] shrink-0" />
      <span className="flex flex-col items-start">
        <span
          className={`font-bold tracking-tight leading-none text-[1.5em] ${nameColor}`}
        >
          McCaulley
        </span>
        <span
          className={`font-semibold uppercase tracking-[0.32em] text-[0.6em] mt-[0.45em] ${subColor}`}
        >
          Deck Co.
        </span>
      </span>
    </span>
  );
}
