import { Input, LoadingView } from "@nexus/ui";
import { Address } from "@prisma/client";
import React, { useState, useEffect } from "react";
import AddressSearch from "./address-search";
import StepButtons from "./step-buttons";
import StepTitle from "./step-title";
import { useUpdateProfile } from "./use-update-profile";
import toast from "react-hot-toast";
import { useCurrentUser } from "../user/use-current-user";
import PropertyTypeSelect from "./property-type-select";
import PeriodSelect from "./period-select";
import { useRouter } from "next/navigation";
import IdentityInputs from "./identity-inputs";

const SellerOnboarding = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data: user } = useCurrentUser();
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [address, setAddress] = useState<Partial<Address> | undefined>(
    undefined
  );
  const [propertyType, setPropertyType] = useState<string | undefined>(
    undefined
  );
  const [radius, setRadius] = useState(0);
  const [period, setPeriod] = useState<string | undefined>(undefined);
  const updateProfileMutation = useUpdateProfile();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
      await updateProfileMutation.mutateAsync({
        id: user.profileId,
        type: "SELLER",
        firstName,
        lastName,
        imageUrl,
        seller: {
          sellingPeriod: period as string,
        },
      });

      router.push("/dashboard");
    } catch (error) {
      toast.error("Une erreur s'est produite");
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
            title="Où se site votre bien"
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
            title="Quel prix de vente envisagez-vous pour votre bien ?"
            description="En évaluant la valeur de votre propriété, nous pouvons élaborer un plan personnalisé pour répondre à vos besoins."
            percentage={50}
          />

          <Input
            value={price}
            onChange={(e) => setPrice(Number(e.currentTarget.value))}
            placeholder="Saisir le prix du logement"
            className="w-full max-w-lg self-center"
            type="number"
            min="0"
          />

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={() => setStep(step + 1)}
            isNextStepDisabled={!price}
          />
        </>
      )}

      {step === 4 && (
        <>
          <StepTitle
            title="Quel type de bien souhaitez-vous vendre ?"
            percentage={75}
          />

          <PropertyTypeSelect
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!propertyType}
          />
        </>
      )}

      {step === 5 && (
        <>
          <StepTitle
            title="Quand souhaitez-vous vendre ?"
            description="Votre calendrier nous aide à comprendre comment nous pouvons vous aider à trouver le bon acheteur."
            percentage={100}
          />

          <PeriodSelect period={period} setPeriod={setPeriod} />

          <StepButtons
            isNextStepDisabled={!period}
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

export default SellerOnboarding;
