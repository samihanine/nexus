"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-background border border-red-500 !text-red-500 hover:bg-accent hover:text-accent-foreground",
        outline:
          "bg-background border border-input hover:bg-secondary hover:text-accent-foreground",
        secondary: "bg-secondary text-muted-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        action:
          "text-white !py-3 !text-base bg-gradient-to-br shadow-md from-blue-600 to-sky-500 hover:ring-4 hover:ring-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-400 dark:focus:ring-sky-800 text-center",
      },
      size: {
        default: "py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        disabled={props.disabled}
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
