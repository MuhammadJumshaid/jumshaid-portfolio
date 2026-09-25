import Image from "next/image";
import { publicFileExists } from "@/lib/publicFile";

function hostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

// 16:10 project screenshot inside a light browser frame. Without a
// screenshot it shows the project title on a designed panel instead.
export default function ProjectPreview({ project, sizes, className = "" }) {
  const host = hostname(project.liveUrl);
  const hasImage = publicFileExists(project.image);

  return (
    <div className={`overflow-hidden bg-raised ${className}`}>
      {/* Browser bar */}
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
        </span>
        {host && (
          <span className="min-w-0 truncate rounded-sm bg-bg/60 px-2 py-0.5 text-xs text-subtle">
            {host}
          </span>
        )}
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {hasImage ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 bg-[radial-gradient(circle_at_50%_40%,rgb(240_180_76/0.08),transparent_60%),linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:100%_100%,1.5rem_1.5rem,1.5rem_1.5rem]"
          >
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            <span className="max-w-[80%] text-center font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight font-semibold tracking-tight text-fg">
              {project.title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
