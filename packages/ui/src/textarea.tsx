"use client";

import * as React from "react";
import { useEffect } from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const innerRef = React.useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (
        (props.value || props.defaultValue || props.placeholder) &&
        innerRef.current
      ) {
        innerRef.current.style.height = "";
        innerRef.current.style.height =
          innerRef.current.scrollHeight + 5 + "px";
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [innerRef.current, innerRef.current, props.value, props.defaultValue]);

    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-lg border !border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:!border focus:!border-gray-600 focus:!ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={innerRef || ref}
        onInput={(e) => {
          e.currentTarget.style.height = "";
          e.currentTarget.style.height =
            e.currentTarget.scrollHeight + 5 + "px";
        }}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
