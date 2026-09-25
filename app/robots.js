import { site } from "@/data/site";

// Served at /robots.txt.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
