"use client";

import BuyerProfileEditor from "@/features/buyer/buyer-profile-editor";
import { useCurrentProfile } from "@/features/profile/use-current-profile";
import { Section } from "@nexus/ui";

export default function Page() {
  const { data: profile } = useCurrentProfile();

  if (!profile?.buyer) {
    return null;
  }

  return (
    <Section>
      <BuyerProfileEditor profile={profile} buyer={profile.buyer} />
    </Section>
  );
}
