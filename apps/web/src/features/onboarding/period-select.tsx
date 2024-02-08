import { MultiSelectCard } from "@nexus/ui";
import React from "react";

export default function PeriodSelect({
  period,
  setPeriod,
}: {
  period: string | undefined;
  setPeriod: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <MultiSelectCard
      selected={period ? [period] : []}
      className="max-w-md w-full self-center"
      setSelected={(value) => setPeriod(value[0])}
      maxItems={1}
      items={[
        {
          label: "Dans les 3 prochains mois",
          value: "0-3",
        },
        {
          label: "Dans les 6 prochains mois",
          value: "0-6",
        },
        {
          label: "Dans l'année",
          value: "0-12",
        },
        {
          label: "Dans les 2 prochaines années",
          value: "0-24",
        },
      ]}
    />
  );
}
