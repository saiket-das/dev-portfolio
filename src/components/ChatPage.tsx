"use client";

import { useState, useRef, useEffect } from "react";
import { PROFILE, EXPERIENCE, PROJECTS, CHAT_SUGGESTIONS } from "@/lib/data";
import { Ico, Av, Verified } from "./primitives";

interface Msg {
  role: "user" | "ai";
  content: string;
  sources?: string[];
}

function pickSources(q: string): string[] {
  const lc = q.toLowerCase();
  const out: string[] = [];
  if (/(stack|tech|language|skill|tool)/.test(lc)) out.push("Profile · Stack");
  if (/(hackathon|treehacks|hack|prize|win)/.test(lc))
    out.push("Experience · Hackathons");
  if (/(project|build|loomshell|frame|atlas)/.test(lc)) out.push("Projects");
  if (/(intern|work|job|role|career|plinth|moma|ta)/.test(lc))
    out.push("Experience · Work");
  if (/(photo|film|camera|pentax|dark)/.test(lc)) out.push("Profile · Hobbies");
  if (/(avail|hire|contract|free)/.test(lc)) out.push("Profile · Status");
  return out.slice(0, 3);
}

export function ChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (streamRef.current)
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
  }, [msgs, busy]);

  const send = async (text?: string) => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", content: q }]);
    setBusy(true);
    try {
      await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
      const reply = generateReply(q);
      setMsgs((m) => [
        ...m,
        { role: "ai", content: reply, sources: pickSources(q) },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-head">
        <Av size={36} label="S" />
        <div className="chat-head-id">
          <div className="chat-head-name">
            Ask Saiket&apos;s portfolio <Verified />
          </div>
          <div className="chat-head-sub">
            <span className="chat-online" /> AI · grounded in this site&apos;s
            content
          </div>
        </div>
        {msgs.length > 0 && (
          <button className="chat-clear" onClick={() => setMsgs([])}>
            Clear
          </button>
        )}
      </div>

      <div className="chat-stream" ref={streamRef}>
        {msgs.length === 0 ? (
          <div className="chat-empty">
            <div className="chat-empty-mark">
              <Ico name="bot" />
            </div>
            <h2>Ask anything about Saiket</h2>
            <p>
              Grounded in this site&apos;s profile, projects, and experience.
              Try one of these:
            </p>
            <div className="chat-suggest">
              {CHAT_SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          msgs.map((m, i) => (
            <div key={i} className={"chat-bubble chat-bubble-" + m.role}>
              <div className="chat-bubble-row">
                {m.role === "ai" && <Av size={28} label="AI" />}
                <div>
                  <div className="chat-bubble-text">{m.content}</div>
                  {m.sources && m.sources.length > 0 && (
                    <div className="chat-source-row">
                      {m.sources.map((s) => (
                        <span key={s} className="chat-source">
                          ↳ {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        {busy && (
          <div className="chat-bubble chat-bubble-ai">
            <div className="chat-bubble-row">
              <Av size={28} label="AI" />
              <div className="chat-bubble-text">
                <div className="chat-typing">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-wrap">
        {msgs.length > 0 && msgs.length < 6 && (
          <div className="chat-input-quick">
            {CHAT_SUGGESTIONS.slice(0, 4).map((s) => (
              <button key={s} onClick={() => send(s)} disabled={busy}>
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="chat-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Saiket's work, stack, or availability…"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
          />
          <button
            className="chat-input-send"
            disabled={busy || !input.trim()}
            onClick={() => send()}
          >
            <Ico name="send" style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </div>
  );
}

function generateReply(q: string): string {
  const lc = q.toLowerCase();
  if (/(stack|tech|language)/.test(lc))
    return `Saiket's primary stack is TypeScript, Python, React, and Rust. He also works with Postgres, pgvector, ffmpeg, and WebGL. On the tools side: Neovim, Ghostty, and a well-loved Pentax K1000.`;
  if (/(avail|hire|contract|intern)/.test(lc))
    return `${PROFILE.status}. He's joining Plinth Labs as a SWE Intern (retrieval team) starting May 2026. For freelance photography, he's available year-round.`;
  if (/(hackathon|treehacks|framesync)/.test(lc))
    return `Top 8 / 312 at TreeHacks 2026 with FrameSync — a real-time roll preview tool for undeveloped 35mm film. Also won Best Hardware Hack at MHacks 2025 with DocketCam.`;
  if (/(loomshell)/.test(lc))
    return `Loomshell is a multi-cam timelapse stitcher with audio-reactive sync. Written in Rust, it hit 1.0k GitHub stars. Current version is v0.3 with 8.4k downloads.`;
  if (/(intern|plinth|work|job)/.test(lc))
    return `Saiket is joining Plinth Labs as a SWE Intern on the retrieval team (May–Aug 2026). Previously he was an install developer at MoMA PS1 and a TA for Algorithms at UMich.`;
  if (/(photo|film|camera)/.test(lc))
    return `Saiket shoots 35mm and medium format — mostly on a Pentax K1000. He develops his own film and has shot 11 weddings plus editorial work for music and literary magazines.`;
  if (/(now|working|building)/.test(lc)) {
    const focus =
      PROFILE.now.leaning ?? PROFILE.now.reading ?? PROFILE.now.listening ?? "";
    const focusText = focus ? `, focusing on ${focus}` : "";
    return `Right now: building ${PROFILE.now.building}${focusText}, and shooting ${PROFILE.now.shooting}.`;
  }
  return `Saiket is a CS student at UMich (graduating May 2026), software developer, and film photographer. He builds dev tooling, ships open-source projects, and shoots 35mm. Ask me something more specific!`;
}
