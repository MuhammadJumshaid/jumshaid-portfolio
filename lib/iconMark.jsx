import { site } from "@/data/site";

// "MJ" mark used by app/icon.js and app/apple-icon.js (rendered by ImageResponse).
export default function IconMark({ scale = 1 }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0b0d10",
        borderRadius: 14 * scale,
        border: `${2 * scale}px solid #3a424d`,
        color: "#f0b44c",
        fontSize: 30 * scale,
        fontWeight: 700,
        letterSpacing: -1 * scale,
      }}
    >
      {site.initials}
    </div>
  );
}
