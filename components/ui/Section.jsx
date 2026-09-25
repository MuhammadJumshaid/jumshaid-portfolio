import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

// Page section with consistent vertical rhythm. scroll-mt keeps the
// heading clear of the sticky navbar when jumping to #id. The hairline span
// separates sections and fades out at both ends.
export default function Section({ id, labelledBy, className = "", children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-nav py-section ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-linear-to-r from-transparent via-border-strong to-transparent"
      />
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  );
}
