"use client";

import * as React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ children, ...props }: SelectProps) => (
  <select
    {...props}
    className={`relative rounded-full border border-border bg-background py-2 px-4 text-sm focus:!border focus:!border-gray-600 focus:!ring-0 ${props.className}`}
  >
    {children}
  </select>
);
