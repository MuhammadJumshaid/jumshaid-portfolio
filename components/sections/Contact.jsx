import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon, copy: true },
  { label: "Phone", value: site.phone.display, href: site.phone.href, Icon: PhoneIcon },
  { label: "LinkedIn", value: site.name, href: site.linkedinUrl, Icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "MuhammadJumshaid", href: site.githubUrl, Icon: GitHubIcon, external: true },
];

// Lets long values (the email address) wrap after "@" instead of mid-word.
function withBreaks(value) {
  const [before, after] = value.split("@");
  if (after === undefined) return value;
  return (
    <>
      {before}@<wbr />
      {after}
    </>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-title"
      className="bg-[radial-gradient(48rem_28rem_at_70%_55%,rgb(240_180_76/0.05),transparent_70%)]"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            label="Contact"
            title="Let's work together"
            intro="Whether you have a job opening, a freelance project or an idea to work on together, I would be glad to hear from you."
            className="mb-10!"
          />

          <ul className="space-y-3">
            {channels
              .filter((channel) => channel.href)
              .map(({ label, value, href, Icon, external, copy }, index) => (
                // Wrapper li staggers in; the inner card keeps its own hover lift.
                <li key={label} className="reveal-item" style={{ "--i": index }}>
                  <div className="card card-interactive spotlight flex items-center gap-2 p-2 pr-3">
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-md p-2 sm:gap-4"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border-strong text-accent transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:size-10">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-label font-medium uppercase text-subtle">{label}</span>
                        <span className="block text-[0.9375rem] text-fg transition-colors [overflow-wrap:anywhere] group-hover:text-accent sm:text-base">
                          {withBreaks(value)}
                        </span>
                      </span>
                      {external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                    {copy && <CopyEmailButton email={value} />}
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="reveal-item lg:col-span-7" style={{ "--i": 2 }}>
          <div className="card spotlight overflow-hidden p-6 sm:p-8">
            {/* Thin accent line along the top edge marks the final call to action */}
            <span
              aria-hidden="true"
              className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
            />
            <h3 className="text-h3 text-fg">Send a message</h3>
            <p className="mt-2 mb-6 text-small text-muted">All fields are required.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
