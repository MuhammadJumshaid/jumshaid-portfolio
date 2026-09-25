import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

const links = [
  { label: "GitHub profile", href: site.githubUrl, Icon: GitHubIcon, external: true },
  { label: "LinkedIn profile", href: site.linkedinUrl, Icon: LinkedInIcon, external: true },
  { label: `Email ${site.name}`, href: `mailto:${site.email}`, Icon: MailIcon, external: false },
];

// Icon-only row of GitHub, LinkedIn and Email links. Reused in hero and footer.
export default function SocialLinks({ className = "", style }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`} style={style}>
      {links
        .filter((link) => link.href)
        .map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              title={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-raised hover:text-fg"
            >
              <Icon className="size-5" />
            </a>
          </li>
        ))}
    </ul>
  );
}
