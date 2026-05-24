"use client";

import { useState, useRef, useEffect } from "react";
import { PROFILE, EXPERIENCE, PROJECTS, CHAT_SUGGESTIONS } from "@/lib/data";
import { Ico, Av, Verified } from "./primitives";

interface Msg {
  role: "user" | "ai";
  content: string;
  sources?: string[];
}

const replyCache = new Map<string, { content: string; sources: string[] }>();

function normalizeQuery(q: string) {
  return q.trim().toLowerCase().replace(/\s+/g, " ");
}

function joinList(items: string[]) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function pickSources(q: string): string[] {
  const lc = q.toLowerCase();
  const out: string[] = [];
  if (/(stack|tech|language|skill|tool)/.test(lc)) out.push("Profile · Stack");
  if (/(hackathon|deep tech|technothon|hack|prize|win)/.test(lc))
    out.push("Experience · Hackathons");
  if (/(project|build|smart energy|zyra|healynx|gamehub|heritage)/.test(lc))
    out.push("Projects");
  if (
    /(intern|work|job|role|career|infai|ajkermenu|moving image|volunteer)/.test(
      lc,
    )
  )
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
      const key = normalizeQuery(q);
      const cached = replyCache.get(key);
      if (!cached) {
        const reply = generateReply(q);
        const sources = pickSources(q);
        replyCache.set(key, { content: reply, sources });
        await new Promise((r) => setTimeout(r, 180 + Math.random() * 180));
        setMsgs((m) => [...m, { role: "ai", content: reply, sources }]);
      } else {
        setMsgs((m) => [
          ...m,
          { role: "ai", content: cached.content, sources: cached.sources },
        ]);
      }
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
    return `Saiket's core stack is ${joinList(
      PROFILE.stack.slice(0, 12).map((s) => s.tag),
    )}. On the tools side: Neovim, Ghostty, and a Pentax K1000.`;
  if (/(avail|hire|contract|intern)/.test(lc))
    return `${PROFILE.status}. His bio says he's available for internships and contract work.`;
  if (/(hackathon|deep tech|technothon)/.test(lc))
    return `His active hackathon work includes ${joinList(
      EXPERIENCE.hackathons.map((h) => h.role),
    )}. Healynx did not make finals, and Smart Energy Platform reached the preliminary round.`;
  if (/(project|build|smart energy|zyra|healynx|gamehub|heritage)/.test(lc))
    return `Recent projects include ${joinList(
      PROJECTS.slice(0, 4).map((p) => p.name),
    )}. The portfolio also includes GameHub and a 3D Colonial House archive.`;
  if (
    /(intern|work|job|role|career|infai|ajkermenu|moving image|volunteer)/.test(
      lc,
    )
  )
    return `Experience in the data includes Software Developer and Research Assistant at InfAI, Freelance Photographer, Software Developer at AjkerMenu, and Web Developer at The Moving Image.`;
  if (/(photo|film|camera)/.test(lc))
    return `He shoots travel, urban, portrait, and event photography. His listed hobbies include 35mm Film, Darkroom, Medium format, Cycling, Specialty coffee, Mech keyboards, Cooking, and Long walks.`;
  if (/(now|working|building)/.test(lc)) {
    const focus = PROFILE.now.leaning ?? "";
    const focusText = focus ? `, focusing on ${focus}` : "";
    return `Right now: building ${PROFILE.now.building}${focusText}, and shooting ${PROFILE.now.shooting}.`;
  }
  return `Saiket is a ${PROFILE.role}. Recent projects include ${joinList(
    PROJECTS.slice(0, 4).map((p) => p.name),
  )}. Ask about stack, projects, experience, or photography.`;
}
