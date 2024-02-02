import * as React from "react";

export type InputFieldProps = React.ComponentProps<"div">;

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className = "", ...props }, ref) => (
    <div className={`flex flex-col gap-3 ${className}`} ref={ref} {...props} />
  )
);

InputField.displayName = "InputField";
