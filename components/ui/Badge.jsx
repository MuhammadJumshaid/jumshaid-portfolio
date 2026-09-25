export default function Badge({ className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-border bg-raised px-2.5 py-1 text-small leading-none text-muted ${className}`}
    >
      {children}
    </span>
  );
}
