import { Input, LoadingView } from "@nexus/ui";
import { Address } from "@prisma/client";
import React, { useState } from "react";
import AddressSearch from "./address-search";
import StepButtons from "./step-buttons";
import StepTitle from "./step-title";
import { useUpdateProfile } from "./use-update-profile";
import toast from "react-hot-toast";
import { useCurrentUser } from "../user/use-current-user";
import PropertyTypeSelect from "./property-type-select";
import PeriodSelect from "./period-select";
import { useRouter } from "next/navigation";

const SellerOnboarding = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data: user } = useCurrentUser();
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState<Partial<Address> | undefined>(
    undefined
  );
  const [propertyType, setPropertyType] = useState<string | undefined>(
    undefined
  );
  const [period, setPeriod] = useState<string | undefined>(undefined);
  const updateProfileMutation = useUpdateProfile();
  const router = useRouter();

  const handleSumit = async () => {
    setStep((oldStep) => oldStep + 1);

    if (!user) return;

    try {
      await updateProfileMutation.mutateAsync({
        id: user.profileId,
        type: "SELLER",
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
            title="What is the adress of the property you are looking to sell ?"
            description="Please enter the city or postal code of your property."
            percentage={25}
          />

          <AddressSearch address={address} setAddress={setAddress} />

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={() => setStep(step + 1)}
            isNextStepDisabled={!address}
          />
        </>
      )}

      {step === 2 && (
        <>
          <StepTitle
            title="What selling price would you consider for your property ?"
            description="By assessing the value of your property, we can develop a customized plan to meet your requirements."
            percentage={50}
          />

          <Input onChange={(e) => setPrice(Number(e.target.value))} />

          <StepButtons
            handleNextStep={() => setStep(step + 1)}
            handlePreviousStep={() => setStep(step - 1)}
            isNextStepDisabled={!price}
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

      {step === 4 && (
        <>
          <StepTitle
            title="Quand souhaitez-vous acheter ?"
            description="Votre chronologie nous aide à comprendre comment nous pouvons vous aider à trouver le logement qui vous convient."
            percentage={100}
          />

          <PeriodSelect period={period} setPeriod={setPeriod} />

          <StepButtons
            isNextStepDisabled={!period}
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

export default SellerOnboarding;
