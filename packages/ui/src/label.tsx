import * as React from "react";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => (
  <label
    className={`flex w-full flex-col gap-3 self-start text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  >
    {children}
  </label>
);
