"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

// The theme lives on <html data-theme>; this reads it and re-renders when it changes.
function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerTheme = () => "dark";

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode or blocked storage: the switch still works for this visit.
  }
}

// Dark/light switch. The initial theme is set before paint by the inline
// script in app/layout.js, so there is no flash. The icon (sun/moon) is
// driven by CSS on <html data-theme>, so it is correct even before React
// hydrates. Where supported, the new theme spreads out in a circle from the
// button (View Transitions API); otherwise it switches instantly.
export default function ThemeToggle({ className = "" }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = (event) => {
    const next = theme === "light" ? "dark" : "light";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      applyTheme(next);
      return;
    }

    // Circle grows from the button to the farthest corner of the screen.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;
    root.style.setProperty("--reveal-x", `${x}px`);
    root.style.setProperty("--reveal-y", `${y}px`);
    root.style.setProperty("--reveal-r", `${radius}px`);

    document.startViewTransition(() => applyTheme(next));
  };

  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`group inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors duration-300 hover:bg-raised hover:text-accent ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 transition-transform duration-500 ease-premium group-hover:rotate-12 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
      >
        {/* Sun: shown in light theme */}
        <g className="theme-icon__sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </g>
        {/* Moon: shown in dark theme */}
        <g className="theme-icon__moon">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </g>
      </svg>
    </button>
  );
}
