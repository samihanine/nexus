"use client";

import * as React from "react";

export interface ChipProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: string;
}

export const Chip: React.FC<ChipProps> = ({ variant, children, ...props }) => {
  let colorClasses: string;
  switch (variant) {
    case "red":
      colorClasses = "bg-red-200 text-red-800 dark:bg-red-200";
      break;
    case "yellow":
      colorClasses = "bg-yellow-200 text-yellow-800 dark:bg-yellow-200";
      break;
    case "green":
      colorClasses = "bg-green-200 text-green-800 dark:bg-green-200";
      break;
    case "blue":
      colorClasses = "bg-blue-200 text-blue-800 dark:bg-blue-200";
      break;
    case "indigo":
      colorClasses = "bg-indigo-200 text-indigo-800 dark:bg-indigo-200";
      break;
    case "purple":
      colorClasses = "bg-purple-200 text-purple-800 dark:bg-purple-200";
      break;
    case "pink":
      colorClasses = "bg-pink-200 text-pink-800 dark:bg-pink-200";
      break;
    case "ghost":
      colorClasses = "bg-background border border-border text-foreground";
      break;
    case "gray":
    default:
      colorClasses = "bg-slate-200 dark:bg-grey-200 text-slate-800";
      break;
  }

  return (
    <div
      {...props}
      className={`${colorClasses} inline-flex w-max items-center justify-center gap-2 whitespace-nowrap rounded-full bg-background px-3 py-[4px] text-center text-xs font-medium ${props.className}`}
    >
      {children}
    </div>
  );
};
