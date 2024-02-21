"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { H2, Muted, H3 } from "@nexus/ui";

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 mt-28">
      <H2 className="text-center mb-3">Nos services sur mesure</H2>
      <Muted className="text-center max-w-3xl mx-auto mb-14 !text-base">
        Immovia simplifie la complexité de l'immobilier en fournissant des
        solutions pour chaque acteur du marché. Notre plateforme intuitive vous
        ouvre les portes d'une expérience sans précédent.
      </Muted>
      {/* Section content */}
      <div className="md:grid md:grid-cols-12 md:gap-6">
        {/* Content */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
          <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
            <H3 className="mb-3">
              Pour chaque profil, nous avons la solution.
            </H3>
            <Muted className="!text-base">
              Ayez accès à des fonctionnalités dédiées conçues pour répondre aux
              besoins de chaque acteur de l’immobilier.
            </Muted>
          </div>
          {/* Tabs buttons */}
          <div className="mb-8 md:mb-0">
            <button
              className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                tab !== 1
                  ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                  : "bg-gray-200 border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setTab(1);
              }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Vous êtes un courtier immobilier
                </div>
                <div className="text-gray-600">
                  Vente et acquisition facilitées pour les courtiers. Immovia
                  révolutionne la gestion clientèle et la prospection.
                </div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                <svg
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                </svg>
              </div>
            </button>
            <button
              className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                tab !== 2
                  ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                  : "bg-gray-200 border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setTab(2);
              }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Vous êtes un acheteur
                </div>
                <div className="text-gray-600">
                  Les acheteurs reçoivent des offres personnalisées, avec un
                  accès direct aux dernières nouveautés immobilières.
                </div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                <svg
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
            </button>
            <button
              className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                tab !== 3
                  ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                  : "bg-gray-200 border-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setTab(3);
              }}
            >
              <div>
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Vous êtes un vendeur
                </div>
                <div className="text-gray-600">
                  Immovia offre aux vendeurs les outils pour présenter leurs
                  biens et cibler directement les acheteurs.
                </div>
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                <svg
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 fill-current"
                >
                  <path
                    d="M6.75917 14.0987V12.0725C6.75917 11.5553 7.18153 11.136 7.70255 11.136H9.6071C9.8573 11.136 10.0973 11.2346 10.2742 11.4103C10.4511 11.5859 10.5505 11.8241 10.5505 12.0725V14.0987C10.5489 14.3137 10.6338 14.5205 10.7864 14.6731C10.9391 14.8257 11.1467 14.9115 11.3633 14.9115H12.6627C13.2696 14.9131 13.8521 14.6748 14.2818 14.2494C14.7114 13.824 14.9529 13.2463 14.9529 12.6438V6.87156C14.9529 6.38491 14.7356 5.9233 14.3596 5.61108L9.93936 2.10649C9.17045 1.49202 8.06877 1.51186 7.32282 2.15361L3.00346 5.61108C2.60967 5.9141 2.3743 6.37708 2.36267 6.87156V12.6379C2.36267 13.8936 3.38803 14.9115 4.65288 14.9115H5.92259C6.37248 14.9115 6.73811 14.5512 6.74137 14.1046L6.75917 14.0987Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Tabs items */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
          <div className="transition-all">
            <div
              className="relative flex flex-col text-center lg:text-right"
              ref={tabs}
            >
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
                beforeEnter={() => heightFix()}
                unmount={false}
              >
                <div className="relative inline-flex flex-col">
                  <Image
                    className="md:max-w-none mx-auto rounded"
                    src={"/images/features-home-bg-01.png"}
                    width={500}
                    height={500}
                    alt="Features bg"
                  />
                </div>
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
                beforeEnter={() => heightFix()}
                unmount={false}
              >
                <div className="relative inline-flex flex-col">
                  <Image
                    className="md:max-w-none mx-auto rounded"
                    src={"/images/features-home-bg-02.png"}
                    width={500}
                    height={500}
                    alt="Features bg"
                  />
                </div>
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
                beforeEnter={() => heightFix()}
                unmount={false}
              >
                <div className="relative inline-flex flex-col">
                  <Image
                    className="md:max-w-none mx-auto rounded"
                    src={"/images/features-home-bg-03.png"}
                    width={500}
                    height={500}
                    alt="Features bg"
                  />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
