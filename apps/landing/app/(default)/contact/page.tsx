import Contact from "../../../components/contact";
import Cta from "../../../components/cta";

export const metadata = {
  title: "Contact | Immovia",
  description:
    "Avec Immovia, soyez mis en relation avec les bonnes personnes au bon moment pour bénéficier des meilleures conditions selon vos besoins.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Contact />
      <Cta />
    </div>
  );
}
