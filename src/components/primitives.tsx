"use client";

import React from "react";

export function Placeholder({
  label = "image",
  aspect,
  accent,
  className = "",
  style = {},
}: {
  label?: string;
  aspect?: string;
  accent?: string | null;
  className?: string;
  style?: React.CSSProperties;
}) {
  const stripeBg = `repeating-linear-gradient(135deg, var(--ph-a) 0 1px, var(--ph-b) 1px 14px)`;
  return (
    <div
      className={"ph " + className}
      style={{ ...style, aspectRatio: aspect, background: stripeBg }}
    >
      <span className="ph-tag mono">{label}</span>
      {accent ? <i className="ph-dot" style={{ background: accent }} /> : null}
    </div>
  );
}

export function Asterism() {
  return <span className="aster" aria-hidden="true">⁘</span>;
}

export function Chip({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  count?: number;
}) {
  return (
    <button
      type="button"
      className={"chip mono" + (active ? " chip-on" : "")}
      onClick={onClick}
    >
      <span className="chip-hash">#</span>
      {label}
      {count != null && <span className="chip-count">{count}</span>}
    </button>
  );
}

const ICONS: Record<string, React.ReactElement> = {
  home:    <svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" /></svg>,
  feed:    <svg viewBox="0 0 24 24"><path d="M4 5h16M4 12h16M4 19h10" /></svg>,
  media:   <svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>,
  proj:    <svg viewBox="0 0 24 24"><path d="M3 7h6l2 2h10v11H3z"/></svg>,
  about:   <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>,
  search:  <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>,
  heart:   <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 2 0 3.5 1 4.5 2.5C13 6 14.5 5 16.5 5c3.5 0 6 3.5 4.5 7-2 4.5-9 9-9 9z"/></svg>,
  bubble:  <svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-12 7L4 21l1.5-4.5A8 8 0 1 1 21 12z"/></svg>,
  bookmark:<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z"/></svg>,
  share:   <svg viewBox="0 0 24 24"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14"/></svg>,
  arrow:   <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  back:    <svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>,
  play:    <svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>,
  github:  <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-2c-3 .5-3.5-1-3.5-1-.5-1-1-1.5-1-1.5-1-.7 0-.7 0-.7 1 0 1.5 1 1.5 1 1 1.5 2.5 1 3 .8 0-.7.4-1 .7-1.3-2.2-.2-4.5-1-4.5-5 0-1 .4-2 1-2.5-.1-.3-.5-1.4 0-2.8 0 0 1 0 2.5 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.5-1 2.5-1 2.5-1 .5 1.4.1 2.5 0 2.8.6.5 1 1.5 1 2.5 0 4-2.3 4.8-4.5 5 .4.3.7 1 .7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>,
  work:    <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/><path d="M2 12h20"/></svg>,
};

export function Icon({ name, className = "icon" }: { name: string; className?: string }) {
  const el = ICONS[name];
  if (!el) return null;
  return React.cloneElement(el, {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as React.SVGProps<SVGSVGElement>);
}

export function Avatar({
  size = 36,
  style: handleStyle = "monogram",
}: {
  size?: number;
  style?: string;
}) {
  if (handleStyle === "ascii") {
    return (
      <div className="avatar avatar-ascii mono" style={{ width: size, height: size, fontSize: size * 0.3 }}>
        {"[ k ]"}
      </div>
    );
  }
  if (handleStyle === "ring") {
    return (
      <div className="avatar avatar-ring" style={{ width: size, height: size }}>
        <div className="avatar-inner" style={{ fontSize: size * 0.4 }}>K</div>
      </div>
    );
  }
  return (
    <div className="avatar avatar-mono" style={{ width: size, height: size, fontSize: size * 0.4 }}>K</div>
  );
}
