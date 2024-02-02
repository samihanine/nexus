import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div
    {...props}
    className={`overflow-hidden rounded-md border border-border bg-background ${className}`}
  >
    {props.children}
  </div>
);

export const CardFooter: React.FC<CardProps> = ({ className, ...props }) => (
  <div
    {...props}
    className={`border-t border-border flex justify-between items-center px-6 py-4 ${className}`}
  >
    {props.children}
  </div>
);

export const CardBody: React.FC<CardProps> = ({ className, ...props }) => (
  <div {...props} className={`p-6 ${className}`}>
    {props.children}
  </div>
);
