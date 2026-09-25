"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

const PANEL_ID = "mobile-menu";

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    // Focus stays inside the toggle button + panel while open.
    const focusables = () => [buttonRef.current, ...panelRef.current.querySelectorAll("a[href]")];
    focusables()[1]?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Close if the screen grows to the desktop layout.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = (event) => event.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeOnLinkClick = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-fg transition-colors hover:bg-raised lg:hidden"
      >
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
              open ? "top-[5px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
              open ? "top-[5px] -rotate-45" : "top-2.5"
            }`}
          />
        </span>
      </button>

      <div
        id={PANEL_ID}
        ref={panelRef}
        inert={!open}
        // Visibility only animates on close, so the panel is focusable the
        // moment it opens.
        className={`fixed inset-0 -z-10 bg-bg pt-nav duration-300 motion-reduce:transition-none lg:hidden ${
          open
            ? "visible opacity-100 transition-opacity"
            : "invisible opacity-0 transition-[opacity,visibility]"
        }`}
      >
        <div
          className={`flex h-full flex-col overflow-y-auto border-t border-border px-4 pt-8 pb-10 transition-transform duration-300 motion-reduce:transition-none sm:px-6 ${
            open ? "translate-y-0" : "-translate-y-3"
          }`}
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a
                  href={link.href}
                  data-nav-link
                  onClick={closeOnLinkClick}
                  className="flex min-h-14 items-center font-display text-h3 text-muted transition-colors hover:text-fg aria-[current=location]:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="/#contact" onClick={closeOnLinkClick} className="mt-10 w-full">
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
}
