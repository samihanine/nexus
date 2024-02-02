"use client";

export function Divider({ className }: { className?: string }) {
  return <hr className={`w-full border border-border ${className}`} />;
}
