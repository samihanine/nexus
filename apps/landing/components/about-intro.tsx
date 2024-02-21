import { H1, Muted } from "@nexus/ui";

export default function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <H1 className="mb-4">L’équipe d’Immovia</H1>
            <Muted>
              Immovia est animée par une équipe déterminée à enrichir et à
              simplifier chaque facette du marché immobilier. C'est la
              persévérance, l'innovation et l'esprit collaboratif qui nous
              guident afin de devenir une référence en matière de connexion
              immobilière.
            </Muted>
          </div>
        </div>
      </div>
    </section>
  );
}
