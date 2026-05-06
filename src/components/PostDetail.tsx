"use client";

import { POSTS, THREAD_P07 } from "@/lib/data";
import { Icon, Placeholder, Chip, Asterism } from "./primitives";

export function PostDetailPage({
  id,
  onBack,
  onTag,
}: {
  id: string;
  onBack: () => void;
  onTag: (tag: string) => void;
}) {
  const post = POSTS.find((p) => p.id === id);
  if (!post) return null;
  const thread = id === "p07" ? THREAD_P07 : null;

  return (
    <div className="detail">
      <button className="detail-back mono" onClick={onBack}>
        <Icon name="back" className="ico-xs" /> back to feed
      </button>

      <header>
        <div className="detail-meta mono">
          <span>{post.type.toUpperCase()}</span>
          <span>·</span>
          <span>{post.date}, 2025</span>
          <span>·</span>
          <span>{post.likes} likes · {post.comments} comments</span>
        </div>
        <h1 className="detail-title serif">
          {post.title ?? (post.type === "thought" ? "A thought." : "Untitled")}
        </h1>
        <p className="detail-lede">{post.caption}</p>
        <div className="detail-tags">
          {post.tags.map((t) => (
            <Chip key={t} label={t} onClick={() => onTag(t)} />
          ))}
        </div>
      </header>

      <div className="detail-hero">
        <Placeholder
          label={post.media?.[0]?.label ?? `${post.type} / hero`}
          aspect="16/10"
        />
      </div>

      {thread ? (
        <div className="thread-list">
          {thread.map((s, i) => (
            <section key={i} className="thread-step">
              <div className="thread-step-rail">
                <span className="thread-step-num mono">{s.label}</span>
                <span className="thread-step-line" />
              </div>
              <div className="thread-step-body">
                <h2 className="serif">{s.title}</h2>
                <p>{s.body}</p>
                {i === 1 && (
                  <pre className="thread-code mono"><code>{`embedding = clip.encode_image(img)\nresults = pg.query(\n  "<-> :v LIMIT 24",\n  v=embedding\n)`}</code></pre>
                )}
                {i === 2 && (
                  <div className="thread-step-img">
                    <Placeholder label="UMAP projection / 2d cluster" aspect="16/9" />
                  </div>
                )}
                {i === 3 && (
                  <div className="thread-step-img">
                    <Placeholder label="atlas UI / panning viewport" aspect="16/9" />
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="detail-body">
          <p>This is a thread view scaffold. The full multi-step breakdown lives on the case-study post — try the &quot;How I built a search engine for my photos&quot; thread from the feed for the complete pattern.</p>
          <p>{post.caption}</p>
        </div>
      )}

      <footer className="detail-foot">
        <Asterism />
        <div className="detail-foot-actions mono">
          <button><Icon name="heart" className="ico-xs" /> like ({post.likes})</button>
          <button><Icon name="bubble" className="ico-xs" /> reply</button>
          <button><Icon name="bookmark" className="ico-xs" /> save</button>
          <button><Icon name="share" className="ico-xs" /> share</button>
        </div>
        <div className="detail-foot-end mono">— end of thread —</div>
      </footer>
    </div>
  );
}
