"use client";

import { useMemo } from "react";
import { POSTS, PROFILE } from "@/lib/data";
import { PostCard } from "./PostCards";
import { Avatar, Placeholder, Asterism, Icon } from "./primitives";

function Bento({
  onOpen,
  avatarStyle,
}: {
  onOpen: (id: string) => void;
  avatarStyle: string;
}) {
  const featured = POSTS.find((p) => p.id === "p07")!;
  return (
    <section className="bento">
      <div className="bento-hero">
        <div className="bento-hero-mark mono">
          <span className="dot-live" /> LIVE FROM LISBON · 38.72°N
        </div>
        <h1 className="bento-hero-h serif">
          I make <em>software</em> and <em>photographs</em>,
          <br />
          mostly at the <span className="hi-accent">seam</span> between them.
        </h1>
        <div className="bento-hero-foot">
          <div className="bento-hero-handle mono">
            <Avatar size={28} style={avatarStyle} />
            <span>{PROFILE.handle}</span>
            <span className="dot-sep">/</span>
            <span>est. 2021</span>
          </div>
          <div className="bento-hero-cta mono">
            <button>read about me</button>
            <button className="primary">
              latest work <Icon name="arrow" className="ico-xs" />
            </button>
          </div>
        </div>
      </div>

      <div className="bento-now">
        <div className="bento-card-head mono">
          <span className="dot-pulse" />
          NOW WORKING ON
        </div>
        <div className="bento-now-title serif">
          Loomshell <span className="bento-ver mono">v0.3</span>
        </div>
        <p className="bento-now-body">
          A Rust CLI that stitches N webcam feeds into one syncopated timelapse.
          Audio-reactive in the next release.
        </p>
        <div className="bento-now-progress">
          <div className="bento-now-bar">
            <i style={{ width: "62%" }} />
          </div>
          <span className="mono">v0.3 · 62%</span>
        </div>
      </div>

      <div className="bento-feat" onClick={() => onOpen(featured.id)}>
        <Placeholder
          label="atlas / 12k photos"
          aspect="3/2"
          className="bento-feat-img"
        />
        <div className="bento-feat-tag mono">FEATURED CASE STUDY</div>
        <h3 className="bento-feat-title serif">
          An atlas of every frame I&apos;ve ever shot.
        </h3>
        <div className="bento-feat-cta mono">
          5 parts · 6 min read <Icon name="arrow" className="ico-xs" />
        </div>
      </div>

      <div className="bento-stats">
        <div className="bento-card-head mono">⟶ THE NUMBERS</div>
        <div className="bento-stats-grid">
          <div>
            <b className="serif">23</b>
            <span className="mono">things shipped</span>
          </div>
          <div>
            <b className="serif">84</b>
            <span className="mono">rolls of film</span>
          </div>
          <div>
            <b className="serif">12k</b>
            <span className="mono">frames archived</span>
          </div>
          <div>
            <b className="serif">3</b>
            <span className="mono">years in CS</span>
          </div>
        </div>
      </div>

      <div className="bento-marquee">
        <div className="bento-marquee-track mono">
          <span>RUST</span>
          <span>·</span>
          <span>CLIP</span>
          <span>·</span>
          <span>PORTRA 400</span>
          <span>·</span>
          <span>PGVECTOR</span>
          <span>·</span>
          <span>K1000</span>
          <span>·</span>
          <span>WEBGL</span>
          <span>·</span>
          <span>SLOW FILM</span>
          <span>·</span>
          <span>FFMPEG</span>
          <span>·</span>
          <span>RAG</span>
          <span>·</span>
          <span>DARKROOM</span>
          <span>·</span>
          <span>RUST</span>
          <span>·</span>
          <span>CLIP</span>
          <span>·</span>
          <span>PORTRA 400</span>
          <span>·</span>
          <span>PGVECTOR</span>
          <span>·</span>
          <span>K1000</span>
          <span>·</span>
          <span>WEBGL</span>
          <span>·</span>
        </div>
      </div>
    </section>
  );
}

export function HomePage({
  density,
  activeTag,
  onOpen,
  onTag,
  avatarStyle,
}: {
  density: string;
  activeTag: string | null;
  onOpen: (id: string) => void;
  onTag: (tag: string | null) => void;
  avatarStyle: string;
}) {
  const filtered = useMemo(
    () => (activeTag ? POSTS.filter((p) => p.tags.includes(activeTag)) : POSTS),
    [activeTag],
  );

  return (
    <div className="home">
      <Bento onOpen={onOpen} avatarStyle={avatarStyle} />

      <div className="feed-head">
        <div className="feed-title">
          <h2 className="serif">{activeTag ? "filtered by" : "the feed"}</h2>
          {activeTag && <span className="feed-tag mono">#{activeTag}</span>}
          <Asterism />
          <span className="feed-count mono">{filtered.length} posts</span>
        </div>
        <div className="feed-tools mono">
          <button className="feed-tool feed-tool-on">grid</button>
          <span>·</span>
          <button className="feed-tool">list</button>
          <span>·</span>
          <button className="feed-tool">latest</button>
        </div>
      </div>

      <div className={`feed feed-${density}`}>
        {filtered.map((p) => (
          <PostCard
            key={p.id}
            post={p}
            density={density}
            onOpen={onOpen}
            onTag={(t) => onTag(t)}
          />
        ))}
      </div>
    </div>
  );
}
