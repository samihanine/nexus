import * as React from "react";

export type DescriptionProps = React.ComponentProps<"p">;

const Description = React.forwardRef<HTMLInputElement, DescriptionProps>(
  ({ className = "", ...props }, ref) => (
    <p
      className={`text-sm text-muted-foreground ${className}`}
      ref={ref}
      {...props}
    />
  ),
);

Description.displayName = "Description";

export default Description;
