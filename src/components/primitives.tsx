"use client";

import React from "react";

const ICONS: Record<string, React.ReactElement> = {
  home: (
    <svg viewBox="0 0 24 24">
      <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  feed: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 18l9 5 9-5" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M9 14h.01M15 14h.01M12 4v4M9 18h6" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 2 0 3.5 1 4.5 2.5C13 6 14.5 5 16.5 5c3.5 0 6 3.5 4.5 7-2 4.5-9 9-9 9z" />
    </svg>
  ),
  bubble: (
    <svg viewBox="0 0 24 24">
      <path d="M21 12a8 8 0 0 1-12 7L4 21l1.5-4.5A8 8 0 1 1 21 12z" />
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24">
      <path d="M6 3h12v18l-6-4-6 4z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24">
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  ),
  more: (
    <svg viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="18" cy="12" r="1.4" />
    </svg>
  ),
  mappin: (
    <svg viewBox="0 0 24 24">
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24">
      <path d="M10 14a4 4 0 0 0 5.7 0l3.6-3.6a4 4 0 0 0-5.7-5.7L12 6" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3.6 3.6a4 4 0 0 0 5.7 5.7L12 18" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-2c-3 .5-3.5-1-3.5-1-.5-1-1-1.5-1-1.5-1-.7 0-.7 0-.7 1 0 1.5 1 1.5 1 1 1.5 2.5 1 3 .8 0-.7.4-1 .7-1.3-2.2-.2-4.5-1-4.5-5 0-1 .4-2 1-2.5-.1-.3-.5-1.4 0-2.8 0 0 1 0 2.5 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.5-1 2.5-1 2.5-1 .5 1.4.1 2.5 0 2.8.6.5 1 1.5 1 2.5 0 4-2.3 4.8-4.5 5 .4.3.7 1 .7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M5 6H3v3a3 3 0 0 0 3 3M19 6h2v3a3 3 0 0 1-3 3" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5-9 9" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />
    </svg>
  ),
};

export function Ico({
  name,
  className = "icon",
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const svg = ICONS[name];
  if (!svg) return null;
  return React.cloneElement(svg, {
    className,
    style,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as React.SVGProps<SVGSVGElement>);
}

export function Av({
  size = 40,
  label = "S",
  src,
}: {
  size?: number;
  label?: string;
  src?: string;
}) {
  const [imgOk, setImgOk] = React.useState(true);

  React.useEffect(() => {
    // reset image error state when src changes
    setImgOk(true);
  }, [src]);

  return (
    <div
      className="av"
      style={{
        width: `var(--prof-av-size, ${size}px)`,
        height: `var(--prof-av-size, ${size}px)`,
        fontSize: `calc(var(--prof-av-size, ${size}px) * 0.42)`,
      }}
    >
      {src && src.startsWith("/") && imgOk ? (
        <img
          className="av-img"
          src={src}
          alt={label}
          onError={() => setImgOk(false)}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

export function Ph({
  label = "image",
  style,
  className = "",
}: {
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const isImage = label.startsWith("/");
  return (
    <div className={"ph " + className} style={style}>
      {isImage ? (
        <img className="ph-img" src={label} alt={label} />
      ) : (
        <span className="ph-tag">{label}</span>
      )}
    </div>
  );
}

export function Verified() {
  return (
    <span className="post2-verified" title="Verified portfolio">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 1.5l2.4 2.5 3.4-.6.6 3.4L21 9l-1.6 2.4.6 3.4-3.4.6L14.4 18 12 16.4 9.6 18l-2.4-2.6-3.4-.6.6-3.4L1.5 9l2.7-2.2-.6-3.4 3.4.6z" />
        <path
          d="M8 12l3 3 5-5"
          fill="none"
          stroke="var(--bg)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
