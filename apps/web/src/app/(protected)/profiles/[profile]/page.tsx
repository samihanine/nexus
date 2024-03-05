"use client";

import BuyerProfileDetails from "@/features/buyer/buyer-details";
import { LoadingView, Section } from "@nexus/ui";
import { notFound } from "next/navigation";
import { useBuyerByProfileId } from "@/features/buyer/use-buyer-by-profile-id";

export default function Page(props: {
  params: {
    profile: string;
  };
}) {
  const { data: buyer, isPending } = useBuyerByProfileId(props.params.profile);

  if (isPending || isPending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (buyer) {
    return (
      <Section>
        <BuyerProfileDetails buyer={buyer} />
      </Section>
    );
  }

  return notFound();
}
