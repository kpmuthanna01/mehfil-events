import { Hero } from "@/components/hero";
import { Estimator } from "@/components/estimator";
import { MenuPreview } from "@/components/menu-preview";
import { Testimonials } from "@/components/testimonials";
import { ServicesGrid } from "@/components/services-grid";
import { SayTheWord } from "@/components/say-the-word";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Estimator />
      <MenuPreview />
      <ServicesGrid />
      <Testimonials />
      <SayTheWord />
    </>
  );
}
