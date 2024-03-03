"use client";

import BuyerProfileEditor from "@/features/buyer/buyer-profile-editor";
import { useCurrentProfile } from "@/features/profile/use-current-profile";
import { useProfileById } from "@/features/profile/use-profile-by-id";
import { LoadingView, Section } from "@nexus/ui";
import { notFound } from "next/navigation";

export default function Page() {
  const { data, isPending: isCurrentProfilePending } = useCurrentProfile();
  const { data: profile, isPending } = useProfileById(data?.id as string);

  if (isPending || isCurrentProfilePending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (!profile?.buyer) {
    return notFound();
  }

  return <BuyerProfileEditor profile={profile} buyer={profile.buyer} />;
}
