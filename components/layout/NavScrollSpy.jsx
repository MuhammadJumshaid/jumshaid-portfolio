"use client";

import { useEffect } from "react";

// Renders nothing. Keeps the server-rendered navbar in sync with the page:
// - sets data-scrolled on the header once the page is scrolled a little
// - sets --progress (0 to 1) for the reading progress line
// - sets aria-current="location" on the nav link of the section in view
export default function NavScrollSpy({ headerId }) {
  useEffect(() => {
    const header = document.getElementById(headerId);
    const links = document.querySelectorAll("a[data-nav-link]");
    const sections = document.querySelectorAll("main section[id]");
    const lastId = sections[sections.length - 1]?.id;

    let observedId = null;
    let activeId;

    const setActive = (id) => {
      if (id === activeId) return;
      activeId = id;
      links.forEach((link) => {
        if (link.getAttribute("href") === `/#${id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    // At the very bottom the last section may be too short to reach the
    // observer's line, so treat it as active there.
    const update = () => {
      header?.setAttribute("data-scrolled", String(window.scrollY > 8));
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      header?.style.setProperty("--progress", scrollable > 0 ? String(window.scrollY / scrollable) : "0");
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? lastId : observedId);
    };

    // A thin horizontal line ~40% down the viewport. The section crossing it is active.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) observedId = entry.target.id;
        });
        update();
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [headerId]);

  return null;
}
