import { MultiSelectCard } from "@nexus/ui";
import React from "react";

export default function PropertyTypesSelect({
  propertyTypes,
  setPropertyTypes,
}: {
  propertyTypes: string[];
  setPropertyTypes: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <MultiSelectCard
      selected={propertyTypes}
      className="max-w-md w-full self-center"
      setSelected={(value) => setPropertyTypes(value)}
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
