"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a[href], button, [role='button'], summary, label";
const TEXT_INPUT = "input, textarea, select";

// A small accent dot that trails the normal cursor and becomes a faint ring
// over links and buttons. The system cursor is never hidden. Disabled on
// touch devices and for users who prefer reduced motion. Positions are
// written straight to the DOM (transform only), so React never re-renders.
export default function CursorDot() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!root || !media.matches) return;

    root.style.display = "block";
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = 0;
    let running = false;

    const tick = () => {
      current.x += (target.x - current.x) * 0.25;
      current.y += (target.y - current.y) * 0.25;
      root.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      if (Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (root.dataset.visible !== "true") {
        // First move: jump to the pointer instead of sliding in from a corner.
        current.x = target.x;
        current.y = target.y;
        root.dataset.visible = "true";
      }
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    const onOver = (event) => {
      const element = event.target instanceof Element ? event.target : null;
      root.dataset.state = element?.closest(TEXT_INPUT) ? "text" : element?.closest(INTERACTIVE) ? "link" : "default";
    };

    const onLeave = () => {
      root.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="cursor-dot" style={{ display: "none" }}>
      <span className="cursor-dot__ring" />
      <span className="cursor-dot__dot" />
    </div>
  );
}
