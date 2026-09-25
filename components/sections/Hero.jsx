import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroGlow from "@/components/ui/HeroGlow";
import ProfileImage from "@/components/ui/ProfileImage";
import SkillIcon from "@/components/ui/SkillIcon";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

// Staggered entrance (pure CSS, see .enter-* in globals.css):
// background 0ms, badge 100, name 200, intro 350, stack 425, buttons 500, socials 650.
const delay = (ms) => ({ "--enter-delay": `${ms}ms` });

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate scroll-mt-nav">
      <HeroGlow />

      <Container className="grid items-center gap-12 pt-10 pb-20 sm:pt-16 md:gap-16 lg:min-h-[calc(100svh-var(--spacing-nav))] lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7">
          <p
            style={delay(100)}
            className="enter-up inline-flex items-center gap-2.5 rounded-full border border-border-strong/70 bg-surface/50 py-1.5 pr-4 pl-3 text-small text-fg backdrop-blur-sm"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {/* Shorter wording on small phones so the pill never wraps */}
            <span className="sm:hidden">Software &amp; Frontend Developer</span>
            <span className="hidden sm:inline">
              {site.primaryTitle} · {site.secondaryTitle}
            </span>
          </p>

          <h1 id="hero-title" style={delay(200)} className="enter-rise mt-6 text-display text-fg">
            {site.name}
          </h1>

          <p style={delay(350)} className="enter-up mt-6 max-w-measure text-lg leading-relaxed text-muted sm:text-xl">
            {site.heroIntro}
          </p>

          <div style={delay(425)} className="enter-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-small">
            <p className="inline-flex items-center gap-2 font-medium text-fg">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {site.experienceYears}+ years of experience
            </p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-border-strong sm:block" />
            <ul aria-label="Main technologies" className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted sm:flex sm:flex-wrap">
              {site.heroStack.map((name) => (
                <li key={name} className="inline-flex items-center gap-1.5">
                  <SkillIcon name={name} className="size-4" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div style={delay(500)} className="enter-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects">
              View My Work
              <ArrowRightIcon className="size-4 transition-transform duration-300 ease-premium group-hover/button:translate-x-0.5 motion-reduce:transition-none" />
            </Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
            {site.resumeUrl && (
              <Button href={site.resumeUrl} variant="ghost" download>
                <DownloadIcon />
                Download Resume
              </Button>
            )}
          </div>

          <SocialLinks className="enter-up mt-8 -ml-3" style={delay(650)} />
        </div>

        <div className="lg:col-span-5">
          {/* Width leaves room for the 0.75rem offset outline on small phones */}
          <div className="relative mx-auto w-full max-w-[min(20rem,calc(100%-0.75rem))] sm:max-w-sm lg:mr-0 lg:max-w-md 2xl:max-w-lg">
            {/* Offset outline behind the photo */}
            <div
              aria-hidden="true"
              style={delay(300)}
              className="enter-fade absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-border-strong/70"
            />
            <ProfileImage
              src={site.heroImage}
              alt={`${site.name}, ${site.primaryTitle}`}
              sizes="(min-width: 1536px) 32rem, (min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
              preload
              className="aspect-[4/5] w-full shadow-lift"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
