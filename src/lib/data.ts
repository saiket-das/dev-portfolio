export const PROFILE = {
  name: "Saiket Das",
  handle: "@saiket.das",
  pronouns: "he/him",
  role: "Software Developer · Photographer · CS Student @UM",
  bio: "I build tools at the seam between code and image.",
  longBio: "Hey — I'm Saiket. CS student at UM. By day I work on software and developer tooling; by night I shoot 35mm and develop my own film. Available for internships and contract work.",
  location: "Ann Arbor, MI",
  joined: "Joined Sep 2022",
  status: "Available · May–Aug 2026",
  followers: "1.2k",
  following: "284",

  links: [
    { kind: "github",   label: "github/saiketdas",    url: "#" },
    { kind: "linkedin", label: "in/saiket-das",       url: "#" },
    { kind: "ig",       label: "ig/saiket.frames",    url: "#" },
    { kind: "mail",     label: "hi@saiketdas.dev",    url: "#" },
    { kind: "link",     label: "saiketdas.dev",       url: "#" },
    { kind: "resume",   label: "Resume (PDF)",        url: "#" },
  ],

  stack: [
    { tag: "TypeScript", weight: 0.95 },
    { tag: "Python",     weight: 0.88 },
    { tag: "Rust",       weight: 0.72 },
    { tag: "React",      weight: 0.92 },
    { tag: "Postgres",   weight: 0.78 },
    { tag: "WebGL",      weight: 0.55 },
    { tag: "ffmpeg",     weight: 0.65 },
    { tag: "CUDA",       weight: 0.40 },
  ],

  hobbies: [
    "35mm Film", "Darkroom", "Medium format", "Cycling",
    "Specialty coffee", "Mech keyboards", "Cooking", "Long walks",
  ],

  setup: [
    { k: "Editor",     v: "Neovim · LazyVim config · gruvbox" },
    { k: "Terminal",   v: "Ghostty · zsh · starship" },
    { k: "Laptop",     v: 'MacBook Pro 14" M3 · 36GB' },
    { k: "Camera",     v: "Pentax K1000 · 50mm f/1.7 SMC" },
    { k: "Keyboard",   v: "Tofu65 · Cherry MX Browns" },
    { k: "Headphones", v: "Sony WH-1000XM4" },
  ],

  now: {
    building:  "Loomshell v0.4 — multi-cam timelapse stitcher",
    reading:   "The Programmer's Brain · F. Hermans",
    listening: "Tirzah — Devotion (on loop)",
    shooting:  "Cinestill 400D, half-finished",
  },
};

export interface FeedPost {
  id: string;
  type: string;
  icon: string;
  when: string;
  pinned?: boolean;
  title?: string;
  body?: string;
  company?: string;
  cover?: string;
  lang?: string;
  code?: string;
  media?: { label: string }[];
  project?: {
    name: string; cover: string; desc: string; stack: string[];
    stats?: { k: string; v: string }[];
    links?: { k: string; l: string }[];
  };
  hack?: { name: string; placement: string; teammates: string[]; stack: string[] };
  tags: string[];
  likes: number;
  replies: number;
  shares: number;
}

export const FEED: FeedPost[] = [
  {
    id: "f01", type: "career", icon: "briefcase",
    when: "2h", pinned: true,
    title: "🎉 New chapter — joining Plinth Labs as SWE Intern",
    body: "Starting May 12 in NYC. I'll be on the retrieval team, working on embeddings infrastructure and dev tooling. Excited to learn from this team — they have shipped some of the best open-source vector tools in the space.",
    company: "Plinth Labs",
    tags: ["career", "internship", "ml"],
    likes: 412, replies: 38, shares: 22,
  },
  {
    id: "f02", type: "project", icon: "layers",
    when: "1d",
    title: "Loomshell v0.3 is live — now with audio-reactive sync",
    body: "Six webcams stitched into one timelapse, synced by audio waveform alignment. Spent two weeks on the resync algorithm.",
    project: {
      name: "Loomshell",
      cover: "loomshell / 6-cam stitch preview",
      desc: "Multi-cam timelapse stitcher with audio-reactive sync.",
      stack: ["Rust", "ffmpeg", "clap", "rustfft"],
      stats: [
        { k: "stars", v: "1.0k" },
        { k: "downloads", v: "8.4k" },
        { k: "version", v: "0.3" },
      ],
      links: [
        { k: "github", l: "github/saiketdas/loomshell" },
        { k: "link",   l: "loomshell.dev" },
      ],
    },
    tags: ["rust", "ffmpeg", "open-source"],
    likes: 287, replies: 19, shares: 41,
  },
  {
    id: "f03", type: "media", icon: "image",
    when: "2d",
    title: "Lisbon, in pieces",
    body: "Three days walking with the K1000. Portra 400, mostly underexposed by a stop.",
    media: [
      { label: "tram 28 / alfama" },
      { label: "blue tile / lapa" },
      { label: "evening / miradouro" },
      { label: "fish market / 06:14" },
    ],
    tags: ["photography", "lisbon", "film"],
    likes: 542, replies: 28, shares: 15,
  },
  {
    id: "f04", type: "thought", icon: "spark",
    when: "3d",
    body: "The best part of shooting film is the lag. You see something, you commit, you forget. Three weeks later the lab emails you and it's almost like it happened to someone else.",
    tags: ["thoughts", "film"],
    likes: 1203, replies: 87, shares: 142,
  },
  {
    id: "f05", type: "thread", icon: "layers",
    when: "5d",
    title: "How I built a CLIP-powered search engine for 12k of my own photos",
    body: "Four years of film scans, no way to find anything. Then I taught a model to. A 5-part case study with code, the pivots, and what I'd do differently. Read the thread →",
    cover: "embedding atlas / 12k photos",
    tags: ["ml", "case-study", "photography"],
    likes: 612, replies: 54, shares: 89,
  },
  {
    id: "f06", type: "hackathon", icon: "trophy",
    when: "1w",
    title: "Top 8 / 312 at TreeHacks '26 with FrameSync",
    body: "Built a real-time roll preview tool — point your phone at a developing film roll, get an estimated contact sheet via diffusion. 36 hours, three teammates, infinite RedBull.",
    hack: {
      name: "TreeHacks 2026",
      placement: "Top 8 / 312 teams",
      teammates: ["@arvi", "@nora.dev", "@theo"],
      stack: ["Swift", "CoreML", "WebRTC"],
    },
    tags: ["hackathon", "ml", "ios"],
    likes: 198, replies: 22, shares: 12,
  },
  {
    id: "f07", type: "code", icon: "code",
    when: "1w",
    title: "TIL: Object.groupBy is finally stable in V8",
    body: "Spent four years writing reducers for this. Now you can write the whole thing as one expression.",
    lang: "typescript",
    code: "// before:\nconst byTag = posts.reduce((acc, p) => {\n  (acc[p.tags[0]] ||= []).push(p);\n  return acc;\n}, {});\n\n// after:\nconst byTag = Object.groupBy(posts, p => p.tags[0]);",
    tags: ["typescript", "til"],
    likes: 156, replies: 14, shares: 28,
  },
  {
    id: "f08", type: "project", icon: "layers",
    when: "2w",
    title: "Frame.fm — subscribe to a friend's contact sheets",
    body: "A weekend project that's somehow stuck around. 47 monthly active users.",
    project: {
      name: "Frame.fm",
      cover: "frame.fm / contact sheet preview",
      desc: "RSS for film photographers. Subscribe to a friend's contact sheet, get a monthly email digest.",
      stack: ["Next.js", "Supabase", "S3"],
      stats: [
        { k: "users",  v: "47" },
        { k: "rolls",  v: "230" },
        { k: "uptime", v: "99.9" },
      ],
      links: [{ k: "link", l: "frame.fm" }],
    },
    tags: ["side-project", "react"],
    likes: 234, replies: 31, shares: 18,
  },
  {
    id: "f09", type: "media", icon: "image",
    when: "3w",
    title: "Bairro Alto, midnight",
    body: "Pushed two stops in the lab. Grain looks like wallpaper, exactly what I wanted.",
    media: [{ label: "alley light / 00:14" }],
    tags: ["photography", "lisbon"],
    likes: 389, replies: 17, shares: 8,
  },
  {
    id: "f10", type: "thought", icon: "spark",
    when: "1mo",
    body: "I keep a folder called /unfinished. It has 47 things in it. I think about it more than my finished work.",
    tags: ["thoughts"],
    likes: 412, replies: 24, shares: 19,
  },
];

export interface ExpEntry {
  role: string; company: string; kind: string; loc: string;
  start: string; end: string; duration: string; current?: boolean;
  bullets: string[]; stack: string[];
}

export const EXPERIENCE: Record<string, ExpEntry[]> = {
  work: [
    {
      role: "SWE Intern · Retrieval team",
      company: "Plinth Labs",
      kind: "Internship", loc: "New York, NY",
      start: "May 2026", end: "Aug 2026", duration: "Starting soon",
      current: true,
      bullets: [
        "Building dev tooling for embeddings infrastructure on the retrieval team.",
        "Working alongside the team behind multiple top-3 open-source vector libraries.",
      ],
      stack: ["Python", "Rust", "Postgres", "pgvector"],
    },
    {
      role: "Install Developer (contract)",
      company: "MoMA PS1",
      kind: "Contract", loc: "Queens, NY",
      start: "Sep 2024", end: "Dec 2024", duration: "4 months",
      bullets: [
        "Built a real-time gallery monitoring tool for a generative-art install.",
        "Wrangled six Raspberry Pis on flaky museum WiFi to play synchronized media.",
      ],
      stack: ["Python", "WebSockets", "Raspberry Pi"],
    },
    {
      role: "Teaching Assistant · Algorithms",
      company: "University of Michigan",
      kind: "Part-time", loc: "Remote + on-campus",
      start: "Jan 2025", end: "May 2025", duration: "4 months",
      bullets: [
        "Ran 12 weekly office hours for 70 students.",
        "Held the highest student-rated office hours in the cohort (4.9/5).",
      ],
      stack: ["Python", "C"],
    },
    {
      role: "Freelance Photographer",
      company: "Self-employed",
      kind: "Freelance", loc: "Ann Arbor, MI",
      start: "Mar 2023", end: "Present", duration: "Ongoing",
      current: true,
      bullets: [
        "Editorial portraits for two music magazines and one indie literary mag.",
        "Shot 11 weddings (35mm + medium format), all referrals.",
      ],
      stack: ["Pentax K1000", "Mamiya RB67", "Darkroom"],
    },
  ],
  education: [
    {
      role: "B.S. Computer Science, minor in Visual Arts",
      company: "University of Michigan",
      kind: "Education", loc: "Ann Arbor, MI",
      start: "Sep 2022", end: "May 2026", duration: "4 years · GPA 3.81",
      current: true,
      bullets: [
        "Honors thesis: \"Cross-modal retrieval for personal photo archives.\"",
        "Coursework: ML, Distributed Systems, Compilers, Computational Photography.",
        "President of the photography club; ran weekly darkroom sessions.",
      ],
      stack: ["Python", "C", "OCaml", "Rust"],
    },
  ],
  hackathons: [
    {
      role: "Top 8 / 312 — FrameSync",
      company: "TreeHacks 2026",
      kind: "Hackathon", loc: "Stanford, CA",
      start: "Feb 2026", end: "Feb 2026", duration: "36 hours",
      bullets: [
        "Real-time roll preview from undeveloped 35mm — point a phone, see the contact sheet.",
        "Won the Best ML Application bonus prize.",
      ],
      stack: ["Swift", "CoreML", "WebRTC"],
    },
    {
      role: "Best Hardware Hack — DocketCam",
      company: "MHacks 2025",
      kind: "Hackathon", loc: "Ann Arbor, MI",
      start: "Apr 2025", end: "Apr 2025", duration: "24 hours",
      bullets: [
        "Webcam → court-style transcript with speaker turns. Built for academic seminars.",
      ],
      stack: ["Whisper", "Python", "Svelte"],
    },
  ],
  leadership: [
    {
      role: "President · Photography Club",
      company: "University of Michigan",
      kind: "Leadership", loc: "On-campus",
      start: "Sep 2024", end: "May 2026", duration: "2 years",
      current: true,
      bullets: [
        "Grew membership from 22 to 80; ran weekly darkroom hours.",
        "Organized two end-of-semester gallery shows; raised $4k in print sales.",
      ],
      stack: [],
    },
  ],
  volunteering: [
    {
      role: "Volunteer · Junior Code Mentor",
      company: "Ann Arbor Public Library",
      kind: "Volunteer", loc: "Ann Arbor, MI",
      start: "Jun 2024", end: "Aug 2024", duration: "3 months · Sat AM",
      bullets: [
        "Taught Saturday Python sessions for 10–12 year olds.",
        "Wrote the curriculum (8 sessions, all open-sourced on GitHub).",
      ],
      stack: ["Python"],
    },
  ],
};

export const PROJECTS = [
  {
    id: "P1", name: "Loomshell",
    year: 2025, status: "active",
    cover: "loomshell / hero",
    desc: "Multi-cam timelapse stitcher with audio-reactive sync. CLI written in Rust.",
    stack: ["Rust", "ffmpeg", "rustfft"],
    metrics: [{ k: "stars", v: "1.0k" }, { k: "ver", v: "0.3" }],
  },
  {
    id: "P2", name: "Atlas",
    year: 2024, status: "shipped",
    cover: "atlas / 12k photos",
    desc: "Personal CLIP-powered photo search across 12k film scans. Cross-modal retrieval.",
    stack: ["Python", "OpenCLIP", "pgvector", "FastAPI"],
    metrics: [{ k: "frames", v: "12k" }, { k: "queries/day", v: "50+" }],
  },
  {
    id: "P3", name: "Frame.fm",
    year: 2025, status: "live",
    cover: "frame.fm / digest",
    desc: "RSS-style platform for film photographers. Subscribe to friends' contact sheets.",
    stack: ["Next.js", "Supabase", "S3"],
    metrics: [{ k: "users", v: "47" }, { k: "uptime", v: "99.9" }],
  },
  {
    id: "P4", name: "FrameSync",
    year: 2026, status: "prototype",
    cover: "framesync / tree hacks",
    desc: "Real-time preview of undeveloped 35mm rolls. TreeHacks Top 8 / Best ML.",
    stack: ["Swift", "CoreML", "WebRTC"],
    metrics: [{ k: "place", v: "8/312" }, { k: "team", v: "4" }],
  },
  {
    id: "P5", name: "DocketCam",
    year: 2025, status: "shipped",
    cover: "docketcam / transcript",
    desc: "Webcam → court-style transcript with speaker turns. Built for academic seminars.",
    stack: ["Whisper", "Svelte", "Python"],
    metrics: [{ k: "WER", v: "8%" }, { k: "lat", v: "<2s" }],
  },
  {
    id: "P6", name: "Roll-zero",
    year: 2024, status: "archived",
    cover: "roll-zero / ios",
    desc: "iOS app to log every roll of film I shoot.",
    stack: ["Swift", "SwiftData"],
    metrics: [{ k: "rolls", v: "84" }],
  },
];

export const HEATMAP_WEEKS: number[][] = (() => {
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      let lvl = Math.floor(Math.random() * 5);
      if (w > 30) lvl = Math.min(4, lvl + 1);
      if (w > 44) lvl = Math.min(4, lvl + 1);
      if (d === 0 || d === 6) lvl = Math.max(0, lvl - 2);
      if (Math.random() < 0.18) lvl = 0;
      week.push(lvl);
    }
    weeks.push(week);
  }
  for (let w = 36; w < 42; w++) for (let d = 1; d < 6; d++) weeks[w][d] = 4;
  return weeks;
})();

export const CHAT_SUGGESTIONS = [
  "What's the tech stack?",
  "Is Saiket available for contract work?",
  "Tell me about the hackathon record.",
  "What's Loomshell?",
  "Where has Saiket interned?",
  "Why shoot film?",
  "What's Saiket working on right now?",
];
