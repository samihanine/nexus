import { H2, Muted } from "@nexus/ui";
import Image from "next/image";

export default function FeaturesWorld() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <H2 className="text-center mb-3">
              <span className="text-primary">Immovia</span> place le Québec au
              cœur de ses priorités.
            </H2>
            <Muted className="text-center max-w-3xl mx-auto mb-14">
              Grâce à notre plateforme, initiez des connexions aisées au Québec,
              avant de tisser votre toile à travers tout le Québec, facilitant
              ainsi l'accès à un réseau national de particuliers et de
              professionnels immobiliers.
            </Muted>
          </div>

          {/* World illustration */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Halo effect */}

              {/* Globe image */}
              <Image
                className="relative"
                src={"/images/planet.webp"}
                width={600}
                height={600}
                alt="Planet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
