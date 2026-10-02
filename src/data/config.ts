const config = {
  title: "Waguea Carine Fongang | Computer Engineering @ UPenn",
  description: {
    long: "Portfolio of Waguea Carine Fongang, Computer Engineering at the University of Pennsylvania. Projects include FilePeek, AI Tweet Detection, BioQuery, and computational genomics research.",
    short:
      "Waguea Carine Fongang — Computer Engineering @ UPenn.",
  },
  keywords: [
    "Waguea Carine Fongang",
    "computer engineering",
    "UPenn",
    "FilePeek",
    "AI Tweet Detection",
    "BioQuery",
    "computational genomics",
    "RepeatContact",
    "Python",
    "C++",
    "OpenCV",
    "React",
    "Next.js",
  ],
  author: "Waguea Carine Fongang",
  email: "fongang7@engineering.upenn.edu",
  phone: "(215) 252-0199",
  // Leave blank until Vercel URL is set — layout/robots/sitemap fall back to localhost
  site: "",

  // for github stars button
  githubUsername: "waguea",
  githubRepo: "waguea",

  get ogImg() {
    // No custom domain yet — use local photo so OG never points at the old template domain
    if (!this.site) return "/assets/me.png";
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/fongangcarine",
    instagram: "",
    facebook: "",
    github: "https://github.com/waguea",
  },
};
export { config };
