"use client";

import { useState, useEffect, useRef } from "react";
import { POSTS, TAGS } from "@/lib/data";
import { Icon } from "./primitives";

interface Command {
  kind: string;
  label: string;
  sub?: string;
  action: () => void;
}

export function CommandPalette({
  open,
  onClose,
  onNav,
  onOpen,
  onTag,
}: {
  open: boolean;
  onClose: () => void;
  onNav: (k: string) => void;
  onOpen: (id: string) => void;
  onTag: (tag: string) => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setQ("");
  }, [open]);

  const commands: Command[] = [
    { kind: "nav", label: "Go to Index",    action: () => onNav("home") },
    { kind: "nav", label: "Go to Feed",     action: () => onNav("feed") },
    { kind: "nav", label: "Go to Media",    action: () => onNav("media") },
    { kind: "nav", label: "Go to Projects", action: () => onNav("projects") },
    { kind: "nav", label: "Go to Work",     action: () => onNav("work") },
    { kind: "nav", label: "Go to About",    action: () => onNav("about") },
    ...POSTS.map((p) => ({
      kind: "post",
      label: p.title ?? ((p.caption ?? "").slice(0, 60) + "…"),
      sub: `${p.type} · ${p.date} · ${p.tags.join(" ")}`,
      action: () => onOpen(p.id),
    })),
    ...TAGS.map((t) => ({
      kind: "tag",
      label: `Filter by #${t.tag}`,
      sub: `${t.count} posts`,
      action: () => onTag(t.tag),
    })),
  ];

  const matched = q
    ? commands.filter((c) => (c.label + " " + (c.sub ?? "")).toLowerCase().includes(q.toLowerCase()))
    : commands;

  if (!open) return null;

  return (
    <div className="cmdk" onClick={onClose}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input-wrap">
          <Icon name="search" className="ico-xs" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts, tags, pages…"
            className="cmdk-input"
          />
          <kbd className="mono">esc</kbd>
        </div>
        <ul className="cmdk-list">
          {matched.slice(0, 12).map((c, i) => (
            <li key={i} onClick={() => { c.action(); onClose(); }}>
              <span className={`cmdk-kind cmdk-kind-${c.kind} mono`}>{c.kind}</span>
              <span className="cmdk-label">{c.label}</span>
              {c.sub && <span className="cmdk-sub mono">{c.sub}</span>}
            </li>
          ))}
          {matched.length === 0 && (
            <li className="cmdk-empty mono">no results — try &quot;loomshell&quot; or &quot;lisbon&quot;</li>
          )}
        </ul>
        <div className="cmdk-foot mono">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
