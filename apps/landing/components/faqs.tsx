import { H2, H3 } from "@nexus/ui";
import Accordion from "./accordion";

export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <H2>Questions féquentes</H2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            <Accordion title="Quels services Immovia offre-t-elle spécifiquement aux acheteurs immobiliers?">
              Immovia offre aux acheteurs un accès à des annonces triées sur le
              volet, des recommandations personnalisées basées sur leurs
              préférences, et des alertes pour les nouvelles inscriptions qui
              correspondent à leurs critères de recherche pour une expérience
              d'achat optimisée. Mais ce n’est pas tout ! Un atout majeur attend
              les acheteurs avec une fonctionnalité exclusive dès le lancement
              d'Immovia. Inscrivez-vous à notre liste d'attente pour être parmi
              les premiers à la découvrir !
            </Accordion>
            <Accordion title="Comment Immovia aide-t-elle les vendeurs à maximiser leur visibilité?">
              Notre plateforme utilise des outils d'analyse de marché avancés
              pour mettre en valeur les propriétés des vendeurs auprès des
              acheteurs potentiels les plus pertinents, tout en fournissant des
              conseils sur la stratégie de prix et de marketing.
            </Accordion>
            <Accordion title="Quels avantages les courtiers ont-ils en utilisant Immovia?">
              Les courtiers bénéficient d'outils de prospection innovants, de la
              gestion de la relation client, et de notre système de matching
              exclusif qui les aide à trouver la correspondance parfaite entre
              les propriétés et les clients, augmentant ainsi leur efficacité et
              leurs ventes.
            </Accordion>
            <Accordion
              title="Immovia est-elle accessible partout au Canada?"
              active
            >
              Actuellement, Immovia se concentre sur le marché québécois, avec
              des plans d'expansion à travers tout le Canada dans un avenir
              proche. Inscrivez-vous à notre newsletter pour être informé de
              notre lancement dans d'autres provinces.
            </Accordion>
            <Accordion title="Comment puis-je m'inscrire à Immovia et quel est le coût?">
              Pour vous inscrire à Immovia, inscrivez-vous sur notre liste
              d'attente ou contactez-nous via le formulaire. Les informations
              détaillées sur nos tarifs seront disponibles à la sortie de la
              plateforme. Nous offrirons différents niveaux d'abonnement adaptés
              à vos besoins spécifiques, y compris une option gratuite avec des
              fonctionnalités de base. Rejoignez la liste d'attente dès
              maintenant pour bénéficier d'avantages exclusifs dès notre
              lancement.
            </Accordion>
            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
