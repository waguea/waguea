// Skills + experience for Waguea Carine Fongang
// Computer Engineering @ UPenn
export enum SkillNames {
  PYTHON = "python",
  CPP = "cpp",
  C = "c",
  JAVA = "java",
  TYPESCRIPT = "typescript",
  HTML = "html",
  CSS = "css",
  OCAML = "ocaml",
  SQL = "sql",
  BASH = "bash",
  R = "r",
  PYTORCH = "pytorch",
  OPENCV = "opencv",
  STREAMLIT = "streamlit",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  GIT = "git",
  LINUX = "linux",
  FIREBASE = "firebase",
  GCP = "gcp",
  SNAKEMAKE = "snakemake",
  LSF = "lsf",
  WINDOWS = "windows",
  DOCKER = "docker",
  GITHUB = "github",
  VERILOG = "verilog",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
const cdn = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "genomics pipelines, ML apps, signal processing",
    color: "#3776ab",
    icon: cdn("python/python-original.svg"),
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "native Windows apps, latency optimization",
    color: "#659ad2",
    icon: cdn("cplusplus/cplusplus-original.svg"),
  },
  [SkillNames.C]: {
    id: 3,
    name: "c",
    label: "C",
    shortDescription: "systems foundations",
    color: "#a8b9cc",
    icon: cdn("c/c-original.svg"),
  },
  [SkillNames.JAVA]: {
    id: 4,
    name: "java",
    label: "Java",
    shortDescription: "DSA + coursework",
    color: "#ed8b00",
    icon: cdn("java/java-original.svg"),
  },
  [SkillNames.TYPESCRIPT]: {
    id: 5,
    name: "typescript",
    label: "TypeScript",
    shortDescription: "typed web UIs for demos",
    color: "#007acc",
    icon: cdn("typescript/typescript-original.svg"),
  },
  [SkillNames.OCAML]: {
    id: 6,
    name: "ocaml",
    label: "OCaml",
    shortDescription: "programming languages coursework",
    color: "#ee6a1a",
    icon: cdn("ocaml/ocaml-original.svg"),
  },
  [SkillNames.SQL]: {
    id: 7,
    name: "sql",
    label: "SQL",
    shortDescription: "querying datasets",
    color: "#336791",
    icon: cdn("postgresql/postgresql-original.svg"),
  },
  [SkillNames.BASH]: {
    id: 8,
    name: "bash",
    label: "Bash",
    shortDescription: "HPC pipelines, automation",
    color: "#4eaa25",
    icon: cdn("bash/bash-original.svg"),
  },
  [SkillNames.R]: {
    id: 9,
    name: "r",
    label: "R",
    shortDescription: "genomics plots + stats",
    color: "#276dc3",
    icon: cdn("r/r-original.svg"),
  },
  [SkillNames.PYTORCH]: {
    id: 10,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "ML models incl. BERT fine-tuning",
    color: "#ee4c2c",
    icon: cdn("pytorch/pytorch-original.svg"),
  },
  [SkillNames.OPENCV]: {
    id: 11,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "edge vision: capture, blur + contour",
    color: "#5c3ee8",
    icon: cdn("opencv/opencv-original.svg"),
  },
  [SkillNames.STREAMLIT]: {
    id: 12,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "fast ML demos",
    color: "#ff4b4b",
    icon: cdn("streamlit/streamlit-original.svg"),
  },
  [SkillNames.REACT]: {
    id: 13,
    name: "react",
    label: "React",
    shortDescription: "portfolio + demo frontends",
    color: "#61dafb",
    icon: cdn("react/react-original.svg"),
  },
  [SkillNames.HTML]: {
    id: 23,
    name: "html",
    label: "HTML",
    shortDescription: "production sites at the Netter Center",
    color: "#e34c26",
    icon: cdn("html5/html5-original.svg"),
  },
  [SkillNames.CSS]: {
    id: 24,
    name: "css",
    label: "CSS",
    shortDescription: "styling content sites + portfolios",
    color: "#563d7c",
    icon: cdn("css3/css3-original.svg"),
  },
  [SkillNames.NEXTJS]: {
    id: 25,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "this portfolio + web apps",
    color: "#fff",
    icon: cdn("nextjs/nextjs-original.svg"),
  },
  [SkillNames.TAILWIND]: {
    id: 26,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility-first styling",
    color: "#38bdf8",
    icon: cdn("tailwindcss/tailwindcss-plain.svg"),
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "version control",
    color: "#f1502f",
    icon: cdn("git/git-original.svg"),
  },
  [SkillNames.LINUX]: {
    id: 15,
    name: "linux",
    label: "Linux",
    shortDescription: "HPC + dev environment",
    color: "#fff",
    icon: cdn("linux/linux-original.svg"),
  },
  [SkillNames.FIREBASE]: {
    id: 16,
    name: "firebase",
    label: "Firebase",
    shortDescription: "auth + backend for apps",
    color: "#ffca28",
    icon: cdn("firebase/firebase-plain.svg"),
  },
  [SkillNames.GCP]: {
    id: 17,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "cloud backend",
    color: "#4285f4",
    icon: cdn("googlecloud/googlecloud-original.svg"),
  },
  [SkillNames.SNAKEMAKE]: {
    id: 18,
    name: "snakemake",
    label: "Snakemake",
    shortDescription: "reproducible genome workflows",
    color: "#41931a",
    icon: cdn("snakemake/snakemake-original.svg"),
  },
  [SkillNames.LSF]: {
    id: 19,
    name: "lsf",
    label: "LSF HPC",
    shortDescription: "parallel jobs on the cluster",
    color: "#00a4cc",
    icon: cdn("linux/linux-original.svg"),
  },
  [SkillNames.WINDOWS]: {
    id: 20,
    name: "windows",
    label: "Windows API",
    shortDescription: "Explorer integration + WebView2",
    color: "#0078d6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 21,
    name: "docker",
    label: "Docker",
    shortDescription: "reproducible envs",
    color: "#2496ed",
    icon: cdn("docker/docker-original.svg"),
  },
  [SkillNames.GITHUB]: {
    id: 22,
    name: "github",
    label: "GitHub",
    shortDescription: "code + releases",
    color: "#000000",
    icon: cdn("github/github-original.svg"),
  },
  [SkillNames.VERILOG]: {
    id: 27,
    name: "verilog",
    label: "Verilog",
    shortDescription: "hardware description + digital design",
    color: "#7a5195",
    icon:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect width='128' height='128' rx='24' fill='%237a5195'/><text x='64' y='88' font-size='68' text-anchor='middle' fill='white' font-family='monospace' font-weight='bold'>V</text></svg>",
  },
};

/** Hardware-leaning skills (systems, HDL, HPC) vs software-leaning ones. */
export const HARDWARE_SKILLS: SkillNames[] = [
  SkillNames.C,
  SkillNames.CPP,
  SkillNames.VERILOG,
  SkillNames.OCAML,
  SkillNames.BASH,
  SkillNames.LINUX,
  SkillNames.WINDOWS,
  SkillNames.LSF,
  SkillNames.SNAKEMAKE,
  SkillNames.DOCKER,
  SkillNames.GIT,
  SkillNames.GITHUB,
];

export const SOFTWARE_SKILLS: SkillNames[] = [
  SkillNames.PYTHON,
  SkillNames.JAVA,
  SkillNames.TYPESCRIPT,
  SkillNames.HTML,
  SkillNames.CSS,
  SkillNames.R,
  SkillNames.PYTORCH,
  SkillNames.OPENCV,
  SkillNames.STREAMLIT,
  SkillNames.REACT,
  SkillNames.NEXTJS,
  SkillNames.TAILWIND,
  SkillNames.SQL,
  SkillNames.FIREBASE,
  SkillNames.GCP,
];

/**
 * Maps 3D-keyboard keycap object names (baked into the Spline scene) to this
 * portfolio's skills. The scene's keycap names come from the original template,
 * so without this map most keycaps would show no popup. Only genuinely-used
 * tools are mapped — unmapped keycaps simply stay quiet.
 */
export const SCENE_KEY_ALIAS: Record<string, SkillNames> = {
  js: SkillNames.TYPESCRIPT,
  ts: SkillNames.TYPESCRIPT,
  html: SkillNames.HTML,
  css: SkillNames.CSS,
  react: SkillNames.REACT,
  nextjs: SkillNames.NEXTJS,
  tailwind: SkillNames.TAILWIND,
  nodejs: SkillNames.TYPESCRIPT,
  npm: SkillNames.TYPESCRIPT,
  express: SkillNames.TYPESCRIPT,
  prettier: SkillNames.TYPESCRIPT,
  postgres: SkillNames.SQL,
  mongodb: SkillNames.SQL,
  git: SkillNames.GIT,
  github: SkillNames.GITHUB,
  linux: SkillNames.LINUX,
  vim: SkillNames.LINUX,
  docker: SkillNames.DOCKER,
  gcp: SkillNames.GCP,
  aws: SkillNames.GCP,
  firebase: SkillNames.FIREBASE,
  vercel: SkillNames.VERILOG,
};

export const lookupSkill = (sceneName: string): Skill | undefined =>
  SKILLS[sceneName as SkillNames] ??
  (SCENE_KEY_ALIAS[sceneName]
    ? SKILLS[SCENE_KEY_ALIAS[sceneName]]
    : undefined);

/** Every 3D keycap name that should float/animate (scene keys, not skill keys). */
export const ANIMATED_SCENE_KEYS: string[] = [
  ...new Set([
    ...Object.values(SKILLS).map((s) => s.name),
    ...Object.keys(SCENE_KEY_ALIAS),
  ]),
];

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Sep 2026",
    endDate: "Dec 2026",
    title: "Software Engineer",
    company: "JoyNet — SAFELab, University of Pennsylvania",
    description: [
      "Part-time Software Engineer (Fall 2026) on JoyNet, a social platform built around positive short-form video, part of SAFELab at UPenn.",
      "Working directly alongside the founder on day-to-day product development across the stack.",
    ],
    skills: [
      SkillNames.TYPESCRIPT,
      SkillNames.REACT,
      SkillNames.PYTHON,
      SkillNames.FIREBASE,
      SkillNames.GCP,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    title: "Research Assistant",
    company: "Logsdon Lab, University of Pennsylvania",
    description: [
      "Built an automated Python/Bash pipeline measuring disease-linked DNA repeat copy number across 139 diverse human genome assemblies — including the first characterization of understudied African populations — orchestrating parallel analyses on an HPC cluster with LSF and Snakemake.",
      "Developed RepeatContact, a Python signal-processing tool that counts DNA repeats directly from raw Nanopore electrical signals using Dynamic Time Warping and Fourier analysis; validated on simulated genomic data.",
      "Identified a 31% systematic gap between two repeat-counting methods; built a third independently-anchored validation approach to investigate it.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.BASH,
      SkillNames.LINUX,
      SkillNames.SNAKEMAKE,
      SkillNames.LSF,
      SkillNames.R,
      SkillNames.SQL,
    ],
  },
  {
    id: 3,
    startDate: "Apr 2026",
    endDate: "Present",
    title: "Website Support Associate",
    company: "Netter Center for Community Partnerships, UPenn",
    description: [
      "Maintain three production websites — Netter Center, Penn Leads the Vote, and University-Assisted Community Schools — serving ~300 universities and 1,200+ community partners.",
      "Ship technical updates and public-facing content with HTML/CSS to keep organizational information current and accessible.",
    ],
    skills: [SkillNames.HTML, SkillNames.CSS, SkillNames.TYPESCRIPT, SkillNames.GIT],
  },
  {
    id: 4,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Course Instructor",
    company: "Fife-Penn STEM & CS Academy",
    description: [
      "Teaching robotics, Python, Scratch, and web development to K-8 students in Philadelphia through Penn Engineering's free after-school program.",
      "Building curriculum and mentoring students in computational thinking and problem-solving.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.TYPESCRIPT, SkillNames.GIT],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
