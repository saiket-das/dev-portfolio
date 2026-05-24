"use client";

import { PROFILE } from "@/lib/data";
import { Ico, Av } from "./primitives";

type Tab = "feed" | "exp" | "proj" | "chat" | "profile";

const NAV_ITEMS: { k: Tab; label: string; icon: string; badge?: string }[] = [
  { k: "feed", label: "Feed", icon: "feed" },
  { k: "exp", label: "Experience", icon: "briefcase" },
  { k: "proj", label: "Projects", icon: "layers" },
  { k: "chat", label: "Ask AI", icon: "bot", badge: "WIP" },
  { k: "profile", label: "Profile", icon: "user" },
];

export function Sidebar({
  tab,
  onTab,
  onCmdK,
}: {
  tab: Tab;
  onTab: (k: Tab) => void;
  onCmdK: () => void;
}) {
  return (
    <aside className="sb2">
      <div className="sb2-id">
        <Av
          size={48}
          label={PROFILE.name ? PROFILE.name[0] : "S"}
          src={(PROFILE as any).avatar}
        />
        <div>
          <div className="sb2-name">{PROFILE.name}</div>
          <div className="sb2-handle">{PROFILE.handle}</div>
        </div>
      </div>

      <div className="sb2-bio">{PROFILE.bio}</div>

      <div className="sb2-status">
        <span className="sb2-dot" />
        <span>{PROFILE.status}</span>
      </div>

      <button className="sb2-search" onClick={onCmdK}>
        <Ico name="search" style={{ width: 15, height: 15 }} />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      <nav className="sb2-nav">
        {NAV_ITEMS.map((it) => (
          <button
            key={it.k}
            className={"sb2-link" + (tab === it.k ? " sb2-link-on" : "")}
            onClick={() => onTab(it.k)}
          >
            <Ico name={it.icon} />
            <span>{it.label}</span>
            {it.badge && <span className="badge">{it.badge}</span>}
          </button>
        ))}
      </nav>

      <button className="sb2-resume">
        <span>Download Resume</span>
        <Ico name="resume" />
      </button>

      <div className="sb2-foot">
        <div className="sb2-social">
          {(["github", "linkedin", "ig", "mail"] as const).map((k) => {
            const link = PROFILE.links.find((item) => item.kind === k);
            return (
              <a
                key={k}
                href={link?.url ?? "#"}
                title={k}
                target={link?.url && link.url !== "#" ? "_blank" : undefined}
                rel={
                  link?.url && link.url !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <Ico name={k} />
              </a>
            );
          })}
        </div>
        <div className="sb2-foot-meta">
          <span>v2.0</span>
          <span>© 2026</span>
        </div>
      </div>
    </aside>
  );
}

export function TopBar({ tab, onCmdK }: { tab: Tab; onCmdK: () => void }) {
  const titles: Record<Tab, string> = {
    feed: "Feed",
    exp: "Experience",
    proj: "Projects",
    chat: "Ask AI",
    profile: "Profile",
  };
  return (
    <div className="topbar">
      <Av size={32} label="S" />
      <h1>{titles[tab] ?? "Saiket"}</h1>
      <button className="topbar-search" onClick={onCmdK}>
        <Ico name="search" />
      </button>
    </div>
  );
}

export function BotNav({ tab, onTab }: { tab: Tab; onTab: (k: Tab) => void }) {
  return (
    <nav className="botnav">
      <div className="botnav-inner">
        {NAV_ITEMS.map((it) => (
          <button
            key={it.k}
            className={tab === it.k ? "on" : ""}
            onClick={() => onTab(it.k)}
          >
            <Ico name={it.icon} />
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
