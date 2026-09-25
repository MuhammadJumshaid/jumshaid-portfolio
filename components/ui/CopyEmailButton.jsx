"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/Icons";

export default function CopyEmailButton({ email }) {
  const [status, setStatus] = useState("idle"); // idle | copied | failed

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  const message = { copied: "Copied", failed: "Copy failed" }[status];

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title="Copy email address"
        className="inline-flex size-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
      >
        {status === "copied" ? <CheckIcon className="size-4 text-accent" /> : <CopyIcon />}
      </button>
      {/* Small visual confirmation above the button; no layout shift */}
      {message && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-full mb-2 rounded-sm border border-border-strong bg-raised px-2 py-1 text-xs whitespace-nowrap text-fg shadow-card"
        >
          {message}
        </span>
      )}
      {/* Announces the result to screen readers */}
      <span role="status" className="sr-only">
        {status === "copied" ? "Email address copied" : status === "failed" ? "Could not copy the email address" : ""}
      </span>
    </div>
  );
}
