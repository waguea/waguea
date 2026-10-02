import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const TextMark = ({ children }: { children: ReactNode }) => (
  <span className="text-xs font-bold">{children}</span>
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Simple text chips — no external logo dependency, always render.
const chip = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <TextMark>{title.slice(0, 2)}</TextMark>,
});
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  cpp: chip("C++"),
  python: brand("Python", "python-mono.svg"),
  windows: chip("WinAPI"),
  webview: chip("Wv2"),
  nvidia: chip("Nemotron"),
  pytorch: chip("PyTorch"),
  bert: chip("BERT"),
  streamlit: chip("St"),
  sklearn: chip("SK"),
  opencv: chip("CV"),
  react: brand("React.js", "react-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  gcp: chip("GCP"),
  snakemake: chip("Smk"),
  lsf: chip("LSF"),
  bash: chip("sh"),
  r: chip("R"),
  git: chip("Git"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const ME_IMG = "/assets/me.png";
const FILEPEEK_IMG = "/assets/projects/filepeek.jpeg";
const TWEET_IMG = "/assets/projects/tweet.jpeg";
const RESEARCH_IMG = "/assets/projects/research.jpeg";
const RANDOM_IMG = "/assets/projects/random.jpeg";
const projects: Project[] = [
  {
    id: "filepeek",
    category: "Windows native • AI summaries",
    title: "FilePeek",
    src: FILEPEEK_IMG,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.cpp, PROJECT_SKILLS.windows, PROJECT_SKILLS.webview],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.nvidia],
    },
    live: "https://wagueacarinetech-hue.github.io/File-Peek/",
    github: "https://github.com/wagueacarinetech-hue/File-Peek",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Understand a file before you open it — AI summaries inside File Explorer.
          </TypographyP>
          <TypographyP className="font-mono ">
            Native C++ Windows app that watches Explorer hover, then generates
            AI summaries across 8 formats (PDF, DOCX, TXT, MD, CSV, JPG/JPEG/PNG)
            via NVIDIA Nemotron — no copy-paste into an LLM.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Optimization work</TypographyH3>
          <p className="font-mono mb-2">
            Async C++/Python architecture with file-aware caching (path + mtime +
            mode as cache key). Cold Quick Summary latency cut 28.6% (12.92s to
            9.22s); cached hits return instantly. Adaptive Explorer polling keeps
            idle CPU near 0% while staying responsive.
          </p>
          <SlideShow images={[FILEPEEK_IMG]} />
        </div>
      );
    },
  },
  {
    id: "ai-tweet-detection",
    category: "ML • NLP",
    title: "AI Tweet Detection",
    src: TWEET_IMG,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.pytorch, PROJECT_SKILLS.bert, PROJECT_SKILLS.sklearn],
    },
    live: "https://amgazal.github.io/Machine-Learning-project-22D/",
    github: "https://github.com/amgazal/Machine-Learning-project-22D",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Human vs AI tweets — 92.1% accuracy with fine-tuned BERT.
          </TypographyP>
          <TypographyP className="font-mono ">
            Co-built classifier on 35,443 tweets (TweepFake + ElectAI). Logistic
            Regression baseline, Random Forest, then fine-tuned BERT (92.1%
            accuracy, 0.930 F1). Streamlit app for live + batch predictions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Bias finding</TypographyH3>
          <p className="font-mono mb-2">
            Per-source breakdown exposed topic leakage: 98.1% on ElectAI vs 76.3%
            on TweepFake — the model partly learned election-topic as a proxy for
            AI label. Takeaway: aggregate accuracy hides bias; disaggregated eval
            surfaces it.
          </p>
          <SlideShow images={[TWEET_IMG]} />
        </div>
      );
    },
  },
  {
    id: "logsdon-research",
    category: "Research • Computational genomics",
    title: "Logsdon Lab Research",
    src: RESEARCH_IMG,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.bash, PROJECT_SKILLS.r],
      backend: [PROJECT_SKILLS.snakemake, PROJECT_SKILLS.lsf],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DNA repeat variation across 139 human genomes.
          </TypographyP>
          <TypographyP className="font-mono ">
            Automated Python/Bash pipeline on HPC (LSF + Snakemake). Investigated
            a 31% systematic gap between counting methods; built RepeatContact, a
            Fourier-analysis signal tool tested on simulated data, plus a
            sequence-based centromere activity predictor.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[RESEARCH_IMG]} />
        </div>
      );
    },
  },
  {
    id: "random-things",
    category: "Python utilities",
    title: "Random Things",
    src: RANDOM_IMG,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.bash],
      backend: [PROJECT_SKILLS.git],
    },
    live: "#",
    github: "https://github.com/wagueacarinetech-hue/duplicate-file-finder",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sometimes I discover I need something — so I just build it, impromptu.
          </TypographyP>
          <TypographyP className="font-mono ">
            Small Python tools born from everyday annoyances. No frameworks, no
            fanfare — just scripts that solve one problem well.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">duplicate-file-finder</TypographyH3>
          <p className="font-mono mb-2">
            My Downloads folder kept filling up with copies of the same files
            under different names. This script fingerprints every file with MD5
            hashing — so it finds true duplicates by content, not filename —
            keeps the oldest copy, and moves the rest into a duplicates/ folder
            for review (never auto-deletes). It logs everything it moves and can
            run daily on a schedule.
          </p>
          <TypographyH3 className="my-4 mt-8">rename-files</TypographyH3>
          <p className="font-mono mb-2">
            After downloading lecture slides as PDFs, every filename still had
            .pptx stuck in it (lecture.pptx.pdf). This interactive script removes
            any substring from filenames: point it at a folder (or drag and drop
            one in), optionally limit to certain extensions, preview every rename,
            and confirm before anything changes. Works on any file type, on
            Windows, Mac, and Linux, with zero dependencies.
          </p>
        </div>
      );
    },
  },
];
export default projects;
