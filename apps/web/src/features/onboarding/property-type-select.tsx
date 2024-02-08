import { MultiSelectCard } from "@nexus/ui";
import React from "react";

export default function PropertyTypeSelect({
  propertyType,
  setPropertyType,
}: {
  propertyType: string | undefined;
  setPropertyType: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <MultiSelectCard
      selected={propertyType ? [propertyType] : []}
      className="max-w-md w-full self-center"
      setSelected={(value) => setPropertyType(value[0])}
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
