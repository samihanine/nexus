"use client";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import type { Organization } from "@nexus/schemas";
import Link from "next/link";
import React, { useState } from "react";
import Popover from "@nexus/ui/popover";

type SelectOrganizationProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  organizations: Organization[];
  organization: Organization;
};

const OrganizationDropdown = ({
  organization,
  organizations,
  ...props
}: SelectOrganizationProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Popover
      content={
        <div className="flex w-full flex-col gap-2 rounded-md bg-background p-2 text-sm sm:w-56">
          {organizations.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={`flex h-10 items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent ${
                item.id === organization.id ? "bg-accent" : ""
              }`}
            >
              <span>{item.name}</span>

              {item.id === organization.id && (
                <CheckIcon className="ml-auto h-5 w-5" />
              )}
            </Link>
          ))}

          <Link
            key={organization.id}
            href={`/onboarding`}
            className={`flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent`}
          >
            <PlusCircleIcon className="h-8 w-8 text-blue-500" />

            <span>Create organization</span>
          </Link>
        </div>
      }
      align="center"
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        {...props}
        className={`${props.className} flex h-fit w-fit cursor-pointer items-center gap-3 rounded-xl border border-border p-2`}
        onClick={() => setOpenPopover(!openPopover)}
      >
        <span>{organization.name}</span>
        <ChevronUpDownIcon className="ml-auto h-5 w-5" />
      </button>
    </Popover>
  );
};

export default OrganizationDropdown;
