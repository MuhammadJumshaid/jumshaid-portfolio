import Hero from "@/components/sections/Hero";
import SkillMarquee from "@/components/sections/SkillMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { site } from "@/data/site";
import { skills } from "@/data/skills";

// Structured data for search engines: who this is and what the site is.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.siteUrl}/#person`,
      name: site.name,
      jobTitle: [site.primaryTitle, site.secondaryTitle],
      description: site.bio,
      url: `${site.siteUrl}/`,
      email: `mailto:${site.email}`,
      telephone: site.phone.href.replace("tel:", ""),
      sameAs: [site.linkedinUrl, site.githubUrl],
      knowsAbout: skills.flatMap((group) => group.items),
    },
    {
      "@type": "WebSite",
      "@id": `${site.siteUrl}/#website`,
      name: site.name,
      url: `${site.siteUrl}/`,
      inLanguage: "en",
      author: { "@id": `${site.siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <SkillMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
