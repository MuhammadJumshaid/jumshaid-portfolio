import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProfileImage from "@/components/ui/ProfileImage";
import { BoltIcon, CodeIcon, DevicesIcon, LayersIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

const paragraphs = [
  `I'm ${site.name}, a ${site.primaryTitle} and ${site.secondaryTitle} with ${site.experienceYears}+ years of experience. I build modern, responsive and user-friendly web applications with JavaScript, React and Next.js.`,
  "Most of my work is on the frontend: responsive layouts, reusable components and pages that load quickly on any screen size. I like interfaces that feel simple to use, and code that stays easy to read as a project grows.",
  "I also work with .NET Core MVC and SQL Server, which helps me understand how the interface and the data behind it fit together.",
];

// Focus areas, not achievements.
const focusAreas = [
  { title: "Responsive design", text: "Layouts that work from small phones to wide screens.", Icon: DevicesIcon },
  { title: "React and Next.js", text: "Component-based interfaces with modern JavaScript.", Icon: CodeIcon },
  { title: "Performance", text: "Fast pages, lean code and optimised assets.", Icon: BoltIcon },
  { title: "Clean code", text: "Readable, well-structured code that is easy to build on.", Icon: LayersIcon },
];

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <SectionHeading id="about-title" label="About" title="Frontend work, done with care" className="mb-8!" />

          <div className="max-w-measure space-y-5 text-muted">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <h3 className="mt-12 text-label font-medium uppercase text-subtle">What I focus on</h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {focusAreas.map(({ title, text, Icon }) => (
              <li key={title} className="flex gap-4 bg-surface p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border-strong text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-fg">{title}</p>
                  <p className="mt-1 text-small text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          {/* Width leaves room for the offset outline on small phones */}
          <div className="relative mx-auto w-full max-w-[min(20rem,calc(100%-0.75rem))] lg:sticky lg:top-[calc(var(--spacing-nav)+2rem)] lg:mx-0 lg:max-w-none">
            {/* Offset outline, mirroring the hero photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-lg border border-border-strong/70"
            />
            <ProfileImage
              src={site.aboutImage}
              alt={`Portrait of ${site.name}`}
              sizes="(min-width: 1024px) 26rem, 20rem"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
