"use client";

import React from "react";
import Section from "./section";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export default function Header(props: HeaderProps) {
  return (
    <div
      className={`flex h-16 flex-col items-center border-b border-b-border bg-background ${props.className}`}
      {...props}
    >
      <Section className="mx-auto flex h-16 items-center justify-between !py-0">
        {props.children}
      </Section>
    </div>
  );
}
