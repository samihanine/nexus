import Image from "next/image";

export default function DescriptionHome() {
  return (
    <section
      className="border-t border-gray-100 pt-16 dark:border-gray-800 md:pt-32"
      id="about"
    >
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="items-center justify-center space-y-6 md:flex-row flex-col-reverse flex md:gap-6 md:space-y-0">
          <div className="md:w-1/2 lg:w-3/5">
            <Image
              className="h-full rounded-3xl object-cover md:-ml-8"
              src="/images/woman.png"
              alt="working woman"
              loading="lazy"
              width="1399"
              height="1314"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-secondaryLight">
              Notre Mission
            </span>
            <h2 className="my-8 text-4xl font-bold text-gray-900 lg:text-5xl">
              Nous optimisons la{" "}
              <span className="text-primary">mise en relation</span> de tous les
              acteurs de l’immobilier.
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Notre mission chez Immovia est d'ouvrir de nouveaux chapitres dans
              le domaine de l'immobilier. Nous nous engageons à éclairer la voie
              pour chaque acteur du marché immobilier au Québec, en apportant
              une solution innovante et en propulsant l'industrie vers l'avenir.
              En concentrant nos efforts sur l'harmonisation des échanges entre
              acheteurs, vendeurs et professionnels, nous façonnons une
              expérience immobilière intuitive et avancée. Chez Immovia, nous
              sommes déterminés à établir des relations de confiance et à offrir
              une qualité de service qui définit les standards de demain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
