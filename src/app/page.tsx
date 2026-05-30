"use client";

import { useState, useCallback, useEffect } from "react";
import { Sidebar, TopBar, BotNav } from "@/components/Sidebar";
import { RightRail } from "@/components/RightRail";
import { FeedPage } from "@/components/HomePage";
import { ExpPage } from "@/components/WorkPage";
import { ProjPage } from "@/components/ProjectsPage";
import { ChatPage } from "@/components/ChatPage";
import { ProfPage } from "@/components/AboutPage";
import { CommandPalette } from "@/components/CommandPalette";

type Tab = "feed" | "exp" | "proj" | "chat" | "profile";

export default function Page() {
  const [tab, setTab] = useState<Tab>("feed");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [saves, setSaves] = useState<Record<string, boolean>>({});
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen((o) => !o);
      }
      if (e.key === "Escape") setCmdkOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navTo = useCallback((k: string) => {
    setTab(k as Tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onLike = useCallback(
    (id: string) => setLikes((p) => ({ ...p, [id]: !p[id] })),
    [],
  );
  const onSave = useCallback(
    (id: string) => setSaves((p) => ({ ...p, [id]: !p[id] })),
    [],
  );

  let main;
  if (tab === "feed")
    main = (
      <FeedPage likes={likes} saves={saves} onLike={onLike} onSave={onSave} />
    );
  else if (tab === "exp") main = <ExpPage />;
  else if (tab === "proj") main = <ProjPage />;
  else if (tab === "chat") main = <ChatPage />;
  else if (tab === "profile") main = <ProfPage onTab={navTo} />;

  return (
    <div className="app2">
      <Sidebar
        tab={tab as Tab}
        onTab={(k) => navTo(k)}
        onCmdK={() => setCmdkOpen(true)}
      />
      <main className="center2">
        <TopBar tab={tab as Tab} onCmdK={() => setCmdkOpen(true)} />
        {main}
      </main>
      <RightRail onTab={navTo} />
      <BotNav tab={tab as Tab} onTab={(k) => navTo(k)} />

      <button
        className="fab"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "currentColor",
            display: "inline-block",
          }}
        />
        {theme}
      </button>

      <CommandPalette
        open={cmdkOpen}
        onClose={() => setCmdkOpen(false)}
        onNav={(k) => navTo(k)}
      />
    </div>
  );
}
