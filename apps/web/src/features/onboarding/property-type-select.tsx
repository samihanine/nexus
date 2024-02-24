import { Property } from "@nexus/schemas";
import { MultiSelectCard } from "@nexus/ui";
import React from "react";

export default function PropertyTypeSelect({
  propertyType,
  setPropertyType,
}: {
  propertyType: Property["type"] | undefined;
  setPropertyType: React.Dispatch<
    React.SetStateAction<Property["type"] | undefined>
  >;
}) {
  return (
    <MultiSelectCard
      selected={propertyType ? [propertyType] : []}
      className="max-w-md w-full self-center"
      setSelected={(selected) =>
        setPropertyType(selected[0] as Property["type"])
      }
      maxItems={1}
      items={[
        {
          label: "Maisons",
          value: "HOUSE",
        },
        {
          label: "Condo",
          value: "CONDO",
        },
        {
          label: "Multifamiliale",
          value: "MULTIFAMILY",
        },
        {
          label: "Maison de ville",
          value: "TOWNHOUSE",
        },
        {
          label: "Terrain",
          value: "LAND",
        },
      ]}
    />
  );
}
