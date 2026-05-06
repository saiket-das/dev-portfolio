"use client";

import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/Sidebar";
import { RightRail } from "@/components/RightRail";
import { HomePage } from "@/components/HomePage";
import { PostDetailPage } from "@/components/PostDetail";
import { MediaPage } from "@/components/MediaPage";
import { AboutPage } from "@/components/AboutPage";
import { ProjectsPage } from "@/components/ProjectsPage";
import { WorkPage } from "@/components/WorkPage";
import { CommandPalette } from "@/components/CommandPalette";
import { TweaksPanel, Tweaks } from "@/components/TweaksPanel";

type Route = "home" | "feed" | "media" | "projects" | "work" | "about";

const DEFAULTS: Tweaks = {
  theme: "dark",
  density: "regular",
  card: "elevated",
  fonts: "editorial",
  handle: "monogram",
  accent: "#dc8c4d",
};

export default function Page() {
  const [tweaks, setTweaksState] = useState<Tweaks>(DEFAULTS);
  const [route, setRoute] = useState<Route>("home");
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [cmdkOpen, setCmdkOpen] = useState(false);

  const setTweak = useCallback((key: keyof Tweaks, val: string) => {
    setTweaksState((prev) => ({ ...prev, [key]: val }));
  }, []);

  useEffect(() => {
    document.body.dataset.theme = tweaks.theme;
    document.body.dataset.card = tweaks.card;
    document.body.dataset.fonts = tweaks.fonts;
    document.body.dataset.handle = tweaks.handle;
    document.body.style.setProperty("--accent", tweaks.accent);
    document.body.style.setProperty("--accent-2", tweaks.accent);
  }, [tweaks]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setCmdkOpen(false);
        if (openId) setOpenId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  const onNav = (k: string) => {
    setOpenId(null);
    setRoute(k as Route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onOpen = (id: string) => {
    setOpenId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onTag = (tag: string | null) => {
    setActiveTag(tag);
    setOpenId(null);
    setRoute("home");
  };

  let center;
  if (openId) {
    center = <PostDetailPage id={openId} onBack={() => setOpenId(null)} onTag={(t) => onTag(t)} />;
  } else if (route === "home" || route === "feed") {
    center = (
      <HomePage
        density={tweaks.density}
        activeTag={activeTag}
        onOpen={onOpen}
        onTag={onTag}
        avatarStyle={tweaks.handle}
      />
    );
  } else if (route === "media") {
    center = <MediaPage />;
  } else if (route === "projects") {
    center = <ProjectsPage onOpen={onOpen} />;
  } else if (route === "work") {
    center = <WorkPage />;
  } else if (route === "about") {
    center = <AboutPage avatarStyle={tweaks.handle} />;
  }

  return (
    <div className="app">
      <Sidebar route={openId ? "" : route} onNav={onNav} onCmdK={() => setCmdkOpen(true)} avatarStyle={tweaks.handle} />
      <main className="center">{center}</main>
      <RightRail activeTag={activeTag} onTag={onTag} avatarStyle={tweaks.handle} />

      <button
        className="theme-fab"
        onClick={() => setTweak("theme", tweaks.theme === "dark" ? "light" : "dark")}
      >
        <span className="theme-fab-dot" />
        {tweaks.theme === "dark" ? "dark" : "light"}
      </button>

      <CommandPalette
        open={cmdkOpen}
        onClose={() => setCmdkOpen(false)}
        onNav={onNav}
        onOpen={onOpen}
        onTag={(t) => onTag(t)}
      />

      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
    </div>
  );
}
