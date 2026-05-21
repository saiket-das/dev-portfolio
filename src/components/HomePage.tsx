"use client";

import { useState } from "react";
import { FEED, FeedPost } from "@/lib/data";
import { Ico, Av, Ph, Verified } from "./primitives";

const FILTERS = [
  { k: "all", label: "All" },
  { k: "career", label: "Career" },
  { k: "project", label: "Projects" },
  { k: "media", label: "Photography" },
  { k: "thought", label: "Thoughts" },
  { k: "code", label: "Code" },
  { k: "hackathon", label: "Hackathons" },
  { k: "thread", label: "Threads" },
];

function PostBody({ post }: { post: FeedPost }) {
  return (
    <>
      {post.title && <h3 className="post2-title">{post.title}</h3>}
      {post.body && <p className="post2-body">{post.body}</p>}

      {post.type === "code" && post.code && (
        <div className="atch-code">
          <div className="atch-code-head">
            <span className="atch-code-dot" />
            <span className="mono">{post.lang}</span>
          </div>
          <pre>
            <code>{post.code}</code>
          </pre>
        </div>
      )}

      {post.type === "media" && post.media && (
        <div className="atch-media" data-n={String(post.media.length)}>
          {post.media.map((m, i) => (
            <Ph key={i} label={m.label} />
          ))}
        </div>
      )}

      {post.type === "project" && post.project && (
        <div className="atch-project">
          <Ph label={post.project.cover} />
          <div className="atch-project-meta">
            <span className="atch-project-name">{post.project.name}</span>
            <p className="atch-project-desc">{post.project.desc}</p>
            <div className="atch-project-stack">
              {post.project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            {post.project.stats && (
              <div className="atch-project-stats">
                {post.project.stats.map((s) => (
                  <div key={s.k}>
                    <div className="atch-project-stat-v">{s.v}</div>
                    <div className="atch-project-stat-k">{s.k}</div>
                  </div>
                ))}
              </div>
            )}
            {post.project.links && (
              <div className="atch-project-links">
                {post.project.links.map((l, i) => (
                  <a
                    key={`${l.k}-${i}`}
                    className="atch-project-link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Ico
                      name={l.k === "github" ? "github" : "link"}
                      style={{ width: 14, height: 14 }}
                    />
                    <span>{l.l}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {post.type === "thread" && post.cover && (
        <div className="atch-project">
          <Ph label={post.cover} />
        </div>
      )}

      {post.type === "hackathon" &&
        post.hack &&
        (post.hack.url ? (
          <a
            href={post.hack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="atch-hack"
          >
            <div className="atch-hack-row">
              <span className="atch-hack-name">{post.hack.name}</span>
              <span className="atch-hack-pl">{post.hack.placement}</span>
            </div>
            <div className="atch-hack-meta">
              <span>w/ {post.hack.teammates.join(", ")}</span>
              <span>·</span>
              <span>{post.hack.stack.join(" + ")}</span>
            </div>
          </a>
        ) : (
          <div className="atch-hack">
            <div className="atch-hack-row">
              <span className="atch-hack-name">{post.hack.name}</span>
              <span className="atch-hack-pl">{post.hack.placement}</span>
            </div>
            <div className="atch-hack-meta">
              <span>w/ {post.hack.teammates.join(", ")}</span>
              <span>·</span>
              <span>{post.hack.stack.join(" + ")}</span>
            </div>
          </div>
        ))}

      {post.type === "career" && post.company && (
        <div className="atch-career">
          <div className="atch-career-logo">{post.company.charAt(0)}</div>
          <div>
            <div className="atch-career-name">{post.company}</div>
            <div className="atch-career-role">
              {post.position ?? "Software Engineering Intern · Starting soon"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Post2({
  post,
  liked,
  saved,
  onLike,
  onSave,
  onTag,
}: {
  post: FeedPost;
  liked: boolean;
  saved: boolean;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onTag: (t: string) => void;
}) {
  const kindLabel: Record<string, string> = {
    career: "career",
    project: "project",
    thread: "thread",
    media: "photos",
    thought: "thought",
    code: "code",
    hackathon: "hackathon",
    milestone: "milestone",
  };

  return (
    <article className={"post2" + (post.pinned ? " post2-pinned" : "")}>
      {post.pinned && (
        <div className="post2-pinmark">
          <Ico name="bookmark" style={{ width: 12, height: 12 }} /> Pinned
        </div>
      )}
      <header className="post2-head">
        <Av size={42} label="S" />
        <div className="post2-id">
          <div className="post2-id-row">
            <span className="post2-name">Saiket Das</span>
            <Verified />
            <span className="post2-handle">@saiket.das</span>
            <span className="post2-dot">·</span>
            <span className="post2-when">{post.when}</span>
          </div>
          <span className="post2-kind">
            {post.icon && (
              <Ico name={post.icon} style={{ width: 11, height: 11 }} />
            )}
            {kindLabel[post.type] ?? post.type}
          </span>
        </div>
        <button className="post2-overflow" aria-label="More">
          <Ico name="more" />
        </button>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <PostBody post={post} />
      </div>

      {post.tags.length > 0 && (
        <div className="post2-tags">
          {post.tags.map((t) => (
            <button key={t} className="post2-tag" onClick={() => onTag(t)}>
              #{t}
            </button>
          ))}
        </div>
      )}

      <div className="post2-acts">
        <button
          className={"post2-act" + (liked ? " liked" : "")}
          onClick={() => onLike(post.id)}
        >
          <Ico name="heart" />
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>
        <button className="post2-act">
          <Ico name="bubble" />
          <span>{post.replies}</span>
        </button>
        <button className="post2-act">
          <Ico name="share" />
          <span>{post.shares}</span>
        </button>
        <button
          className={"post2-act" + (saved ? " saved" : "")}
          onClick={() => onSave(post.id)}
        >
          <Ico name="bookmark" />
        </button>
      </div>
    </article>
  );
}

export function FeedPage({
  likes,
  saves,
  onLike,
  onSave,
}: {
  likes: Record<string, boolean>;
  saves: Record<string, boolean>;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? FEED
      : FEED.filter(
          (p) =>
            p.type === filter ||
            (filter === "career" && p.type === "milestone"),
        );

  const pinned = filtered.filter((p) => p.pinned);
  const rest = filtered.filter((p) => !p.pinned);

  const onTag = (t: string) => setFilter(t);

  return (
    <div className="feed-wrap">
      <h1>Feed</h1>
      <p className="feed-sub">
        Everything I've been up to — career updates, projects, thoughts, and
        photos in one timeline.
      </p>

      <div className="composer">
        <Av size={42} label="S" />
        <div className="composer-text">
          <span className="composer-text-line">
            What are you working on today?
          </span>
          <div className="composer-acts">
            <button className="composer-act">
              <Ico name="image" style={{ width: 13, height: 13 }} /> Photo
            </button>
            <button className="composer-act">
              <Ico name="code" style={{ width: 13, height: 13 }} /> Code
            </button>
            <button className="composer-act">
              <Ico name="layers" style={{ width: 13, height: 13 }} /> Project
            </button>
            <button className="composer-act">
              <Ico name="briefcase" style={{ width: 13, height: 13 }} /> Update
            </button>
          </div>
        </div>
      </div>

      <div className="feed-tabs">
        {FILTERS.map((f) => (
          <button
            key={f.k}
            className={"feed-tab" + (filter === f.k ? " on" : "")}
            onClick={() => setFilter(f.k)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="feed2">
        {[...pinned, ...rest].map((p) => (
          <Post2
            key={p.id}
            post={p}
            onTag={onTag}
            liked={!!likes[p.id]}
            saved={!!saves[p.id]}
            onLike={onLike}
            onSave={onSave}
          />
        ))}
      </div>
    </div>
  );
}
