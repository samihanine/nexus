import { LoadingView } from "@nexus/ui";
import { Address } from "@nexus/schemas";
import React, { useEffect, useState } from "react";
import AddressSearch from "../address/address-search";
import StepButtons from "./step-buttons";
import StepTitle from "./step-title";
import { useCreateProfile } from "../profile/use-create-profile";
import { useCurrentUser } from "../user/use-current-user";
import BudgetSelect from "./budget-select";
import PropertyTypesSelect from "./property-types-select";
import PeriodSelect from "./period-select";
import { useRouter } from "next/navigation";
import IdentityInputs from "./identity-inputs";

const BuyerOnboarding = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data: user } = useCurrentUser();
  const [radius, setRadius] = useState(0);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(0);
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [buyingPeriod, setBuyingPeriod] = useState<string | undefined>(
    undefined
  );
  const createProfileMutation = useCreateProfile();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setFirstName(user.name);
      if (user.imageUrl) setImageUrl(user.imageUrl);
    }
  }, [user]);

  const handleSumit = async () => {
    setStep((oldStep) => oldStep + 1);

    if (!user) return;

    try {
      await createProfileMutation.mutateAsync({
        type: "BUYER",
        firstName,
        lastName,
        imageUrl,
        buyer: {
          radius,
          minimumPrice,
          maximumPrice,
          longitude: address?.longitude || 0,
          latitude: address?.latitude || 0,
          propertyTypes,
          buyingPeriod: buyingPeriod as string,
        },
      });

      router.push(`/my-criteria`);
    } catch (error) {
      setStep((oldStep) => oldStep - 1);
    }
  };

  return (
    <>
      {step === 1 && (
        <>
          <StepTitle
            title="Qui êtes-vous ?"
            description="Veuillez saisir votre prénom, votre nom et une photo de profil."
            percentage={0}
          />

          <div className="flex flex-col gap-8 w-full max-w-lg items-center self-center">
            <IdentityInputs
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
          </div>

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={() => setStep(step + 1)}
            isNextStepDisabled={
              !firstName.length || !lastName.length || !imageUrl.length
            }
          />
        </>
      )}

      {step === 2 && (
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
            isNextStepDisabled={!radius || !address}
          />
        </>
      )}

      {step === 3 && (
        <>
          <StepTitle
            title="Quel budget prévoyez-vous pour l'achat de votre nouveau bien immobilier ?"
            description="En nous donnant une idée de votre budget, vous nous aiderez à trouver le bien qui vous convient."
            percentage={50}
          />
          <BudgetSelect
            setMinimumPrice={setMinimumPrice}
            setMaximumPrice={setMaximumPrice}
            minmuimPrice={minimumPrice}
            maximumPrice={maximumPrice}
          />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!maximumPrice}
          />
        </>
      )}

      {step === 4 && (
        <>
          <StepTitle
            title="Quel type de bien souhaitez-vous acheter ?"
            description="Vous pouvez sélectionner plusieurs types de biens si vous le souhaitez."
            percentage={75}
          />

          <PropertyTypesSelect
            propertyTypes={propertyTypes}
            setPropertyTypes={setPropertyTypes}
          />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!propertyTypes.length}
          />
        </>
      )}

      {step === 5 && (
        <>
          <StepTitle
            title="Quand souhaitez-vous acheter ?"
            description="Votre chronologie nous aide à comprendre comment nous pouvons vous aider à trouver le logement qui vous convient."
            percentage={100}
          />

          <PeriodSelect period={buyingPeriod} setPeriod={setBuyingPeriod} />

          <StepButtons
            isNextStepDisabled={!buyingPeriod}
            handleNextStep={handleSumit}
            handlePreviousStep={() => setStep(step - 1)}
            isLastStep
          />
        </>
      )}

      {step === 6 && (
        <div className="h-full w-full">
          <LoadingView />
        </div>
      )}
    </>
  );
};

export default BuyerOnboarding;
