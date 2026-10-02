"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { publishPost, verifyAdminPassword } from "@/actions/publish-post";

type PickedImage = { name: string; base64: string; preview: string };

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(new Error("read failed"));
    reader.readAsDataURL(file);
  });
}

export default function AdminClient() {
  const [unlocked, setUnlocked] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [lockError, setLockError] = React.useState("");
  const [checking, setChecking] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [body, setBody] = React.useState("");
  const [kind, setKind] = React.useState<"blog" | "log">("log");
  const [tags, setTags] = React.useState("");
  const [images, setImages] = React.useState<PickedImage[]>([]);
  const [publishing, setPublishing] = React.useState(false);
  const [error, setError] = React.useState("");
  const [doneSlug, setDoneSlug] = React.useState("");

  const unlock = async () => {
    setChecking(true);
    setLockError("");
    try {
      if (await verifyAdminPassword(password)) {
        setUnlocked(true);
        setPassword("");
      } else {
        setLockError("Wrong password.");
      }
    } catch {
      setLockError("Couldn't check. Try again.");
    }
    setChecking(false);
  };

  const onFiles = async (files: FileList | null) => {
    if (!files) return;
    setError("");
    const next: PickedImage[] = [];
    for (const file of Array.from(files).slice(0, 8 - images.length)) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > MAX_IMAGE_BYTES) {
        setError(`"${file.name}" is over 4 MB — pick a smaller one.`);
        continue;
      }
      try {
        next.push({
          name: file.name,
          base64: await fileToBase64(file),
          preview: URL.createObjectURL(file),
        });
      } catch {
        setError(`Couldn't read "${file.name}".`);
      }
    }
    setImages((prev) => [...prev, ...next].slice(0, 8));
  };

  const publish = async () => {
    setPublishing(true);
    setError("");
    setDoneSlug("");
    // Password was cleared from memory on unlock; ask again at publish time
    // so a shared/unattended screen can't post.
    const pw = window.prompt("Enter your admin password to publish:");
    if (!pw) {
      setPublishing(false);
      return;
    }
    const res = await publishPost({
      password: pw,
      title,
      summary,
      body,
      kind,
      tags,
      images: images.map(({ name, base64 }) => ({ name, base64 })),
    });
    setPublishing(false);
    if (res.ok) {
      setDoneSlug(res.slug);
      setTitle("");
      setSummary("");
      setBody("");
      setTags("");
      setImages([]);
    } else {
      setError(res.error);
    }
  };

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 font-sans">
        <Card>
          <CardHeader>
            <CardTitle>Private area</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && unlock()}
              placeholder="Admin password"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            {lockError && <p className="text-sm text-red-400">{lockError}</p>}
            <Button onClick={unlock} disabled={checking} className="w-full">
              {checking ? "Checking…" : "Unlock"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (doneSlug) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-4 font-sans">
        <Card>
          <CardHeader>
            <CardTitle>Published!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your post is saved and the site is redeploying — it appears in
              about a minute.
            </p>
            <div className="flex gap-2">
              <Link href={`/blogs/${doneSlug}`}>
                <Button>View it</Button>
              </Link>
              <Button variant="outline" onClick={() => setDoneSlug("")}>
                Write another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-24 pt-24 font-sans md:pt-32">
      <h1 className="mb-1 font-display text-2xl font-bold">New post</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Type it here, attach pictures, publish — it goes live by itself.
        Pictures appear at the end, in order.
      </p>

      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What did you build?"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            One-line summary
          </label>
          <input
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Shown on the card"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Type</label>
          <div className="flex gap-2">
            {(["log", "blog"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setKind(k)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  kind === k
                    ? "border-primary/50 bg-primary/10 text-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {k === "log" ? "Log (quick note)" : "Blog (longer write-up)"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Tags <span className="text-muted-foreground">(optional, comma separated)</span>
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="robotics, research"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Text</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={"Write it like a message.\n\nBlank line = new paragraph.\n# Heading\n**bold**"}
            rows={12}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Pictures <span className="text-muted-foreground">(optional, max 4 MB each)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              onFiles(e.target.files);
              e.target.value = "";
            }}
            className="w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border file:border-border file:bg-secondary file:px-4 file:py-2 file:text-sm"
          />
          {images.length > 0 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <div key={`${img.name}-${i}`} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.preview}
                    alt={img.name}
                    className="h-20 w-full rounded-lg border border-border object-cover"
                  />
                  <button
                    onClick={() =>
                      setImages((prev) => prev.filter((_, j) => j !== i))
                    }
                    aria-label={`Remove ${img.name}`}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-xs text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <Button onClick={publish} disabled={publishing} className="w-full" size="lg">
          {publishing ? "Publishing…" : "Publish"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Goes live on its own in about a minute. Nothing else to do.
        </p>
      </div>
    </div>
  );
}
