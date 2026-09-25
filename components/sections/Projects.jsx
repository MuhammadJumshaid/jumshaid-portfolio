import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  // First featured project gets the large layout; the rest go in a grid.
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== featured);
  // A single leftover card would look lost in a two-column grid, so it
  // gets the wide layout too (image on the other side).
  const othersWide = others.length === 1;

  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        label="Projects"
        title="Things I have built"
        intro="Some of the web applications I have built."
      />

      <div className="space-y-6 lg:space-y-8">
        {featured && (
          <Reveal>
            <ProjectCard project={featured} wide featured />
          </Reveal>
        )}
        {others.length > 0 && (
          <ul className={othersWide ? "" : "grid gap-6 md:grid-cols-2 lg:gap-8"}>
            {others.map((project, index) => (
              <Reveal as="li" key={project.slug} delay={othersWide ? 0 : (index % 2) * 100}>
                <ProjectCard project={project} wide={othersWide} reverse={othersWide && Boolean(featured)} />
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
