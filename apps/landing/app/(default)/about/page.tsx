export const metadata = {
  title: "Notre équipe | Immovia",
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
