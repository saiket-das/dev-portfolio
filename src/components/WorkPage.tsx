"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/lib/data";

export function WorkPage() {
  const [active, setActive] = useState(EXPERIENCE[0].id);
  const job = EXPERIENCE.find((e) => e.id === active)!;

  return (
    <div className="work">
      <header className="work-head">
        <div className="work-mark mono">/ WORK · CV · {EXPERIENCE.length} positions</div>
        <h1 className="serif">Where I&apos;ve actually shown up.</h1>
        <p className="work-lede">
          Roles I&apos;ve held, in reverse chronological order. Click a row to expand the receipts.
        </p>
        <div className="work-summary mono">
          <span><b className="serif">{EXPERIENCE.filter((e) => e.current).length}</b> currently active</span>
          <span className="work-sep">·</span>
          <span><b className="serif">{EXPERIENCE.filter((e) => !e.current).length}</b> archived</span>
          <span className="work-sep">·</span>
          <span>est. {EXPERIENCE[EXPERIENCE.length - 1].start.split(" ")[1]}</span>
        </div>
      </header>

      <div className="work-grid">
        <ol className="work-rail">
          {EXPERIENCE.map((e, i) => (
            <li
              key={e.id}
              className={"work-row" + (active === e.id ? " work-row-on" : "")}
              onClick={() => setActive(e.id)}
            >
              <div className="work-row-rail">
                <span className={`work-row-dot work-row-dot-${e.accent}`} />
                {i < EXPERIENCE.length - 1 && <span className="work-row-line" />}
              </div>
              <div className="work-row-body">
                <div className="work-row-head">
                  <span className="work-row-co serif">{e.company}</span>
                  {e.current && <span className="work-row-now mono">● now</span>}
                </div>
                <div className="work-row-role">{e.role}</div>
                <div className="work-row-meta mono">
                  <span>{e.start}</span>
                  <span className="work-arrow">→</span>
                  <span>{e.end}</span>
                  <span className="work-row-sep">·</span>
                  <span>{e.duration}</span>
                  <span className="work-row-sep">·</span>
                  <span>{e.kind}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <aside className="work-detail">
          <div className={`work-detail-card work-accent-${job.accent}`}>
            <div className="work-detail-head">
              <span className="work-detail-kind mono">{job.kind.toUpperCase()}</span>
              <span className="work-detail-loc mono">{job.location}</span>
            </div>
            <h2 className="serif">{job.role}</h2>
            <div className="work-detail-co serif">
              at <em>{job.company}</em>
            </div>
            <div className="work-detail-dates mono">
              {job.start} — {job.end} <span className="work-row-sep">·</span> {job.duration}
            </div>

            <p className="work-detail-summary">{job.summary}</p>

            <div className="work-section-mark mono">⟶ what I did</div>
            <ul className="work-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>
                  <span className="work-bullet-num mono">0{i + 1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="work-section-mark mono">⟶ stack</div>
            <div className="work-stack">
              {job.stack.map((s) => (
                <span key={s} className="work-stack-i mono">{s}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
