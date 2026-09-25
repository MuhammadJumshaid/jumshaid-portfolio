"use client";

import { useEffect } from "react";

// One listener for the whole page: sets --mx/--my on the .spotlight card
// under the pointer, so its soft light follows the mouse (see .spotlight in
// globals.css). Mouse/trackpad only; nothing runs on touch or reduced motion.
export default function Spotlight() {
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;

    let frame = 0;
    const onMove = (event) => {
      const card = event.target instanceof Element ? event.target.closest(".spotlight") : null;
      if (!card) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
