import Link from "next/link";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowUpIcon } from "@/components/ui/Icons";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";

// Same animated underline as the navbar links.
const linkClass =
  "relative inline-flex min-h-11 items-center px-3 text-small text-muted transition-colors duration-300 hover:text-fg after:absolute after:inset-x-3 after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-premium hover:after:scale-x-100 motion-reduce:after:transition-none";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      {/* Soft accent line along the top edge */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/#home" className="inline-flex min-h-11 items-center gap-3 rounded-md">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-md border border-border-strong bg-surface font-display text-small font-semibold text-accent"
              >
                {site.initials}
              </span>
              <span className="font-display font-semibold tracking-tight text-fg">{site.name}</span>
            </Link>
            <p className="mt-1 text-small text-muted">
              {site.primaryTitle} · {site.secondaryTitle}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="-ml-3 flex flex-wrap lg:ml-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="-ml-3 lg:ml-0 lg:-mr-3" />
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-subtle">
            © {new Date().getFullYear()} {site.name}
            <span aria-hidden="true" className="mx-2 hidden sm:inline">
              ·
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline">Built with Next.js and Tailwind CSS</span>
          </p>
          <a
            href="#top"
            className="group inline-flex min-h-11 items-center gap-3 self-start rounded-md text-small text-muted transition-colors duration-300 hover:text-fg sm:ml-0 sm:self-auto"
          >
            Back to top
            <span className="grid size-9 place-items-center rounded-full border border-border-strong transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
              <ArrowUpIcon className="size-4 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
