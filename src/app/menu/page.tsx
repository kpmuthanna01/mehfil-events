import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuShowcase } from "@/components/menu-showcase";
import { RegionalMenus } from "@/components/regional-menus";

export const metadata: Metadata = {
  title: "Menus | Mehfil Events",
  description:
    "Explore our detailed catering menus plus full regional spreads, Karnataka, Coorg and Kerala style, vegetarian and non-vegetarian. Fully customisable for your event.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <section className="hero-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
          <h1 className="font-display text-4xl font-extrabold text-brand-emerald md:text-5xl">
            Our Menus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Curated spreads for every diet and belief, plus full Karnataka, Coorg
            &amp; Kerala regional menus. Browse below, then build your estimate,
            we tailor the final menu with you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-brand-gold font-semibold text-primary hover:bg-brand-gold/90"
            >
              <Link href="/#estimator">
                Build Your Estimate
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <MenuShowcase />

      <div className="border-t border-border bg-secondary/30">
        <RegionalMenus />
      </div>
    </>
  );
}
