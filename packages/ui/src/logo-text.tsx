"use client";

import { cn } from "@nexus/utils";
import { Logo } from ".";

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <Logo className="w-8 h-8 text-primary" />
      <p className="text-2xl font-medium text-foreground hidden lg:flex">
        Immovia
      </p>
    </div>
  );
}
