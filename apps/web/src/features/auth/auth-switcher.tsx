"use client";

import Link from "next/link";
import { SwitcherTab, Switcher } from "@nexus/ui";
import { usePathname } from "next/navigation";

const AuthSwitcher = () => {
  const pathname = usePathname();

  return (
    <Switcher className="mb-5">
      <Link href="/login" className="flex-1">
        <SwitcherTab active={pathname.includes("login")}>
          Se connecter
        </SwitcherTab>
      </Link>
      <Link href="/sign-up" className="flex-1">
        <SwitcherTab active={pathname.includes("sign-up")}>
          S&apos;inscrire
        </SwitcherTab>
      </Link>
    </Switcher>
  );
};

export default AuthSwitcher;
