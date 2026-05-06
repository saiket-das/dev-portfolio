"use client";

import { useState } from "react";
import { Placeholder, Icon } from "./primitives";

const MEDIA_ITEMS = [
  { id: "m01", label: "tram 28 / alfama",         h: 280, kind: "photo" },
  { id: "m02", label: "blue tile / lapa",         h: 360, kind: "photo" },
  { id: "m03", label: "ferry crew",               h: 220, kind: "photo" },
  { id: "m04", label: "atlas demo / 6 cam",       h: 420, kind: "video" },
  { id: "m05", label: "alley light / 00:14",      h: 520, kind: "photo" },
  { id: "m06", label: "fish market / 06:14",      h: 300, kind: "photo" },
  { id: "m07", label: "loomshell preview",        h: 240, kind: "video" },
  { id: "m08", label: "mirror self-portrait",     h: 380, kind: "photo" },
  { id: "m09", label: "miradouro evening",        h: 260, kind: "photo" },
  { id: "m10", label: "atlas UI / panning",       h: 320, kind: "video" },
  { id: "m11", label: "rua do alecrim, raining",  h: 460, kind: "photo" },
  { id: "m12", label: "subway window self",       h: 200, kind: "photo" },
  { id: "m13", label: "darkroom / paper test",    h: 360, kind: "photo" },
  { id: "m14", label: "loomshell terminal",       h: 280, kind: "video" },
];

type Filter = "all" | "photo" | "video";

export function MediaPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? MEDIA_ITEMS : MEDIA_ITEMS.filter((i) => i.kind === filter);

  return (
    <div className="media-page">
      <header className="media-head">
        <div className="media-head-mark mono">/ MEDIA · {visible.length} files</div>
        <h1 className="serif">Everything I&apos;ve pointed a lens or webcam at.</h1>
        <p className="media-lede">Untitled, undated, mostly unedited. Drag to wander.</p>
        <div className="media-filter">
          {(["all", "photo", "video"] as Filter[]).map((k) => (
            <button
              key={k}
              className={"media-f mono" + (filter === k ? " media-f-on" : "")}
              onClick={() => setFilter(k)}
            >
              {k === "all" ? "All" : k === "photo" ? "Photography" : "Videography"}
              <span className="media-f-count">
                {k === "all" ? MEDIA_ITEMS.length : MEDIA_ITEMS.filter((i) => i.kind === k).length}
              </span>
            </button>
          ))}
        </div>
      </header>

      <div className="masonry">
        {visible.map((it) => (
          <div key={it.id} className="masonry-item" style={{ height: it.h }}>
            <Placeholder label={it.label} accent={it.kind === "video" ? "var(--accent)" : null} />
            {it.kind === "video" && (
              <div className="masonry-play"><Icon name="play" className="ico-xs" /></div>
            )}
            <div className="masonry-meta mono">
              <span>{it.id.toUpperCase()}</span>
              <span>{it.kind}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
