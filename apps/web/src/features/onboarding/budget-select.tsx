import { MultiSelectCard } from "@nexus/ui";
import React from "react";

export default function BudgetSelect({
  minmuimPrice,
  setMinimumPrice,
  maximumPrice,
  setMaximumPrice,
}: {
  minmuimPrice: number;
  setMinimumPrice: React.Dispatch<React.SetStateAction<number>>;
  maximumPrice: number;
  setMaximumPrice: React.Dispatch<React.SetStateAction<number>>;
}) {
  const budgetSteps = [
    {
      label: "< $350 K",
      value: 350_000,
    },
    {
      label: "$350 K - $500 K",
      value: 500_000,
    },
    {
      label: "$500 K - $750 K",
      value: 750_000,
    },
    {
      label: "$750 K - $1 M",
      value: 1_000_000,
    },
    {
      label: "$1 M - $1.5 M",
      value: 1_500_000,
    },
    {
      label: "> $1.5 M",
      value: 1_500_001,
    },
  ];

  return (
    <MultiSelectCard
      selected={[maximumPrice]}
      className="max-w-md w-full self-center"
      setSelected={(value) => {
        const budget = budgetSteps.find((b) => b.value === value[0]);
        if (!budget) return;
        const upperBound = budget.value;
        let lowerBound = 0;
        for (let i = 0; i < budgetSteps.length; i++) {
          if (budgetSteps[i].value < upperBound) {
            lowerBound = budgetSteps[i].value;
          }
        }

        setMaximumPrice(upperBound || 0);
        setMinimumPrice(lowerBound);
      }}
      maxItems={1}
      items={budgetSteps}
    />
  );
}
