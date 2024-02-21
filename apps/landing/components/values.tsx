export default function Values() {
  return (
    <section className="relative py-32" id="values">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
      >
        <div className="h-60 bg-gradient-to-br from-primary/70 to-primary/20 blur-[106px]"></div>
        <div className="h-40 bg-gradient-to-r from-primary/70 to-primary/20 blur-[106px]"></div>
      </div>
      <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
            Nos valeurs : le pilier de votre succès
          </h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
            Chez Émergence Entreprise, nous cultivons des principes essentiels
            qui non seulement définissent qui nous sommes, mais propulsent
            également chaque projet et ambition de nos clients vers de nouveaux
            sommets.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
            <div className="space-y-12 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                className="mx-auto h-14 w-auto"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Intégrité
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chez Émergence, l'intégrité est au cœur de tout ce que nous
                  faisons. Nous agissons avec honnêteté et transparence,
                  bâtissant une relation de confiance avec nos clients et
                  partenaires. Notre engagement envers l'éthique garantit que
                  nous tenons toujours nos promesses.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
            <div className="space-y-12 text-center">
              <img
                src="/images/icons/responsibility.png"
                className="mx-auto h-14 w-auto"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Responsabilité
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chaque décision est prise avec responsabilité, assurant que
                  nos actions servent toujours les intérêts de nos clients,
                  partenaires et de la communauté. Nous sommes fiers d'assumer
                  l'impact de nos décisions, en plaçant la satisfaction du
                  client au centre de notre mission.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
            <div className="space-y-12 text-center">
              <img
                src="/images/icons/collaboration.png"
                className="mx-auto h-14 w-auto"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous croyons que la collaboration est la clé de la réussite.
                  Émergence encourage une culture où les équipes et nos
                  partenaires travaillent ensemble. En unissant nos forces et
                  diverses perspectives, nous trouvons des solutions innovantes
                  pour nos clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
