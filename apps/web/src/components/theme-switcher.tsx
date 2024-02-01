"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="cursor-pointer text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon name="sun" className="hidden h-6 w-6 dark:block" />

      <MoonIcon name="moon" className="block h-6 w-6 dark:hidden" />
    </div>
  );
};
