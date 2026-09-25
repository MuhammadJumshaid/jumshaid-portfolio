import {
  SiBootstrap,
  SiCss,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { DatabaseIcon } from "@/components/ui/Icons";
import { skills } from "@/data/skills";

// Logo per skill name. SQL Server has no reliable logo, so it gets a
// generic database icon. Skills not listed here get a text monogram.
const icons = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  ".NET Core MVC": SiDotnet,
  "SQL Server": DatabaseIcon,
};

function SkillIcon({ name }) {
  const Icon = icons[name];
  if (Icon) return <Icon aria-hidden="true" className="size-5" />;
  return (
    <span aria-hidden="true" className="font-display text-small font-semibold">
      {name.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase()}
    </span>
  );
}

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
          <div key={category} className="grid gap-5 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
            <h3 className="text-h3 text-fg lg:col-span-3 lg:pt-3">{category}</h3>
            <ul className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 lg:col-span-9">
              {items.map((name) => (
                <li key={name} className="card card-interactive group flex items-center gap-2.5 p-2.5 pr-3 sm:gap-3 sm:p-3 sm:pr-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-raised sm:size-10 text-muted transition-colors duration-200 group-hover:border-border-strong group-hover:text-accent">
                    <SkillIcon name={name} />
                  </span>
                  <span className="text-[0.9375rem] leading-snug font-medium text-fg sm:text-base">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
