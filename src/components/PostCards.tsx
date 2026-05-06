"use client";

import { Post } from "@/lib/data";
import { Icon, Placeholder } from "./primitives";

function ThoughtPost({ post }: { post: Post }) {
  return (
    <div className="thought">
      <span className="thought-mark serif">"</span>
      <p className="thought-body">{post.caption}</p>
      <div className="thought-foot mono">{post.date} · thought</div>
    </div>
  );
}

function CodePost({ post }: { post: Post }) {
  return (
    <div className="codepost">
      <div className="code-head mono">
        <span className="code-dot" />
        <span>{post.lang}</span>
        <span className="code-spc" />
        <span className="code-date">{post.date}</span>
      </div>
      <pre className="code-body mono"><code>{post.code}</code></pre>
      <div className="code-cap">{post.caption}</div>
    </div>
  );
}

function PhotoPost({ post }: { post: Post }) {
  const aspectStr = post.aspect === 2 ? "3/4" : post.aspect === 3 ? "4/3" : "1";
  return (
    <div className="photo">
      <Placeholder label={post.media?.[0]?.label ?? "photo"} aspect={aspectStr} />
      <div className="photo-cap">
        <h3 className="serif">{post.title}</h3>
        <p>{post.caption}</p>
      </div>
    </div>
  );
}

function PhotosetPost({ post }: { post: Post }) {
  return (
    <div className="photoset">
      <div className="photoset-grid">
        {(post.media ?? []).map((m, i) => (
          <Placeholder key={i} label={m.label} aspect="1" />
        ))}
      </div>
      <div className="photoset-cap">
        <span className="photoset-count mono">{(post.media ?? []).length} frames · {post.date}</span>
        <h3 className="serif">{post.title}</h3>
        <p>{post.caption}</p>
      </div>
    </div>
  );
}

function VideoPost({ post }: { post: Post }) {
  return (
    <div className="video">
      <Placeholder label={post.media?.[0]?.label ?? "video"} aspect="4/3" />
      <div className="video-overlay">
        <div className="video-play"><Icon name="play" /></div>
        <span className="video-dur mono">{post.duration}</span>
      </div>
      <div className="video-cap">
        <h3 className="serif">{post.title}</h3>
        <p>{post.caption}</p>
      </div>
    </div>
  );
}

function ProjectPost({ post }: { post: Post }) {
  return (
    <div className="project">
      <div className="project-frame">
        <div className="project-frame-head mono">
          <i /><i /><i />
          <span>{post.repo ?? post.subtitle}</span>
        </div>
        <div className="project-frame-body">
          <Placeholder
            label={(post.title?.toLowerCase() ?? "project") + " / preview"}
            aspect={post.aspect === 2 ? "3/4" : "16/10"}
          />
        </div>
      </div>
      <div className="project-cap">
        <div className="project-tag mono">PROJECT · {post.subtitle}</div>
        <h3 className="serif">{post.title}</h3>
        <p>{post.caption}</p>
        {post.stack && (
          <div className="project-stack mono">
            {post.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function ThreadPost({ post }: { post: Post }) {
  return (
    <div className="thread-card">
      <Placeholder label={post.media?.[0]?.label ?? "thread"} aspect="3/4" />
      <div className="thread-overlay">
        <span className="thread-tag mono">CASE STUDY · {post.threadSteps} parts</span>
        <h3 className="serif">{post.title}</h3>
        <p>{post.caption}</p>
        <span className="thread-cta mono">read thread <Icon name="arrow" className="ico-xs" /></span>
      </div>
    </div>
  );
}

export function PostCard({
  post,
  onOpen,
  onTag,
  density,
}: {
  post: Post;
  onOpen: (id: string) => void;
  onTag: (tag: string) => void;
  density: string;
}) {
  const handleTag = (t: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTag(t);
  };
  const compact = density === "compact";

  const inner = (() => {
    switch (post.type) {
      case "thought":  return <ThoughtPost post={post} />;
      case "code":     return <CodePost post={post} />;
      case "photo":    return <PhotoPost post={post} />;
      case "photoset": return <PhotosetPost post={post} />;
      case "video":    return <VideoPost post={post} />;
      case "project":  return <ProjectPost post={post} />;
      case "thread":   return <ThreadPost post={post} />;
      default:         return null;
    }
  })();

  return (
    <article
      className={`post post-${post.type} post-size-${post.size ?? "reg"}`}
      onClick={() => onOpen(post.id)}
    >
      {inner}
      <footer className="post-foot">
        <div className="post-tags">
          {post.tags.slice(0, compact ? 1 : 3).map((t) => (
            <button key={t} className="tag mono" onClick={(e) => handleTag(t, e)}>
              #{t}
            </button>
          ))}
        </div>
        <div className="post-meta mono">
          <span>{post.likes}</span>
          <Icon name="heart" className="ico-xs" />
          <span className="post-meta-sep">·</span>
          <span>{post.comments}</span>
          <Icon name="bubble" className="ico-xs" />
        </div>
      </footer>
    </article>
  );
}
