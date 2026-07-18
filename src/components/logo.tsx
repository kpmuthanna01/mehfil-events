// Brand logo mark — a self-contained SVG so it renders identically on light
// (ivory) and dark (emerald) backgrounds. A four-point "celebration spark" on a
// deep-emerald tile with a gold hairline: festive, elegant and secular.
export function Logo({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Mehfil Events logo"
      className={className}
    >
      <rect
        x="1.25"
        y="1.25"
        width="45.5"
        height="45.5"
        rx="12"
        fill="#064e3b"
        stroke="#d6a419"
        strokeWidth="1.5"
      />
      {/* Large spark */}
      <path
        d="M20 11 C20.6 19.4 21.6 20.4 30 21 C21.6 21.6 20.6 22.6 20 31 C19.4 22.6 18.4 21.6 10 21 C18.4 20.4 19.4 19.4 20 11 Z"
        fill="#d6a419"
      />
      {/* Small spark */}
      <path
        d="M33 25 C33.35 30 33.9 30.55 39 30.9 C33.9 31.25 33.35 31.8 33 36.8 C32.65 31.8 32.1 31.25 27 30.9 C32.1 30.55 32.65 30 33 25 Z"
        fill="#e8c15a"
      />
    </svg>
  );
}
