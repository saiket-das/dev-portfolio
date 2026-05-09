"use client";

import { PROFILE, PROJECTS } from "@/lib/data";
import { Ph } from "./primitives";

type Tab = "feed" | "exp" | "proj" | "chat" | "profile";

export function RightRail({ onTab }: { onTab: (k: Tab) => void }) {
  return (
    <aside className="rail2">
      <div className="rcard">
        <div className="rcard-head"><span>Now</span><span className="more">5h ago</span></div>
        <ul className="now-list">
          <li><span className="now-k">building</span><span className="now-v">{PROFILE.now.building}</span></li>
          <li><span className="now-k">reading</span><span className="now-v">{PROFILE.now.reading}</span></li>
          <li><span className="now-k">listening</span><span className="now-v">{PROFILE.now.listening}</span></li>
          <li><span className="now-k">shooting</span><span className="now-v">{PROFILE.now.shooting}</span></li>
        </ul>
      </div>

      <div className="rcard">
        <div className="rcard-head">
          <span>Stack</span>
          <button className="more" onClick={() => onTab("profile")}>more</button>
        </div>
        <div className="stack-bars">
          {PROFILE.stack.slice(0, 6).map((s) => (
            <div key={s.tag} className="stack-bar">
              <span className="stack-bar-name">{s.tag}</span>
              <span className="stack-bar-track">
                <i className="stack-bar-fill" style={{ width: `${s.weight * 100}%` }} />
              </span>
              <span className="stack-bar-pct">{Math.round(s.weight * 100)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rcard">
        <div className="rcard-head"><span>Quick stats</span></div>
        <div className="rstats">
          <div className="rstat"><div className="rstat-v">23</div><div className="rstat-k">shipped</div></div>
          <div className="rstat"><div className="rstat-v">84</div><div className="rstat-k">rolls</div></div>
          <div className="rstat"><div className="rstat-v">1.0k</div><div className="rstat-k">stars</div></div>
          <div className="rstat"><div className="rstat-v">3</div><div className="rstat-k">hackathons</div></div>
        </div>
      </div>

      <div className="rcard">
        <div className="rcard-head"><span>Featured</span></div>
        <div className="feat-card">
          <Ph label="loomshell / preview" />
          <div className="feat-meta">
            <h4>{PROJECTS[0].name} v0.3</h4>
            <p>{PROJECTS[0].desc}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
