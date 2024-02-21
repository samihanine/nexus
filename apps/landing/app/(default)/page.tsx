import Cta from "../../components/cta";
import DescriptionHome from "../../components/description-home";
import Faqs from "../../components/faqs";
import Features from "../../components/features-home";
import FeaturesWorld from "../../components/features-world";
import Hero from "../../components/hero-home";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <DescriptionHome />
      <Features />
      <FeaturesWorld />
      <Faqs />
      <Cta />
    </div>
  );
}
