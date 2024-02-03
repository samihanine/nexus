"use client";

import { cn } from "@nexus/utils";
import { Logo } from ".";

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo className={"h-7 w-7 text-foreground"} />
      <h1 className="text-xl font-medium">Nexus</h1>
    </div>
  );
}
