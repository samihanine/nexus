"use client";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import Popover from "@nexus/ui/popover";

type SelectWorkspaceProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  workspaces: {
    name: string;
    id: string;
  }[];
  workspaceId: string;
};

const WorkspaceDropdown = ({
  workspaceId,
  workspaces,
  ...props
}: SelectWorkspaceProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const workspace = workspaces.find(
    (workspace) => workspace.id === workspaceId
  );

  if (!workspace) {
    return null;
  }

  return (
    <Popover
      content={
        <div className="flex w-full flex-col gap-2 rounded-md bg-background p-2 text-sm sm:w-56">
          {workspaces.map((workspace) => (
            <Link
              key={workspace.id}
              href={`/workspace/${workspace.id}`}
              className={`flex h-10 items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent ${
                workspace.id === workspaceId ? "bg-accent" : ""
              }`}
            >
              <span className="line-clamp-1">{workspace.name}</span>

              {workspace.id === workspaceId && (
                <CheckIcon className="ml-auto h-5 w-5" />
              )}
            </Link>
          ))}
        </div>
      }
      align="center"
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        {...props}
        className={`${props.className} flex w-full cursor-pointer items-center rounded-xl border border-border min-w-[100px] p-2`}
        onClick={() => setOpenPopover(!openPopover)}
      >
        <span className="line-clamp-1 text-sm">{workspace.name}</span>
        <ChevronUpDownIcon className="ml-auto h-5 w-5" />
      </button>
    </Popover>
  );
};

export default WorkspaceDropdown;
