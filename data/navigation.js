import { experience } from "@/data/experience";

// Section links used by the navbar and footer. They start with "/" so they
// also work from other pages (e.g. the 404 page); on the home page the
// browser just scrolls to the section.
const allLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const hasExperience = experience.length > 0;

// Experience is left out until real entries exist.
export const navLinks = allLinks.filter(
  (link) => link.href !== "/#experience" || hasExperience,
);
