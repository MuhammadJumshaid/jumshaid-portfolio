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
import { DatabaseIcon } from "@/components/ui/Icons";

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

// Decorative: the skill name is always shown as text next to it.
export default function SkillIcon({ name, className = "size-5" }) {
  const Icon = icons[name];
  if (Icon) return <Icon aria-hidden="true" className={className} />;
  return (
    <span aria-hidden="true" className="font-display text-small font-semibold">
      {name.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase()}
    </span>
  );
}
