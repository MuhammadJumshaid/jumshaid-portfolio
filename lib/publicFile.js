import fs from "node:fs";
import path from "node:path";

// True if `src` (e.g. "/images/profile/hero.webp") exists in /public.
// Runs at build time in Server Components, so missing files fall back cleanly.
export function publicFileExists(src) {
  if (!src) return false;
  return fs.existsSync(path.join(process.cwd(), "public", src));
}
