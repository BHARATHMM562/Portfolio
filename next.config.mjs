/** @type {import('next').NextConfig} */
const nextConfig = {
  // No output: 'export' — Vercel handles SSG automatically
  // Image optimizer enabled (default)
  images: {
    // Only local images used; no remote patterns needed
  },
};

export default nextConfig;
