"use client";

import { useState, useEffect, useRef } from "react";
import { Ico } from "./primitives";

type Tab = "feed" | "exp" | "proj" | "chat" | "profile";

const CMDS: { label: string; a: Tab }[] = [
  { label: "Go to Feed",       a: "feed" },
  { label: "Go to Experience", a: "exp" },
  { label: "Go to Projects",   a: "proj" },
  { label: "Go to Ask AI",     a: "chat" },
  { label: "Go to Profile",    a: "profile" },
];

export function CommandPalette({
  open, onClose, onNav,
}: {
  open: boolean;
  onClose: () => void;
  onNav: (k: Tab) => void;
}) {
  const [q, setQ] = useState("");
  const inp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) { setQ(""); inp.current?.focus(); }
  }, [open]);

  const matched = q
    ? CMDS.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()))
    : CMDS;

  if (!open) return null;

  return (
    <div className="cmdk2" onClick={onClose}>
      <div className="cmdk2-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk2-input-wrap">
          <Ico name="search" style={{ width: 15, height: 15 }} />
          <input
            ref={inp}
            className="cmdk2-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages…"
          />
        </div>
        <ul className="cmdk2-list">
          {matched.map((c, i) => (
            <li key={i} onClick={() => { onNav(c.a); onClose(); }}>
              <span className="cmdk2-kind">nav</span>
              <span className="cmdk2-label">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
