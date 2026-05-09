"use client";

import { useState } from "react";
import { EXPERIENCE, ExpEntry } from "@/lib/data";

const GROUPS = [
  { k: "all",          label: "All" },
  { k: "work",         label: "Work" },
  { k: "education",    label: "Education" },
  { k: "hackathons",   label: "Hackathons" },
  { k: "leadership",   label: "Leadership" },
  { k: "volunteering", label: "Volunteering" },
];

export function ExpPage() {
  const [filt, setFilt] = useState("all");

  const items: ExpEntry[] = filt === "all"
    ? [
        ...EXPERIENCE.work,
        ...EXPERIENCE.education,
        ...EXPERIENCE.hackathons,
        ...EXPERIENCE.leadership,
        ...EXPERIENCE.volunteering,
      ]
    : EXPERIENCE[filt] ?? [];

  return (
    <div className="exp-page">
      <div className="exp-head">
        <h1>Experience</h1>
        <p>Roles, gigs, and the occasional hackathon trophy.</p>
      </div>

      <div className="exp-tabs">
        {GROUPS.map((g) => (
          <button
            key={g.k}
            className={"exp-pill" + (filt === g.k ? " on" : "")}
            onClick={() => setFilt(g.k)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <ul className="tl2">
        {items.map((it, i) => (
          <li key={i} className="tl2-item">
            <div className="tl2-rail">
              <div className="tl2-dot" />
              <div className="tl2-line" />
            </div>
            <div className="tl2-card">
              <div className="tl2-row">
                <span className="tl2-role">{it.role}</span>
                {it.current && <span className="tl2-now">Now</span>}
              </div>
              <div className="tl2-co">{it.company}</div>
              <div className="tl2-meta">
                <span>{it.kind}</span><span className="sep">·</span>
                <span>{it.loc}</span><span className="sep">·</span>
                <span>{it.start} → {it.end}</span><span className="sep">·</span>
                <span>{it.duration}</span>
              </div>
              <ul className="tl2-bullets">
                {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {it.stack.length > 0 && (
                <div className="tl2-stack">
                  {it.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
