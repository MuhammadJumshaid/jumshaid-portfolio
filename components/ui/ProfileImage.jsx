import Image from "next/image";
import { publicFileExists } from "@/lib/publicFile";
import { site } from "@/data/site";

// Profile photo with an "MJ" fallback, so the layout holds even when the
// photo is missing. The caller sets the size/aspect ratio via className.
export default function ProfileImage({ src, alt, sizes, preload = false, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border bg-surface ${className}`}>
      {publicFileExists(src) ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-[center_20%]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:2rem_2rem]"
        >
          <span className="font-display text-[clamp(4rem,12vw,7.5rem)] leading-none font-semibold tracking-tighter text-accent">
            {site.initials}
          </span>
        </div>
      )}
    </div>
  );
}
