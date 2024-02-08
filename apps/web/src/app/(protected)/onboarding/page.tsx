"use client";

import Onboarding from "@/features/onboarding/onboarding";
import { useCurrentUser } from "@/features/user/use-current-user";
import { LoadingView, Section } from "@nexus/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { data: user, isPending } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (user?.profile?.type !== "DEFAULT" && !isPending) {
      //router.push("/dashboard");
    }
  }, [user, isPending]);

  if (isPending) return <LoadingView />;

  return (
    <Section>
      <Onboarding />
    </Section>
  );
}
