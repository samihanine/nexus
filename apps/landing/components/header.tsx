"use client";

import { useState, useEffect } from "react";
import { Logo } from "@nexus/ui";
import Link from "next/link";
import JoinWaitlist from "./join-waitlist";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header>
      <nav
        id="navbar"
        className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80"
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex md:flex-row flex-col gap-5 items-center justify-between py-4">
            <div className="relative z-20 flex justify-between w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-4"
              >
                <Logo className="w-8 h-8 text-primary" />
                <p className="text-2xl font-medium text-foreground">Immovia</p>
              </Link>
            </div>
            <div id="navlinks" className="">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="flex font-semibold text-base md:font-medium md:text-sm">
                  <li>
                    <Link
                      href="/"
                      className="block transition hover:text-primary px-2 sm:px-4"
                    >
                      <span>Accueil</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block transition hover:text-primary px-2 sm:px-4"
                    >
                      <span>Notre équipe</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block transition hover:text-primary px-2 sm:px-4"
                    >
                      <span>Nous contacter</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
