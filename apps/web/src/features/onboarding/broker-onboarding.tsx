import { LoadingView } from "@nexus/ui";
import { Address } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../user/use-current-user";
import AddressSearch from "../address/address-search";
import IdentityInputs from "./identity-inputs";
import StepButtons from "./step-buttons";
import StepTitle from "./step-title";
import { useCreateProfile } from "../profile/use-create-profile";
import BrokerInputs from "./broker-inputs";

const BrokerOnboarding = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data: user } = useCurrentUser();
  const [radius, setRadius] = useState(0);
  const [address, setAddress] = useState<Address | undefined>(undefined);
  const createProfileMutation = useCreateProfile();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [oaciqNumber, setOaciqNumber] = useState("");
  const [centrisUrl, setCentrisUrl] = useState("");
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
        type: "BROKER",
        firstName,
        lastName,
        imageUrl,
        broker: {
          phone,
          oaciqNumber,
          centrisUrl,
          latitude: address?.latitude || 0,
          longitude: address?.longitude || 0,
          description: "",
          email: "",
          radius,
        },
      });

      router.push(`/conversations`);
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
            title="Parlez-nous un peu de vous en tant qu'agent immobilier"
            description="Donnez-nous plus d'informations sur vous, afin que nous puissions vous aider."
            percentage={50}
          />

          <div className="flex flex-col gap-8 w-full max-w-lg items-center self-center">
            <BrokerInputs
              phone={phone}
              setPhone={setPhone}
              oaciqNumber={oaciqNumber}
              setOaciqNumber={setOaciqNumber}
              centrisUrl={centrisUrl}
              setCentrisUrl={setCentrisUrl}
            />
          </div>

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={() => setStep(step + 1)}
            isNextStepDisabled={
              !phone.length || !oaciqNumber.length || !centrisUrl.length
            }
          />
        </>
      )}

      {step === 3 && (
        <>
          <StepTitle
            title="Quelle zone souhaitez-vous desservir ?"
            description="Please enter the city or zip code "
            percentage={100}
          />

          <AddressSearch
            address={address}
            setAddress={setAddress}
            radius={radius}
            setRadius={setRadius}
          />

          <StepButtons
            handlePreviousStep={() => setStep(step - 1)}
            handleNextStep={handleSumit}
            isNextStepDisabled={!radius || !address}
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

export default BrokerOnboarding;
