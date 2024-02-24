"use client";

import { cn } from "@nexus/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Link(
  props: React.ComponentProps<typeof NextLink> & { className?: string }
) {
  const pathname = usePathname();
  const isActive = pathname.includes(props.href as string);
  return (
    <NextLink
      {...props}
      className={cn(
        props.className,
        isActive ? "text-primary font-medium" : "text-foreground"
      )}
    />
  );
}
