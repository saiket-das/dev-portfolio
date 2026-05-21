"use client";

import { useState, useEffect } from "react";
import { PROFILE, HEATMAP_WEEKS } from "@/lib/data";
import { Ico, Av, Verified } from "./primitives";

const SUBS = [
  { k: "about", label: "About" },
  { k: "stack", label: "Stack" },
  { k: "activity", label: "Activity" },
  { k: "links", label: "Links" },
];

export function ProfPage({ onTab }: { onTab: (k: string) => void }) {
  const [sub, setSub] = useState("about");
  const totalContribs = HEATMAP_WEEKS.flat().reduce((a, b) => a + b, 0);
  const currentYear = new Date().getFullYear();
  const contributionYears = Array.from(
    { length: Math.max(1, currentYear - 2021 + 1) },
    (_, index) => 2021 + index,
  );
  const [year, setYear] = useState(currentYear);

  function extractGithubUsername(): string | null {
    const gh = PROFILE.links.find((l) => l.kind === "github");
    if (!gh || !gh.url) return null;
    // URL formats: https://github.com/username or git@github.com:username
    try {
      const u = new URL(gh.url);
      return u.pathname.replace(/^\//, "").replace(/\/$/, "");
    } catch (e) {
      // fallback parsing
      const m = gh.url.match(/github.com[:\/](.+?)\/?$/);
      return m ? m[1] : null;
    }
  }
  const ghUser = extractGithubUsername();
  const [contribWeeks, setContribWeeks] = useState<any[] | null>(null);
  const [contribTotal, setContribTotal] = useState<number | null>(null);
  const [contribLoading, setContribLoading] = useState(false);
  const [contribError, setContribError] = useState<string | null>(null);

  useEffect(() => {
    if (!ghUser || sub !== "activity") return;
    setContribLoading(true);
    setContribError(null);
    setContribWeeks(null);
    setContribTotal(null);
    fetch(`/api/contribs?user=${encodeURIComponent(ghUser)}&year=${year}`)
      .then(async (r) => {
        const txt = await r.text();
        if (!r.ok) {
          // try parse json error
          try {
            const j = JSON.parse(txt);
            throw new Error(j.error || j.message || JSON.stringify(j));
          } catch (e) {
            throw new Error(txt.slice(0, 1000));
          }
        }
        return JSON.parse(txt);
      })
      .then((data) => {
        setContribTotal(typeof data.total === "number" ? data.total : null);
        setContribWeeks(data.weeks || null);
      })
      .catch((err) => {
        console.error("contribs fetch error", err);
        setContribError(err.message || String(err));
      })
      .finally(() => setContribLoading(false));
  }, [ghUser, year, sub]);
  return (
    <div className="prof-page">
      <div className="prof-cover">
        <div className="prof-cover-grid" />
      </div>

      <div className="prof-id">
        <div className="prof-id-row">
          <Av size={104} label="S" />
          <div className="prof-id-text">
            <h1 className="prof-id-name">{PROFILE.name}</h1>
            <div className="prof-id-handle">
              {PROFILE.handle} · {PROFILE.pronouns}
            </div>
          </div>
          <button className="prof-cta-2">Message</button>
          <button className="prof-cta">Follow</button>
        </div>
      </div>

      <div className="prof-bio">
        <p>{PROFILE.longBio}</p>
        <div className="prof-meta-row">
          <span>
            <Ico name="mappin" style={{ width: 14, height: 14 }} />{" "}
            {PROFILE.location}
          </span>
          <span>
            <Ico name="cal" style={{ width: 14, height: 14 }} />{" "}
            {PROFILE.joined}
          </span>
          <span>
            <Ico name="link" style={{ width: 14, height: 14 }} /> saiketdas.dev
          </span>
        </div>
        <div className="prof-counts">
          <span>
            <b>{PROFILE.followers}</b> followers
          </span>
          <span>
            <b>{PROFILE.following}</b> following
          </span>
          <span>
            <b>23</b> shipped
          </span>
        </div>
      </div>

      <div className="prof-tabs">
        {SUBS.map((s) => (
          <button
            key={s.k}
            className={"prof-tab" + (sub === s.k ? " on" : "")}
            onClick={() => setSub(s.k)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {sub === "about" && (
        <>
          <div className="prof-section">
            <h3>Pinned</h3>
            <div className="prof-pinned">
              <div className="prof-pin">
                <span className="prof-pin-mark">PROJECT</span>
                <h4>Loomshell v0.3</h4>
                <p>Multi-cam timelapse stitcher · 1.0k stars · Rust</p>
              </div>
              <div className="prof-pin">
                <span className="prof-pin-mark">CASE STUDY</span>
                <h4>An atlas of every frame</h4>
                <p>CLIP search across 12k personal photos · 5-part thread</p>
              </div>
              <div className="prof-pin">
                <span className="prof-pin-mark">HACKATHON</span>
                <h4>FrameSync — TreeHacks &apos;26</h4>
                <p>Top 8 / 312 · real-time roll preview</p>
              </div>
              <div className="prof-pin">
                <span className="prof-pin-mark">CAREER</span>
                <h4>Plinth Labs · Eng Intern</h4>
                <p>Retrieval infra · May → Aug 2026</p>
              </div>
            </div>
          </div>

          <div className="prof-section">
            <h3>Hobbies</h3>
            <div className="prof-skills">
              {PROFILE.hobbies.map((h) => (
                <span key={h} className="prof-skill">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="prof-section">
            <h3>Setup</h3>
            <ul className="prof-setup">
              {PROFILE.setup.map((s) => (
                <li key={s.k}>
                  <span className="prof-setup-k">{s.k}</span>
                  <span className="prof-setup-v">{s.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {sub === "stack" && (
        <div className="prof-section">
          <h3>Languages &amp; tools</h3>
          <div className="stack-bars">
            {PROFILE.stack.map((s) => (
              <div key={s.tag} className="stack-bar">
                <span className="stack-bar-name">{s.tag}</span>
                <span className="stack-bar-track">
                  <i
                    className="stack-bar-fill"
                    style={{ width: `${s.weight * 100}%` }}
                  />
                </span>
                <span className="stack-bar-pct">
                  {Math.round(s.weight * 100)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {sub === "activity" && (
        <div className="prof-section">
          <h3>Contributions</h3>
          <div className="prof-heat">
            <div className="prof-heat-head">
              <div>
                <div className="prof-heat-stat">
                  {contribLoading
                    ? "Loading contributions…"
                    : contribTotal !== null
                      ? `${contribTotal} contributions in ${year}`
                      : `Contributions in ${year}`}
                </div>
                <div
                  style={{
                    color: "var(--ink-mute)",
                    fontSize: 12,
                    marginTop: 3,
                  }}
                >
                  Public + private repos
                </div>
              </div>
              <div className="prof-heat-yr">
                {contributionYears.map((y) => (
                  <button
                    key={y}
                    type="button"
                    className={y === year ? "on" : ""}
                    onClick={() => setYear(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {ghUser ? (
              <div>
                {contribLoading && <div>Loading contributions…</div>}
                {contribError && (
                  <div style={{ color: "var(--err)" }}>
                    Error loading contributions — showing GitHub image fallback.
                  </div>
                )}
                {contribWeeks ? (
                  <div className="heat heat-lg">
                    {contribWeeks.map((week, w) => (
                      <div key={w} className="heat-week">
                        {week.map((day: any, d: number) => (
                          <div
                            key={`${w}-${d}`}
                            className="heat-cell"
                            title={`${day.contributionCount} — ${day.date}`}
                            style={{
                              backgroundColor: day.color || "transparent",
                            }}
                            data-date={day.date}
                            data-count={day.contributionCount}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="prof-gh-embed">
                    <img
                      src={`https://github.com/users/${ghUser}/contributions?from=${year}-01-01&to=${year}-12-31`}
                      alt={`GitHub contributions for ${ghUser} (${year})`}
                      style={{ width: "100%" }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="heat heat-lg">
                {HEATMAP_WEEKS.map((week, w) => (
                  <div key={w} className="heat-week">
                    {week.map((lvl, d) => (
                      <div
                        key={d}
                        className="heat-cell"
                        data-l={lvl}
                        title={`${lvl} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}

            <div className="heat-foot">
              <span>52 weeks</span>
              <div className="heat-legend">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} className="heat-cell" data-l={l} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {sub === "links" && (
        <div className="prof-section">
          <h3>Elsewhere</h3>
          <div className="prof-links-grid">
            {PROFILE.links.map((l) => (
              <a
                key={l.kind}
                href={l.url}
                className="prof-link"
                onClick={(e) => e.preventDefault()}
              >
                <Ico name={l.kind} />
                <span>{l.label}</span>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
