import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { SITE_URL, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Mehfil Coorg, areas served, booking, pricing, veg/Jain/halal food, surprise gifts and travel guides.",
};

const FAQS = [
  {
    q: "Which areas do you serve?",
    a: "All of Coorg (Kodagu), Madikeri, Virajpet, Kushalnagar, Somwarpet and the surrounding hills. We can also travel for events elsewhere on request.",
  },
  {
    q: "How far in advance should I book?",
    a: "For weddings, one to three months is ideal. Smaller functions need two to three weeks, and surprise gifts can often be arranged in a few days. When in doubt, message us and we'll tell you what's possible.",
  },
  {
    q: "Do you offer veg, Jain and halal food?",
    a: "Yes. We do pure veg, Premium veg, Jain / Satvik (no onion or garlic), certified halal prepared in a separate kitchen, and traditional regional non-veg, plus grand multi-cuisine buffets.",
  },
  {
    q: "How does pricing work?",
    a: "Use the live estimator on the home page for an instant estimate. The total is a base planning and coordination fee, plus per-plate catering (by guest count), decoration and any add-ons. We confirm a final quote after a quick consultation.",
  },
  {
    q: "Can I send my own gift item?",
    a: "Absolutely. Ship it to us or drop it off, we keep it safe, wrap it to match the theme, and present it as a surprise at the right moment. You can also choose a gift from our range.",
  },
  {
    q: "Do you provide a travel guide in Coorg?",
    a: "Yes. We offer paid local guides, including a solo-traveller option with a two-wheeler. Please message us on WhatsApp before you arrive so we can arrange your guide, permits and stay in advance.",
  },
  {
    q: "How do I confirm a booking?",
    a: "Share your details through the enquiry form or WhatsApp. We confirm availability, send a quote, and lock in your date.",
  },
  {
    q: "Do you handle groceries and cooks too?",
    a: "Yes, that's our speciality. Full-scale catering with specialised cooks, wholesale grocery management with zero wastage, theme and floral decoration, and an on-site event manager, all under one roof.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="hero-bg border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <h1 className="font-display text-4xl font-extrabold text-brand-emerald md:text-5xl">
            Frequently Asked <span className="text-gold-shimmer">Questions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you might want to know before you plan with us. Still
            unsure? We&apos;re a WhatsApp message away.
          </p>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-4 px-5">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 70}>
              <details className="group rounded-2xl border border-border bg-card p-5 transition-colors open:ring-1 open:ring-brand-gold/40">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-brand-emerald marker:content-none">
                  {f.q}
                  <ArrowRight className="size-4 shrink-0 text-brand-gold-deep transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}

          <Reveal className="pt-6 text-center">
            <p className="mb-4 text-muted-foreground">Still have a question?</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
              >
                <a
                  href={whatsappLink(
                    "Hi Mehfil Coorg, I have a question:",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  Ask on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#estimator">
                  Estimate Your Event
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
