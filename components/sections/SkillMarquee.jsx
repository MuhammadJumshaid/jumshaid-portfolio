import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";

// A slowly scrolling band of the real skills between the hero and About.
// Decorative (the same skills are listed in the Skills section), so it is
// hidden from assistive tech. Pauses on hover; static under reduced motion.
export default function SkillMarquee() {
  const items = skills.flatMap((group) => group.items);

  return (
    <div aria-hidden="true" className="marquee relative overflow-hidden border-y border-border bg-surface/30 py-5">
      <div className="marquee__track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((name) => (
              <li key={name} className="flex items-center gap-3 px-6 text-muted sm:px-8">
                <SkillIcon name={name} className="size-5" />
                <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap text-fg/80">{name}</span>
                <span className="ml-6 size-1 rounded-full bg-accent/60 sm:ml-8" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
