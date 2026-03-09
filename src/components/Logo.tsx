interface LogoProps {
  variant?: "navy" | "white";
  badge?: boolean;
  className?: string;
}

export default function Logo({
  variant = "navy",
  badge = false,
  className = "",
}: LogoProps) {
  const color = variant === "navy" ? "#1B2A4A" : "white";

  // Badge version: full border + text (for hero, footer)
  if (badge) {
    return (
      <svg
        viewBox="0 0 800 400"
        className={className}
        role="img"
        aria-label="McCaulley Deck Co."
      >
        <rect
          x="80" y="40" width="640" height="320" rx="20" ry="20"
          fill="none" stroke={color} strokeWidth="6"
        />
        <rect
          x="92" y="52" width="616" height="296" rx="14" ry="14"
          fill="none" stroke={color} strokeWidth="2"
        />
        <text
          x="400" y="195" textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontWeight="600" fontSize="98" fill={color} letterSpacing="1"
        >
          McCaulley
        </text>
        <text
          x="400" y="275" textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontWeight="500" fontSize="72" fill={color} letterSpacing="12"
        >
          DECK CO.
        </text>
      </svg>
    );
  }

  // Text-only version: just the wordmark (for header, compact uses)
  return (
    <svg
      viewBox="100 100 600 220"
      className={className}
      role="img"
      aria-label="McCaulley Deck Co."
    >
      <text
        x="400" y="195" textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontWeight="600" fontSize="98" fill={color} letterSpacing="1"
      >
        McCaulley
      </text>
      <text
        x="400" y="275" textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontWeight="500" fontSize="72" fill={color} letterSpacing="12"
      >
        DECK CO.
      </text>
    </svg>
  );
}
