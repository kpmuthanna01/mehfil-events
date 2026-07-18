import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { SITE, WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

const HIGHLIGHTS = [
  { icon: Sparkles, text: "Events, escapes and surprise gifts, all in one place" },
  { icon: MessageCircle, text: "Quick replies on WhatsApp during business hours" },
  { icon: PhoneCall, text: "Free, no-obligation quote for your celebration" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-y border-border bg-secondary/40 py-14 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:gap-12">
        {/* Left: intro + direct contact (slides in from the left) */}
        <Reveal direction="right" className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            Let&apos;s Plan It Together
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Tell us your name, location and budget and we&apos;ll get straight
            back to you on WhatsApp with ideas and a quote.
          </p>

          <ul className="mt-6 space-y-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h.text} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-brand-emerald">
                  <h.icon className="size-4" />
                </span>
                <span className="text-sm text-foreground/90">{h.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
            >
              <a
                href={whatsappLink(SITE.generalInquiry)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:+${WHATSAPP_NUMBER}`}>
                <PhoneCall className="size-4" />
                Call Us
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Right: enquiry form (slides in from the right) */}
        <Reveal direction="left">
          <Card className="rounded-2xl">
            <CardContent className="p-5 sm:p-6">
              <h3 className="mb-4 font-display text-xl font-bold text-brand-emerald">
                Send an Enquiry
              </h3>
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
