export interface ProfileLink {
  kind: string;
  label: string;
  url: string;
}

export interface ProfileStat {
  k: string;
  v: string;
}

export interface ProfileNow {
  building: string;
  reading: string;
  listening: string;
  shooting: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  bio: string;
  location: string;
  available: boolean;
  links: ProfileLink[];
  stats: ProfileStat[];
  skills: string[];
  now: ProfileNow;
}

export interface PostMedia {
  label: string;
}

export type PostType =
  | "photo"
  | "photoset"
  | "video"
  | "project"
  | "thought"
  | "code"
  | "thread";

export interface Post {
  id: string;
  type: PostType;
  aspect?: number;
  size?: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  tags: string[];
  date: string;
  likes: number;
  comments: number;
  media?: PostMedia[];
  code?: string;
  lang?: string;
  stack?: string[];
  repo?: string;
  duration?: string;
  threadSteps?: number;
  status?: string;
}

export interface ThreadStep {
  label: string;
  title: string;
  body: string;
}

export interface Tag {
  tag: string;
  count: number;
}

export interface Highlight {
  kind: string;
  label: string;
  detail: string;
}

export const PROFILE: Profile = {
  name: "Saiket Das",
  handle: "@saiket-das02",
  role: "Software Developer · Photographer · CS Student @UM",
  bio: "Eager to explore new technologies and dive into the unknown. Don't hesitate to reach out if you have something unfamiliar or unheard of to share.",
  location: "Federal Territory of Kuala Lumpur, Malaysia",
  available: true,
  links: [
    {
      kind: "email",
      label: "isaiketdas@gmail.com",
      url: "mailto:isaiketdas@gmail.com",
    },
    {
      kind: "linkedin",
      label: "linkedin/saiket-das02",
      url: "https://www.linkedin.com/in/saiket-das02",
    },
  ],
  stats: [
    { k: "Experience", v: "2+ years" },
    { k: "Skills", v: "Next.js, Flutter, TS" },
    { k: "Languages", v: "3" },
    { k: "Role", v: "Software Developer" },
  ],
  skills: [
    "Next.js",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "React",
    "Web Development",
    "Photography",
    "UI/UX Design",
    "Technical Solutions",
  ],
  now: {
    building: "Personal portfolio and web projects",
    reading: "Exploring new frameworks and technologies",
    listening: "Ambient and lo-fi music",
    shooting: "Travel, urban, and portrait photography",
  },
};

export const POSTS: Post[] = [
  {
    id: "p01",
    type: "photoset",
    aspect: 4,
    size: "hero",
    title: "Lisbon, in pieces",
    caption:
      "Three days walking with the K1000. Portra 400, mostly underexposed by a stop.",
    tags: ["photography", "lisbon", "film"],
    date: "Apr 28",
    likes: 142,
    comments: 18,
    media: [
      { label: "tram 28 / alfama" },
      { label: "blue tile / lapa" },
      { label: "evening / miradouro" },
      { label: "fish market 06:14" },
    ],
  },
  {
    id: "p02",
    type: "project",
    aspect: 2,
    size: "tall",
    title: "Loomshell",
    subtitle: "v0.3 · timelapse stitcher",
    caption:
      "A CLI that merges N webcam feeds into one syncopated timelapse. Now with audio waveform alignment.",
    tags: ["rust", "ffmpeg", "cli"],
    date: "Apr 25",
    likes: 89,
    comments: 7,
    stack: ["Rust", "ffmpeg", "clap"],
    repo: "kaimdz/loomshell",
  },
  {
    id: "p03",
    type: "code",
    aspect: 1,
    title: "Today I learned",
    caption:
      "`Object.groupBy` is finally in V8 stable. Spent 4 years writing reducers for this.",
    code: "const byTag = Object.groupBy(\n  posts,\n  p => p.tags[0]\n);",
    lang: "ts",
    tags: ["typescript", "til"],
    date: "Apr 24",
    likes: 56,
    comments: 12,
  },
  {
    id: "p04",
    type: "thought",
    aspect: 1,
    caption:
      "The best part of shooting film is the lag. You see something, you commit, you forget. Three weeks later the lab emails you and it's almost like it happened to someone else.",
    tags: ["thoughts", "photography"],
    date: "Apr 22",
    likes: 211,
    comments: 24,
  },
  {
    id: "p05",
    type: "photo",
    aspect: 3,
    title: "07:42 — Cais do Sodré",
    caption:
      "Caught the ferry crew arguing about which dock had the better espresso.",
    tags: ["photography", "lisbon"],
    date: "Apr 21",
    likes: 98,
    comments: 5,
    media: [{ label: "ferry crew / harbor" }],
  },
  {
    id: "p06",
    type: "video",
    aspect: 3,
    title: "Loomshell demo",
    caption: "Six webcams → one 12-second loop. Audio reactive in v0.3.",
    duration: "0:42",
    tags: ["video", "loomshell", "demo"],
    date: "Apr 19",
    likes: 134,
    comments: 9,
    media: [{ label: "demo / 6-cam stitch" }],
  },
  {
    id: "p07",
    type: "thread",
    aspect: 2,
    title: "How I built a search engine for my photos",
    caption:
      "84 rolls of film, scanned at 60mp each. Then I taught CLIP to find them.",
    tags: ["case-study", "ml", "photography"],
    date: "Apr 15",
    likes: 308,
    comments: 41,
    threadSteps: 5,
    media: [{ label: "embedding atlas / 12k photos" }],
  },
  {
    id: "p08",
    type: "code",
    aspect: 1,
    title: "ffmpeg incantation of the week",
    caption: "Resync 6 webcams using a flash as a sync clap. Dumb but works.",
    code: 'ffmpeg -i a.mp4 -i b.mp4 \\\n  -filter_complex \\\n  "[0]hue=s=0[a];[a][1]xstack" \\\n  out.mp4',
    lang: "bash",
    tags: ["ffmpeg", "video"],
    date: "Apr 12",
    likes: 73,
    comments: 8,
  },
  {
    id: "p09",
    type: "photo",
    aspect: 2,
    title: "Bairro Alto, midnight",
    caption: "Pushed two stops in the lab. Grain looks like wallpaper.",
    tags: ["photography", "lisbon", "film"],
    date: "Apr 10",
    likes: 156,
    comments: 11,
    media: [{ label: "alley light / 00:14" }],
  },
  {
    id: "p10",
    type: "project",
    aspect: 3,
    title: "Frame.fm",
    subtitle: "Side project · 2025",
    caption:
      "Subscribe to a friend's contact sheets. Built in a weekend, used by 40 people, surprisingly sticky.",
    tags: ["side-project", "react", "supabase"],
    date: "Apr 04",
    likes: 121,
    comments: 14,
    stack: ["Next.js", "Supabase", "S3"],
  },
  {
    id: "p11",
    type: "thought",
    aspect: 1,
    caption:
      "I keep a folder called /unfinished. It has 47 things in it. I think about it more than my finished work.",
    tags: ["thoughts"],
    date: "Apr 02",
    likes: 89,
    comments: 6,
  },
  {
    id: "p12",
    type: "photo",
    aspect: 1,
    title: "Pentax self-portrait",
    caption: "Mirror, hotel, jet-lagged.",
    tags: ["photography", "portrait"],
    date: "Mar 30",
    likes: 67,
    comments: 3,
    media: [{ label: "mirror self-portrait" }],
  },
];

export const THREAD_P07: ThreadStep[] = [
  {
    label: "01 / Problem",
    title: "12,000 scans, no way to find anything",
    body: "After four years of shooting film, I had a folder structure that looked like /scans/2024-03-roll-12-portra-400/. Searching meant grep. I wanted: 'photos with red doors, in Lisbon, on overcast days.'",
  },
  {
    label: "02 / Process",
    title: "CLIP embeddings + a hand-rolled UI",
    body: "OpenCLIP ViT-L/14 at half precision, embeddings stored in pgvector. The trick wasn't the model — it was teaching myself to query in image-language. 'A door, painted oxide red, end of a narrow street.'",
  },
  {
    label: "03 / Pivot",
    title: "Search wasn't the product. Browsing was.",
    body: "I noticed I never typed queries. I'd open the atlas, drag through clusters, and stop when something felt right. Rebuilt around UMAP projections and a panning viewport.",
  },
  {
    label: "04 / Solution",
    title: "An atlas of every frame",
    body: "12k photos laid out by visual similarity. Hover for metadata. Click to anchor — 'show me more like this.' It's a tool I use every single day now.",
  },
  {
    label: "05 / Result",
    title: "I rediscovered photos I'd forgotten I took",
    body: "Half the frames in my Lisbon set were taken in 2023. I'd never have found them without the atlas. The case study is the tool, the tool is the case study.",
  },
];

export const TAGS: Tag[] = [
  { tag: "photography", count: 6 },
  { tag: "film", count: 3 },
  { tag: "lisbon", count: 3 },
  { tag: "code", count: 2 },
  { tag: "ml", count: 2 },
  { tag: "thoughts", count: 2 },
  { tag: "case-study", count: 1 },
  { tag: "ffmpeg", count: 2 },
  { tag: "rust", count: 1 },
  { tag: "react", count: 1 },
  { tag: "video", count: 2 },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  kind: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  current: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
  accent: "amber" | "green" | "blue" | "rose";
}

export const EXPERIENCE: Experience[] = [
  {
    id: "e01",
    role: "Software Developer · Research Assistant",
    company: "InfAI",
    kind: "Full-time",
    location: "Dhaka, Bangladesh",
    start: "Aug 2024",
    end: "Present",
    duration: "1+ yr",
    current: true,
    summary:
      "Digital Juggler (Web, App, Design) — Building scalable solutions with modern tech stack across web, app, and design domains.",
    bullets: [
      "Developed full-stack applications using Next.js and TypeScript for web solutions.",
      "Collaborated on cross-functional projects spanning web development, mobile apps, and UI/UX design.",
      "Researched and evaluated modern web frameworks and prototyped experimental features.",
      "Implemented responsive web applications with focus on user experience and performance.",
    ],
    stack: ["Next.js", "TypeScript", "React", "Flutter", "JavaScript"],
    accent: "blue",
  },

  {
    id: "e02",
    role: "Web Developer",
    company: "The Moving Image",
    kind: "Contract",
    location: "Kuala Lumpur, Malaysia",
    start: "May 2022",
    end: "Aug 2022",
    duration: "4 mo",
    current: false,
    summary:
      "Built web solutions for a creative media company. Focus on responsive design and modern web practices.",
    bullets: [
      "Developed responsive web applications for client projects.",
      "Implemented frontend solutions using modern JavaScript frameworks.",
      "Collaborated with designers to translate mockups into functional interfaces.",
    ],
    stack: ["JavaScript", "React", "CSS"],
    accent: "amber",
  },
  {
    id: "e03",
    role: "Freelance Photographer",
    company: "Self-employed",
    kind: "Freelance",
    location: "Global",
    start: "Jan 2021",
    end: "Present",
    duration: "5+ yr",
    current: true,
    summary:
      "Travel, urban, and portrait photography. Building a portfolio across diverse subjects and locations.",
    bullets: [
      "Developed photography portfolio spanning travel, urban, and portrait genres.",
      "Maintained professional workflow for photo editing and archival.",
      "Delivered high-quality work to diverse clientele and projects.",
    ],
    stack: ["Photography", "Photo Editing", "Visual Storytelling"],
    accent: "rose",
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    kind: "education",
    label: "University of Malaya",
    detail: "BS Computer Science (Software Engineering)",
  },
  { kind: "skill", label: "Next.js", detail: "Web Development" },
  { kind: "work", label: "InfAI", detail: "Software Developer" },
  { kind: "interest", label: "Photography", detail: "Travel, Urban, Portrait" },
];

export const EXTRA_PROJECTS = [
  {
    id: "x1",
    title: "Personal Portfolio",
    subtitle: "2025",
    stack: ["Next.js", "TypeScript", "CSS"],
    status: "shipped",
    caption: "Modern portfolio showcasing projects and skills.",
  },
  {
    id: "x2",
    title: "Web Applications",
    subtitle: "2024",
    stack: ["React", "JavaScript", "Responsive Design"],
    status: "live",
    caption: "Various full-stack web projects for clients.",
  },
  {
    id: "x3",
    title: "Photography Archive",
    subtitle: "2021-Present",
    stack: ["Photography", "Curation", "Visual Design"],
    status: "ongoing",
    caption: "Personal photo collection and storytelling.",
  },
  {
    id: "x4",
    title: "Mobile Development",
    subtitle: "2024",
    stack: ["Flutter", "Dart"],
    status: "active",
    caption: "Cross-platform mobile applications.",
  },
  {
    id: "x5",
    title: "Design Systems",
    subtitle: "2023",
    stack: ["TypeScript", "React", "Component Architecture"],
    status: "active",
    caption: "Reusable UI components and design patterns.",
  },
];
