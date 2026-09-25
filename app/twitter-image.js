import OpengraphImage from "./opengraph-image";
import { site } from "@/data/site";

// Twitter/X uses the same design as the Open Graph image.
export const alt = `${site.name}, ${site.primaryTitle} and ${site.secondaryTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return OpengraphImage();
}
