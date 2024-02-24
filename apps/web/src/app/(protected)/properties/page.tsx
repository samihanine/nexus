"use client";

import PropertiesList from "@/features/property/properties-list";
import { useSearchProperties } from "@/features/property/use-search-properties";
import { LoadingView, Section } from "@nexus/ui";
import { useCurrentProfile } from "@/features/profile/use-current-profile";

export default function Page() {
  const { data: profile } = useCurrentProfile();
  const { data: properties = [], isPending } = useSearchProperties({
    profileId: profile?.id as string,
  });

  if (isPending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  return (
    <Section>
      <PropertiesList properties={properties} />
    </Section>
  );
}
