"use client";

import PropertiesDetails from "@/features/property/property-details";
import { usePropertyById } from "@/features/property/use-property-by-id";
import { LoadingView, Section } from "@nexus/ui";
import { notFound } from "next/navigation";

export default function Page(props: {
  params: {
    property: string;
  };
}) {
  const { data: property, isPending } = usePropertyById(props.params.property);

  if (isPending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (!property) {
    return notFound();
  }

  return (
    <Section>
      <PropertiesDetails {...property} />
    </Section>
  );
}
