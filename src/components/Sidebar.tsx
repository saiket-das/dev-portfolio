"use client";

import { PROFILE } from "@/lib/data";
import { Icon, Avatar } from "./primitives";

const NAV_ITEMS = [
  { k: "home", label: "Index", icon: "home" },
  { k: "feed", label: "Feed", icon: "feed" },
  { k: "media", label: "Media", icon: "media" },
  { k: "projects", label: "Projects", icon: "proj" },
  { k: "work", label: "Work", icon: "work" },
  { k: "about", label: "About", icon: "about" },
];

export function Sidebar({
  route,
  onNav,
  onCmdK,
  avatarStyle,
}: {
  route: string;
  onNav: (k: string) => void;
  onCmdK: () => void;
  avatarStyle: string;
}) {
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <div className="sb-brand-mark serif">k.</div>
        <div className="sb-brand-text">
          <div className="sb-brand-name serif">{PROFILE.name}</div>
          <div className="sb-brand-handle mono">{PROFILE.handle}</div>
        </div>
      </div>

      <div className="sb-status mono">
        <span className="sb-dot" />
        <span>Available · May–Aug</span>
      </div>

      <nav className="sb-nav">
        {NAV_ITEMS.map((it) => (
          <button
            key={it.k}
            className={"sb-link" + (route === it.k ? " sb-link-on" : "")}
            onClick={() => onNav(it.k)}
          >
            <Icon name={it.icon} />
            <span className="serif">{it.label}</span>
            {route === it.k && <span className="sb-tick">●</span>}
          </button>
        ))}
      </nav>

      <button className="sb-search mono" onClick={onCmdK}>
        <Icon name="search" className="ico-xs" />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      <div className="sb-foot">
        <div className="sb-foot-section mono">Elsewhere</div>
        <div className="sb-foot-links">
          {PROFILE.links.map((l) => (
            <a key={l.kind} href={l.url} className="sb-foot-link mono">
              <span className="sb-foot-arrow">↗</span>
              {l.label}
            </a>
          ))}
        </div>
        <div className="sb-foot-meta mono">
          <span>v3.2 · {new Date().getFullYear()}</span>
          <span>made in vim</span>
        </div>
      </div>
    </aside>
  );
}
