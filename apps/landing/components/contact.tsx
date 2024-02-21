import { Button, H1 } from "@nexus/ui";

export default function Contact() {
  return (
    <section className="pb-32 pt-40">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
          <H1>
            <span className="opacity-80">Contactez-nous</span>
          </H1>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Nous sommes à votre écoute pour donner vie à vos visions. Entrez en
            contact et explorez les possibilités de collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg">
          <div className="relative">
            <form
              action=""
              className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12"
            >
              <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  À propos de vous
                </h2>
                <div className="mt-8 mb-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Votre nom{" "}
                      <span className="text-xl text-red-500 dark:text-red-400">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Courriel{" "}
                      <span className="text-xl text-red-500 dark:text-red-400">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Téléphone{" "}
                      <span className="text-xl text-red-500 dark:text-red-400"></span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"
                    ></textarea>

                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                </div>

                <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">
                  En cliquant sur soumettre ci-dessous, vous acceptez le
                  traitement de vos informations personnelles par Émergence
                  Entreprise tel que décrit dans la politique de
                  confidentialité.
                </p>

                <Button type="submit">
                  <span className="relative text-base font-semibold text-white dark:text-gray-900">
                    Envoyer
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
