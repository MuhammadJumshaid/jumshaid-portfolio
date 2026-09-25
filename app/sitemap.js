import { site } from "@/data/site";

// One-page site, so one URL. Served at /sitemap.xml.
export default function sitemap() {
  return [
    {
      url: `${site.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
