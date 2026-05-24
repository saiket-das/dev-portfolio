export const PROFILE = {
  name: "Saiket Das",
  handle: "@saiket.das",
  pronouns: "he/him",
  role: "Software Developer · Photographer · CS Student @UM",
  bio: "I build tools, shoot film, and keep shipping.",
  longBio:
    "Hey — I'm Saiket. I build software across web, app, and retrieval workflows, and I keep a camera close by. Available for internships and contract work.",
  location: "Kuala Lumpur, Malaysia",
  joined: "Joined Sep 2022",
  status: "Available · May–Aug 2026",
  followers: "383",
  following: "210",

  links: [
    {
      kind: "github",
      label: "github/saiketdas",
      url: "https://github.com/saiket-das",
    },
    {
      kind: "linkedin",
      label: "in/saiket-das02",
      url: "https://www.linkedin.com/in/saiket-das02/",
    },
    {
      kind: "ig",
      label: "ig/ahan_bryan",
      url: "https://www.instagram.com/ahan_bryan/",
    },
    {
      kind: "mail",
      label: "hi@saiketdas.dev",
      url: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=saiketdas02@gmail.com",
    },
    { kind: "link", label: "saiketdas.dev (working on it)", url: "#" },
    { kind: "resume", label: "Resume (PDF) — Not updated yet", url: "#" },
  ],

  stack: [
    { tag: "JavaScript", weight: 0.96 },
    { tag: "TypeScript", weight: 0.95 },
    { tag: "Next.js", weight: 0.9 },
    { tag: "React", weight: 0.92 },
    { tag: "React Native", weight: 0.86 },
    { tag: "Node.js", weight: 0.88 },
    { tag: "Express.js", weight: 0.78 },
    { tag: "Flutter", weight: 0.85 },
    { tag: "Expo", weight: 0.75 },
    { tag: "Firebase", weight: 0.82 },
    { tag: "Supabase", weight: 0.8 },
    { tag: "MongoDB", weight: 0.72 },
    { tag: "Postgres", weight: 0.78 },
    { tag: "C++", weight: 0.7 },
    { tag: "Git", weight: 0.9 },
    { tag: "Figma", weight: 0.8 },
    { tag: "Web Development", weight: 0.9 },
    { tag: "App Development", weight: 0.85 },
    { tag: "Photography", weight: 0.75 },
    { tag: "Adobe Lightroom", weight: 0.7 },
    { tag: "Arduino", weight: 0.6 },
    { tag: "Python", weight: 0.88 },
    { tag: "Rust", weight: 0.72 },
    { tag: "WebGL", weight: 0.55 },
    { tag: "ffmpeg", weight: 0.65 },
    { tag: "CUDA", weight: 0.4 },
  ],

  stackSections: [
    {
      label: "Languages",
      items: ["JavaScript", "TypeScript", "C++", "Python", "Java", "SQL"],
    },
    {
      label: "Frontend / Mobile",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Flutter",
        "Expo",
        "Tailwind",
        "HTML5",
        "CSS3",
      ],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "Postgres", "Firebase", "Supabase"],
    },
    {
      label: "Tools",
      items: [
        "Git",
        "Figma",
        "VS Code",
        "Vercel",
        "Netlify",
        "Adobe Lightroom",
        "Arduino",
      ],
    },
  ],

  hobbies: ["Travel", "Photography", "Futsal", "Badminton", "Gym", "Cycling"],

  setup: [
    { k: "Laptop", v: 'MacBook Pro 14" M3 · 8GB' },
    { k: "Camera", v: "Sony a6400 · 85mm f/1.8, 16mm f/1.4, 18-104mm f/4" },
  ],

  now: {
    building: "Smart Energy Platform - UM Technothon 2026",
    leaning: "AI/ML, Web/App Development",
    shooting: "Sony a6400, 85mm",
  },

  // Avatar and cover images (place files under public/images/profile)
  avatar: "/images/profile/dp.jpg",
  cover: "/images/profile/cover.jpg",

  featured: {
    project: "Smart Energy Platform v0.3",
    preview:
      "Smart energy platform combining Sonoff S31 hardware, on-device NILM and anomaly detection, BLE pairing, live dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits.",
    caption: "Smart plug project / preview",
    detail: "UM Technothon 2026 · currently working",
    cover: "/images/projects/smart-plug-hero.png",
  },

  pinned: [
    {
      kind: "PROJECT",
      title: "Zyra",
      desc: "AI-powered nutrition & fitness tracking app with fast meal logging, macro tracking, and personalised health insights.",
      href: "https://github.com/saiket-das/zyra",
    },
    {
      kind: "CASE STUDY",
      title: "Healynx — UM Deep Tech",
      desc: "AI-powered supplement checker and secure medical record storage for clinical workflows.",
      href: "https://healynx-patient.netlify.app/",
    },
    {
      kind: "HACKATHON",
      title: "UM Technothon 2026",
      desc: "Preliminary: 12/74 teams · smart energy platform submission.",
      href: "https://wattwise-technothon.netlify.app/",
    },
    {
      kind: "CAREER",
      title: "Software Developer · InfAI",
      desc: "Promoted from Research Assistant · retrieval and tooling work.",
      href: "https://www.linkedin.com/in/saiket-das02/",
    },
  ],
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
  media?: { label: string; src?: string; alt?: string }[];
  project?: {
    name: string;
    cover: string;
    desc: string;
    stack: string[];
    stats?: { k: string; v: string }[];
    links?: { k: string; l: string }[];
  };
  hack?: {
    name: string;
    placement: string;
    teammates: string[];
    stack: string[];
    url?: string;
  };
  position?: string;
  tags: string[];
  likes: number;
  replies: number;
  shares: number;
}

export const FEED: FeedPost[] = [
  {
    id: "f11",
    type: "hackathon",
    icon: "trophy",
    when: "2025",
    title: "Healynx — UM Deep Tech",
    body: "Healynx is our UM Deep Tech project: an AI-powered supplement checker combined with secure medical record storage to make healthcare smarter, safer, and easier to manage. We turned two Universiti Malaya IPs into a practical solution that fits clinical workflows. Details: https://umdeeptech.com/ — We didn't make finals (out of 55 teams).",
    hack: {
      name: "UM Deep Tech — Healynx",
      placement: "Did not make finals (55 teams)",
      url: "https://umdeeptech.com/",
      teammates: [],
      stack: ["AI", "Secure Storage", "Healthcare"],
    },
    tags: ["hackathon", "umdeeptech", "healthcare"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f12",
    type: "hackathon",
    icon: "trophy",
    when: "2025",
    title: "Smart Energy Platform — UM Technothon",
    body: "Built a smart energy platform combining Sonoff S31 hardware, on-device AI (NILM + anomaly detection), and a mobile dashboard with BLE pairing, live wattage dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits. Still polishing and preparing final submission. Details: https://www.umtechnothon.com/ — Preliminary: 12/74 teams.",
    hack: {
      name: "UM Technothon — Smart Energy Platform",
      placement: "Preliminary: 12/74",
      url: "https://www.umtechnothon.com/",
      teammates: [],
      stack: ["Embedded", "NILM", "BLE", "AI"],
    },
    tags: ["hackathon", "umtechnothon", "energy"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f13",
    type: "project",
    icon: "layers",
    when: "2026",
    title: "Smart Energy Platform — UM Technothon (Currently working)",
    body: "Built a smart energy platform combining Sonoff S31 hardware, on-device AI (NILM + anomaly detection), and a mobile dashboard with BLE pairing, live wattage dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits. Still polishing and preparing final submission.",
    project: {
      name: "Smart Energy Platform",
      cover: "/images/projects/smart-plug-hero.png",
      desc: "Smart energy platform combining Sonoff S31 hardware, on-device NILM and anomaly detection, BLE pairing, live dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits.",
      stack: ["Embedded", "NILM", "BLE", "AI", "React"],
      links: [
        { k: "link", l: "https://wattwise-technothon.netlify.app/" },
        { k: "github", l: "github/saiket-das/um-technothon-26" },
      ],
    },
    tags: ["project", "umtechnothon", "energy"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f14",
    type: "project",
    icon: "layers",
    when: "2026",
    title: "Zyra — AI Nutrition & Fitness (Currently working)",
    body: "AI-powered nutrition & fitness tracking app with fast meal logging, macro tracking, and personalised health insights.",
    project: {
      name: "Zyra",
      cover: "/images/projects/zyra-hero.png",
      desc: "AI-powered nutrition & fitness tracking app with fast meal logging, macro tracking, and personalised health insights.",
      stack: ["React Native", "AI", "Firebase"],
      links: [{ k: "github", l: "github/saiket-das/zyra" }],
    },
    tags: ["project", "ai", "health"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f15",
    type: "project",
    icon: "layers",
    when: "2025",
    title: "Healynx — UM Deep Tech",
    body: "Healynx: an AI-powered supplement checker combined with secure medical record storage to make healthcare smarter, safer, and easier to manage. Prototype and clinic/patient frontends available.",
    project: {
      name: "Healynx",
      cover: "/images/projects/healynx-hero.png",
      desc: "AI-powered supplement checker + secure medical record storage; prototype clinic & patient frontends available.",
      stack: ["AI", "Secure Storage", "Web"],
      links: [
        {
          k: "link",
          l: "https://app.netlify.com/projects/healynx-clinic/overview",
        },
        { k: "link", l: "https://healynx-patient.netlify.app/" },
      ],
    },
    tags: ["project", "umdeeptech", "healthcare"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f16",
    type: "project",
    icon: "layers",
    when: "2023",
    title: "3D Colonial House — Badan Warisan Malaysia",
    body: "Digitally documented a colonial house in partnership with Badan Warisan Malaysia using 3D modelling to create a detailed archive preserving the building's architectural identity.",
    project: {
      name: "3D Colonial House — BWM",
      cover: "/images/projects/3d-model-hero.png",
      desc: "3D digital archive of a colonial house for heritage conservation; prototype viewer available.",
      stack: ["3D Modeling", "Photogrammetry", "WebGL"],
      links: [{ k: "link", l: "https://p3d.in/63rIE/wireonshadeless+spin" }],
    },
    tags: ["project", "heritage", "3d"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f17",
    type: "project",
    icon: "layers",
    when: "2026",
    title: "GameHub — Video Game Discovery",
    body: "GameHub is a video game discovery web app that helps you find new and interesting games to play.",
    project: {
      name: "GameHub",
      cover: "/images/projects/gamehub-hero.png",
      desc: "Video game discovery web app — find new and interesting games to play.",
      stack: ["React", "Next.js", "API"],
      links: [
        { k: "link", l: "https://game-hub-lovat-two.vercel.app/" },
        { k: "github", l: "https://github.com/saiket-das/game-hub" },
      ],
    },
    tags: ["project", "games", "discovery"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f01",
    type: "career",
    icon: "briefcase",
    when: "Aug 2024",
    pinned: true,
    title: "🎉 Promoted — Software Developer at InfAI",
    body: "Promoted to Software Developer from Research Assistant at InfAI. Working across web, app, and design workflows while contributing to developer tooling and retrieval-related features.",
    company: "InfAI",
    position: "Promoted to Software Developer from Research Assistant",
    tags: ["career", "part-time", "ml"],
    likes: 412,
    replies: 38,
    shares: 22,
  },
  // {
  //   id: "f02",
  //   type: "project",
  //   icon: "layers",
  //   when: "1d",
  //   title: "Loomshell v0.3 is live — now with audio-reactive sync",
  //   body: "Six webcams stitched into one timelapse, synced by audio waveform alignment. Spent two weeks on the resync algorithm.",
  //   project: {
  //     name: "Loomshell",
  //     cover: "loomshell / 6-cam stitch preview",
  //     desc: "Multi-cam timelapse stitcher with audio-reactive sync.",
  //     stack: ["Rust", "ffmpeg", "clap", "rustfft"],
  //     stats: [
  //       { k: "stars", v: "1.0k" },
  //       { k: "downloads", v: "8.4k" },
  //       { k: "version", v: "0.3" },
  //     ],
  //     links: [
  //       { k: "github", l: "github/saiketdas/loomshell" },
  //       { k: "link", l: "loomshell.dev" },
  //     ],
  //   },
  //   tags: ["rust", "ffmpeg", "open-source"],
  //   likes: 287,
  //   replies: 19,
  //   shares: 41,
  // },
  // {
  //   id: "f03",
  //   type: "media",
  //   icon: "image",
  //   when: "2d",
  //   title: "Lisbon, in pieces",
  //   body: "Three days walking with the K1000. Portra 400, mostly underexposed by a stop.",
  //   media: [
  //     { label: "tram 28 / alfama" },
  //     { label: "blue tile / lapa" },
  //     { label: "evening / miradouro" },
  //     { label: "fish market / 06:14" },
  //   ],
  //   tags: ["photography", "lisbon", "film"],
  //   likes: 542,
  //   replies: 28,
  //   shares: 15,
  // },
  {
    id: "f18",
    type: "media",
    icon: "image",
    when: "Dec 2021",
    title: "Nepal",
    body: "A selection from Nepal, December 2021. Cold light, big skies, and quiet mountain roads.",
    media: [
      {
        label: "IMG_7043 / nepal",
        src: "/images/photography/nepal/web/IMG_7043.jpg",
        alt: "Nepal photo IMG_7043",
      },
      {
        label: "DSC03352 / nepal",
        src: "/images/photography/nepal/web/DSC03352.jpg",
        alt: "Nepal photo DSC03352",
      },

      {
        label: "IMG_5734 / nepal",
        src: "/images/photography/nepal/web/IMG_5734.jpg",
        alt: "Nepal photo IMG_5734",
      },
      {
        label: "IMG_5947 / nepal",
        src: "/images/photography/nepal/web/IMG_5947.jpg",
        alt: "Nepal photo IMG_5947",
      },
      {
        label: "IMG_4085 / nepal",
        src: "/images/photography/nepal/web/IMG_4085.jpg",
        alt: "Nepal photo IMG_4085",
      },
    ],
    tags: ["photography", "nepal", "2021"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  {
    id: "f19",
    type: "media",
    icon: "image",
    when: "Aug 2021",
    title: "Sunamganj",
    body: "A selection from Sunamganj, August 2021. Water, open fields, and slow afternoons around the haor.",
    media: [
      {
        label: "C0AF109C / sunamganj",
        src: "/images/photography/sunamganj/web/C0AF109C-A9DE-431E-B8EC-E0E1E6FD0E29.jpg",
        alt: "Sunamganj photo C0AF109C",
      },
      {
        label: "DSC06376 / sunamganj",
        src: "/images/photography/sunamganj/web/DSC06376.jpg",
        alt: "Sunamganj photo DSC06376",
      },
      {
        label: "DSC06925 / sunamganj",
        src: "/images/photography/sunamganj/web/DSC06925.jpg",
        alt: "Sunamganj photo DSC06925",
      },
      {
        label: "DSC07477 / sunamganj",
        src: "/images/photography/sunamganj/web/DSC07477.jpg",
        alt: "Sunamganj photo DSC07477",
      },
    ],
    tags: ["photography", "sunamganj", "2021"],
    likes: 0,
    replies: 0,
    shares: 0,
  },
  // {
  //   id: "f04",
  //   type: "thought",
  //   icon: "spark",
  //   when: "3d",
  //   body: "The best part of shooting film is the lag. You see something, you commit, you forget. Three weeks later the lab emails you and it's almost like it happened to someone else.",
  //   tags: ["thoughts", "film"],
  //   likes: 1203,
  //   replies: 87,
  //   shares: 142,
  // },
  // {
  //   id: "f05",
  //   type: "thread",
  //   icon: "layers",
  //   when: "5d",
  //   title: "How I built a CLIP-powered search engine for 12k of my own photos",
  //   body: "Four years of film scans, no way to find anything. Then I taught a model to. A 5-part case study with code, the pivots, and what I'd do differently. Read the thread →",
  //   cover: "embedding atlas / 12k photos",
  //   tags: ["ml", "case-study", "photography"],
  //   likes: 612,
  //   replies: 54,
  //   shares: 89,
  // },
  // {
  //   id: "f07",
  //   type: "code",
  //   icon: "code",
  //   when: "1w",
  //   title: "TIL: Object.groupBy is finally stable in V8",
  //   body: "Spent four years writing reducers for this. Now you can write the whole thing as one expression.",
  //   lang: "typescript",
  //   code: "// before:\nconst byTag = posts.reduce((acc, p) => {\n  (acc[p.tags[0]] ||= []).push(p);\n  return acc;\n}, {});\n\n// after:\nconst byTag = Object.groupBy(posts, p => p.tags[0]);",
  //   tags: ["typescript", "til"],
  //   likes: 156,
  //   replies: 14,
  //   shares: 28,
  // },
  // {
  //   id: "f08",
  //   type: "project",
  //   icon: "layers",
  //   when: "2w",
  //   title: "Frame.fm — subscribe to a friend's contact sheets",
  //   body: "A weekend project that's somehow stuck around. 47 monthly active users.",
  //   project: {
  //     name: "Frame.fm",
  //     cover: "frame.fm / contact sheet preview",
  //     desc: "RSS for film photographers. Subscribe to a friend's contact sheet, get a monthly email digest.",
  //     stack: ["Next.js", "Supabase", "S3"],
  //     stats: [
  //       { k: "users", v: "47" },
  //       { k: "rolls", v: "230" },
  //       { k: "uptime", v: "99.9" },
  //     ],
  //     links: [{ k: "link", l: "frame.fm" }],
  //   },
  //   tags: ["side-project", "react"],
  //   likes: 234,
  //   replies: 31,
  //   shares: 18,
  // },
  // {
  //   id: "f09",
  //   type: "media",
  //   icon: "image",
  //   when: "3w",
  //   title: "Bairro Alto, midnight",
  //   body: "Pushed two stops in the lab. Grain looks like wallpaper, exactly what I wanted.",
  //   media: [{ label: "alley light / 00:14" }],
  //   tags: ["photography", "lisbon"],
  //   likes: 389,
  //   replies: 17,
  //   shares: 8,
  // },
  // {
  //   id: "f10",
  //   type: "thought",
  //   icon: "spark",
  //   when: "1mo",
  //   body: "I keep a folder called /unfinished. It has 47 things in it. I think about it more than my finished work.",
  //   tags: ["thoughts"],
  //   likes: 412,
  //   replies: 24,
  //   shares: 19,
  // },
];

export interface ExpEntry {
  role: string;
  company: string;
  kind: string;
  loc: string;
  start: string;
  end: string;
  duration: string;
  current?: boolean;
  logo?: string;
  bullets: string[];
  stack: string[];
}

export const EXPERIENCE: Record<string, ExpEntry[]> = {
  work: [
    {
      role: "Software Developer",
      company: "InfAI",
      kind: "Part-time",
      logo: "infai.svg",
      loc: "Dhaka, Bangladesh · Remote",
      start: "Aug 2024",
      end: "Present",
      duration: "1 yr 10 mos",
      current: true,
      bullets: [
        "Working as a software developer at InfAI.",
        "Contributing across web, app, and design workflows.",
      ],
      stack: [],
    },
    {
      role: "Research Assistant",
      company: "InfAI",
      kind: "Part-time",
      loc: "Dhaka, Bangladesh · Remote",
      start: "Jun 2024",
      end: "Aug 2024",
      duration: "3 mos",
      bullets: ["Digital Juggler (Web, App, Design)."],
      stack: ["Next.js", "Flutter", "Figma", "Git", "Firebase"],
    },
    {
      role: "Photographer",
      company: "Freelance",
      kind: "Freelance",
      logo: "photo.svg",
      loc: "Remote",
      start: "Jan 2021",
      end: "Present",
      duration: "5 yrs 5 mos",
      current: true,
      bullets: [
        "Travel, urban, portrait, and event photography.",
        "Instagram: @ahan_bryan.",
      ],
      stack: ["Photography", "Adobe Lightroom"],
    },
    {
      role: "Software Developer",
      company: "AjkerMenu",
      kind: "Part-time",
      loc: "Chattogram, Bangladesh · Remote",
      start: "Jan 2023",
      end: "Jan 2023",
      duration: "1 mo",
      bullets: ["Completed onboarding and training in React Native."],
      stack: ["React Native"],
    },
    {
      role: "Web Developer",
      company: "The Moving Image",
      kind: "Internship",
      logo: "moving-image.svg",
      loc: "WP. Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia · Remote",
      start: "May 2022",
      end: "Aug 2022",
      duration: "4 mos",
      bullets: ["Worked remotely as a web developer intern."],
      stack: [],
    },

    {
      role: "Volunteer — Beach Cleanup",
      company: "Earth Warriors Association",
      kind: "Volunteering",
      logo: "earth-warriors.svg",
      loc: "On-campus / Local",
      start: "Jul 2023",
      end: "Sep 2023",
      duration: "3 mos",
      bullets: [
        "The “Beach Cleanup” event with UISS in collaboration with Earth Warriors Association — cleared trash off the beach to protect marine life.",
      ],
      stack: [],
    },
  ],
  education: [
    {
      role: "Bachelor's degree, Computer Science (Software Engineering)",
      company: "University of Malaya",
      kind: "Education",
      loc: "University of Malaya, Kuala Lumpur, Malaysia",
      start: "Oct 2024",
      end: "Present",
      duration: "Present",
      bullets: [
        "Activities and societies: Futsal (Team SE) - Dean’s Club 2025 (Runner-up)",
        "Activities and societies: Futsal (Team SE) - Dean’s Club 2024",
      ],
      stack: ["Computer Science", "Software Engineering"],
    },
    {
      role: "Bachelor's degree, Information Technology",
      company: "UNITAR Education Group",
      kind: "Education",
      loc: "",
      start: "May 2023",
      end: "Sep 2023",
      duration: "5 mos",
      bullets: [
        "Grade: CGPA 3.93",
        "Activities and societies: Photography & Event Management - UISS 2023",
        "Volunteer — Multiple Community Cleanup Initiatives",
      ],
      stack: ["Information Technology", "Photography"],
    },
    {
      role: "Diploma of Education, Information Technology",
      company: "Diploma Program",
      kind: "Education",
      loc: "",
      start: "Sep 2019",
      end: "Sep 2022",
      duration: "3 yrs",
      bullets: ["Grade: CGPA 3.29"],
      stack: ["Information Technology"],
    },
    {
      role: "Secondary School (SSC), Science",
      company: "Solmaid School & College",
      kind: "Education",
      loc: "",
      start: "Jan 2016",
      end: "Feb 2018",
      duration: "2 yrs",
      bullets: [
        "Grade: GPA 5.00",
        "Activities and societies: National School Sports Competition 2017 — Football (Semi-finalist, Dhaka division)",
        "Activities and societies: Secondary School Tournament 2017 — Volleyball (Runners up)",
      ],
      stack: [],
    },
  ],
  hackathons: [
    {
      role: "Healynx — UM Deep Tech (team project)",
      company: "UM Deep Tech",
      kind: "Hackathon",
      logo: "umdeeptech.svg",
      loc: "University of Malaya, Kuala Lumpur, Malaysia · On-site",
      start: "2025",
      end: "2025",
      duration: "Event",
      bullets: [
        "Healynx — AI-powered supplement checks combined with secure medical record storage to reduce drug-supplement risks and streamline clinical workflows.",
        "Turned two Universiti Malaya IPs into a practical prototype; did not reach finals (out of 55 teams).",
        "Competition: https://umdeeptech.com/",
      ],
      stack: ["AI", "Secure Storage", "Web"],
    },
    {
      role: "Smart Energy Platform — UM Technothon (team project)",
      company: "UM Technothon",
      kind: "Hackathon",
      logo: "technothon.svg",
      loc: "University of Malaya, Kuala Lumpur, Malaysia · On-site",
      start: "2025",
      end: "2025",
      duration: "Event",
      bullets: [
        "Smart energy platform using Sonoff S31 hardware, on-device AI (NILM + anomaly detection), BLE pairing, live wattage dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits.",
        "Preliminary round: 12 out of 74 teams; still developing and preparing final submission.",
        "Competition: https://www.umtechnothon.com/",
      ],
      stack: ["Embedded", "NILM", "BLE", "AI"],
    },
  ],
  leadership: [],
  volunteering: [
    {
      role: "Contest Protocol Committee Member",
      company: "Programming League National",
      kind: "Volunteering",
      logo: "pln.svg",
      loc: "On-site",
      start: "Jan 2025",
      end: "May 2025",
      duration: "5 mos",
      bullets: [
        "Served on the contest protocol committee for Programming League National; helped design and review contest problems and protocols (on-site).",
      ],
      stack: [],
    },
    {
      role: "Vice Web Dev Lead & Executive of Multimedia & Publicity",
      company: "UM Technothon",
      kind: "Volunteering",
      logo: "technothon.svg",
      loc: "University of Malaya, Kuala Lumpur, Malaysia · On-site",
      start: "Jan 2025",
      end: "Jun 2025",
      duration: "6 mos",
      bullets: [
        "Led web development and multimedia/publicity efforts for UM Technothon (on-site).",
      ],
      stack: [],
    },
  ],
};

export const PROJECTS = [
  {
    id: "P7",
    name: "Smart Energy Platform",
    year: 2026,
    status: "active",
    cover: "/images/projects/smart-plug-hero.png",
    desc: "Smart energy platform combining Sonoff S31 hardware, on-device NILM and anomaly detection, BLE pairing, live dashboards, predictive scheduling, AI chat, and a Community Grid for energy credits.",
    stack: ["Embedded", "NILM", "BLE", "AI", "React Native"],
    metrics: [{ k: "status", v: "prototype" }],
    links: [
      { k: "link", l: "https://wattwise-technothon.netlify.app/" },
      { k: "github", l: "https://github.com/saiket-das/um-technothon-26" },
    ],
  },
  {
    id: "P8",
    name: "Zyra",
    year: 2026,
    status: "active",
    cover: "/images/projects/zyra-hero.png",
    desc: "AI-powered nutrition & fitness tracking app with fast meal logging, macro tracking, and personalised health insights.",
    stack: ["React Native", "AI", "Supabase"],
    metrics: [],
    links: [{ k: "github", l: "https://github.com/saiket-das/zyra" }],
  },
  {
    id: "P9",
    name: "Healynx",
    year: 2026,
    status: "prototype",
    cover: "/images/projects/healynx-hero.png",
    desc: "AI-powered supplement checker + secure medical record storage; prototype clinic & patient frontends available.",
    stack: ["AI", "Secure Storage", "Web"],
    metrics: [],
    links: [
      {
        k: "link",
        l: "https://app.netlify.com/projects/healynx-clinic/overview",
      },
      { k: "link", l: "https://healynx-patient.netlify.app/" },
    ],
  },
  {
    id: "P10",
    name: "3D Colonial House — BWM",
    year: 2025,
    status: "archived",
    cover: "/images/projects/3d-model-hero.png",
    desc: "3D digital archive of a colonial house produced in partnership with Badan Warisan Malaysia for heritage conservation and research.",
    stack: ["3D Modeling", "Photogrammetry", "WebGL"],
    metrics: [],
    links: [{ k: "link", l: "https://p3d.in/63rIE/wireonshadeless+spin" }],
  },
  {
    id: "P11",
    name: "GameHub",
    year: 2023,
    status: "prototype",
    cover: "/images/projects/gamehub-hero.png",
    desc: "GameHub is a video game discovery web app that helps you find new and interesting games to play.",
    stack: ["React", "Next.js", "API"],
    metrics: [],
    links: [
      { k: "link", l: "https://game-hub-lovat-two.vercel.app/" },
      { k: "github", l: "https://github.com/saiket-das/game-hub" },
    ],
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
  "What projects is Saiket working on?",
  "Tell me about the hackathon work.",
  "Where has Saiket worked?",
  "Is Saiket available for internships?",
  "What photography does Saiket do?",
  "What's Saiket building right now?",
];
