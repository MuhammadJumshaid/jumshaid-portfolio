import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Social preview image (1200x630), generated at build time.
export const alt = `${site.name}, ${site.primaryTitle} and ${site.secondaryTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#0b0d10",
  surface: "#12161b",
  border: "#262c35",
  fg: "#e9ebee",
  muted: "#9ba4b0",
  accent: "#f0b44c",
};

// Show the domain only once a real site URL is set.
const host = site.siteUrl.includes("localhost") ? "" : site.siteUrl.replace(/^https?:\/\//, "");

// Heading font (SIL Open Font License), used for the name and the mark.
const headingFont = readFile(join(process.cwd(), "assets/fonts/BricolageGrotesque-Bold.ttf"));

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: colors.bg,
          backgroundImage: `radial-gradient(circle at 50% -20%, rgba(240,180,76,0.16), transparent 60%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
          color: colors.fg,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 12,
              border: `2px solid ${colors.border}`,
              backgroundColor: colors.surface,
              color: colors.accent,
              fontSize: 28,
              fontFamily: "Bricolage",
            }}
          >
            {site.initials}
          </div>
          {host && <div style={{ display: "flex", fontSize: 26, color: colors.muted }}>{host}</div>}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: colors.accent,
            }}
          >
            {site.primaryTitle} · {site.secondaryTitle}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontFamily: "Bricolage", fontSize: 112, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: colors.muted }}>
            Fast, responsive web apps with React and Next.js
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Bricolage", data: await headingFont, weight: 700, style: "normal" }],
    },
  );
}
