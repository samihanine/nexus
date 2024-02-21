export const metadata = {
  title: "A propos | Immovia",
  description:
    "Avec Immovia, soyez mis en relation avec les bonnes personnes au bon moment pour bénéficier des meilleures conditions selon vos besoins.",
};

import AboutIntro from "../../../components/about-intro";
import Cta from "../../../components/cta";
import Teams from "../../../components/teams";
import Values from "../../../components/values";

export default function Home() {
  return (
    <>
      <AboutIntro />
      <Teams />
      <Values />
      <Cta />
    </>
  );
}
