"use client";

import { FEED, PROFILE, PROJECTS } from "@/lib/data";
import { Ph } from "./primitives";

type Tab = "feed" | "exp" | "proj" | "chat" | "profile";

export function RightRail({ onTab }: { onTab: (k: Tab) => void }) {
  const shipped = PROJECTS.length;
  const rolls = FEED.filter((post) => post.type === "media").reduce(
    (total, post) => total + (post.media?.length ?? 0),
    0,
  );
  const stars = "1.0k";
  const hackathons = FEED.filter((post) => post.type === "hackathon").length;

  return (
    <aside className="rail2">
      <div className="rcard">
        <div className="rcard-head">
          <span>Now</span>
          <span className="more">5h ago</span>
        </div>
        <ul className="now-list">
          <li>
            <span className="now-k">building</span>
            <span className="now-v">{PROFILE.now.building}</span>
          </li>
          {PROFILE.now.leaning ? (
            <li>
              <span className="now-k">leaning</span>
              <span className="now-v">{PROFILE.now.leaning}</span>
            </li>
          ) : null}
          <li>
            <span className="now-k">shooting</span>
            <span className="now-v">{PROFILE.now.shooting}</span>
          </li>
        </ul>
      </div>

      <div className="rcard">
        <div className="rcard-head">
          <span>Stack</span>
          <button className="more" onClick={() => onTab("profile")}>
            more
          </button>
        </div>
        <div className="rail-stack-groups">
          {PROFILE.stackSections.slice(0, 3).map((group) => (
            <div key={group.label} className="rail-stack-group">
              <div className="rail-stack-label">{group.label}</div>
              <div className="rail-stack-items">{group.items.join(", ")}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rcard">
        <div className="rcard-head">
          <span>Quick stats</span>
        </div>
        <div className="rstats">
          <div className="rstat">
            <div className="rstat-v">{shipped}</div>
            <div className="rstat-k">shipped</div>
          </div>
          <div className="rstat">
            <div className="rstat-v">{rolls}</div>
            <div className="rstat-k">rolls</div>
          </div>
          <div className="rstat">
            <div className="rstat-v">{stars}</div>
            <div className="rstat-k">stars</div>
          </div>
          <div className="rstat">
            <div className="rstat-v">{hackathons}</div>
            <div className="rstat-k">hackathons</div>
          </div>
        </div>
      </div>

      <div className="rcard">
        <div className="rcard-head">
          <span>Featured</span>
        </div>
        <div className="feat-card">
          <Ph
            label={
              PROFILE.featured?.cover ?? "/images/projects/smart-plug-hero.png"
            }
          />
          <div className="feat-meta">
            <h4>{PROFILE.featured?.project ?? PROJECTS[0].name}</h4>
            <p>{PROFILE.featured?.preview ?? PROJECTS[0].desc}</p>
            {PROFILE.featured ? (
              <small>{PROFILE.featured.caption}</small>
            ) : null}
          </div>
        </div>
      </div>
    </aside>
  );
}
