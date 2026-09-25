import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProjectPreview from "@/components/ui/ProjectPreview";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/Icons";

// One project. Empty fields are skipped. The card itself is not a link;
// the two buttons are the only interactive parts.
//
// wide:    image and details side by side from lg up (featured layout)
// reverse: in the wide layout, put the image on the right
export default function ProjectCard({ project, wide = false, reverse = false, featured = false }) {
  const { title, category, description, technologies, liveUrl, githubUrl } = project;
  const label = [featured && "Featured project", category].filter(Boolean).join(" · ");

  return (
    <article
      className={`card card-interactive group h-full overflow-hidden hover:-translate-y-1.5 hover:border-accent/40 motion-reduce:hover:translate-y-0 ${
        wide ? "flex flex-col lg:grid lg:grid-cols-12" : "flex flex-col"
      }`}
    >
      <ProjectPreview
        project={project}
        sizes={wide ? "(min-width: 1024px) 42rem, 100vw" : "(min-width: 768px) 36rem, 100vw"}
        className={
          wide
            ? `border-b border-border lg:col-span-7 lg:self-center lg:border-b-0 ${
                reverse ? "lg:order-2 lg:border-l" : "lg:border-r"
              }`
            : "border-b border-border"
        }
      />

      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 ${
          wide ? "lg:col-span-5 lg:justify-center lg:p-10" : ""
        }`}
      >
        {label && <p className="mb-2 text-label font-medium uppercase text-accent">{label}</p>}
        <h3 className={`text-fg ${wide ? "text-h3 lg:text-[1.75rem] lg:leading-tight" : "text-h3"}`}>{title}</h3>
        {description && <p className="mt-3 max-w-measure text-muted">{description}</p>}

        {technologies?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
            {technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        )}

        {(liveUrl || githubUrl) && (
          <div className={`flex flex-wrap gap-3 pt-6 ${wide ? "lg:pt-8" : "mt-auto"}`}>
            {liveUrl && (
              <Button href={liveUrl} external aria-label={`Open ${title} live demo (opens in a new tab)`}>
                Live Demo
                <ExternalLinkIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                external
                variant="secondary"
                aria-label={`View ${title} source code on GitHub (opens in a new tab)`}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
