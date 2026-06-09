import { SectionHeader } from "@/components/shared/SectionHeader";
import { RevealWrapper } from "@/components/shared/RevealWrapper";
import { ContactForm } from "./ContactForm";
import { SocialLink } from "./SocialLink";
import { PORTFOLIO } from "@/data/portfolio";

// Simple text icons for social platforms (no external icon deps)
const PLATFORM_ICONS: Record<string, string> = {
  email:     "✉",
  github:    "⌥",
  linkedin:  "in",
  whatsapp:  "✆",
  instagram: "◈",
  twitter:   "✕",
};

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <RevealWrapper>
        <SectionHeader title="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-muted mb-2">&gt; find me on:</p>
            {PORTFOLIO.social.map((link) => (
              <SocialLink
                key={link.platform}
                href={link.href}
                label={link.label}
                icon={PLATFORM_ICONS[link.platform] ?? "→"}
              />
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
