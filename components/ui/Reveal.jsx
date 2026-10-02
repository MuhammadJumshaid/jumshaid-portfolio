"use client";

import { useEffect, useRef } from "react";

// Animates content into place once, when it scrolls into view.
//
// variant (see .reveal--* in globals.css):
//   "up"    slides up from inside the screen with a slight scale (default)
//   "left"  slides in from the left   (vertical on phones)
//   "right" slides in from the right  (vertical on phones)
//   "scale" grows in from slightly smaller
//   "image" fades up while the picture inside settles from a gentle zoom
//   "none"  no motion of its own; only its .reveal-item children stagger in
//
// Content is rendered visible. After mount, only elements that are still
// below the fold get hidden (they are off-screen, so there is no flash),
// then shown when they intersect. If JavaScript never runs, nothing is
// hidden. The DOM attribute is set directly, so there are no re-renders.
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    element.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "shown";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
