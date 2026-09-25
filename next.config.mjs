/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first (smaller), WebP as the fallback.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Inline Tailwind's small stylesheet in <head> so it does not block the
    // first render with an extra request.
    inlineCss: true,
  },
};

export default nextConfig;
