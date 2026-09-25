import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeading
        id="skills-title"
        label="Skills"
        title="Tools I work with"
        intro="The languages, frameworks and tools I use to build web applications, from the interface to the database."
      />

      <div className="divide-y divide-border border-y border-border">
        {skills.map(({ category, items }) => (
          // Each category reveals on its own; its tiles stagger in.
          <Reveal key={category} className="grid gap-5 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
            <h3 className="flex items-center gap-3 self-start text-h3 text-fg lg:col-span-3 lg:pt-3">
              {category}
              <span aria-hidden="true" className="text-small font-normal text-subtle tabular-nums">{items.length}</span>
            </h3>
            <ul className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 lg:col-span-9">
              {items.map((name, index) => (
                <li key={name} className="reveal-item" style={{ "--i": index }}>
                  <div className="card card-interactive group flex h-full items-center gap-2.5 p-2.5 pr-3 sm:gap-3 sm:p-3 sm:pr-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-raised text-muted transition-[color,border-color,transform] duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-accent motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:size-10">
                      <SkillIcon name={name} />
                    </span>
                    <span className="text-[0.9375rem] leading-snug font-medium text-fg sm:text-base">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
