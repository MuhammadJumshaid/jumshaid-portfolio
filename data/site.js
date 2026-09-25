// Personal information. Edit values here and they update across the site.
export const site = {
  name: "Muhammad Jumshaid",
  initials: "MJ",
  primaryTitle: "Software Developer",
  secondaryTitle: "Frontend Developer",
  experienceYears: 2, // displayed as "2+ years"
  heroIntro:
    "I build fast, responsive web apps with React and Next.js, with clean code and careful attention to detail.",
  bio: "Muhammad Jumshaid is a Software Developer and Frontend Developer who builds modern, responsive and user-friendly web applications with JavaScript, React and Next.js.",

  email: "jumshaid.khan.1222@gmail.com",
  phone: {
    display: "+92 334 1222435",
    href: "tel:+923341222435",
  },
  linkedinUrl: "https://www.linkedin.com/in/muhammad-jumshaid-b97229318/",
  githubUrl: "https://github.com/MuhammadJumshaid",

  // Not provided yet. Set NEXT_PUBLIC_SITE_URL after deploying (a trailing slash is removed).
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),

  // Not provided yet. Add a path like "/resume.pdf" to show the download button.
  resumeUrl: "",

  // Photos live in public/images/profile/. Originals are kept in assets/originals/.
  heroImage: "/images/profile/hero.webp",
  aboutImage: "/images/profile/about.webp",
};
