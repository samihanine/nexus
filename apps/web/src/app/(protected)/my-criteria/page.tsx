"use client";

import BuyerProfileEditor from "@/features/buyer/buyer-editor";
import { useBuyerByProfileId } from "@/features/buyer/use-buyer-by-profile-id";
import { useCurrentProfile } from "@/features/profile/use-current-profile";
import { LoadingView, Section } from "@nexus/ui";
import { notFound } from "next/navigation";

export default function Page() {
  const { data: profile, isPending: isCurrentProfilePending } =
    useCurrentProfile();
  const { data: buyer, isPending } = useBuyerByProfileId(profile?.id);

  if (isPending || isCurrentProfilePending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (!buyer) {
    return <></>;
  }

  return <BuyerProfileEditor buyer={buyer} />;
}
