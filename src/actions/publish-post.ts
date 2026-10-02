"use server";

const OWNER = process.env.GITHUB_OWNER || "waguea";
const REPO = process.env.GITHUB_REPO || "waguea";
const BRANCH = process.env.GITHUB_BRANCH || "main";

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const MAX_IMAGES = 8;

export async function verifyAdminPassword(
  password: string
): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected || !password) return false;
  return password === expected;
}

type PublishImage = { name: string; base64: string };

type PublishInput = {
  password: string;
  title: string;
  summary: string;
  body: string;
  kind: "blog" | "log";
  tags: string;
  images: PublishImage[];
};

function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 60) || "untitled"
  );
}

function sanitizeFileName(name: string): string {
  const base = name.split("/").pop()?.split("\\").pop() ?? "image";
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/^\.+/, "")
      .slice(0, 80) || "image.jpg"
  );
}

async function github(
  path: string,
  init?: RequestInit
): Promise<{ ok: boolean; status: number; json: any }> {
  const token = process.env.GITHUB_TOKEN || "";
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  let json: any = null;
  try {
    json = await res.json();
  } catch {
    /* empty body */
  }
  return { ok: res.ok, status: res.status, json };
}

export async function publishPost(
  input: PublishInput
): Promise<{ ok: true; slug: string } | { ok: false; error: string }> {
  if (!(await verifyAdminPassword(input.password))) {
    return { ok: false, error: "Wrong password." };
  }
  if (!process.env.GITHUB_TOKEN) {
    return { ok: false, error: "Publishing is not configured (missing token)." };
  }

  const title = input.title.trim();
  const summary = input.summary.trim();
  const body = input.body.replace(/\r\n/g, "\n").trim();
  if (!title) return { ok: false, error: "Give your post a title." };
  if (!summary) return { ok: false, error: "Add a one-line summary." };
  if (!body) return { ok: false, error: "Write something first." };
  if (body.startsWith("---")) {
    return { ok: false, error: "The text can't start with --- ." };
  }
  const kind = input.kind === "log" ? "log" : "blog";
  const tags = input.tags
    .split(",")
    .map((t) => t.trim().toLowerCase().replace(/[^a-z0-9-]+/g, ""))
    .filter(Boolean)
    .slice(0, 6);

  const images = (input.images || []).slice(0, MAX_IMAGES);
  for (const img of images) {
    const bytes = Math.ceil((img.base64.length * 3) / 4);
    if (!img.base64 || bytes > MAX_IMAGE_BYTES) {
      return {
        ok: false,
        error: `"${img.name}" is too big (max 4 MB per picture).`,
      };
    }
  }

  // Find a free slug.
  const base = slugify(title);
  let slug = base;
  for (let n = 2; n < 20; n++) {
    const check = await github(
      `/repos/${OWNER}/${REPO}/contents/src/content/blogs/${slug}.mdx?ref=${BRANCH}`
    );
    if (check.status === 404) break;
    if (!check.ok && check.status !== 404) {
      return { ok: false, error: "Couldn't reach GitHub. Try again." };
    }
    slug = `${base}-${n}`;
  }

  const today = new Date().toISOString().slice(0, 10);
  const author = "Waguea Carine Fongang";

  // Upload pictures first so the text can point at them.
  const imageMarkdown: string[] = [];
  for (const img of images) {
    const fileName = sanitizeFileName(img.name);
    const repoPath = `public/assets/blogs/${slug}/${fileName}`;
    const put = await github(`/repos/${OWNER}/${REPO}/contents/${repoPath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `Add picture for "${title}"`,
        content: img.base64,
        branch: BRANCH,
      }),
    });
    if (!put.ok) {
      return { ok: false, error: "Picture upload failed. Try again." };
    }
    imageMarkdown.push(`![${fileName}](/assets/blogs/${slug}/${fileName})`);
  }

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, "'")}"`,
    `publishedAt: "${today}"`,
    `summary: "${summary.replace(/"/g, "'")}"`,
    `author: "${author}"`,
    ...(tags.length ? [`tags: [${tags.map((t) => `"${t}"`).join(", ")}]`] : []),
    `kind: "${kind}"`,
    "---",
    "",
  ].join("\n");

  const mdx =
    frontmatter +
    body +
    (imageMarkdown.length ? "\n\n" + imageMarkdown.join("\n\n") + "\n" : "");

  const put = await github(
    `/repos/${OWNER}/${REPO}/contents/src/content/blogs/${slug}.mdx`,
    {
      method: "PUT",
      body: JSON.stringify({
        message: `Publish ${kind}: ${title}`,
        content: Buffer.from(mdx, "utf8").toString("base64"),
        branch: BRANCH,
      }),
    }
  );
  if (!put.ok) {
    return { ok: false, error: "Couldn't save the post. Try again." };
  }

  return { ok: true, slug };
}
