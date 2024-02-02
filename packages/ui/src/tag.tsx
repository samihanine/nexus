"use client";

import React from "react";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag(props: TagProps) {
  return (
    <span
      className={`inline-block rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ${props.className}`}
      {...props}
    />
  );
}
