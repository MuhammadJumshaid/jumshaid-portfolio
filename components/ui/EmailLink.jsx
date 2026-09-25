"use client";

import { useEffect, useState } from "react";

// A mailto: link that also copies the address. If the visitor has no email
// app set up (common with webmail users), mailto: silently does nothing;
// this way the click still gives them the address. The mailto: navigation
// is not blocked, so a configured email app opens as usual.
export default function EmailLink({ email, label, className = "", children }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => setCopied(true))
      .catch(() => {});
  };

  return (
    <span className="relative inline-flex">
      <a href={`mailto:${email}`} aria-label={label} title={label} onClick={onClick} className={className}>
        {children}
      </a>
      {copied && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-sm border border-border-strong bg-raised px-2 py-1 text-xs whitespace-nowrap text-fg shadow-card"
        >
          Email copied
        </span>
      )}
      <span role="status" className="sr-only">
        {copied ? `Email address ${email} copied` : ""}
      </span>
    </span>
  );
}
