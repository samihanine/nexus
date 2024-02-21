export const metadata = {
  title: "Immovia",
  description:
    "Immovia is a real estate platform that helps you find the perfect home.",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features-home";
import FeaturesBlocks from "@/components/features-blocks";
import FeaturesWorld from "@/components/features-world";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <FeaturesWorld />
      <Cta />
    </>
  );
}
