import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Page not found",
  // Overrides the site-wide "index, follow" from app/layout.js.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[calc(100svh-var(--spacing-nav)-12rem)] flex-col justify-center py-section">
      <p className="flex items-center gap-3 text-label font-medium uppercase text-accent">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        Error 404
      </p>
      <h1 className="mt-5 text-h1 text-fg">This page does not exist</h1>
      <p className="mt-5 max-w-measure text-muted">
        The link may be broken, or the page may have moved. Everything on this site lives on the home page.
      </p>
      <div className="mt-10">
        <Button href="/">
          Back to home
          <ArrowRightIcon />
        </Button>
      </div>
    </Container>
  );
}
