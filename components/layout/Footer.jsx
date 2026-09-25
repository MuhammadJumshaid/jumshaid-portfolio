import Link from "next/link";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowUpIcon } from "@/components/ui/Icons";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg/60">
      <Container className="py-10 md:py-12">
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
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center px-3 text-small text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="-ml-3 lg:ml-0 lg:-mr-3" />
        </div>

        <div className="mt-8 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-subtle">
            © {new Date().getFullYear()} {site.name}
          </p>
          <a
            href="#top"
            className="group -ml-3 inline-flex min-h-11 items-center gap-2 self-start rounded-md px-3 text-small text-muted transition-colors hover:text-fg sm:ml-0 sm:-mr-3 sm:self-auto"
          >
            Back to top
            <ArrowUpIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
