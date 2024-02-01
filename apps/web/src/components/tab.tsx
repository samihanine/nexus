"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TabProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  exact?: boolean;
};

const Tab = ({ href, children, exact, ...props }: TabProps) => {
  const pathname = usePathname();
  const path = pathname.replace(/^\/[a-z]{2}\//, "/");
  const isActive = exact ? path === href : path.includes(href);

  return (
    <Link
      {...props}
      href={href}
      className={`flex cursor-pointer items-center gap-2 border-b-2 py-3 hover:border-foreground hover:text-foreground  ${
        props.className
      } ${
        isActive
          ? "border-foreground font-medium text-foreground"
          : "border-transparent text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

export default Tab;
