import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import EmailLink from "@/components/ui/EmailLink";
import { site } from "@/data/site";

const links = [
  { label: "GitHub profile", href: site.githubUrl, Icon: GitHubIcon, external: true },
  { label: "LinkedIn profile", href: site.linkedinUrl, Icon: LinkedInIcon, external: true },
];

const linkClass =
  "group inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors duration-300 hover:bg-raised hover:text-accent";
const iconClass =
  "size-5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0";

// Icon-only row of GitHub, LinkedIn and Email links. Reused in hero and footer.
export default function SocialLinks({ className = "", style }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`} style={style}>
      {links
        .filter((link) => link.href)
        .map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Icon className={iconClass} />
            </a>
          </li>
        ))}
      {site.email && (
        <li>
          <EmailLink email={site.email} label={`Email ${site.name}`} className={linkClass}>
            <MailIcon className={iconClass} />
          </EmailLink>
        </li>
      )}
    </ul>
  );
}
