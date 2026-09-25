"use client";

import { useEffect, useRef } from "react";

// Fades and slides content in once when it scrolls into view.
//
// Content is rendered visible. After mount, only elements that are still
// below the fold get hidden (they are off-screen, so there is no flash),
// then shown when they intersect. If JavaScript never runs, nothing is
// hidden. The DOM attribute is set directly, so there are no re-renders.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
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
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
