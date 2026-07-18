import { Hero } from "@/components/hero";
import { Estimator } from "@/components/estimator";
import { MenuPreview } from "@/components/menu-preview";
import { ServicesGrid } from "@/components/services-grid";
import { ExploreMore } from "@/components/explore-more";
import { ContactSection } from "@/components/contact-section";
import { SayTheWord } from "@/components/say-the-word";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Estimator />
      <MenuPreview />
      <ServicesGrid />
      <ExploreMore />
      <ContactSection />
      <SayTheWord />
    </>
  );
}
