"use client";

import { useCurrentProfile } from "@/features/profile/use-current-profile";
import EditProperty from "@/features/property/edit-property";
import { usePropertyByProfileId } from "@/features/property/use-property-by-profile-id";
import { LoadingView, Section } from "@nexus/ui";

export default function Page() {
  const { data: profile } = useCurrentProfile();
  const { data: property } = usePropertyByProfileId(profile?.id as string);

  if (!property) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  return (
    <>
      <EditProperty property={property} />
    </>
  );
}
