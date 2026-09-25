import { ImageResponse } from "next/og";
import IconMark from "@/lib/iconMark";

// Favicon: "MJ" in the accent colour on the site background.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<IconMark />, size);
}
