import { PORTRAITS } from "@/lib/portraits.generated";

// Silhouette fallback used when we don't have a real portrait for a slug.
// Slug hash picks bg/fg swatches so the grid isn't monotone.

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const BG_SWATCHES = ["#d9d3c7", "#cdc6ba", "#c7c0b2", "#ddd6c9", "#d2cab9"];
const FG_SWATCHES = ["#7a7367", "#9a9388", "#52493f", "#3a362f", "#8b8377"];

export interface PortraitProps {
  slug: string;
  size?: number;
  className?: string;
}

export function Portrait({ slug, size = 96, className = "" }: PortraitProps) {
  const ext = PORTRAITS[slug];
  if (ext) {
    return (
      <img
        src={`/portraits/${slug}.${ext}`}
        alt=""
        width={size}
        height={size}
        className={className}
        style={{
          objectFit: "cover",
          filter: "grayscale(100%) contrast(1.02)",
        }}
      />
    );
  }

  const h = hashSlug(slug);
  const bg = BG_SWATCHES[h % BG_SWATCHES.length];
  const fg = FG_SWATCHES[(h >> 3) % FG_SWATCHES.length];

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      aria-hidden
      style={{ filter: "grayscale(100%) contrast(1.02)" }}
    >
      <rect width="96" height="96" rx="6" fill={bg} />
      <circle cx="48" cy="38" r="14" fill={fg} />
      <path
        d="M18 90 C 18 70 32 60 48 60 C 64 60 78 70 78 90 Z"
        fill={fg}
      />
    </svg>
  );
}
