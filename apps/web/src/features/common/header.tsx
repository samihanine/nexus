"use client";

import Link from "next/link";
import { Logo } from "@nexus/ui";
import { ThemeSwitcher } from "./theme-switcher";
import UserDropdown from "@/features/user/user-dropdown";

const Header = ({
  userEmail,
  userImageUrl,
  userName,
}: {
  userName: string;
  userEmail: string;
  userImageUrl?: string;
}) => {
  return (
    <div className="flex h-20 w-full items-center justify-between shadow-md bg-background px-7 dark:shadow-white/15 dark:shadow-lg">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-10 w-10" />
      </Link>

      <div className="flex items-center gap-2"></div>

      <div className="flex items-center gap-5">
        <ThemeSwitcher />

        <UserDropdown name={userName} email={userEmail} image={userImageUrl} />
      </div>
    </div>
  );
};

export default Header;
