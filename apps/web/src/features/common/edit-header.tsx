"use client";

import { cn } from "@nexus/utils";
import React, { useEffect, useState } from "react";

export default function EditHeader(props: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      window?.pageYOffset > 10 ? setIsScrolled(false) : setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 w-full">
      <div
        className={cn(
          "bg-stone-100 w-full border-b border-b-input",
          "bg-opacity-50 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto py-4 px-10 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-5 items-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
