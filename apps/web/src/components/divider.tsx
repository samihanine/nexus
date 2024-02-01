"use client";

export default function Divider({ className }: { className?: string }) {
  return <hr className={`w-full border border-border ${className}`} />;
}
