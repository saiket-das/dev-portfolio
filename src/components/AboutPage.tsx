"use client";

import { PROFILE } from "@/lib/data";
import { Avatar, Icon } from "./primitives";

export function AboutPage({
  avatarStyle,
}: {
  avatarStyle: string;
}) {
  return (
    <div className="about">
      <header className="about-head">
        <div className="about-cover">
          <div className="about-cover-coords mono">
            <span>HELLO</span>
            <span>—</span>
            <span>EST. 2021</span>
            <span>—</span>
            <span>{PROFILE.location.toUpperCase()}</span>
          </div>
          <div className="about-cover-stripes" />
        </div>
        <div className="about-id">
          <Avatar size={96} style={avatarStyle} />
          <div className="about-id-text">
            <h1 className="serif">{PROFILE.name}</h1>
            <div className="mono about-id-role">{PROFILE.role}</div>
            <div className="mono about-id-loc">↳ {PROFILE.location}</div>
          </div>
          <button className="about-cta mono">get in touch <Icon name="arrow" className="ico-xs" /></button>
        </div>
      </header>

      <section className="about-bio">
        <div className="about-section-mark mono">01 / BIO</div>
        <p className="serif about-bio-lead">{PROFILE.bio}</p>
        <p>
          I&apos;m finishing a CS degree by day and shooting 35mm by night. The two practices keep colliding —
          I built a CLIP-powered search across my own film archive, a CLI for stitching multi-cam timelapses,
          and a tiny app where friends subscribe to each other&apos;s contact sheets.
        </p>
        <p>
          I&apos;m available for contract work May through August, and especially interested in projects involving
          retrieval, archives, photo tooling, or anything where someone needs help making images legible to code.
        </p>
      </section>

      <section className="about-skills">
        <div className="about-section-mark mono">02 / STACK</div>
        <div className="about-skills-grid">
          {PROFILE.skills.map((s) => (
            <span key={s} className="skill-chip mono">{s}</span>
          ))}
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-section-mark mono">03 / TIMELINE</div>
        <ul className="tl">
          <li><span className="tl-y mono">2026</span><span className="tl-d">Graduating Spring &apos;26 · contracting full-time after</span></li>
          <li><span className="tl-y mono">2025</span><span className="tl-d">Loomshell v0.3 · Frame.fm public beta · 84th roll developed</span></li>
          <li><span className="tl-y mono">2024</span><span className="tl-d">Photo finalist, Kollektiv Open Call · install dev for MoMA PS1</span></li>
          <li><span className="tl-y mono">2023</span><span className="tl-d">Started CS at State · built first photo embedding atlas</span></li>
          <li><span className="tl-y mono">2022</span><span className="tl-d">First darkroom · first job (sysadmin, 4 months)</span></li>
          <li><span className="tl-y mono">2021</span><span className="tl-d">Inherited a Pentax K1000 from my grandfather. Everything since is downstream.</span></li>
        </ul>
      </section>

      <section className="about-links">
        <div className="about-section-mark mono">04 / ELSEWHERE</div>
        <div className="about-links-grid">
          {PROFILE.links.map((l) => (
            <a key={l.kind} href={l.url} className="about-link mono">
              <span className="about-link-arrow">↗</span>
              <span className="about-link-label">{l.label}</span>
              <span className="about-link-kind">/ {l.kind}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
