"use client";
import { useState } from "react";
import BuyerOnboarding from "./buyer-onboarding";
import UserOnboarding from "./user-onboarding";
import SellerOnboarding from "./seller-onboarding";
import BrokerOnboarding from "./broker-onboarding";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<string | undefined>(undefined);

  return (
    <div className={"flex flex-col gap-14 w-full h-full"}>
      {step === 0 && (
        <UserOnboarding
          setUserType={setUserType}
          userType={userType}
          setStep={setStep}
        />
      )}

      {step > 0 && userType === "SELLER" && (
        <SellerOnboarding setStep={setStep} step={step} />
      )}

      {step > 0 && userType === "BUYER" && (
        <BuyerOnboarding setStep={setStep} step={step} />
      )}

      {step > 0 && userType === "BROKER" && (
        <BrokerOnboarding setStep={setStep} step={step} />
      )}
    </div>
  );
}
