import { cn } from "@nexus/utils";
import React from "react";

export const IconButton = ({
  Icon,
  size = "md",
  ...props
}: React.ComponentProps<"button"> & {
  Icon: React.ComponentType<any>;
  size?: "sm" | "md" | "lg";
}) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-slate-100 rounded-full flex items-center justify-center border border-input",
        size === "sm" && "w-8 h-8",
        size === "lg" && "w-16 h-16",
        size === "md" && "w-11 h-11",
        props.className
      )}
    >
      <Icon
        className={cn(
          "text-slate-900",
          size === "md" && "h-6 w-6",
          size === "sm" && "w-4 h-4",
          size === "lg" && "w-8 h-8"
        )}
      />
    </button>
  );
};
