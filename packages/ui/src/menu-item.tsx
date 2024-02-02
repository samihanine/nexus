"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem: React.FC<{
  children: React.ReactNode;
  href: string;
  exact?: boolean;
}> = ({ children, href, exact }) => {
  const pathname = usePathname();
  const path = pathname.replace(/^\/[a-z]{2}\//, "/");
  const isActive = exact ? path === href : path.includes(href);

  return (
    <Link
      href={href}
      className={`flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-accent hover:text-foreground ${
        isActive
          ? "bg-accent font-medium text-foreground"
          : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
};
