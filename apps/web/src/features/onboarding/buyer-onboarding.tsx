import { MultiSelectCard, LoadingView } from "@nexus/ui";
import { Address } from "@prisma/client";
import { useState } from "react";
import AddressSearch from "./address-search";
import StepButtons from "./step-buttons";
import StepTitle from "./step-title";

const BuyerOnboarding = () => {
  const [step, setStep] = useState(1);
  const [radius, setRadius] = useState(0);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(0);
  const [address, setAddress] = useState<Partial<Address> | undefined>(
    undefined
  );
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [when, setWhen] = useState<string | undefined>(undefined);

  const budgetSteps = [
    {
      label: "< $350 K",
      value: 350_000,
    },
    {
      label: "$350 K - $500 K",
      value: 500_000,
    },
    {
      label: "$500 K - $750 K",
      value: 750_000,
    },
    {
      label: "$750 K - $1 M",
      value: 1_000_000,
    },
    {
      label: "$1 M - $1.5 M",
      value: 1_500_000,
    },
    {
      label: "> $1.5 M",
      value: 1_500_001,
    },
  ];

  const handleSumit = () => {
    setStep((oldStep) => oldStep + 1);
    console.log({
      radius,
      minimumPrice,
      maximumPrice,
      address,
      propertyTypes,
      when,
    });
  };

  return (
    <>
      {step === 1 && (
        <>
          <StepTitle
            title="Où cherchez-vous à acheter ?"
            description="Veuillez saisir la ville ou le code postal qui vous intéresse le plus."
            percentage={25}
          />

          <AddressSearch
            address={address}
            setAddress={setAddress}
            radius={radius}
            setRadius={setRadius}
          />

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={() => setStep(step + 1)}
            isNextStepDisabled={!radius}
          />
        </>
      )}

      {step === 2 && (
        <>
          <StepTitle
            title="Quel budget prévoyez-vous pour l'achat de votre nouveau bien immobilier ?"
            description="En nous donnant une idée de votre budget, vous nous aiderez à trouver le bien qui vous convient."
            percentage={50}
          />
          <MultiSelectCard
            selected={[maximumPrice]}
            className="max-w-md w-full self-center"
            setSelected={(value) => {
              const budget = budgetSteps.find((b) => b.value === value[0]);
              if (!budget) return;
              const upperBound = budget.value;
              let lowerBound = 0;
              for (let i = 0; i < budgetSteps.length; i++) {
                if (budgetSteps[i].value < upperBound) {
                  lowerBound = budgetSteps[i].value;
                }
              }

              setMaximumPrice(upperBound || 0);
              setMinimumPrice(lowerBound);
            }}
            maxItems={1}
            items={budgetSteps}
          />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!minimumPrice}
          />
        </>
      )}

      {step === 3 && (
        <>
          <StepTitle
            title="Quel type de bien souhaitez-vous acheter ?"
            description="Vous pouvez sélectionner plusieurs types de biens si vous le souhaitez."
            percentage={75}
          />

          <MultiSelectCard
            selected={propertyTypes}
            className="max-w-md w-full self-center"
            setSelected={setPropertyTypes}
            items={[
              {
                label: "Maisons",
                value: "HOUSE",
              },
              {
                label: "Condo",
                value: "CONDO",
              },
              {
                label: "Terrain",
                value: "LAND",
              },
            ]}
          />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!propertyTypes.length}
          />
        </>
      )}

      {step === 4 && (
        <>
          <StepTitle
            title="Quand souhaitez-vous acheter ?"
            description="Votre chronologie nous aide à comprendre comment nous pouvons vous aider à trouver le logement qui vous convient."
            percentage={100}
          />

          <MultiSelectCard
            selected={when ? [when] : []}
            className="max-w-md w-full self-center"
            setSelected={(value) => setWhen(value[0])}
            items={[
              {
                label: "Dans les 3 prochains mois",
                value: "0-3",
              },
              {
                label: "Dans les 6 prochains mois",
                value: "0-6",
              },
              {
                label: "Dans l'année",
                value: "0-12",
              },
              {
                label: "Dans les 2 prochaines années",
                value: "0-24",
              },
            ]}
          />

          <StepButtons
            isNextStepDisabled={!when}
            handleNextStep={handleSumit}
            handlePreviousStep={() => setStep(step - 1)}
          />
        </>
      )}

      {step === 5 && (
        <div className="h-full w-full">
          <LoadingView />
        </div>
      )}
    </>
  );
};

export default BuyerOnboarding;
