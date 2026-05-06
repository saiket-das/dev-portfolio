"use client";

import { PROFILE, TAGS, HIGHLIGHTS } from "@/lib/data";
import { Avatar, Chip } from "./primitives";

export function RightRail({
  activeTag,
  onTag,
  avatarStyle,
}: {
  activeTag: string | null;
  onTag: (tag: string | null) => void;
  avatarStyle: string;
}) {
  return (
    <aside className="rail">
      <div className="rail-card rail-profile">
        <div className="rail-profile-cover">
          <div className="rail-cover-stripe" />
          <div className="rail-cover-coords mono">38.7223° N · 9.1393° W</div>
        </div>
        <Avatar size={64} style={avatarStyle} />
        <div className="rail-profile-name serif">{PROFILE.name}</div>
        <div className="rail-profile-role mono">{PROFILE.role}</div>
        <p className="rail-profile-bio">{PROFILE.bio}</p>
        <div className="rail-profile-stats">
          {PROFILE.stats.map((s) => (
            <div key={s.k} className="rail-stat">
              <div className="rail-stat-v serif">{s.v}</div>
              <div className="rail-stat-k mono">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rail-card">
        <div className="rail-card-head">
          <span className="rail-card-title mono">⟶ NOW</span>
          <span className="rail-card-meta mono">updated 2h ago</span>
        </div>
        <ul className="now-list">
          <li><span className="now-k mono">building</span><span className="now-v">{PROFILE.now.building}</span></li>
          <li><span className="now-k mono">reading</span><span className="now-v">{PROFILE.now.reading}</span></li>
          <li><span className="now-k mono">listening</span><span className="now-v">{PROFILE.now.listening}</span></li>
          <li><span className="now-k mono">shooting</span><span className="now-v">{PROFILE.now.shooting}</span></li>
        </ul>
      </div>

      <div className="rail-card">
        <div className="rail-card-head">
          <span className="rail-card-title mono">⟶ HIGHLIGHTS</span>
        </div>
        <ul className="hi-list">
          {HIGHLIGHTS.map((h, i) => (
            <li key={i} className="hi-item">
              <span className="hi-kind mono">{h.kind}</span>
              <span className="hi-label serif">{h.label}</span>
              <span className="hi-detail">{h.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rail-card">
        <div className="rail-card-head">
          <span className="rail-card-title mono">⟶ FILTER BY TAG</span>
          {activeTag && (
            <button className="rail-clear mono" onClick={() => onTag(null)}>clear</button>
          )}
        </div>
        <div className="rail-tags">
          {TAGS.map((t) => (
            <Chip
              key={t.tag}
              label={t.tag}
              count={t.count}
              active={activeTag === t.tag}
              onClick={() => onTag(activeTag === t.tag ? null : t.tag)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
