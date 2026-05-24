"use client";

import { PROJECTS } from "@/lib/data";
import { Ph } from "./primitives";

function openProjectLinks(project: (typeof PROJECTS)[number]) {
  const primaryLink =
    project.links.find((link) => link.k === "link") ?? project.links[0];
  if (primaryLink) window.open(primaryLink.l, "_blank", "noopener,noreferrer");
}

export function ProjPage() {
  return (
    <div className="proj-page">
      <div className="proj-head">
        <h1>Projects</h1>
        <p>Things I've shipped, in approximate order of pride.</p>
      </div>
      <div className="proj-list">
        {PROJECTS.map((p, i) => (
          <article
            key={`${p.id}-${i}`}
            className="proj-card proj-card-clickable"
            role="button"
            tabIndex={0}
            onClick={() => openProjectLinks(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openProjectLinks(p);
              }
            }}
          >
            <Ph label={p.cover} />
            <div className="proj-card-body">
              <div className="proj-card-row">
                <span className="proj-card-name">{p.name}</span>
                <span className="proj-card-year">{p.year}</span>
                <span className="proj-card-status" data-s={p.status}>
                  {p.status}
                </span>
              </div>
              <p className="proj-card-desc">{p.desc}</p>
              <div className="proj-card-bot">
                <div className="proj-card-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                {p.metrics.map((m) => (
                  <span key={m.k} className="proj-card-metric">
                    <b>{m.v}</b>
                    {m.k}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
