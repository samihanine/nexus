"use client";

import Onboarding from "@/features/onboarding/onboarding";
import { useCurrentUser } from "@/features/user/use-current-user";
import { LoadingView, Section } from "@nexus/ui";

export default function Page() {
  const { isPending } = useCurrentUser();

  if (isPending) return <LoadingView />;

  return (
    <Section>
      <Onboarding />
    </Section>
  );
}
