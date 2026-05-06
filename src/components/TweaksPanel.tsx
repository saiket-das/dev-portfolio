"use client";

import { useState } from "react";

interface Tweaks {
  theme: string;
  density: string;
  card: string;
  fonts: string;
  handle: string;
  accent: string;
}

const ACCENT_OPTIONS = ["#dc8c4d", "#6cd07c", "#7aa3ff", "#e07ab8"];

function Seg({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const idx = options.indexOf(value);
  const n = options.length;
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>{label}</span></div>
      <div className="twk-seg">
        <div
          className="twk-seg-thumb"
          style={{
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`,
          }}
        />
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChange(o)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function Sel({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>{label}</span></div>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ColorChips({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>Accent</span></div>
      <div className="twk-chips">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="twk-chip"
            data-on={value.toLowerCase() === o.toLowerCase() ? "1" : "0"}
            style={{ background: o }}
            onClick={() => onChange(o)}
          />
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? "1" : "0"} onClick={() => onChange(!value)}>
        <i />
      </button>
    </div>
  );
}

export function TweaksPanel({
  tweaks,
  setTweak,
}: {
  tweaks: Tweaks;
  setTweak: (key: keyof Tweaks, val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button className="twk-open-btn" onClick={() => setOpen(true)} title="Open tweaks">⚙</button>
      )}
      {open && (
        <div className="twk-panel">
          <div className="twk-hd">
            <b>Portfolio tweaks</b>
            <button className="twk-x" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="twk-body">
            <div className="twk-sect">Theme</div>
            <Seg label="Mode" value={tweaks.theme} options={["dark", "light"]} onChange={(v) => setTweak("theme", v)} />
            <ColorChips value={tweaks.accent} options={ACCENT_OPTIONS} onChange={(v) => setTweak("accent", v)} />

            <div className="twk-sect">Layout</div>
            <Seg label="Density" value={tweaks.density} options={["compact", "regular", "comfy"]} onChange={(v) => setTweak("density", v)} />
            <Sel label="Cards" value={tweaks.card} options={["flat", "bordered", "elevated"]} onChange={(v) => setTweak("card", v)} />

            <div className="twk-sect">Type &amp; identity</div>
            <Sel label="Fonts" value={tweaks.fonts} options={["editorial", "grotesk", "techno"]} onChange={(v) => setTweak("fonts", v)} />
            <Sel label="Avatar" value={tweaks.handle} options={["monogram", "ring", "ascii"]} onChange={(v) => setTweak("handle", v)} />
          </div>
        </div>
      )}
    </>
  );
}

export type { Tweaks };
