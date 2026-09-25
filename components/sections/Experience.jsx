import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

// Renders nothing until data/experience.js has entries. The nav link is
// hidden the same way (see data/navigation.js). Empty fields are skipped.
export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeading id="experience-title" label="Experience" title="Where I have worked" />

      <ol className="relative">
        {experience.map((job, index) => {
          const meta = [job.period, job.location].filter(Boolean);
          return (
            <li
              key={`${job.company}-${job.role}-${index}`}
              className="relative grid gap-3 border-l border-border pb-12 pl-8 last:pb-0 md:grid-cols-12 md:gap-8 md:border-l-0 md:pl-0"
            >
              {/* Timeline dot. On md+ the line runs between the two columns. */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-1 size-[9px] rounded-full border-2 border-accent bg-bg md:left-[calc(25%-4.5px)]"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-[25%] hidden w-px bg-border md:block"
              />

              {meta.length > 0 && (
                <p className="text-small text-subtle md:col-span-3 md:pt-0.5 md:pr-8 md:text-right">
                  {meta.map((item, i) => (
                    <span key={item} className="block">
                      {i === 0 ? <span className="text-muted">{item}</span> : item}
                    </span>
                  ))}
                </p>
              )}

              <div className="md:col-span-9 md:col-start-4 md:pl-8">
                {job.role && <h3 className="text-h3 text-fg">{job.role}</h3>}
                {job.company && <p className="mt-1 font-medium text-accent">{job.company}</p>}
                {job.description && <p className="mt-4 max-w-measure text-muted">{job.description}</p>}

                {job.highlights?.length > 0 && (
                  <ul className="mt-4 max-w-measure space-y-2 text-muted">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {job.technologies?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
