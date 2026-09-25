import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import NavScrollSpy from "@/components/layout/NavScrollSpy";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";

const HEADER_ID = "site-header";

// Server-rendered. Only MobileMenu and NavScrollSpy run on the client.
export default function Navbar() {
  return (
    <header id={HEADER_ID} className="group sticky top-0 z-50">
      {/* Background appears after scrolling. It is a separate layer so the
          bar never changes size, and so backdrop-filter does not trap the
          fixed mobile menu panel. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 border-b border-border bg-bg/80 opacity-0 backdrop-blur-md transition-opacity duration-300 group-data-[scrolled=true]:opacity-100 motion-reduce:transition-none"
      />

      <Container as="nav" aria-label="Main" className="flex h-nav items-center justify-between gap-6">
        <Link href="/#home" className="flex min-h-11 items-center gap-3 rounded-md">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md border border-border-strong bg-surface font-display text-small font-semibold text-accent"
          >
            {site.initials}
          </span>
          <span className="font-display font-semibold tracking-tight text-fg">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-nav-link
                  className="relative inline-flex min-h-11 items-center px-3 text-small text-muted transition-colors hover:text-fg after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 aria-[current=location]:text-fg aria-[current=location]:after:scale-x-100 motion-reduce:after:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="/#contact">Get In Touch</Button>
        </div>

        <MobileMenu links={navLinks} />
      </Container>

      <NavScrollSpy headerId={HEADER_ID} />
    </header>
  );
}
