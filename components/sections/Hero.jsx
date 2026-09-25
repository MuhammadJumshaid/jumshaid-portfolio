import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProfileImage from "@/components/ui/ProfileImage";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-nav">
      <Container className="grid items-center gap-12 pt-10 pb-20 sm:pt-16 md:gap-16 lg:min-h-[calc(100svh-var(--spacing-nav))] lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7">
          {/* Stacked on phones, one line with a dot separator from sm up */}
          <p style={{ "--enter-delay": "0ms" }} className="enter-up flex flex-col gap-1 text-label font-medium uppercase text-accent sm:flex-row sm:items-center sm:gap-3">
            <span>{site.primaryTitle}</span>
            <span aria-hidden="true" className="hidden size-1 rounded-full bg-border-strong sm:block" />
            <span>{site.secondaryTitle}</span>
          </p>

          <h1 id="hero-title" className="enter-rise mt-5 text-display text-fg">
            {site.name}
          </h1>

          <p style={{ "--enter-delay": "160ms" }} className="enter-up mt-6 max-w-measure text-lg leading-relaxed text-muted sm:text-xl">
            {site.heroIntro}
          </p>

          <p style={{ "--enter-delay": "240ms" }} className="enter-up mt-6 inline-flex items-center gap-2.5 rounded-md border border-border bg-surface/60 px-3 py-1.5 text-small text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {site.experienceYears}+ years of experience
          </p>

          <div style={{ "--enter-delay": "320ms" }} className="enter-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects">
              View My Work
              <ArrowRightIcon />
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

          <SocialLinks className="enter-up mt-8 -ml-3" style={{ "--enter-delay": "400ms" }} />
        </div>

        <div className="lg:col-span-5">
          {/* Width leaves room for the 0.75rem offset outline on small phones */}
          <div className="relative mx-auto w-full max-w-[min(20rem,calc(100%-0.75rem))] sm:max-w-sm lg:mr-0 lg:max-w-md 2xl:max-w-lg">
            {/* Offset outline behind the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-border-strong/70"
            />
            <ProfileImage
              src={site.heroImage}
              alt={`${site.name}, ${site.primaryTitle}`}
              sizes="(min-width: 1536px) 32rem, (min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
              preload
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
