"use client";
import { Logo } from "@nexus/ui";
import { useState } from "react";
import BuyerOnboarding from "./buyer-onboarding";
import UserOnboarding from "./user-onboarding";

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

      {step > 0 && userType === "SELLER" && <BuyerOnboarding />}

      {step > 0 && userType === "BUYER" && <BuyerOnboarding />}

      {step > 0 && userType === "BROKER" && <BuyerOnboarding />}
    </div>
  );
}
