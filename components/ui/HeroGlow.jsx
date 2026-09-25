"use client";

import { useEffect, useRef } from "react";

// A very faint accent glow that follows the pointer inside its parent
// section. Only for mouse/trackpad users who have not asked for reduced
// motion; otherwise the static glow stays centred. Updates two CSS
// variables once per animation frame, so React never re-renders.
export default function HeroGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const layer = ref.current;
    const area = layer?.parentElement;
    if (!area) return;
    const canAnimate = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!canAnimate.matches) return;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = area.getBoundingClientRect();
        layer.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        layer.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
        layer.dataset.active = "true";
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      layer.dataset.active = "false";
    };

    area.addEventListener("pointermove", onMove, { passive: true });
    area.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="hero-glow enter-fade pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Slowly drifting light, see .aurora in globals.css */}
      <span className="aurora aurora--a" />
      <span className="aurora aurora--b" />
    </div>
  );
}
