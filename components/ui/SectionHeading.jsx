// Small label + H2 + optional intro. Pass `id` so the section can
// reference the heading with aria-labelledby.
export default function SectionHeading({ id, label, title, intro, className = "" }) {
  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${className}`}>
      {label && (
        <p className="mb-4 flex items-center gap-3 text-label font-medium uppercase text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {label}
        </p>
      )}
      <h2 id={id} className="text-h2 text-fg">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-measure text-muted">{intro}</p>}
    </div>
  );
}
