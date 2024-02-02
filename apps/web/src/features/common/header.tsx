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
    <div className="flex h-16 w-full items-center justify-between border-b border-r border-border border-b-border bg-background px-7">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-6 w-6" />
        <h1 className="hidden text-xl font-medium sm:flex">Nexus</h1>
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
