"use client";

import { cn } from "@nexus/utils";
import { Card, CardContent, CardHeader } from "./card";
import React from "react";

export type MultiSelectIconProps<T> = {
  items: {
    label: string;
    value: T;
  }[];
  selected: T[];
  setSelected: (value: T[]) => void;
  maxItems?: number;
  className?: string;
};

export const MultiSelectCard = <T extends unknown>({
  items,
  selected,
  setSelected,
  maxItems,
  className,
}: MultiSelectIconProps<T>) => {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item, index) => {
        const isSelected = selected.includes(item.value);

        return (
          <Card
            key={index}
            className={cn(
              `flex flex-1 items-center cursor-pointer p-4 justify-center gap-3 font-medium`,
              isSelected && "!bg-secondary",
              className
            )}
            onClick={() => {
              if (isSelected) {
                setSelected(selected.filter((i) => i !== item.value));
              } else {
                if (maxItems === 1) {
                  setSelected([item.value]);
                  return;
                }

                if (maxItems && selected.length >= maxItems) {
                  return;
                }

                console.log(isSelected, selected, item.value, maxItems);

                const newArray = selected.filter((i) => i !== item.value);
                console.log([...newArray, item.value]);
                setSelected([...newArray, item.value]);
              }
            }}
          >
            {item.label}
          </Card>
        );
      })}
    </div>
  );
};
