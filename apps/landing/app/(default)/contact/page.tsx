import Contact from "../../../components/contact";
import Cta from "../../../components/cta";

export const metadata = {
  title: "Contact | Immovia",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Contact />
      <Cta />
    </div>
  );
}
