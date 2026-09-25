const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-small font-medium whitespace-nowrap transition-[color,background-color,border-color,transform] duration-200 active:translate-y-px motion-reduce:transition-none motion-reduce:active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "border border-border-strong bg-surface text-fg hover:border-muted hover:bg-raised",
  ghost: "text-muted hover:bg-raised hover:text-fg",
};

// Renders an <a> when `href` is given, otherwise a <button>.
// `external` opens the link in a new tab safely.
export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
