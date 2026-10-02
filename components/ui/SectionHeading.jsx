import Reveal from "@/components/ui/Reveal";

// Small label + H2 + optional intro. Pass `id` so the section can
// reference the heading with aria-labelledby.
// When the section scrolls in, the title's words slide up from behind a
// mask and the label line draws in (see .heading-word in globals.css).
export default function SectionHeading({ id, label, title, intro, className = "" }) {
  const words = title.split(" ");

  return (
    <Reveal variant="none" className={`mb-12 max-w-2xl md:mb-16 ${className}`}>
      {label && (
        <p className="reveal-item mb-4 flex items-center gap-3 text-label font-medium uppercase text-accent">
          <span aria-hidden="true" className="heading-line h-px w-8 origin-left bg-accent" />
          {label}
        </p>
      )}
      <h2 id={id} className="text-h2 text-fg">
        {words.map((word, w) => (
          <span key={w}>
            <span className="heading-word">
              <span style={{ "--w": w }}>{word}</span>
            </span>
            {w < words.length - 1 && " "}
          </span>
        ))}
      </h2>
      {intro && (
        <p className="reveal-item mt-5 max-w-measure text-muted" style={{ "--i": words.length + 1 }}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
