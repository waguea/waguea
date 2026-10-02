/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers() {
    // NOTE: long-lived immutable caching is production-only. Sending it in
    // `next dev` makes browsers keep stale JS chunks forever (immutable means
    // "never revalidate"), which breaks hot updates after code changes.
    const cacheHeaders = isProd
      ? [
          {
            source: "/assets/(.*)",
            headers: [
              { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
            ],
          },
          {
            source: "/_next/static/(.*)",
            headers: [
              { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
            ],
          },
        ]
      : [];
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (not DENY) so the resume page can embed its own PDF;
          // still blocks other sites from framing us (clickjacking protection).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      ...cacheHeaders,
    ];
  },
};

export default nextConfig;
